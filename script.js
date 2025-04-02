const heroes = [
{ name: "Spider-Man", power: 85, universe: "Marvel", isActive: true, isAlien: false },
{ name: "Batman", power: 80, universe: "DC", isActive: false, isAlien: false },
{ name: "Wonder Woman", power: 90, universe: "DC", isActive: true, isAlien: true },
{ name: "Iron Man", power: 88, universe: "Marvel", isActive: true, isAlien: false },
{ name: "Captain Marvel", power: 95, universe: "Marvel", isActive: false, isAlien: true },
{ name: "Flash", power: 78, universe: "DC", isActive: true, isAlien: false },
{ name: "Thor", power: 92, universe: "Marvel", isActive: true, isAlien: true },
{ name: "Green Lantern", power: 83, universe: "DC", isActive: true, isAlien: true },
{ name: "Black Panther", power: 87, universe: "Marvel", isActive: false, isAlien: false },
{ name: "Martian Manhunter", power: 91, universe: "DC", isActive: true, isAlien: true }
];



// 🔥 Challenge 1 :
// 👉 Récupère tous les héros **actifs**.
const activeHeroes = heroes.filter(hero => hero.isActive);
console.log("1- Héros actifs:", activeHeroes.map(hero => hero.name));

// ⚡ Challenge 2 :
// 👉 Récupère tous les héros de l’univers **Marvel**.
const marvelHeroes = heroes.filter(hero => hero.universe === "Marvel");
console.log("2- Heros Marvel:", marvelHeroes.map(hero => hero.name));

// 🧬 Challenge 3 :
// 👉 Récupère tous les **héros extraterrestres** (`isAlien === true`).
const alienHeroes = heroes.filter(hero => hero.isAlien === true);
console.log("3- Heros qui sont des extraterrestres:", alienHeroes.map(hero => hero.name));

// 🥊 Challenge 4 :
// 👉 Récupère tous les héros ayant une puissance **supérieure ou égale à 90**.
const powerHeroes = heroes.filter(hero => hero.power >= 90);
console.log("4- Heros ayant une puissance supérieure à 90:", powerHeroes.map(hero => hero.name ))

// 🎭 Challenge 5 :
// 👉 Récupère tous les **héros humains et actifs**.
const humansActiveHeroes =  heroes.filter(hero => hero.isAlien === false && hero.isActive );
console.log("5- Heros humain et actifs:", humansActiveHeroes.map(hero => hero.name));

// 🌌 Challenge 6 :
// 👉 Récupère les **héros actifs de l’univers DC avec une puissance ≥ 85**.   
const activeDCHeroes85 = heroes.filter(hero => hero.universe === "DC" && hero.power >= 85 && hero.isActive);
console.log("6- Heros actifs de l’univers DC avec une puissance ≥ 85:", activeDCHeroes85.map(hero => hero.name));

// 💣 Challenge 7 :
// 👉 Récupère tous les héros **inactifs ET non extraterrestres**.
const inactiveHeroesH = heroes.filter(hero => hero.isActive === false && hero.isAlien === false);
console.log("7- Heros inactifs et humains:", inactiveHeroesH.map(hero => hero.name))

// 🧠 Challenge 8 :
// 👉 Récupère les héros dont **le nom contient “man”** (insensible à la casse).
// (Ex. Spider-Man, Batman, Martian Manhunter…)
const manHeroes = heroes.filter(hero => hero.name.toLowerCase().includes("man"));
console.log("8- Heros avec nom en 'man':", manHeroes.map(hero => hero.name));

// 🧪 Challenge 9 :
// 👉 Récupère les héros **dont la puissance est impaire**.
const impaireHeroes = heroes.filter(hero => hero.power % 2 !== 0)
console.log("9- Heros dont la puissance est impaire:",impaireHeroes.map(hero => hero.name));

// 🧞‍♂️ Challenge 10 :
// 👉 Récupère les **héros dont le nom fait plus de 10 caractères**.

const longNameHeroes = heroes.filter(hero => hero.name.length > 10);
console.log("10- Heros avec un nom de plus de 10 caractères:",longNameHeroes.map(hero => hero.name));
