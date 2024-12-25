<!-- Create a cookie -->
<?php 
    $cookie_name = "user"; 
    $cookie_value = " Ali Gamal "; 
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day 
?>
<!-- Modify a cookie -->
<?php 
    $cookie_name = "user"; 
    $cookie_value = "Alex Porter"; 
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); 
?>
<!-- Delete a cookie -->
<?php 
    // set the expiration date to one hour ago 
    setcookie("user", "", time() - 3600, "/"); 
?>
<!-- Check if Cookies are Enabled -->
<?php 
    setcookie("test_cookie", "test", time() + 3600, '/'); 
?>
<?php 
    // Start the session 
    session_start(); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Abanoub Adel Gerges -->
    <link rel="stylesheet" href="css/lec10.css">
    <link rel="icon" type="image/jpg" href="css/Images/Abanoub.jpg">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEC10</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
</head>
<body>
    <h1 class="heading">LEC10</h1>
    <div class="container">
        <?php
            $d = 4;
            switch ($d) {
                case 6:
                echo "Today is Saturday";
                break;
                case 0:
                echo "Today is Sunday";
                break;
                default:
                echo "Looking forward to the Weekend";
            }
        ?>
    </div>
    <hr>
    <div class="container">
        <?php
            for ($x = 0; $x <= 100; $x+=10) {
                echo "The number is: $x <br>";
            }
        ?>
    </div>
    <hr>
    <div class="container">
        <?php
            $i = 0;
            while ($i < 100) {
                $i+=10;
                echo "$i<br>";
            }
        ?>
    </div>
    <hr>
    <div class="container">
        <?php
            $i = 0;
            do {
                $i++;
                if ($i == 3) continue;
                echo $i;
            } while ($i < 6);
        ?>
    </div>
    <hr>
    <div class="container">
        <?php
            function setHeight($minheight = 50) {
                echo "The height is : $minheight <br>";
            }
            setHeight(350);
            setHeight();
            setHeight(135);
            setHeight(80);
        ?>
    </div>
    <hr>
    <div class="container">
        <?php
            $cars = array("Volvo", "BMW", "Toyota"); 
            echo count($cars);
            echo "<br>";
            for($i = 0; $i < count($cars); $i++){
                echo "$cars[$i]<br>";
            }
        ?>
    </div>
    <hr>
    <div class="container">
        <?php
            $car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964); 
            echo $car["model"];
        ?>
    </div>
    <hr>
    <div class="container">
        <form action="welcome.php" method="POST">
            Name: 
            <input type="text" name="name"><br>
            E-mail: 
            <input type="text" name="email"><br>
            <input type="submit">
        </form>
    </div>
    <hr>
    <div class="container">
        <!-- <?php /*
            $cookie_name = "user"; 
            $cookie_value = " Ali Gamal "; 
            setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day 
            */
        ?> -->
        <?php 
            if(!isset($_COOKIE[$cookie_name])) { 
                echo "Cookie named '" . $cookie_name . "' is not set!"; 
            } else { 
                echo "Cookie '" . $cookie_name . "' is set!<br>"; 
                echo "Value is: " . $_COOKIE[$cookie_name]; 
            } 
        ?>
    </div>
    <hr>
    <div class="container">
        <?php 
            if(count($_COOKIE) > 0) { 
                echo "Cookies are enabled."; 
            } else { 
                echo "Cookies are disabled."; 
            } 
            echo "<br>COOKIES = " . count($_COOKIE) . "<br>";
        ?>
    </div>
    <hr>
    <div class="container">
        <?php 
            // Set session variables 
            $_SESSION["favcolor"] = "green"; 
            $_SESSION["favanimal"] = "cat"; 
            echo "Session variables are set."; 
        ?>
    </div>
    <hr>
    <div class="container">
        <?php 
            // remove all session variables 
            session_unset(); 
            // destroy the session 
            session_destroy(); 
        ?>
    </div>
    <hr>
    <div class="container">
        <?php 
            $servername = "localhost"; 
            $username = "username"; 
            $password = "password"; 
            // Create connection 
            $conn = new mysqli($servername, $username, $password); 
            // Check connection 
            if ($conn->connect_error) { 
                echo "Connection failed: "; 
                die("Connection failed: " . $conn->connect_error); 
            } 
            echo "Connected successfully";
        ?>
    </div>
    <hr>
    <div class="container"></div>
    <hr>
</body>
</html>