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
      <h1 className="text-center">About</h1>
      <h6 className="text-center">A weather application built using React.</h6>
      <h6 className="text-center">Some of the tools used:</h6>
      <ul className="vertical medium-horizontal menu">
        <li><a href="https://github.com/facebook/react">React</a></li>
        <li><a href="https://github.com">Github</a></li>
        <li><a href="https://heroku.com">Heroku</a></li>
        <li><a href="https://openweathermap.org">Open Weather Map</a></li>
      </ul>
    </div>
  )
};

module.exports = About;
