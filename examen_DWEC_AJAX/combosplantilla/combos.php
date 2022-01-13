<?php
	$hostname = "localhost";
	$database = "examencliente";
	$username = "root";
	$password = "";
	foreach ($_POST as $key => $value){
        if (empty($value)) {
               $value="";
        }
	}
	$tipo = $_POST["tipo"];
	$conexion=mysqli_connect($hostname,$username,$password);
	if (!$conexion){
		die("No se puede conectar a mysql");
	}
	if (!mysqli_select_db($conexion,$database)){
		die(mysqli_error($conexion));
	}
	if ($tipo=="opcion1"){
		$sql="select id as codigo, opcion1 as nombre from tipo";
	}else if ($tipo=="opcion2"){
		$opcion_anterior = $_POST["codigo_anterior"];
		$sql="select id as codigo, opcion2 as nombre from procesador where id_opcion1=".$opcion_anterior;
	}else{
		$opcion_anterior = $_POST["codigo_anterior"];
		$sql="select id as codigo, opcion3 as nombre from disco_duro where id_opcion2=".$opcion_anterior;
	}
	if (!$rs=mysqli_query($conexion,$sql)){
	 	die(mysqli_error($con));
	}
	header("Content-type: text/xml; charset=ISO-8859-1");
	$texto="";
	while ($registro=mysqli_fetch_assoc($rs)){
		$texto.="\t<opcion>\n".
		"\t\t<codigo>".$registro['codigo']."</codigo>\n\t\t<nombre>".$registro['nombre']."</nombre>\n".
		"\t</opcion>\n";
	}
	echo "<opciones>".$texto."</opciones>";
 ?>