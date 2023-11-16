let contain = document.querySelector(".contain");
let next_step1 = document.querySelector(".next-step1");
let contain1 = document.querySelector(".contain1");
let circle1 = document.querySelector(".circle-1");
let circle2 = document.querySelector(".circle-2");
let circle3 = document.querySelector(".circle-3");
let circle4 = document.querySelector(".circle-4");
var name1 = document.getElementById("name");
var email = document.getElementById("email");
var number = document.getElementById("number");

function validateForm() {
  var form = document.getElementById("myForm");
  var inputs = form.querySelectorAll("input[required]");
  var isValid = true;

  inputs.forEach(function (input) {
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  });
  if (isValid) {
    // All required fields are filled, show an alert

    sessionStorage.setItem("name", name1.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("number", number.value);
    contain.classList.add("hidden");
    contain1.classList.remove("hidden");
    circle1.classList.remove("bg-circle");
    circle2.classList.add("bg-circle");
  }
}
let step2 = 9;
sessionStorage.setItem("step2_option", step2);

function selectSubscription(subscription) {
  var arcadeElement = document.getElementById("arcade");
  var advancedElement = document.getElementById("advanced");
  var proElement = document.getElementById("pro");

  // Toggle classes based on the selected subscription
  if (subscription === "arcade") {
    arcadeElement.classList.add("border-bg");
    advancedElement.classList.remove("border-bg");
    proElement.classList.remove("border-bg");
    arcadeElement.classList.remove("non-border");
    advancedElement.classList.add("non-border");
    proElement.classList.add("non-border");
    sessionStorage.step2_option = 9;
  } else if (subscription === "advanced") {
    arcade.classList.remove("border-bg");
    advanced.classList.add("border-bg");
    pro.classList.remove("border-bg");
    arcade.classList.add("non-border");
    advanced.classList.remove("non-border");
    pro.classList.add("non-border");
    sessionStorage.step2_option = 12;
  } else if (subscription === "pro") {
    arcade.classList.remove("border-bg");
    advanced.classList.remove("border-bg");
    pro.classList.add("border-bg");
    arcade.classList.add("non-border");
    advanced.classList.add("non-border");
    pro.classList.remove("non-border");
    sessionStorage.step2_option = 15;
  }
}
let input_time = document.getElementById("input_time");
let time_step2;
if (input_time.checked) {
} else {
  time_step2 = "month";
  sessionStorage.setItem("time_step2", time_step2);
}
input_time.addEventListener("change", function () {
  let month = document.querySelector(".month");
  let year = document.querySelector(".year");
  let free = document.querySelectorAll(".free");
  let prix_arcade = document.querySelector(".prix-arcade");
  let prix_advan = document.querySelector(".prix-advan");
  let prix_pro = document.querySelector(".prix-pro");

  if (input_time.checked) {
    sessionStorage.time_step2 = "year";
    month.classList.remove("color-bold");
    year.classList.add("color-bold");
    free[0].innerHTML = "2 months free";
    free[1].innerHTML = "2 months free";
    free[2].innerHTML = "2 months free";
    prix_arcade.innerHTML = "$90/yr";
    prix_advan.innerHTML = "$120/yr";
    prix_pro.innerHTML = "$150/yr";
  } else {
    sessionStorage.time_step2 = "month";
    month.classList.add("color-bold");
    year.classList.remove("color-bold");
    free[0].innerHTML = "";
    free[1].innerHTML = "";
    free[2].innerHTML = "";
    prix_arcade.innerHTML = "$9/mo";
    prix_advan.innerHTML = "$12/mo";
    prix_pro.innerHTML = "$15/mo";
  }
});

function back_step1() {
  contain.classList.remove("hidden");
  contain1.classList.add("hidden");
  circle1.classList.add("bg-circle");
  circle2.classList.remove("bg-circle");
}
let contain_step_3 = document.querySelector(".contain-step-3");
function next_step3() {
  circle2.classList.remove("bg-circle");
  circle3.classList.add("bg-circle");
  contain1.classList.add("hidden");
  contain_step_3.classList.remove("hidden");
  var prix_onl = document.querySelector(".prix-onl");
  var prix_larg = document.querySelector(".prix-larg");
  var prix_custom = document.querySelector(".prix-custom");

  if (sessionStorage.time_step2 === "month") {
    prix_onl.innerHTML = "+$1/mo";
    prix_larg.innerHTML = "+$2/mo";
    prix_custom.innerHTML = "+$2/mo";
  } else {
    prix_onl.innerHTML = "+$10/yr";
    prix_larg.innerHTML = "+$20/yr";
    prix_custom.innerHTML = "+$20/yr";
  }
}

var Online_1 = document.querySelector(".Online_1");
var Larger_1 = document.querySelector(".Larger_1");
var Customizable_1 = document.querySelector(".Customizable_1");

var Online_1_num = 0;
var Larger_1_num = 0;
var Customizable_1_num = 0;

sessionStorage.setItem("Online_1_num", Online_1_num);
sessionStorage.setItem("Larger_1_num", Larger_1_num);
sessionStorage.setItem("Customizable_1_num", Customizable_1_num);
let Online = document.getElementById("Online");
let Larger = document.getElementById("Larger");
let Customizable = document.getElementById("Customizable");

function selectExper(selected1) {
  if (selected1 === "Online") {
    if (sessionStorage.Online_1_num == "0") {
      Online_1.classList.add("border-bg");
      Online_1.classList.remove("non-border");
      Online.checked = true;
      sessionStorage.Online_1_num = 1;
    } else {
      Online_1.classList.remove("border-bg");
      Online_1.classList.add("non-border");
      Online.checked = false;
      sessionStorage.Online_1_num = 0;
    }
  } else if (selected1 === "Larger") {
    if (sessionStorage.Larger_1_num == "0") {
      Larger_1.classList.add("border-bg");
      Larger_1.classList.remove("non-border");
      Larger.checked = true;
      sessionStorage.Larger_1_num = 2;
    } else {
      Larger_1.classList.remove("border-bg");
      Larger_1.classList.add("non-border");
      Larger.checked = false;
      sessionStorage.Larger_1_num = 0;
    }
  } else if (selected1 === "Customizable") {
    if (sessionStorage.Customizable_1_num == "0") {
      Customizable_1.classList.add("border-bg");
      Customizable_1.classList.remove("non-border");
      Customizable.checked = true;
      sessionStorage.Customizable_1_num = 2;
    } else {
      Customizable_1.classList.remove("border-bg");
      Customizable_1.classList.add("non-border");
      Customizable.checked = false;
      sessionStorage.Customizable_1_num = 0;
    }
  }
}
function back_step2() {
  contain_step_3.classList.add("hidden");
  contain1.classList.remove("hidden");
  circle3.classList.remove("bg-circle");
  circle2.classList.add("bg-circle");
}
let contain_step_4 = document.querySelector(".contain-step-4");
let step_2_prod = document.querySelector(".step-2-prod");
let time1 = document.querySelector(".time");
let prix_step4 = document.querySelector(".prix-step4");
let cont_result = document.getElementById("cont-result");
let result_product_name = document.querySelector(".result-product-name");
let result_product_prix = document.querySelector(".result-product-prix");

function next_step4() {
  contain_step_3.classList.add("hidden");
  contain_step_4.classList.remove("hidden");
  circle3.classList.remove("bg-circle");
  circle4.classList.add("bg-circle");

  var total = 0;

  if (sessionStorage.time_step2 === "month") {
    if (sessionStorage.step2_option === "9") {
      step_2_prod.innerHTML = "arcade";
      time1.innerHTML = "(monthly)";
      prix_step4.innerHTML = "$9/mo";
      total = 9;
    } else if (sessionStorage.step2_option === "12") {
      step_2_prod.innerHTML = "advanced";
      time1.innerHTML = "(monthly)";
      prix_step4.innerHTML = "$12/mo";
      total = 12;
    } else if (sessionStorage.step2_option === "15") {
      step_2_prod.innerHTML = "pro";
      time1.innerHTML = "(monthly)";
      prix_step4.innerHTML = "$15/mo";
      total = 15;
    }
    if (sessionStorage.Online_1_num === "1") {
      cont_result.innerHTML =
        '<div class="add-product" style="display: flex;position: relative;"><p class="add-product-name">Online service</p><p class="add-product-prix">+$1/mo</p></div>';
      total += 1;
    }
    if (sessionStorage.Larger_1_num === "2") {
      cont_result.innerHTML +=
        '<div class="add-product" style="display: flex;position: relative;"><p class="add-product-name">Larger storage</p><p class="add-product-prix">+$2/mo</p></div>';

      total += 2;
    }
    if (sessionStorage.Customizable_1_num === "2") {
      cont_result.innerHTML +=
        '<div class="add-product" style="display: flex;position: relative;"><p class="add-product-name">Customizable Profile</p><p class="add-product-prix">+$2/mo</p></div>';

      total += 2;
    }

    result_product_name.innerHTML = "Total(per month)";
    result_product_prix.innerHTML = `+$${total}/mo`;
  } else {
    if (sessionStorage.step2_option === "9") {
      step_2_prod.innerHTML = "arcade";
      time1.innerHTML = "(yearly)";
      prix_step4.innerHTML = "$90/yr";
      total = 90;
    } else if (sessionStorage.step2_option === "12") {
      step_2_prod.innerHTML = "advanced";
      time1.innerHTML = "(yearly)";
      prix_step4.innerHTML = "$120/yr";
      total = 120;
    } else if (sessionStorage.step2_option === "15") {
      step_2_prod.innerHTML = "pro";
      time1.innerHTML = "(yearly)";
      prix_step4.innerHTML = "$150/yr";
      total = 150;
    }
    if (sessionStorage.Online_1_num === "1") {
      cont_result.innerHTML =
        '<div class="add-product" style="display: flex;position: relative;"><p class="add-product-name">Online service</p><p class="add-product-prix">+$10/yr</p></div>';
      total += 10;
    }
    if (sessionStorage.Larger_1_num === "2") {
      // Add the content if it doesn't exist
      cont_result.innerHTML +=
        '<div class="add-product" style="display: flex;position: relative;"><p class="add-product-name">Larger storage</p><p class="add-product-prix">+$20/yr</p></div>';

      total += 20;
    }

    if (sessionStorage.Customizable_1_num === "2") {
      cont_result.innerHTML +=
        '<div class="add-product" style="display: flex;position: relative;"><p class="add-product-name">Customizable Profile</p><p class="add-product-prix">+$20/yr</p></div>';

      total += 20;
    }
    console.log(cont_result);
    result_product_name.innerHTML = "Total(per year)";
    result_product_prix.innerHTML = `+$${total}/yr`;
  }
}

let final2 = document.querySelector(".final");
function back_step4() {
  contain_step_4.classList.add("hidden");
  contain_step_3.classList.remove("hidden");
  circle3.classList.add("bg-circle");
  circle4.classList.remove("bg-circle");
  cont_result.innerHTML = "";
}
var Change = document.querySelector(".Change");
Change.onclick = function () {
  contain_step_4.classList.add("hidden");
  contain1.classList.remove("hidden");
  circle2.classList.add("bg-circle");
  circle4.classList.remove("bg-circle");
};

function final() {
  contain_step_4.classList.add("hidden");
  final2.classList.remove("hidden");
  final2.classList.add("flex");
}
