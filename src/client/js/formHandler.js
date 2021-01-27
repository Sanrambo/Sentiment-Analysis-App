import "@babel/polyfill";


function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    const text = document.getElementById('name').value;

    if (Client.isUrlValid(text)) {
        postData('/analyse', text)
            .then((output) => {

                updateUI();
            });

    } else {
        alert('Please try entering a valid URL');
    }

};

const postData = async (url = '', data) => {
    const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            recieved: data
        })
    });

    try {
        const outputData = await res.json();
        return outputData;
    } catch (err) {
        console.log('Error', err);
    }
}

const updateUI = async () => {
    const request = await fetch('/path');
    const agreement = document.getElementById("agreement");
    const subjectivity = document.getElementById("subjectivity");
    const confidence = document.getElementById("confidence");
    const irony = document.getElementById("irony");

    try {
        const allData = await request.json();
        console.log(allData);

        agreement.innerHTML = allData[0].agreement;
        subjectivity.innerHTML = allData[0].subjectivity;
        confidence.innerHTML = allData[0].confidence;
        irony.innerHTML = allData[0].irony;

    } catch (err) {
        console.log("Error", err);
    }
}

export { handleSubmit, postData, updateUI }