<?php
// Copiar como config.php en Hostinger. NO subir config.php real a GitHub.
$dsn = 'mysql:host=localhost;dbname=TU_DB;charset=utf8mb4';
$user = 'TU_USUARIO';
$pass = 'TU_PASSWORD';
$options = [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC];
$pdo = new PDO($dsn, $user, $pass, $options);
header('Content-Type: application/json; charset=utf-8');
