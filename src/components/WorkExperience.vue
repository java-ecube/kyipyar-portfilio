<template>
  <v-card
    class="mx-auto"
    max-width="100%"
    style="background-color: #5E608C;"
  >  

    <v-card-title>
      {{ props.work.position }}
    </v-card-title>

    <v-card-subtitle>
      {{ props.work.companyName }}
    </v-card-subtitle>

     <v-card-actions>
      <v-btn
        color="#1E2040"
        text="Job Description"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <ul v-for="descprtion in  props.work.des" :key="descprtion">
            <li>{{ descprtion }}</li>
          </ul>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
  const show = ref(false)
  const props = defineProps({
    work:{
        type:Object
    }
  })

  
</script>