import React from 'react';
import './Button.scss';

export default function Button(props) {
    return (
        <button
            className={props.className ? `button-skyneb ${props.className}` : "button-skyneb"}
            type="button"
            onClick={()=>{}}
        >
            {props.name}
        </button>
    )
}