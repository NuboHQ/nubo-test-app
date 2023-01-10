import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Test');
});

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
