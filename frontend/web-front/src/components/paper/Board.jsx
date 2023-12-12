"use client";
import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.state = {
      angle: 0
    };
    
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = this.divRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    this.setState({ angle });
  }

  render() {
    const { angle } = this.state;
    const style = {
      'transform': `rotate(${angle}deg)`,
      'width': '500px',
      'height': '500px',
      'position': 'absolute',
      'left': '50%',
      'top': '50%',
      'marginLeft': '-100px',
      'marginTop':'-100px',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    };

    return <div ref={this.divRef} style={style}>center</div>;
  }
}

export default Board;