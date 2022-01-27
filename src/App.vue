<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="font-family: 'Montserrat', sans-serif;background:rgb(41, 58, 111) none repeat scroll 0% 0% !important">
  <a class="navbar-brand" href="#"><b>Covid19-Info</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item" id="item-link">
        <router-link class="nav-link text-white" id="lom" to="/"><i class="fas fa-home"></i> Accueil</router-link> 
      </li>
      <li class="nav-item" id="item-link">
        <router-link class="nav-link text-white"  id="lom" to="/Pays"><i class="fas fa-globe-africa"></i> Liste des pays</router-link> 
      </li>
      <li class="nav-item" id="item-link">
        <router-link class="nav-link text-white" id="lom" to="/Apropos"><i class="fas fa-question-circle"></i> A propos</router-link> 
      </li>
    </ul>
  </div>
</nav>
       <router-view/>
</template>


<script>
 
export default {
  name: 'App',
 
}
</script>

<style>
 body{
  background:#020b1c
 }

#item-link:hover{
background: white!important;
}

#lom:hover{
  color:#b52020!important;
}
</style>
