import {Component} from "react"
import style from "./Paginator.module.css"

class Paginator extends Component {
    render() {
        return (
            <div className={style.test}>{this.props.length}</div>
        )
    }
}

export {Paginator}