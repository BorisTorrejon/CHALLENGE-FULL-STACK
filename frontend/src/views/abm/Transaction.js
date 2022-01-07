import { useState, useContext, useEffect } from "react";
import TransactionContext from '../../context/transactions/TransactionContex';

export default function Transaction() {
    const { button, transaction, postTransaction, putTransaction, changeTransaction, changeButton } = useContext(TransactionContext);
    useEffect(() => {
        setCard(transaction);
    }, [transaction]);

    const [card, setCard] = useState(transaction);
    const post = () => {
        if ((card.concept !== "") & (card.amount !== "") & (card.date !== "") & (card.type !== "")) {
            if (button !== "edit") {
                postTransaction(card);
            }
            else {
                putTransaction(card);
                changeButton("add");
            }
        }
    };
    return (
        <div className="col s5">
            <div className="card">
                <div className="card-content">
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <button onClick={() => { changeTransaction({ concept: "" }); changeButton("add") }} className="btn-floating halfway-fab waves-effect red darken-2">
                                    <i id="cancel" className="material-icons">clear</i>
                                </button>
                            </div>
                            <div className="tabs input-field col s12">
                                <span className="card-title">Personal </span>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={e => setCard({ ...card, concept: e.target.value })} type="text" placeholder="Concept" value={card.concept} />
                            </div>
                            <div className="tabs input-field col s6">
                                <input onChange={e => setCard({ ...card, amount: e.target.value })} type="number" placeholder="Amount" value={card.amount} />
                            </div>
                            <div className="tabs input-field col s6">
                                <input onChange={e => setCard({ ...card, date: e.target.value })} type="date" placeholder="Date" value={card.date} />
                            </div>
                            <div className="input-field col s12">
                                <select onChange={e => setCard({ ...card, type: Number(e.target.value) })} className="browser-default" value={card.type} disabled={button === "edit"? true : false}>
                                    <option value="" disabled selected>Type</option>
                                    <option value="1">Ingreso</option>
                                    <option value="0">Egreso</option>
                                </select>
                            </div>
                            <div className="input-field col s12">
                                <button onClick={post} className="btn-floating btn-large halfway-fab waves-effect waves-light light-blue darken-4"><i className="material-icons">{button}</i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}