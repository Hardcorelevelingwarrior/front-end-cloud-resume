var apiUrl = "https://y1gxvl8ow1.execute-api.eu-north-1.amazonaws.com/Dev";
fetch(apiUrl)
   .then(response => response.json())
   .then(data =>{
        var count = document.getElementById('body');
    count.innerHTML = data.body;
    console.log(data)});