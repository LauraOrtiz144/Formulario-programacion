<?php
$server = "localhost:3306";                
$usuario = "root";         
$clave = "";               
$base_datos = "ejercicio_php";


$conn= mysqli_connect($server, $usuario, $clave, $base_datos);

if (!$conn) {
   die("Conexion fallida: " . mysqli_connect_error());
}else{
    echo "Conexion exitosa";
}
?>