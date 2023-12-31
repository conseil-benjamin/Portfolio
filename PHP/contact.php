<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Contact</title>
    <link rel="stylesheet" href="/CSS/contact.css">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon.png">
</head>

<body>
    <form class="form" method="post">
       <h2>CONTACTER MOI</h2>
       <p type="Nom :"><input type="name" name="email" placeholder="Ecriver votre nom ici..." required></input></p>
       <p type="Email :"><input name="email" placeholder="Pour pouvoir vous recontacter.." required></input></p>
       <p type="Message :"><input type="message" name="message" placeholder="Que voudriez-vous me dire.." required></input></p>
       <button class="buttonEnv">Envoyer</button>
       <button class="buttonRet" onclick="history.back()" id="go-back">Retour</button>
    </form>
    <?php
    if (isset($_POST['message'])) {
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: conseil-benjamin.github.io' . "\r\n";
        $entete .= 'Reply-to: ' . $_POST['email'];

        $message = '<h1>Message envoyé depuis la page Contact du portfolio Benjamin Conseil</h1>
        <p><b>Email : </b>' . $_POST['email'] . '<br>
        <b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

        $retour = mail('conseil.benjamin55@gmail.com', 'Envoi depuis page Contact', $message, $entete);
        if($retour)
            echo '<p class="p_echo">Votre message a bien été envoyé.</p>';
    }
    ?>
</body>
</html>