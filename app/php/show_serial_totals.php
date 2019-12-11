<?php

include("conn.php");

if ($conn->connect_error) {
    die("La conexión ha fallado: " . $conn->connect_error);
}

$sql = "SELECT * FROM serials WHERE model_disp='RAX711-L-4GC-AC_DC EDD RACM'";
$sql_rc = "SELECT * FROM serials WHERE model_disp='RC512-FE-S-SS13 10/100M RACM'";
$sql_usfp = "SELECT * FROM serials WHERE model_disp='USFP-GB/SS13-4 1.25G RACM'";
$total = 0;
$total_rc = 0;
$total_usfp = 0;

if ($result = $conn->query($sql)) 
{
    while ($row = $result->fetch_assoc())
    {
        $id_serial = $row['id_serial'];
        $model_disp = $row['model_disp'];
        $serial_disp = $row['serial_disp'];
        $total = $total + 1;
    }
    echo "El total de RAX711-L es: $total";
    echo "<br/>";

    /* liberar el conjunto de resultados */
    $result->close();

}
if ($result_rc = $conn->query($sql_rc)) 
{
    while ($row = $result_rc->fetch_assoc())
    {
        $total_rc = $total_rc + 1;
    }
    echo "El total de RC512-FE-S-L es: $total_rc";
    echo "<br/>";

    /* liberar el conjunto de resultados */
    $result_rc->close();

}
if ($result_usfp = $conn->query($sql_usfp)) 
{
    while ($row = $result_usfp->fetch_assoc())
    {
        $total_usfp = $total_usfp + 1;
    }
    echo "El total de USFP-GB/SS13-4 es: $total_usfp";

    /* liberar el conjunto de resultados */
    $result_usfp->close();

}
else 
{
    echo "Hubo un error porfavor llamar al <strong>3057711660</strong> el error es el siguiente: " . $conn->error;
}


?>