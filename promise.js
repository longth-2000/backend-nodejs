const xinsoDT = () => {
    let check = true
    let sdt
    console.log("Cho tao xin so dien thoai thang nam")
    console.log("Thang ban dang tim so dien thoai thang nam")
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (check) resolve(
                /*   new Promise((resolve, rejected) => {
                      setTimeout(() => {
                          resolve("hello")
                      }, 2000)
                  } 
              
                  )*/
                "hello"
            )
            else rejected("failure")
        }, 4000)

    })
}
xinsoDT().
    then(data => {
        console.log("[1] " + data)
        return data+" hello"
    }).
    then(data => {
       setTimeout(() => {
           console.log(data)
       },3000)
      return data + "hello"
    })
    .catch(error => console.log(error))