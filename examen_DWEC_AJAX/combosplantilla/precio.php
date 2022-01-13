<?php
	$hostname = "localhost";
	$database = "tablas";
	$username = "root";
	$password = "";
	foreach ($_POST as $key => $value){
        if (empty($value)) {
               $value="";
        }
	}
	$conexion=mysqli_connect($hostname,$username,$password);
	if (!$conexion){
		die("No se puede conectar a mysql");
	}
	if (!mysqli_select_db($conexion,$database)){
		die(mysqli_error($conexion));
	}
	$opcion_anterior = $_POST["codigo_anterior"];
	$sql="select precio from disco_duro where id=".$opcion_anterior;
	if (!$rs=mysqli_query($conexion,$sql)){
	 	die(mysqli_error($con));
	}
	$registro=mysqli_fetch_assoc($rs);
	echo $registro['precio'];
 ?>