# Criando uma Rede Social

## Índice

* [1. Desenvolvedoras](#1-desenvolvedoras)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Definição do produto](#3-definição-do-produto)
* [4. Histórias de usuário](#4-historias-de-usuario)
* [5. Testes de Usabilidade](#5-testes-de-usabilidade)
* [6. Prototipos](#6-prototipos)
* [7. Testes unitários](#7-testes-unitários)
* [8. Objetivos de Aprendizagem](#8-objetivos-de-aprendizagem)

***

## 1. Prefácio

O projeto MyPet foi desenvolvido por:

* Júlia Ribeiro [GitHub](https://github.com/jumvribeiro)
* Vanessa Ponte [GitHub] (https://github.com/vanessap81)

* Link do projeto:

Bem-vindo ao mundo MyPet, uma emocionante jornada em direção a uma comunidade virtual construída para amantes de animais de estimação. Neste projeto, reunimos nossa paixão pelos animais de estimação e nossa expertise em desenvolvimento de aplicativos para criar uma rede social dedicada a você e ao seu fiel amigo peludo.

Nossa visão era clara: construir uma plataforma onde os amantes de pets pudessem se conectar, compartilhar experiências e apoiar causas que importam. A MyPet é muito mais do que apenas mais uma rede social; é uma comunidade acolhedora e vibrante onde você pode criar uma conta, compartilhar suas histórias, fotos e vídeos de seus animais de estimação, interagir com outros membros e até mesmo descobrir serviços, produtos e ONGs que estão fazendo a diferença no mundo dos animais de estimação.

Neste projeto, detalharemos como criamos esta plataforma incrível. Desde a concepção até a implementação, exploraremos como desenvolvemos uma Single-Page Application (SAP) com uma abordagem "mobile first", permitindo que você acesse a MyPet de qualquer lugar e dispositivo.

Prepare-se para embarcar nesta jornada conosco e descubra como a Mypet está tornando a vida dos seus pets ainda mais especial!

## 2. Resumo do projeto

A MyPet é uma rede social dedicada aos amantes de animais de estimação, desenvolvida com o objetivo de proporcionar uma experiência única e envolvente. Este projeto visa criar uma plataforma inovadora que permite aos usuários:

**Criar Conta e Logar-se:** Os usuários podem criar facilmente uma conta na MyPet e fazer login para acessar todos os recursos da plataforma.

**Compartilhar Momentos:** Os membros podem compartilhar suas histórias de seus animais de estimação, criando uma comunidade acolhedora e amigável.

**Interagir com Publicações:** Os usuários podem criar, editar e deletar suas próprias publicações, bem como dar "likes" nas publicações de outros membros, promovendo a interação e a conexão.

**Single-Page Application (SAP):** A MyPet é construída como uma Single-Page Application (SAP), garantindo uma experiência de usuário fluida e responsiva.

**Abordagem "Mobile First":** A plataforma é desenvolvida com uma abordagem "mobile first", tornando-a acessível e funcional em dispositivos móveis.

Além disso, a MyPet não se limita apenas ao compartilhamento de momentos; ela também é uma fonte valiosa de informações sobre serviços, produtos e ONGs relacionadas a animais de estimação, permitindo que os usuários descubram recursos úteis e apoiem causas importantes.

## 3. Definição do produto

**Quem são os principais usuários do produto?**
Os principais usuários do produto são aqueles que têm animais de estimação, muitas vezes referidos como "tutores de pets" ou "pais de pets". São pessoas que desejam compartilhar experiências, acompanhar a jornada de outros animais de estimação e estabelecer conexões com uma comunidade que compreende suas alegrias, desafios e preocupações relacionadas aos seus animais de estimação.   

**Qual problema o produto resolve/para que ele serve para esses usuários?**
O produto resolve os seguintes problemas e atende às necessidades dos pais de pets:

1. Fornecimento de Informações Relevantes: Ajuda os pais de pet a acessar informações sobre dúvidas comuns ou comportamentos específicos de diferentes espécies ou raças de animais de estimação, permitindo uma melhor compreensão e cuidado com seus pets.

2. Estabelecimento de uma Rede de Confiança: Facilita a criação de uma rede confiável, onde os usuários podem compartilhar recomendações de profissionais de confiança, como veterinários, treinadores de animais e cuidadores de pets.

3. Organização de Passeios de Socialização: Possibilita aos pais de pets organizar passeios de socialização para seus animais de estimação com base no perfil de cada animal, especialmente no caso de cachorros, promovendo interações positivas entre os pets e seus donos.

Em resumo, o produto serve para fornecer informações úteis, estabelecer conexões de confiança e facilitar a socialização de animais de estimação, atendendo às necessidades específicas dos pais de pets e melhorando a qualidade de vida de seus animais de estimação.

## 4. Histórias de usuário

Para compreender as necessidades dos usuários, fizemos alguns testes para identificar o que eles desejam encontrar em uma rede social voltada para pais de pets, e com base nos resultados, elaboramos as seguintes histórias de usuário para ilustrar suas necessidades e expectativas.

*Tela de login/Cadastro*

"Como usuário de uma rede social, desejo ter a opção de realizar um cadastro seguro, onde meus dados estejam protegidos, e que eu possa ter a certeza de que as pessoas nessa rede também passaram por um processo de cadastro seguro."

"Como usuário de uma rede social, gostaria de ter a facilidade de fazer um cadastro simplificado utilizando minha conta do Google, para economizar tempo e esforço no processo de registro."

*Tela timeline*

"Como usuário de uma rede social, quero poder compartilhar meus pensamentos e textos com facilidade, para que minha voz seja ouvida e minhas ideias compartilhadas com a comunidade."

"Como usuário de uma rede social, desejo uma timeline onde eu possa acompanhar as publicações de outras pessoas, para me manter atualizado sobre seus pensamentos, atividades e interesses."

"Como usuário de uma rede social, quero ter a capacidade de expressar meu interesse ou engajamento nas publicações das pessoas que sigo, através da opção de 'curtir', para mostrar meu apoio e apreço pelo conteúdo delas."

"Como usuário de uma rede social, gostaria de poder editar minhas publicações, caso eu precise corrigir erros de digitação ou atualizar informações, para manter meu conteúdo preciso e relevante."

"Como usuário de uma rede social, desejo ter a opção de excluir minhas publicações, caso eu queira remover conteúdo antigo ou indesejado, para manter meu perfil organizado e relevante."

## 5. Testes de Usabilidade

Para avaliar a experiência do usuário (UX) e a usabilidade da nossa aplicação, realizamos uma pesquisa detalhada que abordou diversos aspectos-chave da plataforma. Adotamos uma abordagem centrada no usuário, com ênfase nas seguintes áreas: a relevância da aplicação, a facilidade de registro e login, a simplicidade na criação de postagens, a presença de campos adequados e pertinentes nas postagens e a satisfação geral com o design da interface. Também encorajamos os usuários a relatar qualquer problema que encontrassem durante o uso da aplicação, bem como a compartilhar sugestões para melhorias. Esses insights foram cruciais para aprimorar a experiência dos nossos usuários, levando em consideração suas necessidades e expectativas.

Recebemos principalmente feedbacks positivos em relação à usabilidade, facilidade de uso e aparência da aplicação. Ela foi descrita como intuitiva, de fácil utilização, e o design visual recebeu elogios por ser limpo e amigável.

## 6. Prototipos 


## 7. Testes unitários

* Lembre-se de que não há _setup_ de **testes** definido, isso dependerá da
  estrutura do seu projeto. Você não deve esquecer de pensar sobre os testes.
  Eles podem ajudar a definir a estrutura e sua lógica.

* Os testes de unidade devem cobrir no mínimo 70% de _statements_, _functions_,
  _lines_ e _branches_.

## 8. Objetivos de Aprendizagem

✓ Uso de HTML semântico

✓ Uso de seletores de CSS

✓ Uso de seletores de DOM

✓ Manipulação de eventos de DOM (listeners, propagação, delegação)

✓ Variáveis (declaração, atribuição, escopo)

✓ Single Page Application (SPA)

✓ Testes assíncronos

✓ Uso de mocks e espiões

✓ Firebase

✓ Firestore
