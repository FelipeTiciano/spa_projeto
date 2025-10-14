function initValidation() {
  const form = document.getElementById('formContato');
  const msg = document.getElementById('msg');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === '' || email === '') {
      msg.textContent = 'Por favor, preencha todos os campos.';
      msg.style.color = 'red';
    } else {
      msg.textContent = 'Enviado com sucesso!';
      msg.style.color = 'green';
      localStorage.setItem('ultimoContato', nome);
    }
  });
}