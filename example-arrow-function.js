// var names = ['tim', 'jim', 'mark', 'mike']
//
// names.forEach(function (name) {
//   console.log('foreach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) name + '!';
// console.log(returnMe('Timothy'));
//
// var person = {
//   name: 'Timothy'
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' sats hi to ' + name);
//     });
//   }
// }
//
// person.greet();

functin add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4,7));

var addExpression = (a, b) => a + b;
console.log(addExpression(5,9));

console.log(add(1,3));
console.log(add(9,0));
