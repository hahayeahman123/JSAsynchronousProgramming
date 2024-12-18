/*const waitForElement = (selector)=>{
    return new Promise((resolve)=>{
        const checkExist = setInterval(()=>{
            const element = document.querySelector(selector);
            if(element){
                clearInterval(checkExist);
                resolve(element);
            }
        },100) // repeats whats in the setInterval every 100 ms =  0.1 seconds
    })
};

const main = async ()=>{
    try{
        const element = await waitForElement("#myElement"); // waits until the function is finished
        element.textContent = "hello world!"; // sulaukiaus pridedu teksta..
        element.style.color="blue"; // pridedu stiliu...
        console.log("element found and styled"); // isvedu i console
    }catch(error){
        console.log("error waiting element " + error);
    }
}

setTimeout(()=>{
    const parent = document.querySelector(".container");
    const newElement = document.createElement("div");
    newElement.id="myElement"
    parent.appendChild(newElement);
},2000); // puts a delay on the funtion being invoked, in this case its 2 secs

main();
*/

/*const waitForCorrectInput = (selector, targetWord)=>{
    return new Promise((resolve)=>{
        const inputElement = document.querySelector(selector);
        inputElement.addEventListener('input', ()=>{
            if(inputElement.value.trim().toLowerCase()===targetWord.toLowerCase()){
                resolve("teisingai ivestas zodis");
            }
        })
    })
};

const main = async ()=>{
    const child = document.querySelector('#message');
    child.textContent="iveskite slapta zodi.";
    try{
        const result = await waitForCorrectInput('#wordInput', "katinas");
        console.log(result);
        child.textContent=result;

    }catch(error){
        console.log("error: "+ error);
    }
};

main();*/

/*const getData = async (url)=>{ // this funtion allows us to get the API needed
    try{
        const response = await fetch(url); // we get the .JSON file, we use await because it takes a few seconds to actually happen
        const data = await response.json(); // converting the const to a .json file
        return data;
    }catch(error){
        console.log("error: "+error);
    }
}

const generateSelect = async ()=>{
    const form = document.createElement('form'); // creates the initial form element needed for datalist
    document.querySelector(".container").appendChild(form); // adds it to the container
    const input = document.createElement('input'); // we create an input element which i also needed for datalist
    input.type="text"; // give it a type
    input.setAttribute("list","places"); // give it a list, this almost works as a link between the input and datalist
    form.appendChild(input); // we add the input within the form element
    const select = document.createElement('datalist'); // we create the datalist element
    select.id="places"; // give the datalist the same id name as the input's list name, this finalises the 'link'
    form.appendChild(select); // we add the datalist to the form
    for(let place of await getData("https://api.meteo.lt/v1/places")){ // loop because we are working with an array
        const option = document.createElement('option'); // we create a option element that has the places' names in it also which...
        option.value=place.name; // we give each value the same name, but a value, which will help with the datalist
        select.appendChild(option); // we add the option to the select element.
    }
}

generateSelect(); // we call the funtion

const searchBymOvieTitle = async (title)=>{
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=2d55515a`); // my specific api allowed to use the API
    const data = await response.json();
    console.log(data);
}

searchBymOvieTitle("sky");*/