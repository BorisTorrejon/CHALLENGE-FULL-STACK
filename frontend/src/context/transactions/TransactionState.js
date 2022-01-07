import React, { useReducer } from 'react';
import TransactionReducer from './TransactionReducer';
import TransactionContext from './TransactionContex';
import config from '../../config/config.json';

const TransactionState = (props) => {
    const initialState = {
        transactions: [],
        transaction: {
            id: "",
            concept: "",
            amount: "",
            date: "",
            type: ""
        },
        button: "add",
        balance:"0"
    };

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    const getTransactions = async () => {
        const response = await fetch(config.url);
        const json = await response.json();
        if (!json.status) {
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: json,
            });
        } else {
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: initialState.transactions,
            });
        }
        calcBalance(json);
    }
    const postTransaction = async (body) => {
        const response = await fetch(config.url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        getTransactions();
        dispatch({
            type: "PUT_TRANSACTIONS",
            payload: initialState.transaction,
        });
        const json = await response.json();
        console.log(body);
    }
    const putTransaction = async (body) => {
        const response = await fetch(config.url + `/${body.id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        getTransactions();
        dispatch({
            type: "PUT_TRANSACTIONS",
            payload: initialState.transaction,
        });
        const json = await response.json();

    };
    const deleteTransaction = async (id) => {
        const response = await fetch(config.url + `/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        //Transaction table update
        getTransactions();
        const json = await response.json();
        console.log(json);
    }

    const changeTransaction = (card) => {
        if (card.concept !== "") {
            card = { ...card, date: card.date.slice(0, 10) };
            card = { ...card, type: card.type.data[0] };
            console.log("post ", card);
            dispatch({
                type: "PUT_TRANSACTIONS",
                payload: card,
            });
        }
        else {
            console.log("change transaction", card);
            dispatch({
                type: "PUT_TRANSACTIONS",
                payload: initialState.transaction,
            });
        }
        console.log("change ", initialState.transaction);
    }
    const changeButton = (button) => {
        dispatch({
            type: "ChangeButton",
            payload: button,
        });
    }
    const calcBalance = (rows) =>{
        let balance = 0
        rows.forEach(row => {
            if (row.transactionType.data[0]==0)
                balance += row.transactionAmount*-1;
            else
                balance += row.transactionAmount;
        });
        dispatch({
            type: "PUT_BALANCE",
            payload: balance,
        });
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            transaction: state.transaction,
            button: state.button,
            balance: state.balance,
            getTransactions,
            postTransaction,
            putTransaction,
            deleteTransaction,
            changeTransaction,
            changeButton
        }}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionState;