<template>
  <v-app>
    <nav class="container">
      <div class="link">
        <v-app-bar-title class="category">
          <a class="btn" href="#Panigale" @click="panigaleModal = !panigaleModal"> Panigale </a>
          <a class="btn" href="#StreetFighter" @click="streetModal = !streetModal"> Streetfighter </a>
          <a class="btn" href="#Supersport" @click="superModal = !superModal"> Supersport </a>
          <a class="btn" href="#Diavel" @click="diavelModal = !diavelModal"> Diavel </a>
          <a class="btn" href="#Hypermotard" @click="hyperModal = !hyperModal"> Hypermotard </a>
        </v-app-bar-title>
      </div>
    </nav>
    <v-btn class="burot" icon href="/dash">
      <v-icon size="large" icon="mdi-home" color="orange"></v-icon>
    </v-btn>
    <v-container class="body">
      <div>
        <v-spacer class="space">
          <h1 class="he1"> Choose Your Model </h1>
        </v-spacer>
      </div>
      <v-divider color="white" class="border-opacity-50"> </v-divider>
      <div>
        <v-card-actions>
          <h2 id="Panigale" class="he2"> Panigale </h2>
          <v-btn :icon="panigaleModal ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="panigaleModal = !panigaleModal"
            color="orange" class="icon1">
          </v-btn>
        </v-card-actions>
      </div>
      <v-expand-transition>
        <div v-show="panigaleModal">
          <v-row>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'Panigale v2'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="v2" cover></v-img>
                <v-card-title>
                  Panigale v2
                </v-card-title>
                <v-card-subtitle>
                  The Revolution of Speed
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="icon1" :icon="cardOpen === 'Panigale v2'
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'" @click="cardToggle('Panigale v2')" color="orange"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'Panigale v2'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <v-col cols="10" :md="4">
              <v-card max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'Panigale v4'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="v4" cover></v-img>
                <v-card-title>
                  Panigale v4 S
                </v-card-title>
                <v-card-subtitle>
                  The Revolution of Speed
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="icon1" :icon="cardOpen === 'Panigale v4'
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'" @click="cardToggle('Panigale v4')" color="orange"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'Panigale v4'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <v-col cols="10" :md="4">
              <v-card max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'Panigale v4 S'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="v4" cover></v-img>
                <v-card-title>
                  Panigale v4 S
                </v-card-title>
                <v-card-subtitle>
                  The Revolution of Speed
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="icon1" :icon="cardOpen === 'Panigale v4s'
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'" @click="cardToggle('Panigale v4s')" color="orange"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'Panigale v4s'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <!-- <v-col  cols="10" :md="4">
                            <v-card
                                max-width="400"
                              >
                              <v-btn 
                                class="orderbtn" 
                                @click="openOrder({
                                  brand: 'DUCATI',
                                  model: 'Panigale v4 S'
                                })"
                                > 
                                  ORDER HERE 
                              </v-btn>
                              <v-img
                                height="300px"
                                :src="v4"
                                cover
                              ></v-img>
                              <v-card-title>
                                Panigale v4 S
                              </v-card-title>
                              <v-card-subtitle>
                                The Revolution of Speed
                              </v-card-subtitle>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  :icon="cardOpen === 'Panigale v5' 
                                  ? 'mdi-chevron-up' 
                                  : 'mdi-chevron-down'"
                                  @click="cardToggle('Panigale v5')"
                                  color="orange"
                                ></v-btn>
                              </v-card-actions>
                              <v-expand-transition>
                                <div v-show="cardOpen === 'Panigale v5'">
                                  <v-divider></v-divider>
                                  <v-card-text>
                                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                  </v-card-text>
                                </div>
                              </v-expand-transition>
                            </v-card>
                          </v-col> -->
          </v-row>
        </div>
      </v-expand-transition>
      <br>
      <div>
        <v-card-actions>
          <h2 id="StreetFighter" class="he2"> StreetFighter </h2>
          <v-btn :icon="streetModal ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="streetModal = !streetModal"
            color="orange" class="icon1">
          </v-btn>
        </v-card-actions>
      </div>
      <v-expand-transition>
        <div v-show="streetModal">
          <v-row>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'StreetFighter v2'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="sfv2" cover></v-img>
                <v-card-title>
                  StreetFighter v2
                </v-card-title>
                <v-card-subtitle>
                  Sports Naked
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="icon1" :icon="cardOpen === 'StreetFighter v2'
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'" @click="cardToggle('StreetFighter v2')" color="orange"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'StreetFighter v2'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'StreetFighter v4'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="sfv4" cover></v-img>
                <v-card-title>
                  StreetFighter v4
                </v-card-title>
                <v-card-subtitle>
                  Sports Naked
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="icon1" :icon="cardOpen === 'StreetFighter v4'
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'" @click="cardToggle('StreetFighter v4')" color="orange"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'StreetFighter v4'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'StreetFighter v4 -Lambo'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="v4lambo" cover></v-img>
                <v-card-title>
                  StreetFighter v4
                </v-card-title>
                <v-card-subtitle>
                  Lamborghini Collaboration
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-expand-transition>
                    <v-btn class="icon1" :icon="cardOpen === 'Lambo v4'
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down'" @click="cardToggle('Lambo v4')" color="orange"></v-btn>
                  </v-expand-transition>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'Lambo v4'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <br>
          </v-row>
        </div>
      </v-expand-transition>
      <div>
        <v-card-actions>
          <h2 id="Supersport" class="he2"> SuperSport </h2>
          <v-btn :icon="superModal ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="superModal = !superModal"
            color="orange" class="icon1">
          </v-btn>
        </v-card-actions>
      </div>
      <v-expand-transition>
        <div v-show="superModal">
          <v-row>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'SuperSport 950 S'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="sp950" cover></v-img>
                <v-card-title>
                  SuperSport 950 S
                </v-card-title>
                <v-card-subtitle>
                  Adbot
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="icon1" :icon="cardOpen === 'SuperSport S'
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'" @click="cardToggle('SuperSport S')" color="orange"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'SuperSport S'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
      <br>
      <div>
        <v-card-actions>
          <h2 id="Diavel" class="he2"> Diavel </h2>
          <v-btn :icon="diavelModal ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="diavelModal = !diavelModal"
            color="orange" class="icon1">
          </v-btn>
        </v-card-actions>
      </div>
      <v-expand-transition>
        <div v-show="diavelModal">
          <v-row>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'Diavel 1260'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="diavel" cover></v-img>
                <v-card-title>
                  Diavel 1260
                </v-card-title>
                <v-card-subtitle>
                  Sporty Muscular
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-expand-transition>
                    <v-btn class="icon1" :icon="cardOpen === 'Diavel 1260'
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down'" @click="cardToggle('Diavel 1260')" color="orange"></v-btn>
                  </v-expand-transition>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'Diavel 1260'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'XDiavel 1260'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="xdiavel" cover></v-img>
                <v-card-title>
                  XDiavel 1260
                </v-card-title>
                <v-card-subtitle>
                  Sporty Muscular
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-expand-transition>
                    <v-btn class="icon1" :icon="cardOpen === 'XDiavel'
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down'" @click="cardToggle('XDiavel')" color="orange"></v-btn>
                  </v-expand-transition>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'XDiavel'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <!-- <v-col cols="10" :md="4">
                            <v-card
                                class="mx-auto"
                                max-width="400"
                              >
                              <v-img
                                height="300px"
                                :src="mulv4"
                                cover
                              ></v-img>
                              <v-card-title>
                                Multistrada v4
                              </v-card-title>
                              <v-card-subtitle>
                                Stretch your limits
                              </v-card-subtitle>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-expand-transition>
                                <v-btn
                                  :icon="cardOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                  @click=""
                                  color="orange"
                                ></v-btn>
                                </v-expand-transition>
                              </v-card-actions>
                                <div v-show="">
                                  <v-divider></v-divider>
                                  <v-card-text>
                                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                  </v-card-text>
                                </div>
                            
                            </v-card>
                          </v-col> -->
          </v-row>
        </div>
      </v-expand-transition>
      <br>
      <div>
        <v-card-actions>
          <h2 id="Hypermotard" class="he2"> Hypermotard </h2>
          <v-btn :icon="hyperModal ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="hyperModal = !hyperModal"
            color="orange" class="icon1">
          </v-btn>
        </v-card-actions>
      </div>
      <v-expand-transition>
        <div v-show="hyperModal">
          <v-row>
            <v-col cols="10" :md="4">
              <v-card :max-width="400">
                <v-btn class="orderbtn" @click="openOrder({
                  brand: 'DUCATI',
                  model: 'Motard 950 RVE'
                })">
                  ORDER HERE
                </v-btn>
                <v-img height="300px" :src="motard" cover></v-img>
                <v-card-title>
                  Hypermotard 950 RVE
                </v-card-title>
                <v-card-subtitle>
                  Play time. Show time.
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-expand-transition>
                    <v-btn class="icon1" :icon="cardOpen === 'RVE'
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down'" @click="cardToggle('RVE')" color="orange"></v-btn>
                  </v-expand-transition>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="cardOpen === 'RVE'">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                      data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            <br>
          </v-row>
        </div>
      </v-expand-transition>
    </v-container>
    <v-fade-transition>
      <v-btn v-if="showButton" color="orange" icon class="back-to-top" @click="scrollToTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-fade-transition>
    <Orders v-model:orderModal="orderModal" :selectedBike="selectedBike">
    </Orders>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import adv from '../assets/Honda/Adv160.png';
