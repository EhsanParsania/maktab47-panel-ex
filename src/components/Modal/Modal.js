import { Component } from "react"
import styles from "./Modal.module.css"

class Modal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { activeStyle, children } = this.props
        console.log(activeStyle)
        return (
            <div className={styles.modal} style={activeStyle}>
                {children}
            </div>
        )
    }

}

export {Modal}