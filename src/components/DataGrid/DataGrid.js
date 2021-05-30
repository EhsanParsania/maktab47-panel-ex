import { Component } from "react"
import style from "./DataGrid.module.css"

class Datagrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data, title} = this.props
        const fields = Object.keys(data[0]).filter(field => field!=="id")
        return (
            <div id="datagrid">
                <div className={style.datagridContainer}>
                    <div className={style.datagridHeader}>
                        <h2>{title}</h2>
                        <div>
                            <button className={style.shareButton}>Share</button>
                            <button className={style.exportButton}>Export</button>
                            <button className={style.weekButton} style={{marginLeft:"20px"}}>This Week</button>
                        </div>
                    </div>
                    <table className={style.datagridTable}>
                        <thead>
                            <tr style={{backgroundColor:"#eee"}}>
                                <th>#</th>
                                {fields.map((field, fieldIndex) => <th key={fieldIndex}>{field}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map( (item, dataIndex) => {
                                return (
                                    <tr key ={dataIndex} style={{backgroundColor: dataIndex%2===0 ? "#fff" : "#eee"}} >
                                        <td>{item['id']}</td>
                                        {fields.map( (field, fieldIndex)=><td key={fieldIndex}>{item[field]}</td>)}
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

export {Datagrid}