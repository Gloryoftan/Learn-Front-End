<?php
$jsonp = $_GET['callback'];

$arr = array('Samari', 24);

//echo getData("$arr")
echo $jsonp . '(' . json_encode($arr) . ')';
?>