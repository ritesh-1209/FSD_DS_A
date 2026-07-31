const joke = document.getElementById("abc");
const newBtn = document.getElementById("get");
const copyBtn = document.getElementById("copy");

async function getJoke() {
    joke.innerHTML = "Loading joke...";
    try{
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        joke.innerHTML = data.value;

    }
    catch{
        joke.innerHTML = "Something went wrong!";
    }

}
newBtn.addEventListener("click",getJoke);
copyBtn.addEventListener("click",async()=>{
    await navigator.clipboard.writeText(joke.innerText);
    copyBtn.innerHTML="Copied";
    setTimeout(()=>{
        copyBtn.innerHTML="Copy";
    },1500);
});
window.onload=getJoke;