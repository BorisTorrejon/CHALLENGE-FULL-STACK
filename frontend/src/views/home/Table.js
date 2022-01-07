import { useEffect, useContext} from 'react';
import TransactionContext from '../../context/transactions/TransactionContex';

export default function Table() {
    const {transactions,getTransactions} = useContext(TransactionContext);

    useEffect(() => {
        getTransactions();
    },[]);

    const rows = transactions.sort(function(a,b){
        if(a.transactionDate<b.transactionDate){
            return 1;
        }
        if(a.transactionDate>b.transactionDate){
            return -1;
        }
        return 0;
    }).slice(0,10);

    return (
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
                {rows.map(row =>
                    <tr>
                        <td>{row.transactionDate.slice(0,10)}</td>
                        <td>{row.transactionType.data[0]===0?"egreso" : "ingreso"}</td>
                        <td>{row.transactionConcept}</td>
                        <td>$ {row.transactionAmount}</td>
                    </tr>
                    )}
            </tbody>
        </table>
    )
}