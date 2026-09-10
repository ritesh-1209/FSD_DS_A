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

async function test(){
    try{
        await f1();
    await f2();
    }
    catch (err){
        console.log("error",err);
    }
}
test();

