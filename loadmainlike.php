<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$db_host = '120.24.57.3';
$db_name = 'BS';
$db_user = 'hello';
$db_pwd = '250.250.';



$usrname=$_POST['usrname'];
//$type=$_POST['type'];
//$email = $_POST['email'];


//面向对象方式
$mysqli = new mysqli($db_host, $db_user, $db_pwd, $db_name);
//判断是否连接成功
if(!$mysqli ){
    echo mysqli_connect_error();
}
$sql = "SELECT * FROM `likeacc` WHERE `usrname`=\"".$usrname."\"";
//echo $sql;

$result = $mysqli->query("set names utf8");
$result = $mysqli->query($sql);
$arr = array();
if($result === false){//执行失败
    echo json_encode($mysqli->error);
    $mysqli->close();
    return;
}
else{
	$row = $result->fetch_assoc();
	array_push($arr, $row);
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);//json编码  

	

}

$mysqli->close();
