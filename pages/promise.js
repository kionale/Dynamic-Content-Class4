let p = new Promise((resolve, reject) => {
    let a = 1 + 1 //promise itself
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
     
})

