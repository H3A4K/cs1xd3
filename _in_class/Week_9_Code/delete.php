<?php
try {
    $dbh = new PDO("mysql:host=localhost;dbname=perlocka_db", "root", "");
    // When uploaded to cs1xd3 server, username and password must represent MACID and password.



} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}

$command = "DELETE from `grades` WHERE firstname='Jane' AND lastname='Doe'";
$stmt = $dbh->prepare($command);
$stmt->execute();
?>
<!DOCTYPE html>
<!-- A very simple PHP Template. Sam Scott, McMaster University, 2025 -->
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <?php
    echo "<p>It Worked!!! {$stmt->rowCount()} rows affected.</p>"
    ?>
</body>

</html>