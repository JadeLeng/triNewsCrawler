<?php
$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");  

// 插入数据


$filter = [ ];
$options = [
     
];

// 查询数据
$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery('NewsDB.netease', $query);

foreach ($cursor as $document) {
    print_r($document);
}
?>