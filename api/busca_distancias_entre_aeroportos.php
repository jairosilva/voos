<?php

$db_selected = new mysqli('localhost', 'root', '', 'belvitur');
$db_selected->set_charset("utf8");

$arrRetorno = array();
if ($result = $db_selected->query("SELECT * FROM aeroportos ORDER BY sigla")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $arrRetorno[] = $row;
    }
    echo json_encode($arrRetorno, JSON_UNESCAPED_UNICODE);
}

$result->close();
$db_selected->close();

?>