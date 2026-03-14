function calculateBMI() {
  let w = document.getElementById("weight").value;
  let h = document.getElementById("height").value;

  let resultText = document.getElementById("result");

  let bmi = w / (h * h);

  if (bmi < 18.5) {
    resultText.innerHTML = "Underweight (BMI: " + bmi.toFixed(1) + ")";
    resultText.style.color = "orange";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText.innerHTML = "Normal Weight (BMI: " + bmi.toFixed(1) + ")";
    resultText.style.color = "green";
  } else {
    resultText.innerHTML = "Overweight (BMI: " + bmi.toFixed(1) + ")";
    resultText.style.color = "red";
  }
}
