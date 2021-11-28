export default function RowTable(props){
    const formatDate = (date) =>{
        return date.slice(0,10)
    };
    
    return(
        <tr key="">
            <td>{formatDate(props.date)}</td>
            <td>{props.type.data}</td>
            <td>{props.concept}</td>
            <td>{"$"+props.amount}</td>
            <td><button onClick={() => props.edit(props.id)} className="btn-floating light-blue darken-4"><i className="material-icons">edit</i></button></td>
            <td><button onClick={() => props.delete(props.id)} className="btn-floating light-blue darken-4"><i className="material-icons">delete</i></button></td>
        </tr>
    )
}