const testomonials = [
    {
        name:"Piyush Digraskar",
        photoUrl:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I have been a loyal customer of Apple for many years now. and its an honour."

    },
    {
        name:"vivek kumar",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I have been using jaguar for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."

    },
    {
        name:"Hema chaturvedi",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Would definitely recommend niva and will definitely be ordering again."

    },
    {
        name:"stan ponting",
        photoUrl:"https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text:"I would recommend brave for anyone trying to get the word out about their business. It has saved me so much time!"

    }
]

const imageEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const userNameEl = document.querySelector(".username");

let index = 0;
updateTesttomonials();
function updateTesttomonials (){
    const  {name, photoUrl, text} = testomonials[index];

    imageEl.src = photoUrl;
    textEl.innerText = text;
    userNameEl.innerText = name;
    index++;
    if(index === testomonials.length){
        index = 0;
    }
    setTimeout(()=>{
        updateTesttomonials();
    }, 3000)
}