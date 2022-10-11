<?php
  if(isset($_POST['Nom'])&&isset($_POST['Prenom'] && isset($_POST['Mail'])
  {
    echo json_encode("<p> Votre demande est enregistre</p>");
  }else{
    echo json_encode("<p> Votre demande n'a pas pu etre enregistre</p>");
  }

 ?>
