import style from "./done.module.scss";
import Task from "../../task";
function Done() {
    return(
        <div className={style.column}>
            <h1 className={style.doneTitulo}>Done</h1>

            <Task/>
        </div>
    )
}

export default Done;