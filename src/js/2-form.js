const refs = {
  form: document.querySelector('.feedback-form'),
};
const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';
const populateForm = () => {
  const saveData = localStorage.getItem(STORAGE_KEY);
  if (saveData) {
    try {
      const parseData = JSON.parse(saveData);
      formData.email = parseData.email || '';
      formData.message = parseData.message || '';
      refs.form.elements.email.value = formData.email;
      refs.form.elements.message.value = formData.message;
    } catch (error) {
      console.log('Failed parse localeStorage Data');
    }
  }
};
populateForm();

const onFormInput = event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();
  if (Object.values(formData).includes('')) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);
console.log(formData);
