<?php

include_once 'conecta.php';

$dataViagem = $_GET['dataViagem'];

$arrRetorno = array();
if ($result = $db_selected->query("SELECT * FROM voos WHERE data_saida = '$dataViagem' ORDER BY distancia DESC LIMIT 30")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $arrRetorno[] = $row;
    }
    echo json_encode($arrRetorno, JSON_UNESCAPED_UNICODE);
}

$result->close();
$db_selected->close();

?>