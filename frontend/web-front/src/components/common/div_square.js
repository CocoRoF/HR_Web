import { boardContent } from "@/constants/application_board";
import Image from "next/image";
import React, { useState } from "react";

export class DivSquare {
    constructor(width, height, numDivs, className = 'default__small__container') {
        this.state = {
            width: width,
            height: height,
            numDivs: numDivs,
            className: className,
            extend: false,
            index: 0,
        };
        this.angleIncrement = 360 / this.state.numDivs;
        this.moveAngle = 0;
        this.radius = 50;

        if (boardContent.board_number !== this.state.numDivs) {
            throw new Error("numContent와 this.state.numDivs의 값이 일치하지 않습니다.");
        };
    }

    isExtend = (i) => {
        this.state.extend = true;
        this.state.index = i
    }

    notExtend = (board) => {
        this.state.extend = false;
    }

    stateUpdater = () => {
        return this.state.extend
    }

    renderExtendBoard = () => {
        const extendedBoard = [];
        for (let i = 0; i < this.state.numDivs; i++) {
            extendedBoard.push(
                <div key={i} className={`default__extend__board s${i + 1}`}>
                    <div className="extend__default__board">
                        <div className={`extend__content p${i + 1}`}>
                            <div className="extend__title">{boardContent.content[i].title}</div>
                            <div className="extend__content">{boardContent.content[i].content}</div>
                            <div className="extend__img">
                                <Image src={boardContent.content[i].img} alt={boardContent.content[i].title}/>
                            </div>
                        </div>
                    </div>
                    <div className="extend__board__content">
                        <div className="extend__board__header">
                            <a className="board__closer" onClick={() => this.notExtend()}>X</a>
                        </div>
                        <div className="extend__board__main">
                            <div className="extend__board__title">
                                <a>{boardContent.content[i].exBoard_title[0]}</a>
                                <a>{boardContent.content[i].exBoard_title[1]}</a>
                            </div>
                            <div className="extend__board__text">
                                {boardContent.content[i].exBoard_Content}
                            </div>
                            <div className="extend__board__footer">
                                <a className="extend__board__period">{`period: ${boardContent.content[i].exBoard_Period}`}</a>
                                <a href={boardContent.content[i].link} className="move__content">move</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return extendedBoard;
    }

    renderDivs(angle, func) {
        const divs = [];
        for (let i = 0; i < this.state.numDivs; i++) {
            const startAngle = 270 + (this.angleIncrement * i);
            const posAngle = (this.angleIncrement * i);
            const zIndex = (50 + 50 * (Math.cos((posAngle + angle) * Math.PI / 180))).toFixed(0);
            const divScale = (0.80 + 0.25*(Math.cos((posAngle + angle) * Math.PI / 180)).toFixed(5));
            const angleInRadians = (startAngle * Math.PI) / 180;
            const x = (this.radius + this.radius * Math.cos(angleInRadians) - (this.state.width/2)).toFixed(3);
            const y = (this.radius + this.radius * Math.sin(angleInRadians) - (this.state.height/2)).toFixed(3);

            const divStyle = {
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                transform: `rotate(${startAngle}deg) scale(${divScale})`,
                zIndex: `${zIndex}`
            };

            divs.push(
                <div key={i} style={divStyle} className={`${this.state.className} s${i + 1}`}>
                    <div className="default__text__container">
                        {boardContent.content[i].text.map((text, idx) => (
                            <div className={`default__text__box s${idx + 1}`} key={idx}>{text}</div>
                        ))}
                    </div>
                    <div className={`default__content__container p${i + 1}`} onClick={() => func(i)}>
                        <div className="default__title">{boardContent.content[i].title}</div>
                        <div className="default__content">{boardContent.content[i].content}</div>
                        <div className="default__img">
                            <Image src={boardContent.content[i].img} alt={boardContent.content[i].title}/>
                        </div>
                        <div className="default__link">
                            <a onClick={() => this.isExtend(i)} style={{cursor: 'pointer'}}>View</a>
                            <a href={boardContent.content[i].link} target="_blank">Move</a>
                        </div>
                    </div>
                </div>
            );
        }
        return [this.state.extend, this.state.index, divs];
    }
}