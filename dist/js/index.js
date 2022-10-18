//template pour le footer
//on passe des donnees du component foot pour les utliser avec le template
const footer = `
<footer class="mt-auto">
  <div class="container d-flex justify-content-around align-items-center">
    <small><a href="mentions.html">Mentions légales</a></small>
    <p> SAE303 Humeau, Vergeaud, Pozdnyakov</p>
    <div class="row">
      <a v-for="a in aa" target="_blank" rel="noreferrer noopener" :href="a.path">
        <img :src="a.imgpath" :alt="a.alt">
      </a>
    </div>
  </div>
</footer>
`
//template pour les articles
//on passe des donnees du component articles pour les utliser avec le template
const articles = `
  <article :id="article.id"  v-for="article in articles">
    <img :src="article.image" class="border-end" alt="image d'article">
    <p>{{ article.description }}</p>
    <a :key="article.id" :id="article.id" :href='article.path+article.id'>
    lire la suite
    </a>
  </article>
`

//creation de l'application en utilisant vuejs importé sur chaque page où on a besoin
const app = Vue.createApp({
  data(){
    return {
    }
  }
}).component('navmenu',{  //component navmenu qui va remplacer le header en utilisant template en dessous
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
    <a class="btn" v-for="tab in tabs" :href="tab.path">{{tab.name}}</a>
  </nav>
  </header>
  `,
  data() {
    return { //les donnes qui seront utilisées dans le template
      tabs : [
        {name: 'Accueil', path: './index.html'},
        {name: 'Actualités', path: './actualites.html'},
        {name: 'Galerie', path: './galerie.html'},
        {name: 'Contact', path: './contact.html'}
      ]
    }
  }
}).component('articles',{ //component articles qui va mettre tous les articles sur la page web
  template : articles, //template decrit sur la ligne 18
  data() {
    return { //données passees dans chaque article
      articles: [
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"0"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"1"},
        {image : "https://via.placeholder.com/1200x150/",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"2"},
        {image : "../dist/img/plafond.png",description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",path:"#",id:"3"}
      ]
    }
  }
}).component('foot',{//component foot qui va mettre le footer sur chaque page web
  template : footer,//template decrit sur la ligne 3
  data() {
    return {//données pour les reseaux sociaux lesqelles sont dans le footer
      aa:[
        {path:"#", imgpath:"../dist/img/instagram-32.svg", alt:"LogoI"},
        {path:"#", imgpath:"../dist/img/facebook-32.svg", alt:"LogoF"},
        {path:"#", imgpath:"../dist/img/twitter-32.svg", alt:"LogoT"},
        {path:"https://www.youtube.com/watch?v=dQw4w9WgXcQ", imgpath:"../dist/img/youtube-32.svg", alt:"LogoYT"}
      ]
    }
  }
}).mount('body')//affectation de l'application dans le body car en dehors du body ca ne va pas marcher

//Notre essaie d'ajax mais on n'a pas pu le tester car il faut mettre tout sur un serveur
$('button[type="submit"]').click(function(){
  $.ajax({
    url:"./index.php",
    method:"post",
    datatype :"json",
  }).done(function(reponse){
    let rep = JSON.stringify(reponse)
    console.log(rep);
    let main = $('.main')
    main.append(reponse)
  }).fail(function(error){
      alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
  })
  .always(function(){
    alert("Requête effectuée");
    });
})


//au chargement du document les lignes suivantes vont s'executer
$( document ).ready(function() {
  let reseaux = $('.reseaux')
  reseaux.children().css('width','auto') //on definit la largeur des icones des reseaux sociaux a auto

  let afterRow = $('.row')
  //tous les images recuperent lq margin et la largeur suivantes
  afterRow.children().css('width','auto')
  afterRow.children().css('margin','3px')
  //tous les images se mettent dans le centre de la page
  afterRow.css('justify-content','center')

  //on ajout la margin a la video de la page d'accueil
  $(".ratio").css('margin','1em auto')

  //le nom de la page courante sera souligné
  let liens = $('a')
  liens.each(function(){
    if($(this).html()===document.title){
      $(this).css({'text-decoration': 'underline'})
    }
  })
})

let actualites = $('article')
actualites.each(function(){
  let article = $(this)
  let lien = article.children('a')
  let p = article.children('p')
  let img = article.children('img')
  lien.css('text-align','right')
  lien.css('margin-right',"1em")
  p.css('margin','0.5em')
  article.css('margin','0.5em')
  lien.click(function(){ //en cliquant sur chaque lien l'article va prendre sa forme de base
    p.css('overflow','visible')
    p.css('white-space','normal')
    article.css('height','auto')
    lien.hide()
  })
})


//le code de la carrousel
let li =$('#carrousel li')
li.parent().css('list-style-type', 'none')
li.children().css('width','100%')
let fst =li.first()
let now = fst
now.addClass('active')
let lst = li.last()

//si on met la souris sur la carroussel l'images arretent de changer jusqu'a moment qu'on enleve la souris de carroussel
$('#carrousel').hover(function(){
  clearInterval(myInterval)
},function(){
  myInterval=setInterval(changeNext,2000)
})

let myInterval=setInterval(changeNext,2000)

function changeNext(){
    li.removeClass('active')
    now.toggleClass('active')
    now = now.next()
    if(now.length === 0){
      now.toggleClass('active')
      now = fst
    }
}

function changePrev(){
    li.removeClass('active')
    now = now.prev()
    now.toggleClass('active')
    if(now.length === 0){
      now = lst
      now.toggleClass('active')
    }
}
