// define HTMl Static Selectors
var drinks = [];
var drinksEl = document.querySelector("#drinks");
var margsBtn = document.querySelector("#margs");
var blueMargsBtn = document.querySelector("#blueMargs");
var tommyMargsBtn = document.querySelector("#tommyMargs");
var whitecapMargsBtn = document.querySelector("#whitecapMargs");
var strawbMargsBtn = document.querySelector("#strawbMargs");
var melonMargsBtn = document.querySelector("#melonMargs");
var boxcarBtn = document.querySelector("#boxcar");
var casinoBtn = document.querySelector("#casino");
var mimosaBtn = document.querySelector("#mimosa");
var maitaiBtn = document.querySelector("#maitai");
var selectEl = document.querySelector("#select");
var pastSelectEl = document.querySelector("#pastSelect")
// Current Searched drink cards selectors
var drinkCard1El = document.querySelector("#drinkCard1");
var drinkCard2El = document.querySelector("#drinkCard2");
var drinkCard3El = document.querySelector("#drinkCard3");
var drinkCard4El = document.querySelector("#drinkCard4");
var drinkCard5El = document.querySelector("#drinkCard5");
// ingredients selectors
var ingredients1El = document.querySelector("#ingredients1");
var ingredients2El = document.querySelector("#ingredients2");
var ingredients3El = document.querySelector("#ingredients3");
var ingredients4El = document.querySelector("#ingredients4");
var ingredients5El = document.querySelector("#ingredients5");
// instructions selectors
var instructions1El = document.querySelector("#instructions1");
var instructions1El = document.querySelector("#instructions2");
var instructions1El = document.querySelector("#instructions3");
var instructions1El = document.querySelector("#instructions4");
var instructions1El = document.querySelector("#instructions5");

// function to display drinks
// function displyDrinks() {
//     // event.preventDefault();
//     // var drinksName = drinksEl.value

//     //call populate data function with api below
//     populateData(drinksName);
// };

function populateData(event) {
    // URl for cocktail api
    populatePastDrinks(event.target.textContent);

}

function populatePastDrinks(drink) {
    var urlMargs = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    console.log(drink)
    var drink1Position = selectEl.getBoundingClientRect().top
    fetch(urlMargs)
        .then(function(response){
            return response.json();
        }) 
        .then(function(currentData) {
            console.log(currentData);
            // defined variable with ternary opeator to not display null on page
            var ingredients3 = currentData.drinks[0].strIngredient3 == null ? " " : currentData.drinks[0].strIngredient3
            var ingredients4 = currentData.drinks[0].strIngredient4 == null ? " " : currentData.drinks[0].strIngredient4
            var ingredients5 = currentData.drinks[0].strIngredient5 == null ? " " : currentData.drinks[0].strIngredient5
            var ingredients6 = currentData.drinks[0].strIngredient6 == null ? " " : currentData.drinks[0].strIngredient6
            var ingredients7 = currentData.drinks[0].strIngredient7 == null ? " " : currentData.drinks[0].strIngredient7
            var measure3 = currentData.drinks[0].strMeasure3 == null ? " " : " - " + currentData.drinks[0].strMeasure3
            var measure4 = currentData.drinks[0].strMeasure4 == null ? " " : " - " + currentData.drinks[0].strMeasure4
            var measure5 = currentData.drinks[0].strMeasure5 == null ? " " : " - " + currentData.drinks[0].strMeasure5
            var measure6 = currentData.drinks[0].strMeasure6 == null ? " " : " - " + currentData.drinks[0].strMeasure6
            var measure7 = currentData.drinks[0].strMeasure7 == null ? " " : " - " + currentData.drinks[0].strMeasure7
            
                selectEl.innerHTML =`<div class="group relative">
                <div
                    class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-fit lg:aspect-video">
                    <img src="${currentData.drinks[0].strDrinkThumb}"
                        alt="Drinks image"
                        class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                </div>
                <div class="mt-4 flex justify-between bg-white">
                    <div>
                        <h3 class="text-xl text-gray-700">
                            <span id="drinkCard1">${currentData.drinks[0].strDrink}</span>
                        </h3>
                        <h3 class="text-base text-gray-700">
                            <span id="drinkCard1">Ingredients: </span>
                        </h3>
                        <p class="mt-1 text-xl font-medium text-gray-500" id="ingredients1">
                            <ol>
                                <li>${currentData.drinks[0].strIngredient1} -
                                <span>${currentData.drinks[0].strMeasure1}</span></li>
                                <li>${currentData.drinks[0].strIngredient2} -
                                <span>${currentData.drinks[0].strMeasure2}</span></li>
                                <li>${ingredients3}<span>${measure3}</span></li>
                                <li>${ingredients4}<span>${measure4}</span></li>
                                <li>${ingredients5}<span>${measure5}</span></li>
                                <li>${ingredients6}<span>${measure6}</span></li>
                                <li>${ingredients7}<span>${measure7}</span></li>
                            </ol>
                        </p>
                        <p class="mt-1 text-sm text-gray-500" id="instructions1">${currentData.drinks[0].strInstructions}
                        </p>
                    </div>
                </div>
            </div>`

            window.scrollTo({top:drink1Position, left:0, behavior:"smooth"})
            saveDrinks(drink)
        })
}


var saveDrinks = function (event) {
    drinks.push(event);
    localStorage.setItem("drinks",JSON.stringify(drinks));
}


function displayPastDrinks () {
    var drinkData = JSON.parse(localStorage.getItem("drinks"))
    if (drinkData) {
        drinks = drinkData;
    }
    var lastIndex = drinks.length-1
    populatePastDrinks(drinks[lastIndex]);
}

displayPastDrinks();

// add EventListerner
margsBtn.addEventListener("click",populateData);
blueMargsBtn.addEventListener("click",populateData);
tommyMargsBtn.addEventListener("click",populateData);
whitecapMargsBtn.addEventListener("click",populateData);
strawbMargsBtn.addEventListener("click",populateData);
melonMargsBtn.addEventListener("click",populateData);
boxcarBtn.addEventListener("click",populateData);
casinoBtn.addEventListener("click",populateData);
mimosaBtn.addEventListener("click",populateData);
maitaiBtn.addEventListener("click",populateData);