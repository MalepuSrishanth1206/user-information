fetch('data.json')
.then(response=> response.json())
.then(data=>{
    const profileDiv=
    document.getElementById("profile");
    profileDiv.innerHtml=`
    <p><strong>Name:</strong>${data.name}</p>
    <p><strong>Email:</strong>${data.email}</p>
    p><strong>Age:</strong>${data.age}</p>`
})