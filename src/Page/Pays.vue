<template>
  <div class="container">
    <h1 class="text-white"><i class="fas fa-globe-africa"></i>  Statistique par Pays </h1>
    <h5 class="text-white" >
      Retrouvez les statistiques des différentes impacte de la Covid-19 par pays
    </h5>
     <div class="col-6 mb-4 mt-4">
    <input type='text' placeholder="Entrez le nom d'un pays" class="form-control" @keypress="Rechercher"  v-model="Nom"  name="Nom">
    </div>
    <table class="table">
  <thead class="thead-dark" style="background:#042a53;color:white ">
    <tr>
       
      <th scope="col"> <i class="fas fa-globe"></i> Pays</th>
      <th scope="col"><i class="fas fa-users"></i> Nombre de Cas</th>
      <th scope="col"><i class="fas fa-users-slash"></i> Nombre Mort</th>
      <th scope="col"><i class="fas fa-syringe"></i> Soigné/Sous traitement</th>
    </tr>
  </thead>
  <tbody style="background:white">
    <tr v-for="pays in search_data" v-bind:key="pays.CountryCode">

      <td>{{pays.Country}} </td>
      <td>{{pays.TotalConfirmed}}</td>
      <td>{{pays.TotalDeaths}}</td>
      <td>{{pays.TotalConfirmed-pays.TotalDeaths}}</td>

    </tr>
  </tbody>
</table>
 
     
  </div>
    
</template>

<script>
import axios from "axios";
 
export default {
  name: 'Pays',
  data(){
    return{
      pays_data:[],
      search_data:[],
    }
  },

  methods: {
    
    Pays_info(){
      axios.get("https://api.covid19api.com/summary")
      .then(response=>{ 
        this.pays_data = response.data.Countries
        this.search_data=response.data.Countries
      })
      .catch(error=>{console.log(error)})
    },

    Rechercher(e){ 
    let country=e.target.value
      console.log(country)

      if(country=="" || country==" "){
        this.search_data=this.pays_data
      }
       else{
        let search_country=[]
         
        for (var i=0; i <this.pays_data.length; i++) {
              console.log(this.pays_data[i].Country.indexOf(country))
               if(this.pays_data[i].Country.indexOf(country)>0 || this.pays_data[i].Country.indexOf(country)==0){
                search_country.push(this.pays_data[i])
               } 
        }
        
        this.search_data=search_country
        console.log(this.search_data)
       }

    } 
    
  },

  beforeMount(){
    this.Pays_info()
 }
}




 
</script>

 