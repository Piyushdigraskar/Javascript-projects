const btnEl = document.getElementById("btn");
const BmiInputEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById("weight-Condition")

function CalculateBMI() {
    const heightValue = document.getElementById('height').value / 100;
    const weightValue = document.getElementById('weight').value;

    const BMIvalue = weightValue / (heightValue * heightValue);

    BmiInputEl.value = BMIvalue

    if(BMIvalue < 18.5){
        weightConditionEl.innerText = "Underweight";
    }
    else if(BMIvalue >= 18.5 &&BMIvalue <= 24.9){
        weightConditionEl.innerText = "Normal Weight";
    }
    else if(BMIvalue >= 25 &&BMIvalue <= 29.9){
        weightConditionEl.innerText = "OverWeight";
    }else if(BMIvalue >= 30){
        weightConditionEl.innerText = "Obesity";
    }

}

btnEl.addEventListener("click", CalculateBMI);