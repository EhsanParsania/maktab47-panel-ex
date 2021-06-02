import { Component } from 'react'
import style from './InputFile.module.css'

class InputFile extends Component {
  state = {

  }


  //xhr request to post image with form data ( multipart/form-data )
  uploadFile() {
    return new Promise(function (resolve, reject) {
      const image = document.getElementById('input').files[0]
      var data = new FormData();
      data.append("image", image);
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          if (this.status >= 200 && this.status < 400) {
            console.log(this.responseText);
            if (image) {
              resolve(true)
            }
          }
          else {
            reject('file not sent')
          }
        }
      });
      xhr.open("POST", "http://localhost:3001/upload");
      xhr.send(data);
    })

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

    // post file and get boolean result
    const isUpload = await this.uploadFile()

    // remove modal
    this.props.closeModal(isUpload)

  }



  render() {
    return (
      <form action='http://localhost:3001/upload' method='POST' encType='multipart/form-data' onSubmit={this.submitForm} className={style.input_file_container}>
        <label className={style.input_file_label}>
          <span className={style.file_name} >{this.state.fileName}</span>
          <input id='input' type="file" name='image' onChange={this.handleChange} className={style.input_file} accept='image/*' />
          <i className={style.upload_button}>Upload File</i>
        </label>
        <img src="" className={style.image_container} id="output" alt="pic..."></img>
        <button type='submit' className={style.submit_button}>Submit</button>
      </form>
    )
  }
}

export { InputFile }