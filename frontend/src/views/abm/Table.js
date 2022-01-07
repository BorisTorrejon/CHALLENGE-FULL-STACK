import { useEffect, useContext, useState } from 'react';
import RowTable from './RowTable';
import Pagination from './pagination';
import TransactionContext from '../../context/transactions/TransactionContex';

export default function Table(){
    const {transactions,getTransactions} = useContext(TransactionContext);

    useEffect(() => {
        getTransactions();
    },[]);

    const [actualPage,setActualPage] = useState(1);
    const [rowsPage,setRowsPage] = useState(10);
    
    const rows = transactions.slice(
        (actualPage-1)*rowsPage,
        actualPage*rowsPage
    );

    const pages= (transactions)=>{
        return Math.ceil(transactions.length/rowsPage);
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
                <tbody className="tablebody">
                {rows.map(transaction =>
                    <RowTable
                        id      ={transaction.transactionID}
                        date    ={transaction.transactionDate}
                        type    ={transaction.transactionType}
                        concept ={transaction.transactionConcept}
                        amount  ={transaction.transactionAmount}
                    >
                    </RowTable>
                )}
                </tbody>
            </table>
            <Pagination
            actualPage={actualPage}
            pages={pages(transactions)}
            onChange={(page)=>{setActualPage(page)}}
            />
        </div>
    )
}