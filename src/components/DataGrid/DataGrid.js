import { Component } from "react"
import { Button } from "../index"
import { Modal } from "../index"
import style from "./DataGrid.module.css"
import { InputFile } from '../index'
import {Avatar} from "../index"

class Datagrid extends Component {

    state = {
        showModel: false,
    }

    activeModalStyle = {
        opacity: 1,
        top: '100px',
        width: '550px',
        height: '550px'
    }

    generalModalStyle = {
        borderRadius: '12px',
        padding: '0 20px'
    }

    constructor(props) {
        super(props)
    }

    modalDisplayHandler = () => {
        this.setState({ showModel: !this.state.showModel })
    }

    render() {
        const { data, title } = this.props
        const fields = Object.keys(data[0]).filter(field => field !== "id")
        console.log(fields)
        return (
            <div id="datagrid">
                <Modal activeStyle={this.state.showModel ? this.activeModalStyle : {}} generalStyle={this.generalModalStyle}>

                    <Button click={this.modalDisplayHandler} text="✖" cssClass={style.closeButton} />
                    <InputFile closeModal={(flag) => { if (flag) this.modalDisplayHandler() }} />
                </Modal>
                <div className={style.datagridContainer}>
                    <div className={style.datagridHeader}>
                        <h2>{title}</h2>
                        <div>
                            <Button text="Share" cssClass={style.shareButton} />
                            <Button text="Export" cssClass={style.exportButton} />
                            <Button text="This Week" cssClass={style.weekButton} cssStyle={{ marginLeft: "20px" }} />
                            <Button text="Add" cssClass={style.addButton} click={this.modalDisplayHandler} />
                        </div>
                    </div>
                    <table className={style.datagridTable}>
                        <thead>
                            <tr style={{ backgroundColor: "#eee" }}>
                                <th>#</th>
                                {fields.map((field, fieldIndex) => <th key={fieldIndex}>{field}</th>)}
                                {/* <th>avatar</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, dataIndex) => {
                                return (
                                    <tr key={dataIndex} style={{ backgroundColor: dataIndex % 2 === 0 ? "#fff" : "#eee" }} >
                                        <td>{item['id']}</td>
                                        {fields.map((field, fieldIndex) => { 
                                            return (
                                                field === "image" ?  <td key={fieldIndex}><Avatar src={'http://localhost:3001'+item[field]}/></td> : <td key={fieldIndex}>{item[field]}</td>
                                            )
                                        })}
                                        {/* <td>
                                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg"/>
                                        </td> */}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export { Datagrid }