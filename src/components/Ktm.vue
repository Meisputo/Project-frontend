<template>
  <v-app>
    <nav class="container">
      <div class="link">
        <v-app-bar-title  class="category"> 
          <a class="btn" href=""> Panigale </a>
          <a class="btn" href=""> Streetfighter </a>
          <a class="btn" href=""> Supersport </a>
          <a class="btn" href=""> Diavel </a>
          <a class="btn" href=""> Hypermotard  </a>                  
        </v-app-bar-title>
      </div>
    </nav>
    <v-btn class="burot" icon href="/dash">
          <v-icon size="x-large" icon="mdi-home" color="orange" ></v-icon>    
        </v-btn>    
    <v-container class="body">
      <div>
        <v-spacer class="space">  <h1 class="he1"> Choose Your Model </h1></v-spacer>
      </div>  
        <v-divider color="white" class="border-opacity-50" > </v-divider>
      <div>
        <v-card-actions  >
          <h2 class="he2"> Panigale </h2>
            <v-btn
              :icon="panigaleModal ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="panigaleModal = !panigaleModal"
              color="orange"
              class="icon1"
            >
            </v-btn>
        </v-card-actions>
      </div>
      <div v-show="panigaleModal">
        <v-row>
          <v-card
              class="mx-auto"
              max-width="400"
            >
            <v-img
              height="300px"
              :src="v2"
              cover
            ></v-img>
            <v-card-title>
              Panigale v2
            </v-card-title>
            <v-card-subtitle>
              The Revolution of Speed
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="open = !open"
                color="orange"
              ></v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="open">
                <v-divider></v-divider>
                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
  import { ref , onMounted, onUnmounted } from 'vue';
  import v2 from '../assets/Ducati/Panigalev2.png';

    const open = ref(false);
    const panigaleModal = ref(false);

    const showButton = ref(false)

    const handleScroll = () => {
      showButton.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
.body{
  border-radius: 5px;
}
.he1{
  font-size: 60px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}
.space{
  margin-top: 10%;
}
.container{
  background-color: black;
  text-align: right;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 5px;
}
.link{
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
}
.category{
  margin-top: 20px;
  margin-left: 30px;
  text-decoration: none;
}
.mx-auto{
  width: 50%;
}
.btn{
  padding: 9px;
  margin-right: 3%;
  border: 0px;
  color: azure;
  text-align: left;
  text-decoration: none;
}
.burot{
  margin-top: 10px;
  margin-left: 10px;
}
.he2{
  text-align: center;
  font-size: 40px;
  font-family: 'Courier New', Courier, monospace;
}
.spacer{
  text-align: center;
}
.icon1{
  font-size: 20px;  
}
</style>