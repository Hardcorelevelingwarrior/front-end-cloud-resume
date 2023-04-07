var apiUrl = "https://onpsyrfkduimim7ihnjv2nuwza0gxzil.lambda-url.us-east-1.on.aws/";
fetch(apiUrl)
   .then(response => response.json())
   .then(data =>{
        var count = document.getElementById('body');
    count.innerHTML = data.body;
    console.log(data)});