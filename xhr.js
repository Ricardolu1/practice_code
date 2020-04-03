function ajax(url) {
  return new Promise((resolve, reject)=>{
    let xhr = new XMLHttpRequest()
    xhr.open("get", url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState===4) {
        if (xhr.status>=200 && xhr.status<300) {
          resolve(
             JSON.parse(xhr.response)
          )
        }else if (xhr.status===404) {
          reject(new Error("404 not found")) 
        }
      }
    }
    xhr.send(null)
  })
}

let url = "/data.json"

ajax(url).then(data=>console.log(data)).catch(e=>console.error(e))

//asdasd