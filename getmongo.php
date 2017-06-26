<?php
$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");  

// 插入数据


$filter = [];
$options = [
     'sort'=>['date'=>-1],
];

// 查询数据
$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery('NewsDB.International', $query);

$i = 0
$arr = array();

foreach ($cursor as $document) {
	array_push($arr,$document);
	$i++;
	if ($i==10)
		break;
    //print_r($document);
}
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//json编码  

?>