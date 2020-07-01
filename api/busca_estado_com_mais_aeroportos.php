<?php

$db_selected = new mysqli('localhost', 'root', '', 'belvitur');
$db_selected->set_charset("utf8");

$arrRetorno = array();
if ($result = $db_selected->query("SELECT uf, COUNT(*) AS qtd FROM aeroportos GROUP BY uf ORDER BY qtd DESC LIMIT 1")) {

    $arrRetorno[] = $result->fetch_array(MYSQLI_ASSOC);
    
    echo json_encode($arrRetorno, JSON_UNESCAPED_UNICODE);
}

$result->close();
$db_selected->close();

?>