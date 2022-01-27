<template>
  <div class="container">
    <h1 style="font-size: 72px" class="text-white">Bienvenu sur Covid19-Info</h1>
    
    <h4 class="animate__animated animate__backInRight text-white">
     <i class="fas fa-chart-line"></i> 
      Obtenez les statistiques en temps réel de l'évolution du covid19 sur le plan mondial.
    </h4>
    
    <div class="row" >
      <div class="col-7" ><br/>
        <div class="row" style="" > 
          <div class="col-4 text-white" style="border:#020b1c 2px solid; padding:10px;font-size:20px;background:linear-gradient(#3598c8, #06603a);border-radius:10px " >
           <span class="text-center">{{global.TotalConfirmed}}</span>
           <br/> <i class="fas fa-users"></i> Nombre de Cas 
          </div>
          <div class="col-4 text-white"  style="border:black 2px solid; padding:10px;font-size:20px;background:linear-gradient(#25bda1, #1e8097);border-radius:10px">{{global.TotalConfirmed-global.TotalDeaths}}<br/><i class="fas fa-syringe"></i>  Soigné /Traitement</div>
          <div class="col-4 text-white"  style="border:black 2px solid; padding:10px;font-size:20px;background:linear-gradient(#ec3839, #6a0e17);border-radius:10px">{{global.TotalDeaths}}<br/><i class="fas fa-users-slash"></i> Nombre de Mort</div>
        </div>
    
     
      <div class="mb-4 mt-4 pb-2" style="background:white;font-size:20px;border-radius:10px; ">
         <table class="table">
             <thead class="thead-dark" style="background:#042a53;color:white ">
               <tr>
       
                 <th scope="col"> <i class="fas fa-globe"></i> Pays</th>
                 <th scope="col"><i class="fas fa-users"></i> Nombre de Cas</th>
                 <th scope="col"><i class="fas fa-users-slash"></i> Nombre Mort</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for="pays in pays_home" v-bind:key="pays.CountryCode">

                 <td>{{pays.Country}} </td>
                 <td>{{pays.TotalConfirmed}}</td>
                 <td>{{pays.TotalDeaths}}</td>

               </tr>
             </tbody>
            </table>
           </div>
           <div class="text-center ">
            <router-link to="/Pays" class="btn-plus animate__animated animate__fadeInUp">Voir plus de statistiques</router-link> 
           </div>
      </div>
      <div class="col-4"> <img class="svg-home" src="../assets/covid.png"></div>
     </div>
   </div>
    
</template>

<script>
import axios from "axios";
import "./Accueil.css"
export default {
  name: 'Accueil',
  data(){
    return{
      global:[],
      pays_infos:[],
      pays_home:[]
    }
  },

  methods: { 
    Glogal_up(){
      axios.get("https://api.covid19api.com/world/total").then(response=>{ this.global = response.data })
    },

    Pays_up(){
      axios.get("https://api.covid19api.com/summary").then(response=>{ this.pays_infos = response.data.Countries ; })
    },

    Home_init(){
          axios.get("https://api.covid19api.com/summary")
          .then(response=>{
           for (var i = 0; i <3 ; i++) {
            this.pays_home[i]=response.data.Countries[i];
          }
      })
      
      
    }

  },

  beforeMount(){
    this.Glogal_up()
    this.Pays_up()
    this.Home_init()
 }, 

}
 
</script>
 
 