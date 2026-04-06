<?php

try {
    $dbh = new PDO('mysql:host=localhost;dbname=perlocka_db', "root", "");
} catch (Exception $e) {
    die('Could not connect to DB: ' . $e->getMessage());
}
