<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

$collection = isset($_POST['collection']) ? $_POST['collection'] : 'International';

$queryname = 'NewsDB.'.$collection;

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");  

// 插入数据


$filter = [];
$options = [
     'sort'=>['date'=>-1],
];

// 查询数据
$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery($queryname, $query);

$i = 0;
$arr = array();
$temp = array();

foreach ($cursor as $document) {
	$title = $document['title'];
	if (in_array(array('title',$title), $arr))
		continue;

	array_push($arr,$document);
	$i++;
	if ($i==10)
		break;
    //print_r($document);
}
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//json编码  

?>