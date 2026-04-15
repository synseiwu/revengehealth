const form = document.getElementById('bookingForm');
const message = document.getElementById('formMessage');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'there';
  const session = data.get('session') || 'your session';

  message.textContent = `Thanks, ${name}! Your request for ${session} has been received. This demo doesn't send data yet, but the layout is ready for real booking integration.`;
  form.reset();
});
