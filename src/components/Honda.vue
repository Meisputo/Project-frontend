<template>
    <v-app>
        <nav class="container">
            <div class="link">
                <v-app-bar-title  class="category"> 
                  
                  <!-- <a class="btn" href="/scooters"> Scooters </a>
                  <a class="btn" href=""> Sport </a> -->
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
                  <v-row>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
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
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
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
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
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
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="open = !open"
                          color="orange"
                        ></v-btn>
                      </v-card-actions>
                      
                        <div v-show="open">
                          <v-divider></v-divider>
                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                     
                    </v-card>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-expand-transition>
                        <v-btn
                          :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="open = !open"
                          color="orange"
                        ></v-btn>
                        </v-expand-transition>
                      </v-card-actions>
                        <div v-show="open">
                          <v-divider></v-divider>
                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                     
                    </v-card>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-expand-transition>
                        <v-btn
                          :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="open = !open"
                          color="orange"
                        ></v-btn>
                        </v-expand-transition>
                      </v-card-actions>
                        <div v-show="open">
                          <v-divider></v-divider>
                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                     
                    </v-card>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-expand-transition>
                        <v-btn
                          :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="open = !open"
                          color="orange"
                        ></v-btn>
                        </v-expand-transition>
                      </v-card-actions>
                        <div v-show="open">
                          <v-divider></v-divider>
                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                     
                    </v-card>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-expand-transition>
                        <v-btn
                          :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="open = !open"
                          color="orange"
                        ></v-btn>
                        </v-expand-transition>
                      </v-card-actions>
                        <div v-show="open">
                          <v-divider></v-divider>
                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                     
                    </v-card>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-expand-transition>
                        <v-btn
                          :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="open = !open"
                          color="orange"
                        ></v-btn>
                        </v-expand-transition>
                      </v-card-actions>
                        <div v-show="open">
                          <v-divider></v-divider>
                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                     
                    </v-card>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                      >
                      <v-img
                        height="300px"
                        :src="adv"
                        cover
                      ></v-img>
                      <v-card-title>
                        Perfect for Offroad
                      </v-card-title>
                      <v-card-subtitle>
                        ADV 160
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-expand-transition>
                        <v-btn
                          :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="open = !open"
                          color="orange"
                        ></v-btn>
                        </v-expand-transition>
                      </v-card-actions>
                        <div v-show="open">
                          <v-divider></v-divider>
                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                     
                    </v-card>
                  </v-row>
                </v-container>
    <v-fade-transition>
      <v-btn
        v-if="showButton"
        color="orange"
        icon
        class="back-to-top"
        @click="scrollToTop"
      >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    </v-fade-transition> 
    </v-app>
</template>

<script setup>
import { VBtn, VBtnGroup } from 'vuetify/components';
import { RouterView } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import adv from '../assets/Adv160.png';
    
  const open = ref(false);

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
/* a{
  text-decoration: none;
  margin-top: 0%;
  margin-right: 30px;
  margin-bottom: 50px;
} */
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
</style>