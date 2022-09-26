import React, { useState } from 'react'
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './MealItem.module.css'

const MealItem = (props) => {
    const [amount, setAmount] = useState('1');

    const addItemToOrderArr = () => {
        props.addToOrderArr({
            name: props.name,
            price: props.price,
            amount: amount,
        })
    }

    return (
        <div className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price}</div>
            </div>
            <div>
                <Input value={amount} setAmount={setAmount}/>
                <Button content='+ Add' onClick={addItemToOrderArr}/>
            </div>
        </div>
    )
}

export default MealItem;