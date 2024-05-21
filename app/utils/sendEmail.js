// lib/email.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey("");


export function sendEmail(to, subject, text) {
  const msg = {
    to,
    from: 'fundstationsup@gmail.com',
    subject,
    text,
  };

  return sgMail.send(msg);
}
