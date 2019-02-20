function getDogInfo(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => createDogHTML(responseJson));  
}

function createDogHTML(responseJson) {
    let dogs = responseJson.message;
    let images = dogs.map(dog => `<img src=${dog}>\n`);
    let dogString = images.join('');
    renderRandom(dogString);
    console.log("dogs", dogs)
    console.log("images", images);
    console.log(typeof dogString);
}

function onSubmitQuantity(){
    $('.quantity').on('submit', function(event){
        event.preventDefault();
        clearDogs('.displayDog');
        let number = $('#quantity').val();
        console.log(number);
        getDogInfo(number);
    })
}

function clearDogs(input) {
    $(input).empty();
}

function renderRandom(string){
    $('.displayDog').append(string);
}

function getInfoBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => getBreedHTML(responseJson));
}

function getBreedHTML(responseJson) {
    console.log(responseJson);
    let html;
    if (responseJson.status === "success") {
        html = `<img src="${responseJson.message}">`;  
    } else {
        html = `<p>Sorry, ${responseJson.message} 🐶</p>`
    }
    
    renderBreed(html); 
}

function onSubmitBreed() {
    $('.breed').on('submit', function(event) {
        event.preventDefault();
        clearDogs('.displayBreed');
        let breed = $('#breed').val();
        getInfoBreed(breed);
    })
}

function renderBreed(string) {
    $('.displayBreed').append(string);
}



$(() => {
    onSubmitQuantity();
    onSubmitBreed();
});
