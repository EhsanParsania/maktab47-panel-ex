import axios from 'axios'

const url = 'http://localhost:3001'


function getData(dataName) {
  const currentUrl = url + '/' + dataName
  return axios.get(currentUrl)
    .then((res) => res.data)
    .catch(error => console.log(error))
}



function uploadCustomerData(image, name, age, gender) {
  const currentUrl = url + '/' + 'customers'
  console.log(currentUrl)
  //init a body form data 
  let bodyFormData = new FormData()

  bodyFormData.append('image', image)
  bodyFormData.append('name', name)
  bodyFormData.append('age', age)
  bodyFormData.append('gender', gender)


  return axios({
    url: currentUrl,
    method: 'POST',
    data: bodyFormData,
    Headers: { "Content-Type": "multipart/form-data" }
  })
    .then(res => {

      //return true for closing modal
      return true
    })
    .catch(error => {
      console.log(error)
      //return false to not closing Modal
      return false
    })
}


export { getData, uploadCustomerData }