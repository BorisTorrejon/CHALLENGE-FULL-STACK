import { useState } from "react";
import PageWrapper from "../PageWrapper";
import Table from "./Table";
import Transaction from "./Transaction";

export default function Abm(){
    const [card,setCard]=useState("")
    const editPrueba = () =>{
        setCard("desde el ABM");
    };
    return(
        <div>
            <PageWrapper/>
            <div className="contaier center">
                <h3>ABM</h3>
            </div>
            <div className="container">
                <div className="row">
                    <Transaction 
                        transaction = {card}
                    />
                    <Table
                        edit = {editPrueba}
                    />
                </div>
            </div>
        </div>
    )
}