import React from 'react';
import CartIcon from '../CartIcon/CartIcon';
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
    return (
        <button className={styles.button}>
            <CartIcon style={styles.icon}/>
            <div>Your Cart</div>
            <div className={styles.badge}>0</div>
        </button>
    )
}

export default HeaderCartButton;