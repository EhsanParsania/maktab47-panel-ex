import { Component } from "react"
import "./App.css"
import { Datagrid, MenuItems } from "./components/index"
import { getData } from "./model/AjaxRequests"
import {Paginator} from './components/index'

class App extends Component {

    componentDidMount() {
        getData('orders')
            .then(data => {
                const fetchedData = data
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
        dataLength:0,
        itemsPerPage:4,
        itemsStart:0,
        currentPage:1
    }

    setData =async (data, title) => {
        await this.setState({ data: data, title: title })
        await this.setState({ currentTitle:title })
    }

    setItemsStart = async (itemsStart, currentPage) => {
        await this.setState({ itemsStart, currentPage })
    }


    render() {
        const {itemsStart, itemsPerPage, currentPage} = this.state
        const pageData = [...this.state.data].splice( itemsStart * itemsPerPage ,itemsPerPage )
        return (
            <div id="container">
                <MenuItems dataSetter={this.setData} setItemsStart={this.setItemsStart} />
                <Datagrid data={pageData} title={this.state.title}>
                    <Paginator length={this.state.dataLength} itemsNum={this.state.data.length} itemsNumPerPage={this.state.itemsPerPage} setItemsStart={this.setItemsStart} />
                </Datagrid>
            </div>
        )
    }
}

export { App }