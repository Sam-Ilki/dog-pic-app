function getDogInfo(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => createDogHTML(responseJson));  
}

function createDogHTML(responseJson) {
    let dogs = responseJson.message;
    let images = dogs.map(dog => `<img src=${dog}>\n`);
    let dogString = images.join('');
    render(dogString);
    console.log("dogs", dogs)
    console.log("images", images);
    console.log(typeof dogString);
}

function onSubmit(){
    $('form').on('submit', function(event){
        event.preventDefault();
        clearDogs();
        let number = $('#quantity').val();
        console.log(number);
        getDogInfo(number);
    })
}

function clearDogs() {
    $('.displayDog').empty();
}

function render(string){
    $('.displayDog').append(string);
}

$(onSubmit());
