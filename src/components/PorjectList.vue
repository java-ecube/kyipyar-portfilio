<template>
    <v-row>
        <v-col cols="12">
            <h1 style="color: #5E608C;"> Projects </h1>
        </v-col>
    </v-row>
      <v-row >
        <v-col cols="6"  v-for="prj in projects" :key="prj.title"  >
        <v-card style="background-color: #5E608C; height: 150px;">
            <v-card-title>{{ prj.title }}</v-card-title>
            <v-card-subtitle><a :href=prj.link target="_blank">Link</a></v-card-subtitle>
           <v-card-text>{{ prj.des }}</v-card-text>
        </v-card>     
    </v-col>
    </v-row>    
</template>
<script>


export default({
    data: () => ({
    projects:[
        {
           title:'BabyStore',
            link:"https://github.com/java-ecube/coin-game",
            des:'create a online-shopping proji use Vue.js, Vuetify, Router, Store'
        },
        {
           title:'Student Record',
            link:"https://www.youtube.com",
            des:'create a Student Record  project deeply use mapping concepts with Spring-boot, JPA, MySQL server'
        },
    ]
    })   
})
</script>
