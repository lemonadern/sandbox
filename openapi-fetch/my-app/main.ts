import { type Context, Hono } from 'https://deno.land/x/hono@v4.3.7/mod.ts'

const app = new Hono()

app.post('*', async (c: Context) => {
  const body = await c.req.parseBody({all: true});
  console.log(body)
  return c.json({ message: 'Hello, World!' })
})

Deno.serve(app.fetch)
