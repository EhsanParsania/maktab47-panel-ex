import {Component} from 'react'
import style from "./MenuItems.module.css"
import {getData} from "../../model/AjaxRequests"

class MenuItems extends Component {

    handleClick = async (dataName)=>{
        const data = await getData(dataName)
        const fetchedData = JSON.parse(data)
        const length = fetchedData.length
        this.props.dataSetter(fetchedData, dataName)
    }

    render() {
        return (
            <div className={style.sideNav} id="menuitems">
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                    <img className={style.sideImg} src="https://aux.iconspalace.com/uploads/dashboard-icon-256-1241939503.png"/></span>
                    <a className={style.sideLink} href="#dashboard" onClick={()=>this.handleClick('orders')}>Dashboard</a>
                </div>
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                    <img className={style.sideImg} src="https://img.icons8.com/pastel-glyph/2x/purchase-order.png" /></span>
                    <a className={style.sideLink} href="#orders" onClick={()=>this.handleClick('orders')}>Orders</a>
                </div>
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                    <img className={style.sideImg} src="https://cdn.iconscout.com/icon/free/png-256/customers-11-866159.png" /></span>
                    <a className={style.sideLink} href="#products" onClick={()=>this.handleClick('products')}>Products</a>
                </div>
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                    <img className={style.sideImg} src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png" /></span>
                    <a className={style.sideLink} href="#customers" onClick={()=>this.handleClick('customers')}>Customers</a>
                </div>
            </div>
        )
    }
}

export { MenuItems }

