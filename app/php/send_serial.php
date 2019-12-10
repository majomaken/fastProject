<?php
include("conn.php");

$serial_num = $_POST['serial_num'];

if ($conn->connect_error)
{
    die("Fail connection " . $conn->connect_error);

}
else
{
    $sql = "INSERT INTO serials (serial_disp) VALUES ('$serial_num')";
    if ($conn->query($sql)) {
        echo "Insertado exitosamente";
    } 
    else 
    {
        echo "Hubo un error porfavor llamar al <strong>3057711660</strong> el error es el siguiente: " . $conn->error;
    }
}




?>