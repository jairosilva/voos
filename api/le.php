<?php

require 'BancoDeDados.php';

class Voos
{

    private $bancoDeDados;
    private $combinacoesDeAeroportos; // Combinações dos aeroportos 2 a 2.

    private function excluiDadosBD()
    {
        $this->bancoDeDados->executaSql('truncate distancias');
        $this->bancoDeDados->executaSql('truncate aeroportos');
    }

    private function buscaDadosApi($url)
    {
        $username = "demo";
        $password = "swnvlD";
        $remote_url = $url;

        $opts = array(
            'http' => array(
                'method' => "GET",
                'header' => "Authorization: Basic " . base64_encode("$username:$password"),
            ),
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
            ),
        );

        $context = stream_context_create($opts);

        $file = @file_get_contents($remote_url, false, $context);

        return json_decode($file, true);
    }

    private function geraCombinacoes($k, $xs)
    {
        if ($k === 0) {
            return array(array());
        }

        if (count($xs) === 0) {
            return array();
        }

        $x = $xs[0];
        $xs1 = array_slice($xs, 1, count($xs) - 1);
        $res1 = $this->geraCombinacoes($k - 1, $xs1);
        for ($i = 0; $i < count($res1); $i++) {
            array_splice($res1[$i], 0, 0, $x);
        }
        $res2 = $this->geraCombinacoes($k, $xs1);
        return array_merge($res1, $res2);
    }

    private function buscaAeroportos()
    {

        $url = "http://stub.2xt.com.br/air/airports/pzrvlDwoCwlzrWJmOzviqvOWtm4dkvuc";
        $aeroportos = $this->buscaDadosApi($url);

        $this->combinacoesDeAeroportos = $this->geraCombinacoes(2, array_keys($aeroportos));

        $objAeroportos = new stdClass();

        foreach($this->combinacoesDeAeroportos as $combinacao) {

            $origem = $aeroportos[$combinacao[0]];
            $destino = $aeroportos[$combinacao[1]];
            $distancia = $this->calculaDistancia($origem['lat'], $origem['lon'], $destino['lat'], $destino['lon']);
           
            if (!isset($objAeroportos->{$combinacao[0]})) {
                $obj = new stdClass();
                $obj->estado = $origem['state'];
                $obj->aeroportoMaisProximo = $combinacao[1];
                $obj->menorDistancia = $distancia;
                $obj->aeroportoMaisDistante = $combinacao[1];
                $obj->maiorDistancia = $distancia;

                $objAeroportos->{$combinacao[0]} = $obj;
            } else {
                $obj = $objAeroportos->{$combinacao[0]};

                // Verifica menor e maior distância.
                if ($distancia < $obj->menorDistancia) {
                    $obj->aeroportoMaisProximo = $combinacao[1];
                    $obj->menorDistancia = $distancia;
                } else if ($distancia > $obj->maiorDistancia) {
                    $obj->aeroportoMaisDistante = $combinacao[1];
                    $obj->maiorDistancia = $distancia;
                }
            }

        }

        foreach (get_object_vars( $objAeroportos) as $sigla => $value ) {
            
            $uf = $value->estado;
            $aeroportoMaisProximo = $value->aeroportoMaisProximo;
            $menorDistancia = $value->menorDistancia;
            $aeroportoMaisDistante = $value->aeroportoMaisDistante;
            $maiorDistancia = $value->maiorDistancia;

            $sql = "INSERT INTO aeroportos (sigla, uf, aeroporto_mais_proximo, menor_distancia, aeroporto_mais_distante, maior_distancia) VALUES ('$sigla', '$uf', '$aeroportoMaisProximo', $menorDistancia, '$aeroportoMaisDistante', $maiorDistancia);";
            $this->bancoDeDados->executaSql($sql);
        }

        return $aeroportos;
    }

    private function calculaDistancia($latitude1, $longitude1, $latitude2, $longitude2)
    {

        $raio_terra = 6371;

        $dLat = deg2rad($latitude2 - $latitude1);
        $dLon = deg2rad($longitude2 - $longitude1);

        $a = sin($dLat / 2) * sin($dLat / 2) + cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * sin($dLon / 2) * sin($dLon / 2);
        $c = 2 * asin(sqrt($a));
        $distancia = $raio_terra * $c;

        return $distancia;
    }

    private function buscaVoos($origem, $destino, $data, $distancia)
    {

        $url = "http://stub.2xt.com.br/air/search/pzrvlDwoCwlzrWJmOzviqvOWtm4dkvuc/$origem/$destino/$data";
        $voos = buscaDadosApi($url);

        $horarios = $voos['options'];

        $menorPreco = 0.0;
        $aeronave = '';
        $duracao = '';

        foreach ($horarios as $horario) {
            if (($horario['fare_price'] < $menorPreco) || ($menorPreco === 0.0)) {
                $menorPreco = $horario['fare_price'];
                $aeronave = $horario['aircraft']['model'];

                $saida = new DateTime($horario['departure_time']);
                $chegada = new DateTime($horario['arrival_time']);
                $interval = $saida->diff($chegada);

                var_dump($interval);
                die();

                $duracao = $interval->format('%h')." h ".$interval->format('%i')." min";
            }
        }

        $sql = "INSERT INTO voos (url, origem, destino, data_saida, aeronave, menor_preco, distancia, duracao) VALUES ('$url', '$origem', '$destino', '$data', '$aeronave', $menorPreco, $distancia, '$duracao')";
        $this->bancoDeDados->executaSql($sql);
    }

    private function gravaDistancias($data, $origem, $destino, $distancia)
{
    $sql = "INSERT INTO distancias (origem, destino, distancia, duracao, aeronave) VALUES ('$origem', '$destino', $distancia, 2, 'Foker');";
    $this->bancoDeDados->executaSql($sql);

    $sql = "INSERT INTO processamentos(data, origem, destino) VALUES ('$data', '$origem', '$destino') ON DUPLICATE KEY UPDATE origem = '$origem', destino = '$destino';";
    $this->bancoDeDados->executaSql($sql);
}

    private function capturaVoos($origem, $destino, $data)
    {
        $distancia = $this->calculaDistancia($origem['lat'], $origem['lon'], $destino['lat'], $destino['lon']);

        $this->buscaVoos($origem['iata'], $destino['iata'], $data, $distancia);
        $this->buscaVoos($destino['iata'], $origem['iata'], $data, $distancia);

        $this->gravaDistancias($data, $origem['iata'], $destino['iata'], $distancia);
    }

    public function processa($dataViagem)
    {
        $this->bancoDeDados = new BancoDeDados();

        $this->excluiDadosBD();

        $aeroportos = $this->buscaAeroportos();

        $chaveUltimoProcessamento = '';
        $ultimoProcessamento = $this->bancoDeDados->buscaRegistro("SELECT origem, destino FROM processamentos WHERE DATA = '$dataViagem'");

        if ($ultimoProcessamento != null) {
            $chaveUltimoProcessamento = $ultimoProcessamento[0] . $ultimoProcessamento[1];
        }

        $contador = 0;

        $object = new stdClass();
        $object->processando = false;

        foreach ($this->combinacoesDeAeroportos as $aeroporto) {

            // Processa, ignorando o que já foi processado anteriormente.
            if (($chaveUltimoProcessamento === '') || ($aeroporto[0] . $aeroporto[1] >= $chaveUltimoProcessamento)) {
                $this->capturaVoos($aeroportos[$aeroporto[0]], $aeroportos[$aeroporto[1]], $dataViagem);    
                $contador++;
            } 

            
            if ($contador === 20) {
                $object->processando = true;
                echo json_encode($object);
                die();
                break;
            }
        }

        echo json_encode($object);
    }

}

function buscaDadosApi($url)
{
    $username = "demo";
    $password = "swnvlD";
    $remote_url = $url;

    $opts = array(
        'http' => array(
            'method' => "GET",
            'header' => "Authorization: Basic " . base64_encode("$username:$password"),
        ),
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
        ),
    );

    $context = stream_context_create($opts);

    $file = @file_get_contents($remote_url, false, $context);

    return json_decode($file, true);
}

$dataViagem = $_GET['dataViagem'];

$voos = new Voos();
$voos->processa($dataViagem);

