import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hi there: ' + process.env.NUBO_REGION);
});

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