import v2 from '../assets/Ducati/Panigalev2.png';
import v4 from '../assets/Ducati/Panigalev4.png';
import sp950 from '../assets/Ducati/Supersport950.png';
import sfv2 from '../assets/Ducati/Streetfighterv2.png';
import sfv4 from '../assets/Ducati/Streetfighterv4.png';
import v4lambo from '../assets/Ducati/Streetfighterv4lambo.png';
import diavel from '../assets/Ducati/Diavel1260.png';
import xdiavel from '../assets/Ducati/XDiavel.png';
import mulv4 from '../assets/Ducati/multiv4.png';
import motard from '../assets/Ducati/HyperMotard.png';
import Orders from '../views/Orders.vue';

const panigaleModal = ref(false);
const streetModal = ref(false);
const superModal = ref(false);
const diavelModal = ref(false);
const hyperModal = ref(false);
const showButton = ref(false)
const orderModal = ref(false);

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

const openOrder = (bike) => {
  selectedBike.value = bike
  orderModal.value = true
};

const selectedBike = ref({
  brand: '',
  model: ''
});

const cardOpen = ref(null);

const cardToggle = (name) => {
  cardOpen.value = cardOpen.value === name ? null : name
}

</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  border-radius: 100px;
}

.body {
  border-radius: 5px;
}

.he1 {
  font-size: 60px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}

.space {
  margin-top: 10%;
}

.container {
  height: 5%;
  background-color: black;
  text-align: right;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  max-width: none;
}

.link {
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
}

.category {
  margin-top: 20px;
  text-decoration: none;
  font-size: 10px;
}

.mx-auto {
  width: 50%;
}

.btn {
  padding: 9px;
  margin-right: 3%;
  border: 0px;
  color: azure;
  text-align: left;
  text-decoration: none;
  font-size: 20px;
}

.burot {
  margin-top: 10px;
  margin-left: 10px;
}

.he2 {
  text-align: center;
  font-size: 40px;
  font-family: 'Courier New', Courier, monospace;
}

.spacer {
  text-align: center;
}

.icon1 {
  font-size: 20px;
}

.icon1:hover {
  color: orange;
}

.orderbtn {
  border: 0px;
  padding: 9px;
  margin-right: 20%;
  margin-left: 5%;
  margin-top: 3%;
  width: fit-content;
  background-color: #1c2836;
  font-size: 15px;
}

.orderbtn:hover {
  background-color: #f95959;
}
</style>