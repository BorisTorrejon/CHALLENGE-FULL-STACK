import { __RouterContext } from "react-router";
import path from 'path';

export default function PageWrapper(props) {
    const path = window.location.pathname;
    return (
        <>
            <nav className="nav-extended light-blue darken-4">
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s2">
                            <a href="./" class="brand-logo">Personal Budget</a>
                        </div>
                        <div className="col s8">
                            <a className="center brand-logo">{props.title}</a>
                        </div>
                    </div>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a className={path=="/"?"active" : ""} href="./">Home</a></li>
                        <li className="tab"><a className={path=="/abm"?"active" : ""} href="./abm">ABM</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}