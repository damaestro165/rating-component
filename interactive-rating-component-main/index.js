const radioButtons = document.querySelectorAll('input[name="selection"]');
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
btn.addEventListener("click", () => {
  let selectedValue;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      break;
    }
  }
  document.querySelector(".rating").style.display = "none";
  document.querySelector(".thankyou").style.display = "flex";
  // show the output:
  output.innerText = selectedValue
    ? `You selected ${selectedValue} out of 5`
    : `You haven't selected any ratings`;
});
