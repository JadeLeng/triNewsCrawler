<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

$collection = isset($_POST['collection']) ? $_POST['collection'] : 'netease';

$queryname = 'NewsDB.'.$collection;

$id = isset($_POST['oid'])? $_POST['oid']: '5950a6982f911cb7b881ffda';



$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");  

// 插入数据


$filter = ['_id'=>new \MongoDB\BSON\ObjectID($id)];
$options = [
     
];

// 查询数据
$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery($queryname, $query);


$arr = array();


foreach ($cursor as $document) {
	
	array_push($arr,$document);
	
}
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//json编码  

?>