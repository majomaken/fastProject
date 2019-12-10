<?php

include("conn.php");

if ($conn->connect_error) {
    die("La conexión ha fallado: " . $conn->connect_error);
}

$sql = "SELECT * FROM serials";

if ($result = $conn->query($sql)) 
{
    while ($row = $result->fetch_assoc())
    {
        $id_serial = $row['id_serial'];
        $serial_disp = $row['serial_disp'];
    
        echo "
        <div class='inp_style_install'>
                <input id='show_all_serials' value='$id_serial'> <br>$serial_disp
        </div>";
    }

    /* liberar el conjunto de resultados */
    $result->close();

}
else 
{
    echo "Hubo un error porfavor llamar al <strong>3057711660</strong> el error es el siguiente: " . $conn->error;
}


?>