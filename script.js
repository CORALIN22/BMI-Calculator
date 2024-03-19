//Display Message for ideal weight
const displayMessage = (message, idealWeight) => {
  document.querySelector(".result-message").textContent = message;
  document.querySelector(".result-ideal").textContent = idealWeight;
};

const userHeight = document.querySelector("#height");
const userWeight = document.querySelector("#weight");
const btnRadios = document.querySelectorAll('input[type="radio"][name="unit"]');
const result = document.querySelector(".result");
const welcomeMessage = document.querySelector(".welcome");

// Define the BMI calculation function
const bmiCalculation = (func, h, w) => {
  let heightValue = func(h);
  let bmi = Math.trunc(w / (heightValue * heightValue));
  return bmi;
};

// Define the height calculation function
const height = (h) => {
  let calcHeight = h / 100;
  return calcHeight;
};

//Define ideal weight function

const idealWeight = (bmi, func, h) => {
  let heightValue = func(h);
  let userIdealWeight = Math.round(bmi * (heightValue * heightValue));
  return userIdealWeight;
};

const updateUI = (bmi, idealWeight) => {
  const bmiValueElement = result.querySelector(".result-value");
  bmiValueElement.textContent = bmi.toFixed(1);
  welcomeMessage.style.display = "none";
  result.style.display = "block";

  if (bmi < 18.5) {
    displayMessage("Underweight", idealWeight);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    displayMessage("Healthy Weight", idealWeight);
  } else if (bmi >= 25 && bmi <= 29.9) {
    displayMessage("Overweight", idealWeight);
  } else {
    displayMessage("Obese", idealWeight);
  }
};

//We are adding addeventListener in our radio button
btnRadios.forEach((btnRadio) => {
  btnRadio.addEventListener("change", function () {
    //this means our radios
    if (this.checked) {
      let heightValue = parseFloat(userHeight.value); //we ensure that string argument return the entire string with decimal
      let weightValue = parseFloat(userWeight.value);

      if (!isNaN(heightValue) && !isNaN(weightValue)) {
        const bmi = bmiCalculation(height, heightValue, weightValue);
        console.log(bmi);
        const idealUserWeight = idealWeight(bmi, height, heightValue);
        updateUI(bmi, idealUserWeight);
      }
    }
  });
});
