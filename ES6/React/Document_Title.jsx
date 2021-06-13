//------------------------------------- Class component//-------------------------------------
import React from 'react'

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

 // Similar to componentDidMount and componentDidUpdate:
  componentDidMount() {
    document.title = "Home | EdMan Official";
  }
  componentDidUpdate() {
    document.title = "Home | EdMan Official";
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }

  //------------------------------------- Hooks component //-------------------------------------

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Home | EdMan Official";
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Document_Title