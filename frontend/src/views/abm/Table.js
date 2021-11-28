import { useEffect, useState } from 'react';
import RowTable from './RowTable';

export default function Table(props){
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        findTransactions();
      },[]);
    const findTransactions = async () => {
        let url = "http://localhost:4000/api/abm";
        let respuesta = await fetch(url).catch(err=>console.log(err));
        let json = await respuesta.json();
        setTransactions(json);
    };
    const deleteTransaction = async (id) => {
        let url =`http://localhost:4000/api/abm/${id}`;
        let response = await fetch(url,{
            method:'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data.status))
        .catch(err => console.log(err));
    }
    const editTransaction = async (id) => {
        let transaction = transactions.filter(t => t.transactionID==id);
        console.log(transaction[0])
        props.edit();
    }
    return(
        <div className="col s7">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Concept</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map(transaction =>
                    <RowTable
                        id      ={transaction.transactionID}
                        date    ={transaction.transactionDate}
                        type    ={transaction.transactionType}
                        concept ={transaction.transactionConcept}
                        amount  ={transaction.transactionAmount}
                        delete  ={deleteTransaction}
                        edit    ={editTransaction}
                    >
                    </RowTable>
                )}
                </tbody>
            </table>
        </div>
    )
}