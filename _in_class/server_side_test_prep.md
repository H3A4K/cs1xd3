# PHP
- Server Side

### Why
- Accesses the Database
- Proprietary algotrithms, business logic, etc.

---

Client : Browser + J.S.

| Client  | Server   |          |
| ---     | ---      | ---      |
|         | Logic    | Data     |
| Browser | PHP      | SQL      |
| JS      |          |          |

```php 
<?php code ?>

<div> // HTML Tags
    <?php // With PHP inside
        Code
    ?>
</div>
```

## Features
- Weak typing
    - Implicit type casting.XZ
- Dynamic typing
    - Variables dont have types associated with them.
- Imperitive languages
- Multiparadigm
- Bash like (variables start with $)
- Arrays
    - integer keys
    - associative keys (dict)

## Forms
- Parameters
    - HTTP Reg. Params
    - Get / Post
- "filter_input"

# Database (Data Tier)
- Sets of Tables
    - Columns (Fields)
    - Rows (Objects, records)
    - phpMyAdmin
    - SELECT, UPDATE, DELETE, INSERT
- MySQL
    - DBMS (DataBase Management System)

- SQL
    - "Structured Query Language"
    - Talks to a DBMS

- PDO
    - PHP Data Object
    - Connect, Prepare, Execute, Check, retrieve data

# AJAX
- JS send HTTP Requests and recieve response without page load

- fetch(url & params & config).then(...).then(success)...

    - Asynchronous, the program wont wait for info, it will continue running just fine.

- JSON -> converts objects & arrays into text representation

# Server Side Session Management
- session_start()
- $_SESSION 
    - Authentication

- isset()
- session_detroy()

# Security
- Coding Q.s
    - filter_input
    - ? params for SQL

- M.C.
    - Hashing, Masking, HTTPS