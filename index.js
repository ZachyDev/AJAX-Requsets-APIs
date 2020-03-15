const request = new XMLHttpRequest(); //create a new request object
request.open('GET','https://hplussport.com/api/products');
request.onload = () =>{
    let response = request.response;
    let parsedData = JSON.parse(response);
    console.log(parsedData); //returs raw data
    // use a for loop to return the names of all the products
    for(item in parsedData){
        let names = parsedData[item].name;//get the names of all the products
        let imgUrl = parsedData[item].image //get all the images of the products
        
        // create html elements to store names and images
        let list = document.createElement('li');
        list.innerHTML = names;
        document.body.appendChild(list);
        // create an image tag
        let img = document.createElement('img');
        img.setAttribute('src',imgUrl);
        document.body.appendChild(img);

    }
}
request.send();