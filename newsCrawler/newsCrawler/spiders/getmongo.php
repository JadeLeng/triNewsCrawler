<?php
$m = new MongoDB\Driver\Manager("mongodb://localhost:27017");    // 连接到mongodb
$db = $m->NewsDB;            // 选择一个数据库
$collection = $db->netease; // 选择集合

$cursor = $collection->find();
// 迭代显示文档标题
foreach ($cursor as $document) {
	echo $document["title"] . "\n";
}
?>