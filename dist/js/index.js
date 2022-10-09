const {createApp} = Vue
const footer = `
<footer class="mt-auto">
  <div class="container footer">
    <small><a href="">Mentions legales</a></small>
    <p> SAE303 Pozdnyakov, Vergeaud, Humeau </p>
    <div class="reseaux">
      <a href="#">
        <img src="../dist/img/instagram-32.svg" alt="LogoI">
      </a>
      <a href="#">
        <img src="../dist/img/facebook-32.svg" alt="logoF">
      </a>
      <a href="#">
        <img src="../dist/img/twitter-32.svg" alt="LogoT">
      </a>
      <a href="#">
        <img src="../dist/img/youtube-32.svg" alt="LogoYT">
      </a>
    </div>
  </div>
</footer>
`
const articles = `
  <article  v-for="article in articles">
    <img :src="article.image" alt="image d'article">
    <p>{{ article.description }}   <a :href='article.path'>lire la suite</a></p>

  </article>
`
const app = Vue.createApp({
  data(){
    return {
    }
  }
}).component('navmenu',{
  template :
  /*html*/
  `
  <header class="container">
  <div class="logo">
    <a href="index.html">
      <img src="../dist/img/logo-placeholder.png" alt="Logo">
    </a>
  </div>
  <nav class="navbar">
    <a class="btn" v-for="tab in tabs" :href="tab.path">{{tab.name}}</a>
  </nav>
  </header>
  `,
  data() {
    return {
      tabs : [
        {name: 'Accueil', path: './index.html'},
        {name: 'Actualites', path: './actualites.html'},
        {name: 'Gallerie', path: './gallerie.html'},
        {name: 'Contact', path: './contact.html'}
      ]
    }
  }
}).component('articles',{
  template : articles,
  data() {
    return {
      articles: [
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#"}
      ]
    }
  }
}).component('foot',{
  template : footer,
}).mount('body')




let liens = $('a')
liens.each(function(){
  if($(this).html()===document.title){
    $(this).css({'text-decoration': 'underline'})
  }
})
