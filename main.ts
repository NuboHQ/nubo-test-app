import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hi Joj!');
});

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
