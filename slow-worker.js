addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let body = '';
  for (let i = 0; i < 1000; ++i) {
    body = body + ' ' + i;
  }

  return new Response(body, {
    headers: { 'content-type': 'text/plain' },
  });
}
