var str = "Any string with multiple words";

var op1 = str.split(" ").reverse().join(" ");
var op2 = [];
str.split(" ").forEach(element => {
    op2.push(element.split("").reverse().join(""));
});
op2 = op2.join(" ");

console.log(str, "\t", op1, "\t", op2);