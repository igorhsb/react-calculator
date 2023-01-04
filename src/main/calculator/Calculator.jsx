import React, {Component} from "react";
import './Calculator.css'
import Button from "../../components/button.jsx"
import Display from "../../components/display.jsx"

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component{
    state = {...initialState}

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(op) {
        if(this.state.current === 0) {
            this.setState({operation:op,  current:1, clearDisplay:true})
        } else {
            const equals = op === '='
            const currentOperation = this.state.operation
            let result = 0;
            let values = [...this.state.values]
            // eslint-disable-next-line default-case
            switch(currentOperation) {
                case 'x':
                    result = values[0] * values[1]
                    break
                case '-':
                    result = values[0] - values[1]
                    break
                case '+':
                    result = values[0] + values[1]
                    break
                case '/':
                    result = values[0] / values[1]
                    break
                case '%':
                    result = values[0] % values[1]
                    break
                case '=':
                    result = values[0]
                    break
            }
            values = [result, 0]
            this.setState({values,  current:0, displayValue:result.toString()})
            console.log('eq', result)
            console.log('cur', currentOperation)
            console.log('values', values)
        }
    }

    addDigit(d) {
        if(d === "." && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + d
        this.setState({displayValue, clearDisplay: false})
        if(d !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values })
        }
        console.log(this.state.values)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button id="0" click={this.addDigit}/>
                <Button id="1" click={this.addDigit}/>
                <Button id="2" click={this.addDigit}/>
                <Button id="3" click={this.addDigit}/>
                <Button id="4" click={this.addDigit}/>
                <Button id="5" click={this.addDigit}/>
                <Button id="6" click={this.addDigit}/>
                <Button id="7" click={this.addDigit}/>
                <Button id="8" click={this.addDigit}/>
                <Button id="9" click={this.addDigit}/>
                <Button id="10" click={this.setOperation}/>
                <Button id="11" click={this.setOperation}/>
                <Button id="12" click={this.setOperation}/>
                <Button id="13" click={this.setOperation}/>
                <Button id="14" click={this.setOperation}/>
                <Button id="15" click={this.setOperation}/>
                <Button id="16" click={this.addDigit}/>
                <Button id="17" click={this.clearMemory}/>
            </div>
        )
    }
} 