// skips the the first 2 arguments
const args = process.argv.slice(2);

// moves 1st letter to end of word. adds 'ay' to end of word
let pig = function(word) {
  let gip = "";
  gip = word.substring(1) + word[0] + "ay";
  return gip.concat(' ');
}

let pigLatin = "";

// iterates through the arguments passed in the command line
for (i = 0; i < args.length; i++) {
  pigLatin += pig(args[i]);
  
};

console.log(pigLatin);
