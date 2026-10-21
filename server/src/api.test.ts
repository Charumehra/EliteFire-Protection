import test from 'node:test';
import assert from 'node:assert/strict';
import { app } from './app.js';
import http from 'http';
import { ENV } from './config/env.js';

let server: http.Server;
let baseUrl: string;

test.before(() => {
  return new Promise<void>((resolve) => {
    server = app.listen(0, () => {
      const address = server.address() as any;
      baseUrl = `http://localhost:${address.port}`;
      resolve();
    });
  });
});

test.after(() => {
  return new Promise<void>((resolve) => {
    server.close(() => resolve());
  });
});

test('GET /api/health should return ok status and database status', async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  const data = await res.json() as any;

  assert.equal(res.status, 200);
  assert.equal(data.status, 'ok');
  assert.equal(data.service, 'Elite Fire and Protection API');
  assert.ok(data.database);
});

test('POST /api/inquiries should reject empty or invalid payloads', async () => {
  const res = await fetch(`${baseUrl}/api/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: '',
      phone: '123', // invalid phone
      service: 'Invalid Service',
    }),
  });

  const data = await res.json() as any;
  assert.equal(res.status, 400);
  assert.equal(data.success, false);
  assert.ok(Array.isArray(data.errors));
  assert.ok(data.errors.length > 0);
});

test('POST /api/inquiries should intercept honeypot spam bot submissions', async () => {
  const res = await fetch(`${baseUrl}/api/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Spam Bot',
      phone: '+919876543210',
      service: 'Fire Alarm Systems',
      location: 'Faridabad',
      website_hp: 'http://spam-link.com', // Honeypot filled!
    }),
  });

  const data = await res.json() as any;
  assert.equal(res.status, 200);
  assert.equal(data.success, true);
  // Should NOT return a leadId because it wasn't saved!
  assert.equal(data.leadId, undefined);
});

test('POST /api/inquiries should accept valid lead submission and return 201', async () => {
  const res = await fetch(`${baseUrl}/api/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Rajesh Sharma',
      companyName: 'Apex Industries Faridabad',
      phone: '+919812345678',
      email: 'rajesh@apexind.example',
      service: 'Fire Extinguisher Supply and Refilling',
      location: 'Sector 58, Industrial Area, Faridabad',
      message: 'Need annual refilling and pressure testing for 25 ABC extinguishers.',
      preferredContactMethod: 'WhatsApp',
    }),
  });

  const data = await res.json() as any;
  assert.equal(res.status, 201);
  assert.equal(data.success, true);
  assert.ok(data.leadId);
  assert.equal(data.preferredContact, 'WhatsApp');
});

test('GET /api/admin/inquiries should reject unauthorized access', async () => {
  const res = await fetch(`${baseUrl}/api/admin/inquiries`);
  assert.equal(res.status, 401);
});

test('GET /api/admin/inquiries should allow access with valid admin key', async () => {
  const res = await fetch(`${baseUrl}/api/admin/inquiries`, {
    headers: {
      'x-admin-key': ENV.ADMIN_API_KEY,
    },
  });

  const data = await res.json() as any;
  assert.equal(res.status, 200);
  assert.equal(data.success, true);
  assert.ok(Array.isArray(data.data));
});
