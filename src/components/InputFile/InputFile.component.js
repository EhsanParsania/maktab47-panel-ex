import axios from 'axios'
import { Component } from 'react'
import style from './InputFile.module.css'
import { uploadCustomerData } from '../../model/AjaxRequests'


class InputFile extends Component {
  state = {

  }



  uploadFile() {
    // return new Promise(function (resolve, reject) {
    const image = document.getElementById('input').files[0]
    const name = document.getElementById('input-name').value
    const age = document.getElementById('input-age').value
    const gender = document.getElementById('input-gender').value

    // it returns true or false for closing Modal (axios request)
    return uploadCustomerData(image, name, age, gender)
  }



  handleChange = async (event) => {
    //setState file name
    const fileName = event.target.files.item(0).name
    await this.setState({ fileName: fileName })

    // show image box:
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

    try {
      const isUpload = await this.uploadFile()

      // remove modal
      this.props.closeModal(isUpload)
    }
    catch (error) {
      console.log(error)

    }
  }



  render() {
    return (
      <form onSubmit={this.submitForm} className={style.input_file_container}>
        <label className={style.input_file_label}>
          <span className={style.file_name} >{this.state.fileName}</span>
          <input id='input' type="file" onChange={this.handleChange} className={style.input_file} accept='image/*' />
          <i className={style.upload_button}>Upload File</i>
        </label>
        <img src="" className={style.image_container} id="output" alt="pic..."></img>

        <label className={style.input_labels} for='input-name'>Name</label>
        <input id='input-name' className={style.inputs} type='text' />
        <label className={style.input_labels} for='input-age'>Age</label>
        <input id='input-age' className={style.inputs} type='text' />
        <label className={style.input_labels} for='input-gender'>Gender</label>
        <input id='input-gender' className={style.inputs} type='text' />
        <button type='submit' className={style.submit_button}>Submit</button>
      </form>
    )
  }
}

export { InputFile }