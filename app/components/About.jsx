var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });
// es6 version
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>About page is up!</p>
    </div>
  )
};

module.exports = About;
