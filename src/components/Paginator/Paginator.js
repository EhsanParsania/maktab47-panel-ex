import {Component} from "react"
import style from "./Paginator.module.css"

class Paginator extends Component {
    render() {
        const {itemsNum, itemsNumPerPage, setItemsStart} = this.props
        const fullPagesNum = itemsNum/itemsNumPerPage
        const buttonNums = Math.floor(fullPagesNum) === fullPagesNum ? fullPagesNum : Math.floor(fullPagesNum) + 1
        console.log(buttonNums)
        return (
            <div className={style.paginatorContainer}>
                {[...Array(buttonNums)].map((btn, index) => <button className={style.paginatorButton} onClick={()=>setItemsStart(index)} >{index+1}</button>)}
            </div>
        )
    }
}

export {Paginator}