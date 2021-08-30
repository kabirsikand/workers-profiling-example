addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let a = new Array(1000);
  for (let i = 0; i < 1000; ++i) {
    a[i] = i;
  }
  let body = a.join(' ');

  return new Response(body, {
    headers: { 'content-type': 'text/plain' },
  });
}
