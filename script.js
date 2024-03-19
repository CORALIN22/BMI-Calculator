// Define the BMI calculation function
const bmiCalculation = (h, w) => {
  let calcHeight = h / 100;

  let bmi = Math.floor(w / (calcHeight * calcHeight));
  return bmi;
};

const userHeight = document.querySelector("#height");
const userWeight = document.querySelector("#weight");
const btnRadios = document.querySelectorAll('input[type="radio"][name="unit"]');

btnRadios.forEach((btnRadio) => {
  btnRadio.addEventListener("change", function () {
    if (this.checked) {
      const heightValue = parseFloat(userHeight.value);
      const weightValue = parseFloat(userWeight.value);

      if (!isNaN(heightValue) && !isNaN(weightValue)) {
        const bmi = bmiCalculation(heightValue, weightValue);
        console.log(bmi);
      } else {
        console.log("invalid numbers");
      }
    }
  });
});
