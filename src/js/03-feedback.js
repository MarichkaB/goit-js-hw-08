import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener(
  'input',
  throttle(event => {
    const inputForm = {
      input: form.elements.email.value,
      textarea: form.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputForm));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.clear();
});

const storage = localStorage.getItem('feedback-form-state');
const parseStorage = JSON.parse(storage);

const fillForm = () => {
  if (parseStorage !== null) {
    input.value = parseStorage.input;
    textarea.value = parseStorage.textarea;
  }
};
fillForm();
