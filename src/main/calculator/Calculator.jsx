import React, {Component} from "react";
import './Calculator.css'

export default class Calculator extends Component{
    render() {
        return (
            <div className="calculator">
                <div className="title">Calculator</div>
                <div className="result">Result</div>
                <div className="zero">0</div>
                <div className="one">1</div>
                <div className="two">2</div>
                <div className="three">3</div>
                <div className="four">4</div>
                <div className="five">5</div>
                <div className="six">6</div>
                <div className="seven">7</div>
                <div className="eight">8</div>
                <div className="nine">9</div>
                <div className="plus">+</div>
                <div className="minus">-</div>
                <div className="mult">*</div>
                <div className="div">%</div>
                <div className="point">,</div>
                <div className="equal">=</div>
            </div>
        )
    }
} 