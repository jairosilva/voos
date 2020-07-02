<?php

include_once 'conecta.php';

$dataViagem = $_GET['dataViagem'];

$db_selected->query("DELETE FROM voos WHERE data_saida = '$dataViagem';");
$db_selected->query("DELETE FROM processamentos WHERE data = '$dataViagem';");
$db_selected->query("DELETE FROM aeroportos;");

$db_selected->close();

?>