import { handleFetch } from '../src/index'

test('responds with url', async () => {
  const req = new Request('http://localhost/')
  const res = await handleFetch(req, {}, {} as ExecutionContext)
  expect(await res.text()).toBe('Hello World!')
})
