const {createApp} = Vue

const header = `
<header class="container">
<div class="logo">
  <a href="index.html">
    <img src="../dist/img/logo-placeholder.png" alt="Logo">
  </a>
</div>
<nav class="navbar">
  <a class="btn" href="index.html">Accueil</a>
  <a class="btn" href="contact.html">Contact</a>
  <a class="btn" href="actualites.html">Actualites</a>
  <a class="btn" href="gallerie.html">Gallerie</a>
</nav>
</header>`

const footer = `
<footer class="mt-auto">
  <div class="container footer">
    <small><a href="">Mentions legales</a></small>
    <p> SAE303 Pozdnyakov, Vergeaud, Humeau </p>
    <div class="reseaux">
      <a href="#">
        <img src="../dist/img/facebook-32.svg" alt="logoF">
      </a>
      <a href="#">
        <img src="../dist/img/twitter-32.svg" alt="LogoT">
      </a>
      <a href="#">
        <img src="../dist/img/instagram-32.svg" alt="LogoI">
      </a>
      <a href="#">
        <img src="../dist/img/youtube-32.svg" alt="LogoYT">
      </a>
    </div>
  </div>
</footer>

`

Vue.createApp({
  data(){
    return {
        currentTab: document.title,
    }
  }
}).component('navmenu',{
  template : header,
  methods: {
  }
}).component('foot',{
  template : footer,
  methods : {}
}).mount('body')




let liens = $('a')
liens.each(function(){
  if($(this).html()===document.title){
    $(this).css({'text-decoration': 'underline'})
  }
})
