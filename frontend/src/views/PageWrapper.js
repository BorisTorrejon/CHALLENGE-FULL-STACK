export default function PageWrapper(){
    return(
        <div>
            <nav className="nav-extended light-blue darken-4">
                <div className="nav-wrapper">
                    <a href="#" class="brand-logo center">Personal Budget</a>
                </div>
                <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab"><a className="active" href="./">Home</a></li>
                    <li className="tab"><a className="active" href="./abm">ABM</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}