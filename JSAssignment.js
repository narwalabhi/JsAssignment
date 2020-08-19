converts = (time) => {
  return time * 60;
};

console.log(converts(5));

/*--------------------------------*/

dividesEvenly = (a, b) => {
  return a % b === 0
};

console.log(dividesEvenly(98, 7));

/*--------------------------------*/

function charCount(str1, str2) {
  return str1.split(str2).length - 1;
}

console.log(charCount("Chamberofsecrets", "c"));

/*-----------------------------------------------*/

addUp = (num) => {
  return (num * (num + 1)) / 2;
};

console.log(addUp(400));

/*-----------------------------------------------*/

replaceVowel = (text) => {
  let ar = text.split("");
  let vowels = "aeiou";
  for (var i = 0; i < ar.length; i++) {
    let indexOfVowel = vowels.indexOf(ar[i]);
    if (indexOfVowel > -1) {
      ar[i] = ++indexOfVowel;
    }
  }
  return ar.join("");
};

console.log(replaceVowel("karachi"));

/*-----------------------------------------------*/

Testjackpot = (array) => {
    let str = array[0]
    let check = array.filter((item) => {
        return item === str
    })
    return check.length === array.length
};
console.log(Testjackpot(["Ss", "Ss", "Ss", "Ss"]));

/*-----------------------------------------------*/

unique = (input) => {
  return Array.from(new Set(input));
}

console.log(unique([0, 1, 0, 1]));

/*----------------------------------------------------------------*/

specialReverse = (input, s) => {
    let ar = input.split(" ")
    for (let i = 0; i < ar.length; i++) {
        if(ar[i].charAt(0) === s){
            let rev = []
            for (let index = ar[i].length-1; index >= 0; index--) {
                rev.push(ar[i][index])
            }
            ar[i] = rev.join('')
        } 
    }
    return ar.join(" ")
}

console.log(specialReverse("word searches are super fun","s"))


/*-----------------------------------------------------------------*/

Realtype = (a) => {
  var toString = Object.prototype.toString;
  return toString.call(a);
}

console.log(Realtype([]));
console.log(Realtype(true));
console.log(Realtype("a"));
console.log(Realtype(null));


////////////////////////////////////////////////////////////////////////

isAlpha = (element) => {
    var letters = /^[A-Za-z]+$/;
    return element.match(letters) ? true : false
}

numInStr = (arr) => {
    return arr.filter((element) => {
        return !isAlpha(element)
    })
}

console.log(numInStr(["1a", "a", "2b", "b"]))