import {useContext} from 'react';
import TransactionContext from '../../context/transactions/TransactionContex';
import PageWrapper from "../PageWrapper";
import Table from "./Table";

export default function Home() {
    const {balance} = useContext(TransactionContext);
    return (
        <>
            <PageWrapper
                title="Home"
            />
            <div className="container">
                <div className="row">
                    <div className="center col s6 offset-s3">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Balance Mensual</span>
                                <div className="col s4 offset-s4 light-blue darken-4">
                                    <span className="card-title white-text">${balance}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Table />
                </div>
            </div>
        </>
    )
}