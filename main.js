
//FUNCTIONS?!
//write code which we can REUSE later
//organize our code better
//Our code should be more readable (thus easier to maintain)
//Our code should be easier to TEST/prove

//functions are "black boxes" - like pieces of equipment
/*fucntion doSomething(x, y) {
    return x + y
}

//....
doSomething(3, 4) === "7" */

let pokemonImageURLs = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
]



//in order to be able to inject new HTML content ANYWHERE we want
//we need to be able to SEARCH the existing HTML for a place to inject
//our new content

let pokemonGalleryElement = document.querySelector(".pokemon-gallery") //this is the selector we would use in CSS ; it will give us the 1st <p></p>; destination where I want my image to store
//creating content
console.log(pokemonGalleryElement) //now I can control just this one paragraph
let pokemonImage = document.createElement("img") 
pokemonImage.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
// initialy using <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"> above
// it isn't yet on the DOM

let pokemonHeading = document.createElement("h1") //created content
// need to decorate it; add text into that h1
pokemonHeading.append("Best Pokemon")
//<h1>Pikachu</h1>
//adding a CSS class 
pokemonHeading.classList.add("pokemon-heading")
//pokemonHeading.classList.add("pikachu-yellow")
//pokemonHeading.classList.replace("pikachu-yellow")
//equivalent HTML tag <h1 class="pokemon-heading pikachu-yellow">Pikachu</h1>

pokemonGalleryElement.append(pokemonImage) //how we add content to the page
//pokemonGalleryElement.appendChild(pokemonImage) //visible to the user
//adding my pokemonHeading to the page
pokemonGalleryElement.append(pokemonHeading)

let p = document.querySelector("p")
p.prepend(pokemonImage) //we are just moving the img & not necessarily adding more

//tree node (parts) a list; all elements that match that particular selector
//let allParagraphElements = document.querySelectorAll("p")
//console.log(allParagraphElements)

for (let index = 0; index < pokemonImageURLs.length; index += 1) {
    let imageURL = pokemonImageURLs[index]
    document.write(`<img src="${imageURL}">`) 
}



//document.querySelector()    //will give you the first it finds
//document.querySelectorAll   //will give you all that it finds