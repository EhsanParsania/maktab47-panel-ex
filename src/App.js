import { Component } from "react"
import "./App.css"
import { Datagrid, MenuItems } from "./components/index"
import { getData } from "./model/AjaxRequests"
import { InputData } from './components/index'
import {Paginator} from './components/index'

class App extends Component {

    componentDidMount() {
        getData('orders')
            .then(data => {
                const fetchedData = JSON.parse(data)
                const dataLength = fetchedData.length
                this.setState({ data: fetchedData, title: 'orders', dataLength:dataLength })
            })
            .catch(err => console.log(err))
    }

    state = {
        data: [{}],
        customers:['name','age','gender'],
        orders:['user','price','quantity'],
        products:['name','price','color'],
        currentTitle:'customers',
        dataLength:0
    }

    setData =async (data, title) => {
        await this.setState({ data: data, title: title })
        await this.setState({ currentTitle:title })
        console.log(this.state)
    }
    url='http://localhost:3002/'

    render() {
        return (
            <div id="container">
                <MenuItems dataSetter={this.setData} />
                <Datagrid data={this.state.data} title={this.state.title}><Paginator length={this.state.dataLength}/></Datagrid>
                <div>
                    <InputData url={this.url+this.state.currentTitle} title1={this.state.currentTitle[0]} title2={this.state.currentTitle[1]} title3={this.state.currentTitle[2]} />
                </div>
            </div>
        )
    }
}

export { App }