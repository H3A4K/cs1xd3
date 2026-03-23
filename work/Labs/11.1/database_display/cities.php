<?php

include "../../../../connect.php";

$min = filter_input(INPUT_GET, "min", FILTER_VALIDATE_INT);
$max = filter_input(INPUT_GET, "max", FILTER_VALIDATE_INT);

if ($min === null || $max === null) {
    echo -1;
}
try {
    $command = "SELECT `Name`, `Population` FROM `city` WHERE `Population`>=? AND `Population`<=? ORDER BY `Population`";

    $stmt = $dbh->prepare($command);
    $success = $stmt->execute([$min, $max]);

    echo "<table><thead><tr><td>Name</td><td>Population</td></tr></thead>";
    while ($row = $stmt->fetch()) {
        echo "<tr><td>$row[Name]</td><td>$row[Population]</td></tr>";
    }
    echo "</table>";
} catch (Exception $e) {
    echo -1;
}