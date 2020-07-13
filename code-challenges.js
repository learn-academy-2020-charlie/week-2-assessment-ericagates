// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"'

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// create a function that accepts a number as a parameter
const divisbleBy3 = (num) => {
    // check if the input is not a number, 
    if (typeof num !== "number") {
        return `${num} is not a number`

    // chcek if the number is divisble by 3
    } else if (num % 3 === 0) {
        return `${num} is divisible by 3`
    // if not
    } else {
        return `${num} is not divisible by 3`
    }
}

console.log(divisbleBy3(num1))
console.log(divisbleBy3(num2))
console.log(divisbleBy3(num3))

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// create a function that accepts in an array
const capitalizeIt = (array) => {
    // loop through array using .map
    return array.map(value => {
        // return each  word with first letter capitalized
        return value[0].toUpperCase() + value.slice(1)
    })

}
console.log(capitalizeIt(randomNouns))





// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// create a funtion that accepts an array of mixed datatypes
const numbersOnly = (array) => {
    // create new array to store numbers only
    let newArray = []
    // iterate through array using filter
    array.filter(value =>{
        // filter out anything that is not a number and push to new array
        if (typeof value === "number") {
            return newArray.push(value)
        }
    })
    // return the new array sorted
    return newArray.sort(function(a, b){return a-b})
}

console.log(numbersOnly(mixedDataArray))




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// create a function that accepts a string
const findVowel = (string) => {
    // make a list of vowels
    let vowels = 'aeiou'
    
    // change string to all lowercase
    string = string.toLowerCase()

    // loop through string
    for (let i = 0; i < string.length; i++) {
        // find if the letter at each index of the string matches or has an index in the list of vowels
        if (vowels.indexOf(string[i]) !== -1){
            // if so, return the index and break out of the loop (so that it doesn't continue to try to find vowels)
            return i
            break
        }
    }
}

console.log(findVowel(vowelTester1))
console.log(findVowel(vowelTester2))


// --------------------5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]


//create a function that take in an array
const catsOnly = (array) => {
    //use filter to filter through array
    return array.filter(value => {
        // find only where animal key is equal cat
        if (value.animal == "cat") {
            // return that value (or object) to the filtered array
            return value
        }
    })
}

console.log(catsOnly(toonimals))



// --------------------6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

//create a function that take in an array
const nonCatsOnly = (array) => {
    // create a new array to store names only
    let namesOnly = []
    //use filter to filter through array
    array.filter(value => {
        // find only where animal key is not equal to cat
        if (value.animal !== "cat") {
            // return the name only of that value (or object) to the new array
            return namesOnly.push(value.name)
        }
    })

    return namesOnly.join(" ")
}

console.log(nonCatsOnly(toonimals))