<?php

$db_selected = new mysqli('localhost', 'root', '', 'belvitur');
$db_selected->set_charset("utf8");

$dataViagem = date('Y-m-d', strtotime(date("Y-m-d"). ' + 40 day'));

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