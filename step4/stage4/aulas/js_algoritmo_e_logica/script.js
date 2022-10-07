// alert('Hello World!')
window.document.body.style.backgroundColor = '#cecece';

validator()

function validator() {
  if(localStorage.usuarioPeople && localStorage.usuarioPeople != 'null') {
    paragraph.innerHTML = "Olá&nbsp;" + localStorage.usuarioPeople;
  }
}

myProfile.onclick = () => {
  if(localStorage.usuarioPeople) {
    alert('Usuário já existe')
    const alterar = window.prompt('Gostaria de alterar o nome? Y - Sim ou N - Não')
    if (alterar === 'Y') {
      let name = window.prompt("What is your name?");
      localStorage.setItem('usuarioPeople', name);
      window.location.reload();
    } else {
      return alert('Usuário não alterado')
    }
  } else {
    let name = window.prompt('Qual o seu nome');
    localStorage.setItem('usuarioPeople', name);
    window.location.reload();
  }
}

///// Aula

