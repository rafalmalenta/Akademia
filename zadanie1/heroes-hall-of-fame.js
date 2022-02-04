class Hero {
    /*inicializacja zmiennej z zakazanym znakiem na początku oraz naruszenie open-close principle
    brak inicjalizacji powerCount i inicjalizacja "w locie" to chyba błeda taktyka
    */
    name;
    powerCount;

    constructor(name, power) {
        this.name = name;
        this.powerCount = power;
    }
    getCurrentPowerCount() {
        return this.powerCount;
    }
    train() {
        //błędny operator inkrementacji
        this.powerCount += 1;
    }
}
//nie wiem czy deklaracja modyfikowalnej tablicy jako stała to dobra praktyka
const heroes = [];

//funkcje są windowane ale dobrą praktyka jest deklarowac przed użyciem
function addhero(name,powerCount) {
    /*ta funkcja tworzyła zawsze instancję hulk oraz nie zwracała wartości
    dodatkowo zanieczyszczała zmienną z poza zakresu "heroCount" która nie jest nigdzie używana wiec ja usunąlem.
    w ramach DRY zmieniłem nazwe na addHero i dodałem push
     */
    heroes.push(new Hero(name,powerCount));
}

addhero("hulk",10);
addhero("geralt",10);
addhero('spiderman',10);

function handleClick(hero){
    hero.train();
    print_hall_of_fame();
}

//funkcje strzałkowe nie są windowane
const print_hall_of_fame = () => {
    /*
    dodałem obsługę re-renderu po kliknięciu ignorując memory leak oraz wielkorotne renderowanie nagłówka który zawsze jest taki sam,
    ale nie to bylo celem zadania.
     */
    const heroesContainer = document.querySelector(".heroContainer");
    heroesContainer.innerHTML = "";

    const heroCountTextNode = document.createTextNode(heroes.length.toString());
    document.querySelector('h2').innerHTML= "Hero count: "+heroes.length.toString() ;

    heroes.map((x)=>{
        const heroElement = document.createElement("div");
        const {name} = x;

        heroElement.innerHTML =`<p>${name} ${x.powerCount}</p><button />Power Up Hero</button>`;
        heroElement.querySelector("button").addEventListener("click", ()=>handleClick(x))

        heroesContainer.append(heroElement);
    });
}
print_hall_of_fame();
