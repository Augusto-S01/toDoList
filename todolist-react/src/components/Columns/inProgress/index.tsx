import style from "./inProgress.module.scss";
import Task from "../../task";
function inProgress() {
    return(
        <div className={style.column}>
            <h1 className={style.inProgressTitulo}>in Progress</h1>

            <Task/>
        </div>
    )
}

export default inProgress;