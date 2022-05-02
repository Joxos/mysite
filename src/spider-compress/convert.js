var fs = require("fs");
var ttf2woff2 = require("ttf2woff2");
var input_file_name = "../assets/fonts/.font-spider/FZKTJW.ttf";
var output_file_name = "../assets/fonts/.font-spider/FZKTJW.woff2";
var input = fs.readFileSync(input_file_name);
console.info("Succeeded reading ".concat(input_file_name, "."));
fs.writeFileSync(output_file_name, ttf2woff2(input));
console.info(
  "Succeeded convert "
    .concat(input_file_name, " to ")
    .concat(output_file_name, ".")
);
