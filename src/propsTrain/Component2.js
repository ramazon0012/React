import React from 'react';

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <h1>His name is {this.props.text}</h1>
        <p>His age is {this.props.number}</p>
      </div>
    )
  }
}

export default Component2;