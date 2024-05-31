const btnEl = document.getElementById('btn');
const birthdateEl = document.getElementById('birthdate');
const resultEl = document.getElementById('result');



function calculateAge() {
    const birthdatevalue = birthdateEl.value;
    if(birthdatevalue === ""){
        alert("please enter your birth date")
    }
    else{
        let age = getAge(birthdatevalue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : 'year'} old`

    }
}

function getAge(birthdatevalue){
    const currentDate = new Date();
    const birthdaydate = new Date(birthdatevalue)
    const age = currentDate.getFullYear() - birthdaydate.getFullYear();
    const month = currentDate.getMonth();

    if(month < 0 || (month === 0) && currentDate.getDate()< birthdaydate.getDate()){
        age--;
    }


    return age;
}
btnEl.addEventListener('click', calculateAge)