const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apiKey = "FVmuD03xK5OOIyd2SN9dow==gxPz7LAKzqnu7kcv";

const options = {
    method: "Get",
    headers: {
        "X-Api-Key":apiKey, 
    }
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function getJOke(){

    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loding..."
    
    const response =  await fetch(apiURL, options)
    const data = await response.json()

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"



    jokeEl.innerText = data[0].joke
}


btnEl.addEventListener("click", getJOke)