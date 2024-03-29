<?php
  
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "./PHPMailer/src/Exception.php";
require "./PHPMailer/src/PHPMailer.php";
require "./PHPMailer/src/SMTP.php";
  
// Mudar Aqui o e-mail
$email_envio = "vendas@michiganpumpsbr.com.br"; // E-mail do site (ex: contato@seusite.com)
$email_pass = "Michigan123."; // Senha do e-mail

$site_name = "MichiganPUMPSBR"; // Nome do Site
$site_url = "michiganpumpsbr.com.br/"; // URL do Site

$host_smtp = "br1034.hostgator.com.br"; // HOST SMTP Ex: smtp.domain.com.br
$host_port = "465"; // Porta do Host, geralmente 465 ou 587

// Não mudar abaixo:
$email = $_POST["email"];
$nome = $_POST["nome"];

// Loop por cada field do formulário
$body_content = "";
foreach( $_POST as $field => $value) {
  if( $field !== "deixeEmBranco" && $field !== "naoMude" && $field !== "enviar") {
    $sanitize_value = filter_var($value, FILTER_SANITIZE_STRING);
    $body_content .= "$field: $value \n";
  }
}

// Verifica se não é bot
$notbot = ($_POST["deixeEmBranco"] === "") || ($_POST["naoMude"] === "http://");

if ($notbot) {

// Inicia o objeto PHPMailer
$mail = new PHPMailer(true);

try {
  $mail->CharSet = "UTF-8";
  
  $mail->SMTPDebug = 3; // Tire do comentário para debugar
  $mail->isSMTP();
  $mail->Host = $host_smtp;
  $mail->SMTPAuth = true;
  $mail->Username = $email_envio;
  $mail->Password = $email_pass;
  $mail->Port = $host_port; 
  $mail->SMTPSecure = "ssl"; //Se não tiver SSL use assim, com SSL coloque no SMTPSecure
  
  $mail->setFrom($email_envio, "Formulário - ". $nome);
  $mail->addAddress($email_envio, $site_name);
  $mail->addReplyTo($email, $nome);
  
  $mail->WordWrap = 70;
  $mail->Subject = "Formulário - " . $site_name . " - " . $nome;
  $mail->Body = $body_content;
  
  $mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
  );

  $mail->send();
?>

  <html>
    <head>
      <title>Formulário enviado</title>
      <meta http-equiv="refresh" content="10;URL="./"">
    </head>
    <body>
      <!-- Mensagem de sucesso -->
      <div class="form-content" id="form-send">
        <h2>Formulário enviado!</h2>
        <p>Em breve entraremos em contato com você.</p>
      </div>
    </body>
  </html>

<?php } catch (Exception $e) { echo "Caught exception: ". $e->getMessage() ."\n";?>

  <html>
    <head>
      <title>Erro no envio</title>
      <meta http-equiv="refresh" content="10;URL="./"">
    </head>
    <body>
      <!-- Mensagem de erro -->
      <div class="form-content" id="form-erro">
        <h2>Um erro ocorreu!</h2>
        <p>Você pode tentar novamente ou enviar direto para <?php echo $email_envio; ?></p>
      </div>
    </body>
  </html>

<?php
  }}
?>