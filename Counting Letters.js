//return first word with greatest number of repeated letters

function countLetters(str) {
  let tempArr = str.split(" ");
  tempArr = tempArr.map(item => {
    let tempItem = item.toLowerCase().split("");
    return tempItem.reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
      },
      { max: 1, word: item }
    );
  });

  return tempArr;
}

console.log(countLetters("Javascript is the greatest programming language"));
