

function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    const text = document.getElementById('name').value

    console.log("::: Form Submitted :::")
    fetch('/analyse', {
        method: 'POST',
        body: `recieved=${text}`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById('results').innerHTML = JSON.stringify(data);
            console.log(data);
        });
}

export { handleSubmit }
