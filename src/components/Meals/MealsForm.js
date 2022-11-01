import React, {useContext} from 'react';
import Input from '../UI/Input';
import classes from './MealsForm.module.css'
import CartContext from '../../Store/Cart-context';

const MealsForm = (props) => {
    const Cartctx = useContext(CartContext)
    const addFormHandler = (event) => {
         event.preventDefault();
         const quantity = document.getElementById('amount_' +props.id).value;
         Cartctx.addItem({ ...props.item, quantity: Number(quantity)})
    }
    return (
        <form className={classes.form}>
            <Input
    label='Amount'
    input={{
        id: 'amount_' +props.id, 
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }
    }
/>
            <button onClick={addFormHandler}>+ Add</button>
        </form>
    )
}

export default MealsForm;