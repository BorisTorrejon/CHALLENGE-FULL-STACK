export default function Pagination(props) {
    const getPage = ()=>{
        const result = [];
        for (var i=0; i<props.pages;i++){
                let page=i+1;
                result.push(
                    <li className={page===props.actualPage?"light-blue darken-4 active" : "waves-effect"}>
                        <a onClick={() => props.onChange(page)}>{page}</a>
                    </li>
                );
                console.log('result',page,result);
        }
        return result;
    };
    return (
        <ul className="pagination center">
            <li className={props.actualPage===1?"disabled" : "waves-effect"}>
                <a className={props.actualPage===1?"" : "blue-text text-darken-4"} onClick={() => props.onChange(1)}>
                    <i className="material-icons">chevron_left</i>
                </a>
            </li>
            {getPage()}
            <li className={props.actualPage===props.pages?"disabled" : "waves-effect"}>
                <a className={props.actualPage===props.pages?"" : "blue-text text-darken-4"} onClick={() => props.onChange(props.pages)}>
                    <i className="material-icons">chevron_right</i>
                </a>
            </li>
        </ul>
    );
}