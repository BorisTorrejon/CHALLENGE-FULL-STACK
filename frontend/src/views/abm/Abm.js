import PageWrapper from "../PageWrapper";
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
                    <div className="col s7">

                    </div>
                </div>
            </div>
        </div>
    )
}