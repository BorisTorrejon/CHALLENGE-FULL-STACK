import PageWrapper from "../PageWrapper";
import Table from "./Table";
import Transaction from "./Transaction";

export default function Abm(){
    return(
        <div>
            <PageWrapper/>
            <div className="contaier center">
                <h3>ABM</h3>
            </div>
            <div className="container">
                <div className="row">
                    <Transaction />
                    <Table/>
                </div>
            </div>
        </div>
    )
}