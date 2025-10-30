<?php 
include ("conexion.php");
require_once __DIR__ . '/conexion.php';
if(isset($_REQUEST['btn'])){
$nombre = $_REQUEST['nombre'];
$correo = $_REQUEST['email'];  
$telefono = $_REQUEST['numero'];
$solicitud = $_REQUEST['solicitud'];
$info="Nombre del cliente: $nombre <br>
Correo del cliente: $correo <br>
Telefono del cliente: $telefono <br>
<br> Solicitud del cliente: $solicitud";
echo $info; 
}
$nombre = $_REQUEST['nombre'];
$correo = $_REQUEST['email'];  
$telefono = $_REQUEST['numero'];
$solicitud = $_REQUEST['solicitud'];
$sql = "INSERT INTO contacto (nombre, correo, telefono, solicitud) VALUES ('$nombre', '$correo', '$telefono', '$solicitud')";
$ejecutar =mysqli_query($conn, $sql);

if (!$ejecutar) {
    die("Error al insertar datos: " . mysqli_error());
}    
?>
