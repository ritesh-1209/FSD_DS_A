function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("hii");
            resolve();
        },4000)
    })
}

function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("ABES engineering college");
            resolve();
        },2000)
    })
}
