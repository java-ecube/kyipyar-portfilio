<template>
   <v-row>
    <v-col cols="12" style="color: #111226; font-family: 'Times New Roman', Times, serif; font-size: 300%;">
        KYI PYAR LWIN
    </v-col>
   </v-row>   
    <v-table striped="even" style="background-color: #9C9BBF; color: #111226; font-family: 'Times New Roman', Times, serif; font-size: 150%;">
    <tbody>
      <tr
        v-for="information in inf"
        :key="information.text"
      >
              <td><v-icon style="color: #5E608C; font-size: 80%;">{{ information.icon }} </v-icon> &nbsp;&nbsp; {{ information.text }}</td>
      </tr>
    </tbody>
  </v-table>
  
  <v-row>
    <v-col cols="12">
        <v-card
            class="mx-auto my-16"
            max-width="400"
        >
            <v-img
            class="align-end text-white"
            height="200"
            :src="require('../assets/two.jpg')"
            cover
            ></v-img>
        </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">       
        <v-breadcrumbs :items="items"></v-breadcrumbs>
     
    </v-col>
    </v-row>
    <div>    
    <a :href="pdfUrl" :download="pdfFileName" class="download-link">
      Download CV
    </a>
  </div>
   

</template>

<script>


export default({
    name:'PersonalInformation',
    data: () => ({
    inf:[
        {
            icon:'mdi-phone-in-talk',
            text:'(95)9263516476'
        },
         {
            icon:'mdi-phone-in-talk',
            text:'kyipyarlwin9@gmail.com'
        },
         {
            icon:'mdi-phone-in-talk',
            text:'https://github.com/java-ecube'
        },
        {
            icon:'mdi-phone-in-talk',
            text:'Loikaw, Kayah State'
        },
        {
            icon:'mdi-phone-in-talk',
            text:'link in k,'
        },
    ],
    items:[
        {
          title:'About',
          disabled:false,
          href:'#about-section'
        },
         {
          title:'Experience',
          disabled:false,
          href:'#experience-section'
        },
         {title:"Projects",
          disabled:false,
          href:'#porjects-section'
        }
    ],
    pdfUrl: '/Ms_Kyi_Pyar_Lwin.pdf', 
    pdfFileName: 'Ms_Kyi_Pyar_Lwin.pdf'
  }),
   
})
</script>
