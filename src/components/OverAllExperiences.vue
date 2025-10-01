<template>
    <v-row>
        <v-col cols="12">
            <h1 style="color: #5E608C;"> Experience </h1>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" v-for="job in jobs" :key="job.companyName">
            <WorkExperience :work="job"></WorkExperience>
        </v-col>
    </v-row>
    
</template>
<script>
import WorkExperience from './WorkExperience.vue';

export default ({
    name:'OverAllExperiences',
    components:{ WorkExperience},
    data: () => ({
    jobs:[
        {
            position:"AAA (  )",
            companyName:"AAA",
            des:["<v-btn @click=addToDo prepend-icon=mdi-home>Add</v-btn>"," <v-btn @click=deleteToDo append-icon=mdi-delete>Delete</v-btn>"]
        },
         {
            position:"BBB (  )",
            companyName:"BBB",
            des:["<v-btn @click=addToDo prepend-icon=mdi-home>","Add</v-btn> <v-btn @click=deleteToDo"," append-icon=mdi-delete>Delete</v-btn>"]
        },
         {
            position:"CCC (DDD  )",
            companyName:"CCC",
            des:["<v-btn @click=addToDo prepend-icon=mdi-home>Add</v-btn> <v-btn @click=deleteToDo append-icon=mdi-delete>Delete</v-btn>"]
        },
         {
            position:"DDD (  )",
            companyName:"DDD",
            des:["<v-btn @click=addToDo prepend-icon=mdi-home>","Add</v-btn> <v-btn @click=deleteToDo"," append-icon=mdi-delete>","Delete</v-btn>"]
        },
    ]
  }),
    
})
</script>
