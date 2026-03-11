<?php
$first = filter_input(INPUT_POST, "first", FILTER_SANITIZE_SPECIAL_CHARS);
$last = filter_input(INPUT_POST, "last", FILTER_SANITIZE_SPECIAL_CHARS);

## Check parameters! Null, Bad format, etc...

try {
    $dbh = new PDO("mysql:host=localhost;dbname=perlocka_db", "root", "");
    // When uploaded to cs1xd3 server, username and password must represent MACID and password.



} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}

$error = false;
try {
    // $command = "INSERT into `grades` (`firstname`, `lastname`) VALUES ('Jane', 'Doe')";
    // DONT DO THIS : $command = "INSERT into `grades` (`firstname`, `lastname`) VALUES ('$first', '$second')";
    // ^ Is succeptible to injection attacks
    $command = "INSERT into `grades` (`firstname`, `lastname`) VALUES (?, ?)"; // ? denotes parameters to be inputted when executed.

    $stmt = $dbh->prepare($command);

    $args = [$first, $last];
    $stmt->execute($args); // puts $first into the first ? and $second into the second ?, but in a safe way that avoids injection attacks
} catch (Exception $e) {
    $error = true;
}
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
    if ($error) {
        echo "<p>Something bad happened</p>";
    }
    echo "<p>It Worked!!! {$stmt->rowCount()} rows affected.</p>";
        ?>
</body>

</html>