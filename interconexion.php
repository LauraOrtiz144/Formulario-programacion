<?php 
include ("conexion.php");
require_once __DIR__ . '/conexion.php';
if(isset($_REQUEST['btn'])){
$nombre = $_REQUEST['name'];
$correo = $_REQUEST['email'];  
$telefono = $_REQUEST['number'];
$solicitud = $_REQUEST['request'];
$info="Nombre del cliente: $nombre <br>
Correo del cliente: $correo <br>
Telefono del cliente: $telefono <br>
<br> Solicitud del cliente: $solicitud";
echo $info; 
}
$nombre = $_REQUEST['name'];
$correo = $_REQUEST['email'];  
$telefono = $_REQUEST['number'];
$solicitud = $_REQUEST['request'];
$sql = "INSERT INTO contacto (nombre, correo, telefono, solicitud) VALUES ('$nombre', '$correo', '$telefono', '$solicitud')";
$ejecutar =mysqli_query($conn, $sql);

if (!$ejecutar) {
    die("Error al insertar los datos: " . mysqli_error());
}    
?>