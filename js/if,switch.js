let a = 7;
let b = 9;

a++

if (a>b) {
   console.warn("a je vece od b")
} else if (a<b) {
   console.error("b je vece od a")
} else {
   console.log("wrong numbers")
}

a = 10;

if (a>b) {
   console.warn("a je vece od b")
} else if (a<b) {
   console.error("b je vece od a")
} else {
   console.log("wrong numbers")
}

switch (a>b) {
   case true:
      console.log("a je vec od b");
      break;
   case false:
      console.warn("b je vece od a");
      break;
   default:
      console.log("wrong numbers");
      break;
}

let brandAudi = {
   model1: "rs6",
   model2: "a6",
   yearNew: "2023",
   yearOlder: "2020",
};

let brandBmw = {
   model1: "m3",
   model2: "m3comp",
   yearNew: "2023",
   yearOlder: "2020",
};

let brandMercedes = {
   model1: "g63",
   model2: "c63",
   yearNew: "2023",
   yearOlder: "2020",
};

if (brandAudi) {
   console.log("you have chosen the audi brand");
} else if (brandAudi.yearNew) {
   console.log("You have chosen the newst 2023 audi models")
} else if (brandAudi.yearOlder) {
   console.log("You have chosen the older 2020 audi models")
} else if (brandAudi.model2) {
   console.log("you have chosen" + brandAudi.model2);
   if (brandAudi.yearNew) {
      console.log("you have chosen the brand new" + brandAudi.yearNew + brandAudi.model2 + "for purchase")
   } else if (brandAudi.yearOlder) {
      console.log("you have chosen the older" + brandAudi.yearOlder + brandAudi.model2 + "for purchase")
   }
} else {
   console.log("you havent chosen anything");
}

switch (brandMercedes) {
   case (brandMercedes.model1):
      console.log("g63");
      break;
   case (brandMercedes.model2):
      console.log("c63");
      break;
}

