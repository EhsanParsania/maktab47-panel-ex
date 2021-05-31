import { Component } from 'react'
import style from './InputFile.module.css'

class InputFile extends Component {
  state = {

  }
  handleChange = async (event) => {
    //setState file name
    const fileName = event.target.files.item(0).name
    await this.setState({ fileName: fileName })

    // add image displayer:
    let reader = new FileReader()
    reader.onload = function () {
      let output = document.getElementById('output')

      output.src = reader.result
      output.style.display = 'flex'
    }
    //convert to base64
    reader.readAsDataURL(event.target.files[0])
  }

  submitForm = async (e) => {
    e.preventDefault();
    // async ajax post
    // remove modal

  }
  render() {
    return (
      <form onSubmit={this.submitForm} className={style.input_file_container}>
        <label className={style.input_file_label}>
          <span className={style.file_name} >{this.state.fileName}</span>
          <input id='input' onChange={this.handleChange} className={style.input_file} type="file" />
          <i className={style.upload_button}>Upload File</i>
        </label>
        <img src="" className={style.image_container} id="output" alt="your picture..."></img>
        <button className={style.submit_button}>Submit</button>
      </form>
    )
  }
}

export { InputFile }