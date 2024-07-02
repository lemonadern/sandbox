const echoServerUrl = 'https://echo-server.deno.dev/'

const fd = new FormData();

fd.append('name', 'John Doe');
fd.append('version', '2');

const res = await fetch(echoServerUrl, {
    method: 'POST',
    body: fd,
})

// console.log(res)
console.log(await res.text())

export type {};