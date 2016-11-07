// function getTempCallBack (location, callback)
// {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Columbus', function (err, temp){
//   if (err) {
//     console.log('error', err);
//     else {
//       console.log('success', temp);
//     }
//   }
// })
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000)
//   });
// }
//
// getTempPromise('Columbus').then(function (temp) {
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });

function addPromise (a,b) {
  return new Promise(function (resolve, reject){
    setTimeout(function () {
      if (typeof a === 'number' && typeofb === 'number')
      {
          resolve(a + b);
      }
      else {
        reject('NOT A NUMBER!')
      }
    }, 1000)
  });
}

addPRomise(2,4).then(function (sum){
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
