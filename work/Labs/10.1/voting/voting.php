<!--
Author : Alexander Perlock
MACID : perlocka

Date Created     : 16 03 26
Date Modified    : 16 03 26

Exercise 4 Chapter 36 PDO
-->
<?php
include "../../../../connect.php";

$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
$choice = filter_input(INPUT_GET, "choice", FILTER_VALIDATE_INT);
$success = true;
$info = true;

if ($id === null || $choice === null) {
    $success = false;
} else {
    try {
        switch ($choice) {
            case 1: 
                $command = "UPDATE `poll` SET `vote1`=`vote1` + 1 WHERE `ID`=?;";
                break;
            case 2: 
                $command = "UPDATE `poll` SET `vote2`=`vote2` + 1 WHERE `ID`=?;";
                break;
            case 3: 
                $command = "UPDATE `poll` SET `vote3`=`vote3` + 1 WHERE `ID`=?;";
                break;
            case 4: 
                $command = "UPDATE `poll` SET `vote4`=`vote4` + 1 WHERE `ID`=?;";
                break;           
        }
        $stmt = $dbh->prepare($command);
        $success = $stmt->execute([$id]);
    } catch (Exception $e) {
        $error = false;
    }
}

?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Voting</title>

</head>

<body>
    <form method="GET"> <!-- method="POST" -->
        <input type="number" min="1" max="982" name="id">
        <input type="number" min="1" max="4" name="choice">
        <input type="submit">
        </form>
    <?php if ($success) { ?>
        <p>Send Successful</p>
        <p>You have submitted <?= $choice ?> to form <?= $id ?></p>
    <?php } ?>
</body>

</html>