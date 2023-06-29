const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const nodemailer = require('nodemailer');

// Configuration du transporteur de messagerie
const transporter = nodemailer.createTransport({
  // Configurer les détails du transporteur de messagerie selon vos besoins
  // Par exemple, pour utiliser Gmail :
  service: 'gmail',
  auth: {
    user: 'conseil.benjamin55@gmail.com',
    pass: 'Anneso73'
  }
});

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/') {
    if (req.method === 'GET') {
      // Afficher le formulaire de contact
      fs.readFile('contact.html', 'utf8', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Internal Server Error');
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
    } else if (req.method === 'POST') {
      // Traiter le formulaire de contact
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
        const formData = qs.parse(body);
        const email = formData.email;
        const message = formData.message;

        const emailContent = `
          <h1>Message envoyé depuis la page Contact du portfolio Benjamin Conseil</h1>
          <p><b>Email : </b>${email}<br>
          <b>Message : </b>${message}</p>
        `;

        // Envoyer l'e-mail
        const mailOptions = {
          from: 'conseil-benjamin.github.io',
          to: 'conseil.benjamin55@gmail.com',
          subject: 'Envoi depuis page Contact',
          html: emailContent
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.statusCode = 500;
            res.end('Internal Server Error');
          } else {
            console.log('E-mail envoyé : ' + info.response);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<p class="p_echo">Votre message a bien été envoyé.</p>');
          }
        });
      });
    } else {
      res.statusCode = 405;
      res.end('Method Not Allowed');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
