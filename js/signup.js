window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  if (!form) return;

  const FORM_BASE = 'https://docs.google.com/forms/d/e/1FAIpQLSeLOlpVbhx2bNZ5GRmNowvA6EUVA92Zo077sijcan1yn300TQ/viewform';

  const FIELD_MAP = {
    program: 'entry.1699233058',
    programValue: 'FTC (Grades 7-8th)',
    name: 'entry.753107151',
    email: 'entry.505493070',
    phone: 'entry.850285063'
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const map = FIELD_MAP;
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();

    const params = new URLSearchParams();
    params.set('usp', 'pp_url');
    if (map.programValue) params.set(map.program, map.programValue);
    if (name) params.set(map.name, name);
    if (email) params.set(map.email, email);
    if (phone) params.set(map.phone, phone);

    window.open(FORM_BASE + '?' + params.toString(), '_blank', 'noopener');
  });
});
