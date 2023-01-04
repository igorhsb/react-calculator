import React from 'react';
import './button.css'

let mapID = {
    0 : {id : 'zero', label: '0'},
    1 : {id : 'one', label: '1'},
    2 : {id : 'two', label: '2'},
    3 : {id : 'three', label: '3'},
    4 : {id : 'four', label: '4'},
    5 : {id : 'five', label: '5'},
    6 : {id : 'six', label: '6'},
    7 : {id : 'seven', label: '7'},
    8 : {id : 'eight', label: '8'},
    9 : {id : 'nine', label: '9'},
    10 : {id : 'plus', label: '+'},
    11 : {id : 'minus', label: '-'},
    12 : {id : 'mult', label: 'x'},
    13 : {id : 'div', label: '/'},
    14 : {id : 'mod', label: '%'},
    15 : {id : 'equal', label: '='},
    16 : {id : 'point', label: '.'},
    17 : {id : 'ac', label: 'Clear'},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
        <button 
            className='button' 
            id={mapID[props.id].id} 
            onClick={e => props.click && props.click(mapID[props.id].label)}
            >{mapID[props.id].label}</button>
   
    