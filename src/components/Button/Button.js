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
        const { text } = this.props
        return (
            <button onClick={this.handler} >{text}</button>
        )
    }
}

export {Button}