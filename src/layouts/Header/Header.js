import {Component} from 'react'
import style from "./Header.module.css"

class Header extends Component {

    render() {
        return (
            <div>
                <header className={style.headerContainer}>

                    <h1 className={style.companyName}>Company Name</h1>
                    <ul className={style.navigationContainer}>
                        <li className={style.li}>
                            <form className={style.form}>
                                <input className={style.input}  placeholder="Search"/>
                            </form>
                        </li>
                        <li className={style.li}>
                            <button className={style.button}>Sign out</button>
                        </li>
                    </ul>
                </header>
                {this.props.children}
            </div>
        )
    }
}

export { Header }