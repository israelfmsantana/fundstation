// lib/generateAccessCode.js

import crypto from 'crypto';

export function generateAccessCode() {
  return crypto.randomBytes(20).toString('hex');
}
