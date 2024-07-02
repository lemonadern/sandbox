
const body = {
    name: 'John Doe',
    query: {
        version: 2,
    },
}

const serializeToFormData = (body) => {
    const fd = new FormData();
    for (const name in body) {
        fd.append(name, body[name]);
    }
    return fd;
}

const res = await fetch('https://echo-server.deno.dev/', {
    method: 'POST',
    body: serializeToFormData(body),
    // headers: {
    //     'Content-Type': 'multipart/form-data',
    // },
})

console.log(`Status: ${res.status}`)
console.log(await res.text())


export type {};

// command: 
// deno run --allow-net formData.ts
//
// Output:
// deno run --allow-net formData.ts 
// Status: 200
// ------1845662902205484666338047257
// Content-Disposition: form-data; name="name"

// John Doe
// ------1845662902205484666338047257
// Content-Disposition: form-data; name="query"

// [object Object]
// ------1845662902205484666338047257--
