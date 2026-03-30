<?php
function validate($password) {
    if (strlen($password) >= 6
        && preg_match('/[a-z]/i', $password)
        && preg_match('/[A-Z]/i', $password)
        && preg_match('/[0-9]/', $password)
        && preg_match('/\W/', $password)
        ) { return 1; }

    return 0;
}

$password = filter_input(INPUT_GET, "password", FILTER_DEFAULT);

// sleep(2);

echo validate($password);