const log = (print) => console.log(print);
// RETOS DE PROGRAMACION

// FIZZ BUZZ

const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzbuzz(100);

// ANAGRAMA

const anagram = (str1, str2) => {
  return (
    str1.toLowerCase().split("").sort().join() ===
    str2.toLowerCase().split("").sort().join()
  );
};

// console.log(str1.split("").sort() === str2.split("").sort());

// console.log(anagram("amor", "roma"));

// FIBONACCI

const printFibonaci = (sec) => {
  let num = [0, 1];

  for (let i = 0; i < num.length; i++) {
    if (num.length < sec) {
      const element = num[num.length - 1] + num[num.length - 2];
      num.push(element);
      console.log(num[i]);
    } else {
      console.log(num[i]);
    }
  }
};

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];
// printFibonaci(2);
// printFibonaci(50);

// NUMERO PRIMO

// console.log(esPrimo(7));

const printPrimos = (print) => {
  const esPrimo = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  for (let j = 2; j <= print; j++) {
    if (esPrimo(j) === true) console.log(j);
  }
};

// printPrimos(100);

// AREA DE UN POLIGONO

const poligono = (p, val1 = 0, val2 = 0) => {
  let result;
  switch (p) {
    case "T":
      result = (val1 * val2) / 2;
      break;
    case "C":
      result = Math.pow(val1, 2);
      break;
    case "R":
      result = val1 * val2;
      break;
  }

  console.log(result);
};

// let triangulo = ("base" * "altura") / 2;
// let cuadrado = "lado" ^ 2;
// let rectangulo = "base" * "altura";

// poligono("R", 3, 4);

// ASPECT RATIO DE UNA IMAGEN

/*let url =
  "https://raw.githubusercontent.com/JohnnatanV/signup-component/master/assets/images/bg-intro-mobile.png";
  */
const getAspectRatio = (url) => {
  let img = new Image();
  img.src = url;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  let w = img.width,
    h = img.height,
    r = gcd(w, h);

  let aspectRatio = `${w / r} : ${h / r}`;

  console.log(w, h, r, aspectRatio);
};

// img.src = value;

/*
getAspectRatio(
  "https://raw.githubusercontent.com/JohnnatanV/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/img/pexels-negative-space-34153.jpg"
);

getAspectRatio(
  "https://raw.githubusercontent.com/JohnnatanV/nft-preview-card/main/assets/images/image-equilibrium.jpg"
);

getAspectRatio(
  "https://raw.githubusercontent.com/JohnnatanV/signup-component/master/assets/images/bg-intro-desktop.png"
);

getAspectRatio(
  "https://raw.githubusercontent.com/JohnnatanV/signup-component/master/assets/images/bg-intro-mobile.png"
);
*/

// INVIRTIENDO CADENAS

const invirtiendo = (str) => {
  let newStr = "";
  for (let i = 1; i <= str.length; i++) {
    newStr += str[str.length - i];
  }
  console.log(newStr);
};

// invirtiendo("Hola Mundo");
