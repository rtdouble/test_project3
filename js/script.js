'use strict'

const closeBtn = document.querySelector('.close_popup'),
      supportBtn = document.querySelector('.callback_desc'),
      popupBg = document.querySelector('.parent_popup'),
      popup = document.querySelector('.popup'),
      form = document.querySelector('.js_form'),
      formInputs = document.querySelectorAll('.js_input'),
      inputEmail = document.querySelector('.js_input_email'),
      inputPhone = document.querySelector('.js_input_phone'),
      slider = document.querySelector('.slider'),
      sliderBtns = document.querySelectorAll('.btns'),
      slide1 = document.querySelector('.slide1'),
      slide2 = document.querySelector('.slide2');

// START ---- Валидация формы


function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
      phoneVal = inputPhone.value,
      emptyInputs = Array.from(formInputs).filter(i => i.value === '');

  formInputs.forEach(function (i){
    if (i.value === '') {
      i.classList.add('error');
      i.placeholder="Поле обязательно для заполнения";
    } else {
      i.classList.remove('error');
    }
  })

  if (emptyInputs.length !== 0) {
    return false;
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('error');
    return false;
  } else {
    inputPhone.classList.remove('error');
  }

  if(!validateEmail(emailVal)) {
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }


}


// END----


// START ---- Настройка открытия и закрытия окна формы


closeBtn.addEventListener("click", () => {
  if (popupBg.classList.contains('show')) {
    popupBg.classList.remove('show');
    popupBg.classList.add('hidden');
    popup.style.cssText = 'display: none';
  }
});

supportBtn.addEventListener("click", () => {
  if (popupBg.classList.contains('hidden')) {
    popupBg.classList.remove('hidden');
    popupBg.classList.add('show');
    popup.style.cssText = 'display: block';
  }
});

// END ----


// START ---- Слайдер

sliderBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (slide1.style.opacity === '0') {
      slide1.style.opacity = '1';
      slide2.style.opacity = '0';
    } else {
      slide1.style.opacity = '0';
      slide2.style.opacity = '1';
    }
  });
})

function sliderSet () {
  for (let i = 1; i > 0; i++) {
    if (i % 2 === 1) {
      if (slide1.style.opacity === '0') {
        slide1.style.opacity = '1';
        slide2.style.opacity = '0';
      } else {
        slide1.style.opacity = '0';
        slide2.style.opacity = '1';
      }
      return;
    }
  }
}

setInterval(sliderSet, 4000);















