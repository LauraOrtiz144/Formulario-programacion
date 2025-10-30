<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola mundo desde PHP</h1>
    <?php
       //variables y tipos de datos
       $nombre = "Juan";    
         $edad = 30;
        $precio = 19.99;
        $es_estudiante = true;
        $direccion = null;
        //operaciones
        $a= 10;
        $b= 5;
        $suma = $a + $b;
        $multiplicacion = $a * $b;
        //mostrar resultados
        echo"<p>hola,$nombre. Tienes $edad años.</p>";
        echo"<p>El precio es $$precio.</p>";
        echo"<p>La suma de $a y $b es $suma.</p>";
        echo"<p>La multiplicación de $a y $b es $multiplicacion.</p>";
        echo"<p>el tipo de variable de nombre es: " . gettype($nombre)."</p>";
    ?>

        
    
</body>
</html>