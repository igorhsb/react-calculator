import React, {Component} from "react";
import './Calculator.css'
import Button from "../../components/button.jsx"
import Display from "../../components/display.jsx"

export default class Calculator extends Component{
    render() {
        return (
            <div className="calculator">
                <Display value={100}/>
                <Button id="0"/>
                <Button id="1"/>
                <Button id="2"/>
                <Button id="3" />
                <Button id="4"/>
                <Button id="5"/>
                <Button id="6"/>
                <Button id="7"/>
                <Button id="8"/>
                <Button id="9"/>
                <Button id="10"/>
                <Button id="11"/>
                <Button id="12"/>
                <Button id="13"/>
                <Button id="14"/>
                <Button id="15"/>
                <Button id="16"/>
                <Button id="17"/>
            </div>
        )
    }
} 