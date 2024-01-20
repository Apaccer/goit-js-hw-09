const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  const userEmail = email.value.trim();
  const userMessage = textarea.value.trim();

  const data = {
    email: userEmail,
    message: userMessage,
  };

  const localStorageData = JSON.stringify(data);
  localStorage.setItem(localStorageKey, localStorageData);
});

function restoreData() {
  const localData = localStorage.getItem(localStorageKey);
  const data = JSON.parse(localData);
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

restoreData();

form.addEventListener('submit', e => {
  e.preventDefault();
  const userEmail = email.value.trim();
  const userMessage = textarea.value.trim();
  if (!userEmail || !userMessage) {
    alert('Please fill in all required fields.');
    return;
  }
  console.log('email:', userEmail);
  console.log('message:', userMessage);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
