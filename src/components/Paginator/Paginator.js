import {Component} from "react"
import style from "./Paginator.module.css"

class Paginator extends Component {

    buttonHandler = (btnIndex) => {
        this.setState({activeBtn:btnIndex+1})
        this.props.setItemsStart(btnIndex, btnIndex+1)
    }

    state = {
        activeBtn:1
    }

    render() {
        console.log(this.state.activeBtn)
        const {itemsNum, itemsNumPerPage, setItemsStart} = this.props
        const fullPagesNum = itemsNum/itemsNumPerPage
        const buttonNums = Math.floor(fullPagesNum) === fullPagesNum ? fullPagesNum : Math.floor(fullPagesNum) + 1
        return (
            <div className={style.paginatorContainer}>
                {[...Array(buttonNums)].map((btn, index) => 
                    <button 
                        key={index} 
                        className={style.paginatorButton} 
                        onClick={()=>this.buttonHandler(index)}
                        style={{backgroundColor:this.state.activeBtn===index+1 ? '#777' : "#ddd"}} >
                    {index+1}</button>)}
            </div>
        )
    }
}

export {Paginator}