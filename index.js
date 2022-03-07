// Add your code here

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
    
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarok!");
//         console.log(error.message);
//     });

// const formData = {
//     name: "Steve",
//     email: "steve@steve.com",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// function submitData (configurationObject) {
//     return fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//         },
//         body: JSON.stringify(configurationObject),
//     })
//     .then(res => res.json())
//     .then(configurationObject => console.log(configurationObject))
// }
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (object) {
    //     console.log(object);
    // })
    // .catch(function (error) {
    //     alert("Unauthorized Access");
    //     console.log(error.message);
    // })
const configObj = {
    name: "Steve",
    email: "steve@steve.com",
};

const body = document.getElementsByTagName("body")[0];

function appendDOM(newID) {
    document.getElementsByTagName("body")[0].innerHTML = newID
}

function submitData(){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(configObj)
    })
    .then(res => res.json())
    .then(body => appendDOM(body.id))
    .catch(res => document.body.innerHTML = "Unauthorized Access")

}
