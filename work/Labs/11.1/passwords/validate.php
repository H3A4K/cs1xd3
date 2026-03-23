<?php
function validate($password) {
    // $has_lower = preg_match('/[a-z]/i', $password);
    // $has_upper = preg_match('/[A-Z]/i', $password);
    // $has_digit = preg_match('/[0-9]/', $password);
    // $has_special = preg_match('/\W/', $password);
    // echo $has_lower + $has_upper + $has_digit + $has_special;

    if (strlen($password) >= 6
        && preg_match('/[a-z]/i', $password)
        && preg_match('/[A-Z]/i', $password)
        && preg_match('/[0-9]/', $password)
        && preg_match('/\W/', $password)
        ) { return 1; }

    return 0;
}

$password = filter_input(INPUT_GET, "password", FILTER_DEFAULT);
echo validate($password);