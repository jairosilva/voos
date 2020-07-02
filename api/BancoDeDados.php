<?php

class BancoDeDados
{
    private $conexaoBancoDeDados;

    public function __construct()
    {
        $this->conectaBD();
    }

    private function conectaBD()
    {
        $this->conexaoBancoDeDados = new mysqli('localhost', 'root', '', 'voos');
        $this->conexaoBancoDeDados->set_charset("utf8");
    }

    public function executaSql($sql)
    {
        mysqli_query($this->conexaoBancoDeDados, $sql);
    }

    public function buscaRegistro($sql) {
        $resultado = false;

        $result = mysqli_query($this->conexaoBancoDeDados, $sql);
        $row = mysqli_fetch_row($result);

        return $row;
    }
}

?>