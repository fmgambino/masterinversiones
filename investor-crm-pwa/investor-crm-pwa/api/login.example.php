<?php
require 'config.php';
$input = json_decode(file_get_contents('php://input'), true) ?? [];
$stmt = $pdo->prepare('SELECT id,email,password_hash,role_id,public_id FROM users WHERE email = ? LIMIT 1');
$stmt->execute([$input['email'] ?? '']);
$user = $stmt->fetch();
if (!$user || !password_verify($input['password'] ?? '', $user['password_hash'])) { http_response_code(401); echo json_encode(['error'=>'Credenciales inválidas']); exit; }
session_start(['cookie_httponly'=>true,'cookie_secure'=>true,'cookie_samesite'=>'Strict']);
$_SESSION['uid'] = $user['id'];
echo json_encode(['ok'=>true,'public_id'=>$user['public_id'],'role_id'=>$user['role_id']]);
