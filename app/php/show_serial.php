<?php

include("conn.php");

if ($conn->connect_error) {
    die("La conexión ha fallado: " . $conn->connect_error);
}

$sql = "SELECT * FROM serials ORDER BY serials.id_serial ASC";

if ($result = $conn->query($sql)) 
{
    while ($row = $result->fetch_assoc())
    {
        $id_serial = $row['id_serial'];
        $serial_disp = $row['serial_disp'];
    
        echo "
            <tr>
                <td class='text-left'>$id_serial</td>
                <td class='text-left'>$serial_disp</td>
            </tr>";
    }

    /* liberar el conjunto de resultados */
    $result->close();

}
else 
{
    echo "Hubo un error porfavor llamar al <strong>3057711660</strong> el error es el siguiente: " . $conn->error;
}


?>