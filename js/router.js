// Router simples usando templates embutidos (evita fetch e erros ao abrir via file://)
const templates = {
  home: `
    <h2>Bem-vindo à Página Inicial!</h2>
    <p>Esta é uma simples SPA feita em JavaScript.</p>
  `,
  contato: `
    <h2>Contato</h2>
    <form id="formContato">
      <input type="text" id="nome" placeholder="Nome"><br><br>
      <input type="email" id="email" placeholder="Email"><br><br>
      <button type="submit">Enviar</button>
    </form>
    <p id="msg"></p>
  `
};

function navigate(page) {
  const app = document.getElementById('app');
  if (!app) {
    console.error('Elemento #app não encontrado.');
    return;
  }
  app.innerHTML = templates[page] || '<h2>Página não encontrada</h2>';
  // Garantir que o initValidation exista antes de chamar
  if (page === 'contato') {
    if (typeof initValidation === 'function') {
      initValidation();
    } else {
      // Aguardamos um pequeno timeout caso o script de validation ainda não tenha sido carregado
      setTimeout(() => {
        if (typeof initValidation === 'function') initValidation();
        else console.warn('initValidation não está disponível.');
      }, 50);
    }
  }
}

// Expor navigate no escopo global (por precaução)
window.navigate = navigate;
