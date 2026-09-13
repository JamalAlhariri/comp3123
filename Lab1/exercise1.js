// Exercise 1
// Capitalize the first letter of each word

function capitalizeWords(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

console.log(capitalizeWords("the quick brown fox"));