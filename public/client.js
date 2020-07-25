function oldAjaxCall(callback) {
    var req = new XMLHttpRequest(); 
    req.open("GET", "/color", true);
    req.addEventListener('load', function() {
        if (req.status >= 200 && req.status < 400) {
            console.log(req.status);
            const data = JSON.parse(req.responseText);
            updateColor(data);
        }
        else {
            console.log('Error in network request:' + request.responseText);
        }
    });
    req.send(null);
    event.preventDefault(); 
}

async function callApi() {
    const response = await fetch('/', {method: 'GET'});
    const data = await response.json();
    console.log(response.status)
    console.log(data);
}

function updateColor(data){
    const btn = document.getElementById('myButton');
    btn.style.backgroundColor = data.color;
}

function handleButtonClick(e) {
    console.log('in handleButtonClick')
    oldAjaxCall(updateColor)
    // callApi();
}