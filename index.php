<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maxim Ozolin</title>
    <link rel="stylesheet" href="./CSS/style.css">

</head>

<body>
    <header>
        <?php include "./components/navbar.ini.php" ?>
    </header>
    <main class="mainwrapper">
        <?php
        include "./components/hero.ini.php";
        include "./components/separator.ini.php";
        include "./components/background.ini.php";
        include "./components/projectsSection.ini.php";
        ?>
    </main>
</body>
<footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" integrity="sha512-8Wy4KH0O+AuzjMm1w5QfZ5j5/y8Q/kcUktK9mPUVaUoBvh3QPUZB822W/vy7ULqri3yR8daH3F58+Y8Z08qzeg==" crossorigin="anonymous"></script>
    <script src="./JS/animations.js"></script>
</footer>

</html>