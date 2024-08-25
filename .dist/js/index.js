let regForm = document.querySelector("register-form");
let allInput = regForm.querySelectorAll("INPUT");
let allRegData = [];

regForm.onsubmit = (e) =>{
    e.preventDefault();
   allRegData.push({
    name: allInput[0].value,

    name:allInput[0].value,
    email: allInput[1].value,
    mobile: allInput[2].value,
    dob:allInput[3].value,
    password:allInput[4].value
   });
   localStorage.setItem("allRegData", JSON.stringify(allRegData))
}