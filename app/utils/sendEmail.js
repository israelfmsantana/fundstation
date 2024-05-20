// lib/email.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey("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");


export function sendEmail(to, subject, text) {
  const msg = {
    to,
    from: 'fundstationsup@gmail.com',
    subject,
    text,
  };

  return sgMail.send(msg);
}
