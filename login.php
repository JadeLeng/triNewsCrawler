<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$db_host = '120.24.57.3';
$db_name = 'BS';
$db_user = 'hello';
$db_pwd = '250.250.';



$usrname=$_POST['usrname'];
$pwd=$_POST['pwd'];
//$email = $_POST['email'];


//面向对象方式
$mysqli = new mysqli($db_host, $db_user, $db_pwd, $db_name);
//判断是否连接成功
if(!$mysqli ){
    echo mysqli_connect_error();
}
$sql = "SELECT `pwd` FROM `account` WHERE `usrname`=`".$usrname."`";
//echo $sql;

$result = $mysqli->query("set names utf8");
$result = $mysqli->query($sql);

if($result === false){//执行失败
    echo json_encode($mysqli->error);
    $mysqli->close();
    return;
}
else{
	$row = $result->fetch_assoc();
	$pwdindb = $row['pwd'];
	if ($pwd == $pwdindb)
		echo json_encode("success");
	else
		echo json_encode("wrongpwd");

	
}

$mysqli->close();
