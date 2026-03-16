<!DOCTYPE html>
<?php
/* Example of associative arrays.

 * Sam Scott, McMaster University, 2025
 */
?>
<html>

<head>
    <meta charset="UTF-8">
    <title>Arrays in PHP</title>
    <link rel="stylesheet" href="css/basic_examples.css">
</head>

<body>
    <?php
    $a = [34, 23.4, "hello"];
    array_push($a, true);

    echo "<pre>";
    var_dump($a);
    echo "</pre>";

    for ($i = 0; $i < count($a); $i++) {
        echo "<p>$a[$i]</p>";
    }

    $user = ["occupation" => "Professor", "school" => "McMaster"];
    $user["name"] = "Jelle Hellings";
    $user["age"] = 25;

    echo "<p>Name: $user[name]</p>";


    foreach ($user as $key => $value) {
        echo "<p>$key... $value</p>";
    }
    ?>
</body>



</html>