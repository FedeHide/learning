//?/ Api´s: are a set of rules that allow different software applications to communicate with each other. 
//?/ They are used when programming graphical interfaces (GUIs), web applications, and mobile applications. 
//?/ They are also used to connect different services, such as databases, to each other.



let urlBase = 'https://jsonplaceholder.typicode.com';
let query = 'comments?postId=5';
let requestBody = {
    title: 'Richard comment on your photo',
    body: 'What a beautiful photo!',
    userId: 1
}
let posteo = 5;
let requestBody2 = {
    id: 3,
    title: 'Richard comment on your photo',
    body: 'What a beautiful photo!',
    userId: 1
}
let modificacion = {
    title: 'This is a new title'
}
let post = 10;
let elementToDelete = 7;

//*/ GET: obtain information

// hard-coded
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))


// dynamic
fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json))    




//*/ POST: send information

fetch(`${urlBase}/posts`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json))




//*/ PUT: edit information

fetch(`${urlBase}/posts/${posteo}`, {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody2)
})
    .then(response => response.json())
    .then(json => console.log(json))




//*/ PATCH: modify information

fetch(`${urlBase}/posts/${post}`, {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(modificacion)
})
    .then(Response => Response.json())
    .then(json => console.log(json))




//*/ DELETE: delete information

fetch(`${urlBase}/posts/${elementoAEliminar}`, {
    method: 'DELETE',
});