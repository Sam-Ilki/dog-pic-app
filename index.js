function getDogInfo(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => createDogHTML(responseJson));  
}

function createDogHTML(responseJson) {
    let dogs = responseJson.message;
    let images = dogs.map(dog => `<img src=${dog}/>`);
    console.log("dogs", dogs)
    console.log("images", images);
}

getDogInfo(3);

