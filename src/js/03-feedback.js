import { save, load, remove } from './storage';
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const messageField = document.querySelector('.feedback-form textarea');
const mailField = document.querySelector('.feedback-form input');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateForm();
form.addEventListener('input', throttle(saveInfirmation, 500));
form.addEventListener('submit', submitHandler);

function saveInfirmation(evt) {
  evt.preventDefault();
  save(LOCALSTORAGE_KEY, {
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
}

function submitHandler(evt) {
  evt.preventDefault();
  const dict = load(LOCALSTORAGE_KEY);
  if (!dict) return;
  console.log(dict.email);
  console.log(dict.message);
  form.reset();
  remove(LOCALSTORAGE_KEY);
}

function updateForm() {
  const dict = load(LOCALSTORAGE_KEY);
  messageField.value = !dict ? '' : dict.message;
  mailField.value = !dict ? '' : dict.email;
}
