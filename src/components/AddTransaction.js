import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }

    return (
        <div>
            <h3>آمدنی یا اخراجات ڈالیں</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                    تفصیل
                    </label>
                    <input  type="text" 
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="لین دین کی تفصیل" 
                            required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                    لین دین کی رقم
                    </label>
                    <input  type="number" 
                            id="transactionamount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder=" رقم"
                            required="required"
                    />
                </div>
                <button className="btn">جمع کریں</button>
            </form>
        </div>
    )
}