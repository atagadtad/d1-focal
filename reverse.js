const args = process.argv.slice(2);


let reverse = function(args) {
  let revString = "";
  for (let j = args.length - 1; j >= 0; j--) {
  revString += args[j];
  }
  return revString;
}

for (i = 0; i < args.length; i++) {
  console.log(reverse(args[i]));
};
