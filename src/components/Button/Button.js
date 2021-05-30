import { Component } from "react"

class Button extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler = (event) => {
        const { click } = this.props
        if(click) {
            click(event)
        }
    }

    render() {
        const { text, cssClass, cssStyle } = this.props
        return (
            <button onClick={this.handler} className={cssClass} style={cssStyle} >{text}</button>
        )
    }
}

export {Button}