import React, { Component } from 'react';
import { DivSquare } from './div_square';
import { boardContent } from "@/constants/application_board";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 60,
            height: 20,
            numDivs: 15,
            angle: 0,
            extendState: false,
            divSquare: new DivSquare(60, 20, 15), // width, height, numDivs
        }
        this.isDown = false;
        this.notMoving = true;
        this.angleDelta = 0,
        this.offsetX = 0;
        this.offsetY = 0;
        this.containerRef = React.createRef();

        if (boardContent.board_number !== this.state.numDivs) {
            throw new Error("numContent와 this.state.numDivs의 값이 일치하지 않습니다.");
        };
    }

    componentDidMount() {
        const extendedBoard = (this.state.divSquare && this.state.divSquare.renderExtendBoard())
        this.setState({ extendedBoard })

        document.addEventListener("pointerdown", this.onDown, false);
        document.addEventListener('pointermove', this.onMove, false);
        document.addEventListener("pointerup", this.onUp, false);
        window.requestAnimationFrame(this.animation.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("pointerdown", this.onDown, false);
        document.removeEventListener('pointermove', this.onMove, false);
        document.removeEventListener("pointerup", this.onUp, false);
    }

    onDown = (event) => {
        if (this.state.extendState) {
            return;
        }

        this.isDown = true;
        this.notMoving = true;
        this.angleDelta = 0;
        this.offsetX = event.clientX;
        this.offsetY = event.clientY;
    }

    onMove = (event) => {
        if (this.state.extendState) {
            return;
        }

        if (this.isDown) {
            this.notMoving = false;
            const { left, top, width, height } = this.containerRef.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            this.angleDelta = ((Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI)).toFixed(4) - (Math.atan2(this.offsetY - centerY, this.offsetX - centerX) * (180 / Math.PI)).toFixed(4)) * 1.5;
            const angle = (this.state.angle += this.angleDelta);
            this.setState({ angle })

            this.offsetX = event.clientX;
            this.offsetY = event.clientY;
        }
    }

    onUp = (event) => {
        if (this.state.extendState) {
            return;
        }
        this.isDown = false;
    }

    animation = () => {
        window.requestAnimationFrame(this.animation);
        if (this.state.extendState) {
            const extendState = this.state.divSquare.stateUpdater()
            this.setState({ extendState })
        }

        else {
            const setAngle = (n) => {
                if (this.notMoving) {
                    let x = (n*-24)
                    if (x < -190) {x += 360;}
                    this.setState({ angle: x });
                }
            };
            const [extendState, extendIndex, renderedDivs] = (this.state.divSquare && this.state.divSquare.renderDivs(this.state.angle, setAngle))
            this.setState({ extendState, extendIndex, renderedDivs })
        }
    }

    render() {
        const { angle, extendState, extendIndex, extendedBoard, renderedDivs } = this.state;
        const containerStyle = {
            transform : `rotate(${angle}deg)`,
        };

        return (
            <board id="cardboard" role="cardboard">
                <div className='default__board__inner'>
                    <div ref={this.containerRef} style={containerStyle} className='default__large__container'>
                        {renderedDivs}
                    </div>
                </div>
                {extendState && extendedBoard[extendIndex]}
            </board>
        );
    }
}

export default Board;