<template>
  <v-container>
    <v-row>
      <v-col cols="4">
         <PersonalInformation @navigate-to="handleNavigation"/>
      </v-col>
       <v-col cols="8" >
        <div id="about-section"><AboutView /></div>
      
      <v-divider class="my-8"></v-divider>
      <div id="experience-section"><Experiences /></div>
       <v-divider class="my-8"></v-divider>
       <div id="porjects-section"><PorjectList/></div>
      </v-col>
    </v-row>
  </v-container>   
</template>

<script>
import {  ref } from 'vue';

// Components

import PersonalInformation from '@/components/PersonalInformation.vue';
import AboutView from './AboutView.vue';
import Experiences from '@/components/OverAllExperiences.vue';
import PorjectList from '@/components/PorjectList.vue';


export default {
  name: 'HomeView',

  components: {
   
    PersonalInformation,
    AboutView,
    Experiences,
    PorjectList
  },
  setup(){
    const aboutComponent=ref(null)
    const experienceComponent=ref(null)

    const handleNavigation=(section)=>{
      if(section==='experiences' && experienceComponent.value ){
         experienceComponent.value.$el.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
      else if(section==='about' && aboutComponent.value ){
         aboutComponent.value.$el.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    return{
      aboutComponent,
      experienceComponent,
      handleNavigation
    }
  }
};
</script>
