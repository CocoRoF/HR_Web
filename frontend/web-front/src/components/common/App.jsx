"use client";

import React, { Component } from 'react';
import { Polygon } from './polygon_square.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.isDown = false;
    this.moveX = 0;
    this.offsetX = 0;
  }
  
  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize, false);
    this.resize();

    document.addEventListener("pointerdown", this.onDown, false);
    document.addEventListener("pointermove", this.onMove, false);
    document.addEventListener("pointerup", this.onUp, false);

    window.requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize, false);
    document.removeEventListener("pointerdown", this.onDown, false);
    document.removeEventListener("pointermove", this.onMove, false);
    document.removeEventListener("pointerup", this.onUp, false);
  }

  resize = () => {
    // this.stageWidth = window.innerWidth;
    // this.stageHeight = window.innerHeight;
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.polygon = new Polygon(
      this.stageWidth / 2,
      this.stageHeight + this.stageHeight / 4,
      this.stageHeight / 1.5,
      15
    );
  }

  animate = () => {
    window.requestAnimationFrame(this.animate);

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.moveX *= 0.92;

    this.polygon.animate(this.ctx, this.moveX);
  }

  onDown = (e) => {
    this.isDown = true;
    this.moveX = 0;
    this.offsetX = e.clientX;
  }

  onMove = (e) => {
    if (this.isDown) {
        this.moveX = e.clientX - this.offsetX;
        this.offsetX = e.clientX;
      }
  }

  onUp = (e) => {
    this.isDown = false;
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default App;
