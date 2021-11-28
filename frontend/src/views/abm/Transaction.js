import { useEffect, useState } from "react";

export default function Transaction(props){
    let card = {
        concept:"",
        amount:"",
        date:"",
        type:""
    }
    useEffect(() =>{
        if (props.transaction!=="")
        {
            setId("3");
            setConcept("hola");
            setAmount("100");
            setDate("2021-11-01");
            setType("1");
            setButtonCard("edit");  
        }
    });
    const [buttonCard,setButtonCard] = useState("add")
    const [transaction, setTransaction] = useState({});
    const [id,setId]= useState("");
    const [concept, setConcept]= useState("");
    const [amount, setAmount]= useState("");
    const [date, setDate]= useState("");
    const [type, setType]= useState("");

    const onChangeConcept = function (evento) {setConcept(evento.target.value)};
    const onChangeAmount = function (evento) {setAmount(evento.target.value)};
    const onChangeDate = function (evento) {setDate(evento.target.value);console.log(date)};
    const onChangeType = function (evento) {setType(evento.target.value);console.log(type)};
    const onChangeCard = function() {
        if((concept !== "")&(amount!=="")&(date!=="")){
            card.concept=concept;
            card.amount =amount;
            card.date   =date;
            card.type   =type;
            setTransaction(card);
            console.log(transaction);
        };
    };
    const submitTransaction = async (id)=>{
        let url ="http://localhost:4000/api/abm";
        if (id="") {
            if (transaction != {}) {
                let response = await fetch(url,{
                    method:'POST',
                    body:JSON.stringify(transaction),
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => console.log(data.status))
                .catch(err => console.log(err));
            }
        }else{
            url=url+"/"+id;
            let response = await fetch(url,{
                method:'PUT',
                body:JSON.stringify(transaction),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data.status))
            .catch(err => console.log(err));
        }
        setTransaction({});
        setConcept("");
        setAmount("");
        setDate("");
        setType("");
    }
    return(
        <div className="col s5">
            <div className="card">
                <div className="card-content">
                    <form onChange={onChangeCard}>
                        <div className="row">
                            <span class="card-title">Personal </span>
                            <div className="input-field col s12">
                                <input onChange={onChangeConcept} name="Concept" type="text" placeholder="Concept" value={concept}/>
                            </div>
                            <div className="tabs input-field col s6">
                                <input onChange={onChangeAmount} type="number" placeholder="Amount" value={amount}/>
                            </div>
                            <div className="tabs input-field col s6">
                                <input onChange={onChangeDate} type="date" placeholder="Date" value={date}/>
                            </div>
                            <div class="input-field col s12">
                                <select onChange={onChangeType} class="browser-default" value={type}>
                                    <option value="" disabled selected>Type</option>
                                    <option value="1">Ingreso</option>
                                    <option value="0">Egreso</option>
                                </select>
                            </div>
                            <div className="input-field col s12">
                                <a onClick={submitTransaction} class="btn-floating btn-large halfway-fab waves-effect light-blue darken-4"><i class="material-icons">{buttonCard}</i></a>
                            </div>
                        </div>        
                    </form>
                </div>
            </div>
        </div>
    )
}