<?php
$server = "localhost:3306";                
$usuario = "root";         
$clave = "";               
$base_datos = "ejercicioProgramacion_php";


$conn= mysqli_connect($server, $usuario, $clave, $base_datos);

if (!$conn) {
   die("conexion fallida: " . mysqli_connect_error());
}else{
    echo "conexion exitosa";
}
?>
