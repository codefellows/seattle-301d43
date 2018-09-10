'use strict';

const $result = $('#result');

// Michelle likes this one
$.ajax({
  url: './nopenopenope',
  method: 'GET',
  success: (data) => {
    console.log('response received');
    data[0].topping.forEach(topping => {
      $result.append(`<li>${topping.type}</li>`);
    });
  },
  error: (xhr, status) => console.log(status)
});

// $.get('./data.json', (data) => console.log(data));
// Michelle doesn't like that one


// // Michelle is indifferent about this one
// $.getJSON('./data.json', (data) => console.log(data));


console.log('request sent');


























// $.getJSON('./data.json')
// .then(
//   function(data) {
//     console.log(data);
//     data.forEach(function(ele) {
//       ele.topping.forEach(function(topping) {
//         $('#result').append(`<h3>${topping.type}</h3>`)
//       })
//     })
//   },
//   function(err){
//     console.error(err);
//   }
// )
