# GIT -> Softwate de versionamento. -> Repositório Local

## Aula 2
Controle de Versão Manual

- VCS - Version Control System
Ex: Git, CVS, Mercurial.

### Git
Gratuíto e Open-source.
Controle de versões distribuído
Sistema de gerenciamento do código-fonte

Criado pelo Linux para gereciar versões o Kernel do Linux.

Linha do tempo, marcos relevantes -> commits.
Documentar histórico.

## Aula 3
- instalando o git

## Aula 4
  Iniciando um repositório local -> uma pasta para o projeto.

  - TERMINAL

  - git int -> Inicializa o git

  ## Aula 5
  - .git
  Cérebro do Git
  Pasta oculta do repositório local

  ## Aula 6
  Config incial
  Assinatura
  username e email

  - git config --global user.name 'nome de usuário'
  - git config --global user.email 'endereço de email do git'

  git config --list
  -> para exibir o arquivo de configurações

  ## Aula 7
  - Commit
  Marcos importantes do projeto

 - git add .
 - git add arquivo.extension
 -> pega todos os arquivos que sofreram modificação e embala para o commit

 - git commit -m 'mensagem descritiva do commit'
 -> Etiqueta da caixa


## Aula 8
- git log
-> para ver o histórico dos commits

- q de quit. Letra Q de Quit. no Terminal.

- git log --oneline
-> forma resumida

- git log -n 3
-> traz a quantidade determinada dos últimos commits.

## Aula 9
Estágios do histórico/versionamento do código

Iniciar o repositório. git init
- Working Directory, git add .
- Stage Area, git commit -m 'message'





## Aula 10

- Git Status
git init -> Git init, 
Workign Directory, 
add -> Stage Area, 
commit -> Repository.

histórico -> git log.


## Aula 11
- HEAD -> ponteiro, o último commit.
- Branch -> linha do tempo, ramificação, padrão é a master.

## Aula 12
- git diff
Comparar as modificações entre o working directory e o último commit


## Aula 13
Desfazendo modificações de arquivos no Working Directory
-git status

- git restore arquivo.ext -> restaura o arquivo específico
- git restore . -> restaura todos os arquivos modificados para o estado do commit.


## Aula 14
Restaurando arquivos dos Staged

- git status
- gti add .

- git restore --staged arquivo.exten
- git restore --staged .

## Aula 15
Corrigindo descrição/mensagem do último commit
 - git commit --amend -m 'new description'

 ## Aula 16
 Desfazendo o último commit
 - git reset --soft HEAD~1


 ## Aula 17
 - Source Control do VSCode
 Extensão integrada do VSCode - Por interface gráfica ao invés do terminal.

 Extensão GitLens -> para o VSCode

--

# GITHUB - Plataforma de armazenamento de código. -> Repositório remoto.

## Aula 1
- O que é o GitHub. Portifólio, código na nuvem, Web, Mobile, Api, Server, langs.

## Aula 2
- Criando uma conta.
Site: github.com
Criando e configurando a finalidade do uso.

## Aula 3
- Perfil Público
Nome, Foto, email público, Bio, Url, Empresa, Status

## Aula 4
Página de perfil.

## Aula 5
- Criando um repositório
Nome, Description, Public ou Private
Readme, .gitignore, license.

## Aula 6
- Configurando SSH.

## Aula 7
Após criar o repositório remoto, conectar com o repositório local.
- git init
- git branch -m main
- git remote add origin HTTPS/SSH do repo remoto.
- git remote --v

- git push -u origin main
-> Para mandar o código local para o repositório remoto.
-> -U memmorizar a origin
-> Origin main, a branch do repo.
Autorizar. Yes.

## Aula 8
Arquivo na raiz do projeto
- .gitigore
Para ignorar, arquivos, pastas e arquivos dentro de pastas.
Colocando o nome do arquivo.

Ex: node_modules, pois é possível reinstalar com o npm install.

Mas se mandar a pasta grande para o repositório remoto

Limpando o cache do gitignore

 ``` git rm -r cached . ```

 Refazer o commit.

 ## Aula 9
 Arquivo .gitkeep
 Para mandar pastas vazias no repositório, crio esse arquivo dentro da pasta desejada.

 ## Aula 10
 Histórico remoto no GitHub
 Abrir o repositório e clicar em commits
 Clicar no identificador

## Aula 11
```git clone + link do repositório```
Recomendado para quando estiver em um computador novo.
- git remote --v

-> Para ver se o repositório tem uma origin

Diferença do dowload zip.

## Aula 12
- git pull

Trazer atualização do repositório remoto para o repositótio local

Seja por edição direta no editor do GitHub o por outra máquina.

Testar primeiro o:
- git remote --v

- git pull
Para buscar alterações no remoto.
Seja por alteração do grupo de grupo.

## Aula 13
- README.md
Arquivo markdown, informações do projeto, funcinalidades, ferrametas, para documentar o código, descrição e couidado com o repositório.

Por padrão o GitHub interpreta esse arquivo.
Site indicado pelo Rodrigo: readme.so

Preview do VSCode

## Aula 14
Etiqueta
Mudar visibilidade do Projeto para Public or Private
- Settings, na Danger Zone: change visibility
## Aula 15
Encerramento
Analogia de muro de tijolos
Parede do conhecimento.
Tempo de cada um, ritmo próprio.

# Desafio Git Push
- Criar um repositório para todos os Projetos do Explorer