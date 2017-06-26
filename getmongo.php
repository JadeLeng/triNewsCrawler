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

foreach ($cursor as $document) {
    print_r($document);
}
?>