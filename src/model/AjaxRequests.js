
const url = 'http://localhost:3001'

// get data request function
async function getData(dataName) {
  const currentUrl = url + "/" + dataName
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', currentUrl)
    xhr.send()
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          console.log('request resolved')
          resolve(xhr.responseText)
        }
        else {
          console.log(xhr.status)
          reject(xhr.status)
        }
      }
    }
  })
}

//it gets an object and a name for generating post url : 
async function postData(dataObject, dataName) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify(dataObject);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          resolve(console.log('data sent'))
        }
        else {
          reject(console.log('rejected  :' + xhr.status))
        }
        console.log(this.responseText);
      }
    };
    const url = "http://localhost:3001/" + dataName
    console.log(url)
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
  })
}




export { getData, postData }