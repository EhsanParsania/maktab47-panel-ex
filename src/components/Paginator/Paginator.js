import {Component} from "react"
import style from "./Paginator.module.css"

class Paginator extends Component {
    render() {
        const {itemsNum, itemsNumPerPage} = this.props
        const buttonNums = Math.floor(itemsNum/itemsNumPerPage) + 1
        console.log(+itemsNum, +itemsNumPerPage, buttonNums)
        return (
            <div className={style.paginatorContainer}>
                {[...Array(buttonNums)].map((btn, index) => <button className={style.paginatorButton}>{index+1}</button>)}
            </div>
        )
    }
}

export {Paginator}