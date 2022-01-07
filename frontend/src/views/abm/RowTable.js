import { useContext } from 'react';
import TransactionContext from '../../context/transactions/TransactionContex';
export default function RowTable(props) {
    const { deleteTransaction, changeTransaction, changeButton } = useContext(TransactionContext);
    const formatDate = (date) => {
        return date.slice(0, 10)
    };
    return (
        <tr key={props.id}>
            <td>{formatDate(props.date)}</td>
            <td>{props.type.data}</td>
            <td>{props.concept}</td>
            <td>{"$" + props.amount}</td>
            <td><button onClick={() => { changeTransaction(props); changeButton('edit') }} className="btn-floating waves-effect waves-light light-blue darken-4"><i className="material-icons">edit</i></button></td>
            <td><button onClick={() => deleteTransaction(props.id)} className="btn-floating waves-effect waves-light light-blue darken-4"><i className="material-icons">delete</i></button></td>
        </tr>
    )
}