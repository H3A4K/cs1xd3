# HTTP Requests:
- Hypertext Transfer Protocol.
    - The rules (proocol) of communication between client and server
    - A _Stateless Protocol_ 
        - Each message is treated like a brand new coversation
        - More on this later!
- An HTTP Request is a __plain text message__ from __client__ to __server__.
    - Like an email.


# HTTP Responses
- An HTTP Response is a __plain test message__ from the __server__ to the __client__
    - Status Line (with status code)
    - Status codes:
        - 200 -> Ok
        - 404 -> Not found
        - 300 -> Item has moved
        - 500 -> Server error
    - Header fields
    - Message body (usually the requested resource)

# Network Tab in Developer Tools

# XAMPP
- C:xampp/htdocs, equivalent of public_html

# PHP
- Syntax like C (for, switch, etc.) (semi-colon line ending)
- Variables like bash ($name)
- No need to declare type
- rand(a,b) -> random number between a and b
- Concatenation is .
- Mostly weakly typed (using + on strings will not work, as + is reserved for addition not concatenation)
- === / !==, same as JS
- available types : int, float, bool, null, string, array, and object, (casting permeted)
- "" allows for variables to be inlaid (ex. $i = 1; "$i" -> "1")
- '' does not allow for variables to be inlaid ($i = 1; '$i' -> '$i")
- <?php?> is for multiline scripts
- <?=_____?> is for single line scripts
- Best to have as much php code at the top of the page.
- Files that only contain php do not require a closing tag, only an opening (<?php) tag