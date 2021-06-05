import { Component } from "react"

class Avatar extends Component {
    render() {
        const { src } = this.props
        return (
            <div style={{width:"40px", height:"40px"}}>
                <img style={{width:"40px", height:"40px",borderRadius:"50%"}} src={src} />
            </div>
        )
    }
}

export {Avatar}