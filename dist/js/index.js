const {createApp} = Vue
const footer = `
<footer class="mt-auto">
  <div class="container footer">
    <small><a href="">Mentions legales</a></small>
    <p> SAE303 Pozdnyakov, Vergeaud, Humeau </p>
    <div class="row">
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
  <article :id="article.id"  v-for="article in articles">
    <img :src="article.image" alt="image d'article">
    <p>{{ article.description }}</p>
    <a :key="article.id" :id="article.id" :href='article.path+article.id'>
    lire la suite
    </a>
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
  <div class="d-flex justify-content-center">
    <a href="index.html">
      <img src="../dist/img/logo-placeholder.png" alt="Logo">
    </a>
  </div>
  <nav class="d-flex justify-content-between border-bottom">
    <a class="btn" v-for="tab in tabs"  :href="tab.path">{{tab.name}}</a>
  </nav>
  </header>
  `,
  data() {
    return {
      tabs : [
        {name: 'Accueil', path: './index.html'},
        {name: 'Actualités', path: './actualites.html'},
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
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"0"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"1"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"2"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"3"}
      ]
    }
  }
}).component('foot',{
  template : footer
}).mount('body')






let actualites = $('article')
actualites.each(function(){
  let article = $(this)
  let lien = article.children('a')
  let p = article.children('p')
  lien.click(function(){
    p.css('overflow','visible')
    p.css('white-space','normal')
    article.css('height','auto')
    lien.hide()
  })
})

let liens = $('a')
liens.each(function(){
  if($(this).html()===document.title){
    $(this).css({'text-decoration': 'underline'})
  }
})
$( document ).ready(function() {
  let reseaux = $('.reseaux')
  reseaux.children().css('width','auto')
  let afterRow = $('.row')
  afterRow.children().css('width','auto')
  afterRow.children().css('margin','3px')
  afterRow.css('justify-content','center')
})
