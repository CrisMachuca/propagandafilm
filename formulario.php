<?php
if(isset($_POST['enviar'])) {
    $to = "cmachucam@hotmail.com"; // Cambia esto con tu dirección de correo electrónico.
    $subject = "Nuevo mensaje de formulario";
    
    // Obtener los valores del formulario.
    $nombre = $_POST['name'];
    $compania = $_POST['company'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $mensaje = $_POST['mensaje'];
    
    // Construir el cuerpo del mensaje.
    $body = "Nuevo mensaje de formulario:\n\n";
    $body .= "Nombre: " . $nombre . "\n";
    $body .= "Compania: " . $compania . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Telefono: " . $telefono . "\n";
    $body .= "Mensaje: " . $mensaje . "\n";
    
    // Enviar el correo electrónico.
    mail($to, $subject, $body);
    
    // Redirigir al usuario a una página de confirmación.
    header("Location: confirmacion.html");
    exit();
}
?>