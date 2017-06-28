<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

$collection = isset($_POST['collection']) ? $_POST['collection'] : 'International';
//echo $collection;
$queryname = 'NewsDB.'.$collection;
//echo $queryname;
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
//echo $query;
//echo $cursor->title;
foreach ($cursor as $document) {
	$title = $document->title;
	//echo $title;
	if (in_array($title, $temp))
		continue;
	array_push($temp,$temp);
	array_push($arr,$document);
	$i++;
	if ($i==200)
		break;
    //print_r($document);
}
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//json编码  

?>
