const form = document.getElementById('bookingForm');
const message = document.getElementById('formMessage');

// Replace this placeholder with the real Revenge Health business email when ready.
const businessEmail = 'capita55@gmail.com';

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get('name') || 'New client';
  const email = data.get('email') || '';
  const phone = data.get('phone') || '';
  const session = data.get('session') || 'Coaching request';
  const date = data.get('date') || '';
  const notes = data.get('notes') || '';

  const subject = encodeURIComponent(`Revenge Health Coaching Request - ${name}`);
  const body = encodeURIComponent(
    `New Revenge Health coaching request\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Package Interest: ${session}\n` +
    `Preferred Contact Date: ${date}\n\n` +
    `Goals / Notes:\n${notes}\n\n` +
    `Reminder: Revenge Health provides health coaching and GLP-2/GLP-3 journey assistance only, not medical advice, medication sales, prescriptions, or dosage guidance.`
  );

  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;

  message.textContent = `Thanks, ${name}! Your email app should open with your ${session} request. If it does not open, please contact Revenge Health directly.`;
  form.reset();
});
