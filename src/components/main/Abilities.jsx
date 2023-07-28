import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Soft from './abilities/Soft';
import Tecs from './abilities/Tecs';

export default function Abilities() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div id='habilidades'>
            <h1 className='titleAbilities title' >HABILIDADES</h1>
            <ul className="nav nav-tabs habilidades">
                <li className="nav-item">
                    <button className={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)} aria-current="page" >Habilidades Técnicas</button>
                </li>
                <li className="nav-item">
                    <button className={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>Habilidades Blandas</button>
                </li>
            </ul>
            <div>
                {toggleState === 2 ? <Soft /> : <Tecs />}
            </div>
        </div>
    )
}
