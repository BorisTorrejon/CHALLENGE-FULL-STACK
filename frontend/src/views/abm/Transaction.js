export default function Transaction(){
    return(
        <div className="col s5">
            <div className="card">
                <div className="card-content">
                    <form>
                        <div className="row">
                            <span class="card-title">Personal </span>
                            <div className="input-field col s12">
                                <input type="text" placeholder="Concept"/>
                            </div>
                            <div className="tabs input-field col s6">
                                <input type="text" placeholder="Monto"/>
                            </div>
                            <div className="tabs input-field col s6">
                                <input type="date" placeholder="Fecha"/>
                            </div>
                            <div className="tabs input-field col s6">
                                <label>
                                    <input className="with-gap" name="group1" type="radio" checked />
                                    <span>Ingreso</span>
                                </label>
                            </div>
                            <div className="tabs input-field col s6">
                                <label>
                                    <input className="with-gap" name="group1" type="radio" checked />
                                    <span>Egreso</span>
                                </label>
                            </div>
                            <div className="input-field col s12">
                                <a class="btn-floating btn-large halfway-fab waves-effect light-blue darken-4"><i class="material-icons">add</i></a>
                            </div>
                        </div>        
                    </form>
                </div>
            </div>
        </div>
    )
}