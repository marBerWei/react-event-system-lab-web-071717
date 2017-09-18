// Code EyesOnMe Component Here
import React from 'react';



export default class EyesOnMe extends React.Component {
 

  Good = () => {
 	console.log('Hey! Eyes on me!');
 	}
  EyesOnMe = () => {
    console.log('Good!', 'The console output is not the expected string.');
  }
 
  render() {
    return (
      <button onBlur= {this.Good} onFocus={this.EyesOnMe}></button>
    );
  }
}