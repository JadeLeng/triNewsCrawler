<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$db_host = '120.24.57.3';
$db_name = 'BS';
$db_user = 'hello';
$db_pwd = '250.250.';



$usrname=$_POST['usrname'];
$type=$_POST['type'];
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

if($result === false){//执行失败
    echo json_encode($mysqli->error);
    $mysqli->close();
    return;
}
else{
	$row = $result->fetch_assoc();
	$car = $row['car'];
	$domestic = $row['domestic'];
	$education = $row['education'];
	$entertainment = $row['entertainment'];
	$fin = $row['fin'];
	$game = $row['game'];
	$international = $row['international'];
	$internet = $row['internet'];
	$military = $row['military'];
	$property = $row['property'];
	$social = $row['social'];
	$sports = $row['sports'];
	$tech = $row['tech'];
	$women = $row['women'];

	switch ($type)
	{
		case 'Car':
			$car+=1;
			break;
		case 'Domestic':
		  	$domestic+=1;
		  	break;
		case 'Education':
		  	$education+=1;
		  	break;
		case 'Entertainment':
			$entertainment+=1;
			break;
		case 'Fin':
			$fin +=1;
			break;
		case 'Game':
			$game +=1;
			break;
		case 'International':
			$international+=1;
			break;
		case 'Internet':
			$internet+=1;
			break;
		case 'Military':
			$military +=1;
			break;
		case 'Property':
			$property+=1;
			break;
		case 'Social':
			$social+=1;
			break;
		case 'Sports':
			$sports+=1;
			break;
		case 'Tech':
			$tech+=1;
			break;
		case 'Women':
			$women+=1;
			break;
		default:
			return;
		  	break;
	}
	$i = 1.0/141*140;
	$car *= $i;
	$domestic  *= $i;
	$education *= $i;
	$entertainment *= $i;
	$fin *= $i;
	$game *= $i;
	$international *= $i;
	$internet *= $i;
	$military *= $i;
	$property *= $i;
	$social *= $i;
	$sports *= $i;
	$tech *= $i;
	$women *= $i;

	$sql = "UPDATE `likeacc` SET `car`=".$car.", `domestic`=".$domestic.", `education`=".$education.", `entertainment`=".$entertainment.", `fin`=".$fin.", `game`=".$game.", `international`=".$international.", `internet`=".$internet.", `military`=".$military.", `property`=".$property.", `social`=".$social.", `sports`=".$sports.", `tech`=".$tech.", `women`=".$women."WHERE `usrname`=\"".$usrname."\"";
	//echo $sql;

	$result = $mysqli->query("set names utf8");
	$result = $mysqli->query($sql);

	if($result === false){//执行失败
	    echo json_encode($mysqli->error);
	    $mysqli->close();
	    return;
	}
	echo json_encode("success");

	

	
}

$mysqli->close();
