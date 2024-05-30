import React from 'react';
import Styles from './Logo.module.css';
import untitled from './untitled.png';

export default function Logo() {
    return (
            <img src={untitled} alt="Logo" className={Styles.Logo}/>
    );
}
