import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form').elements.email;
const message = document.querySelector('.feedback-form').elements.message;

function forms() {
  const formCondition = {};

  formCondition.email = form.elements.email.value;
  formCondition.message = form.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formCondition));
}

form.addEventListener('input', _.throttle(forms, 500));

const savedForms = localStorage.getItem('feedback-form-state');

if (savedForms) {
  const formCondition = JSON.parse(savedForms);
  email.value = formCondition.email;
  message.value = formCondition.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state'))); 
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
});
