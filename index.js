console.log("Let's Cook some Spaghetti alla Carbonara! \n")
console.log("Ingredients:")

let spaghetti = 400;
console.log("Spaghetti:", spaghetti);

let guanciale = 250;
console.log("Guanciale:", guanciale);

let veryFreshEgg = 6;
console.log("Amount of Fresh Eggs", veryFreshEgg);

let veryFreshEggWeight = 18;
console.log("Weight of a single egg", veryFreshEggWeight);

let agedGratedPecorinoRomanoCheese = 50;
console.log("Aged Grated Pecorino Romano Cheese", agedGratedPecorinoRomanoCheese);

let rawBlackPepper = 4;
console.log("Raw Black Pepper:", rawBlackPepper);

let water = 200;
console.log("Water:", water)

let salt = 5;
console.log("Salt:", salt)

console.log("\n Now it's time to cook! \n");

let layeredGuanciale = guanciale;
console.log("Cut the guanciale into 1cm layers:", layeredGuanciale);

let slicedGuanciale = layeredGuanciale 
console.log("Cut the 1cm layered guanciale into long strips:", slicedGuanciale);

let bowl = (veryFreshEgg*veryFreshEggWeight*0.3) + agedGratedPecorinoRomanoCheese;
console.log("Combined egg yolks with cheese into bowl, only used %30 of eggs because rest of it are egg whites and shell", bowl);

let roastedBlackPepper = rawBlackPepper;
console.log("Roast the black pepper on a pan until it smokes and sizzles", roastedBlackPepper);

bowl += roastedBlackPepper*0.5;
console.log("Combined a small amount of it to the yolks and cheese mixture, set aside the rest.", bowl)

let pan = roastedBlackPepper*0.5;  //
let guancialeGrease = guanciale*0.5;
let crispedGuanciale = guanciale*0.5;
pan+=guancialeGrease;
console.log("Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.", pan)

let pasta = spaghetti + water + salt;
console.log("Cook the pasta with a pinch of salt in the water:", pasta);

let ladleOfPastaWater = water*0.05;
console.log("Set aside a ladleful of the pasta water before draining it.", ladleOfPastaWater);

let pastaAlDente = (pasta-water);
console.log("Drain the pasta once it is cooked al dente", pastaAlDente);

pan += ladleOfPastaWater + crispedGuanciale;
console.log("Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat", pan);

let creamySauce = pan;
console.log("This will create a creamy sauce with the pasta starch contained in that water", creamySauce);

pan += pastaAlDente; 
console.log("Turn off the heat and let it rest for 1 minute, then transfer the pasta to the same pan", pan)

pan += bowl;  //
console.log("Added egg yolk and cheese mixture", pan);

let carbonara = pan + roastedBlackPepper*0.5;
console.log("Added remaning roasted black pepper, obtaining Carbonara!", carbonara)