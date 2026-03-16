<?php
include "connect.php";

$mingrade = filter_input(INPUT_GET, "mingrade", FILTER_VALIDATE_INT);

$success = true;
if ($mingrade === null or $mingrade === false) {
    $success = false;
} else {
    $cmd = "SELECT `firstname`, `lastname` FROM `grades` WHERE `final_exam`>?";
    $stmt = $dbh->prepare($cmd);
    $success = $stmt->execute([$mingrade]);
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
    if ($success) {
        echo "Success";

        // // $row = $stmt->fetch();
        // // echo "<pre>";
        // // var_dump($row);
        // // echo "</pre>";
        // echo "<ul>";
        // // echo "<li>$row[firstname] $row[lastname]</li>";
        // while ($row = $stmt->fetch()) {
        //     echo "<li>$row[firstname] $row[lastname]</li>";
        // }
        // echo "</ul>";
        ?>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <?php
                while ($row = $stmt->fetch()) {
                    echo "<tr><td>$row[firstname]</td> <td>$row[lastname]</td></tr>";
                }
                ?>
            </tbody>
        </table>
        <?php

    } else {
        echo "Something went wrong";
    }
    ?>
</body>

</html>