<?php
$arr = array(
    array(
        'id' => 1,
        'name' => "Samari",
        'age' => 24,
    ),
    array(
        'id' => 2,
        'name' => "Tan",
        'age' => 18,
    ),
);

//必须;结束
// 编译成字符串
echo json_encode($arr);
?>