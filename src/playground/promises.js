const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
        resolve('this is my other resolved data')
    }, 5000)
    
});

promise.then(data => {
    console.log(data);
});