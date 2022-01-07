import PageWrapper from "../PageWrapper";
import Table from "./Table";
import Transaction from "./Transaction";
import TransactionState from "../../context/transactions/TransactionState";

export default function Abm() {
    return (
        <>
            <PageWrapper
                title="ABM"
            />
            <div className="container">
                <div className="row">
                    <Transaction
                    />
                    <Table
                    />
                </div>
            </div>
        </>
    )
}