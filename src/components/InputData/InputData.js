import {Component} from 'react'
import style from './InputData.module.css'

class InputData extends Component{
    handleCloseButton = () => {
      document.getElementById("dataform").style.display = "none"; 
    }
  
  render(){
    return(
      <form className={style.form} id="dataform">
        <button className={style.close} onClick={this.handleCloseButton}>X</button>
        <label className={style.lable} for='one'>{this.props.title1}</label> <br/>
        <input className={style.input} type='text' name={this.props.title1} />

        <label className={style.lable} for='two'>{this.props.title2}</label><br/>
        <input className={style.input} type='text' name={this.props.title2} />

        <label className={style.lable} for='three'>{this.props.title3}</label><br/>
        <input className={style.input} type='text' name={this.props.title3} />

        <button type='submit' className={style.button}> Submit</button>
      </form>
    )
  }
}
