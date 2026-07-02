<template>
    <v-app class="body">
      <v-app-bar class="container" color="#233142" > 
          <v-app-bar-title class="title"> Gen Trade </v-app-bar-title> 
            <v-btn class="btn" @click="orderModal = true"> ORDER </v-btn>
            <v-btn class="btn"> ABOUT </v-btn> 
            <div 
              style="margin-right: 3%; margin-left: 1px; ">
                <v-menu transition="slide-y-transition" open-on-hover>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        class="btn"
                        color="primary"
                        v-bind="props"
                      >
                        BRANDS
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(brand, index) in brands"
                        :key="brand.url"
                        :value="brand"
                      >
                        <a class="link" :href="brand.url" > {{ brand.url }} </a>
                      </v-list-item>
                    </v-list>
                </v-menu>
            </div>
      </v-app-bar>
    
    <v-spacer class="space">  <h1 class="he1"> New Arrivals </h1></v-spacer>
    <v-container>
      <v-row>
        <v-card
          class="mx-auto" 
          max-width="344" 
          @click="bladeModal = true" 
          >
          <v-card-title> Raider Blade </v-card-title>
            <v-card-subtitle> SUZUKI </v-card-subtitle>
            <v-img :src="blade" height="270" :width="344"> </v-img>
        </v-card> 
            <v-dialog v-model="bladeModal" 
              max-width="600"> 
                <v-card class="" >
                  <v-btn 
                    class="orderbtn" 
                    @click="openOrder({
                        brand: 'SUZUKI',
                        model: 'RAIDER BLADE'
                      })"> ORDER HERE </v-btn>
                  <v-card-title> RAIDER BLADE </v-card-title>
                    <v-card-subtitle> SUZUKI </v-card-subtitle>
                    <v-img :src="blade" height="500" :width="800"> </v-img>
                      <v-card-text>
                        Slipper Clutch Assist System(SCAS)Suzuki Clutch Assist System (SCAS) helps improve both control and comfort. 
                        Its slipper clutch function partially disengages the clutch during hard downshifts, reducing engine braking for smoother, more stable deceleration. 
                        Simultaneously, its assist function increases the clutch's clamping force upon acceleration, allowing us to use lighter springs. 
                        This results in a significantly lighter clutch lever pull, drastically reducing left-hand fatigue in traffic or on long rides.
                      </v-card-text>
                      <v-card-text> 
                        <h3>4-stroke, 1-cylinder, DOHC, liquid-cooled, fuel-injected engine equipped with Suzuki Eco Performance (SEP) </h3>
                      </v-card-text>
                      
                </v-card>
            </v-dialog>
          <v-card 
              class="mx-auto" 
              max-width="344" 
              @click="proModal = true"
            >
            <v-card-title> Raider Pro </v-card-title>
              <v-card-subtitle> SUZUKI </v-card-subtitle>
            <v-img :src="pro" height="270" :width="344"> </v-img>
          </v-card>
              <v-dialog v-model="proModal" 
                max-width="600"> 
                  <v-card>
                    <v-btn 
                      class="orderbtn" 
                      @click="openOrder({
                        brand: 'SUZUKI',
                        model: 'RAIDER PRO'
                      })"> ORDER HERE </v-btn>
                    <v-card-title> RAIDER PRO </v-card-title>
                      <v-card-subtitle> SUZUKI </v-card-subtitle>
                      <v-img :src="pro" height="500" :width="800"> </v-img>
                        <v-card-text>
                          Keyless Ignition System
                          First-ever underbone model equipped with an advanced keyless ignition system, 
                          enhancing both convenience and security.
                        </v-card-text>
                        <v-card-text> 
                          <h3>Anti-lock Braking System (ABS)</h3>
                        </v-card-text>
                  </v-card>
              </v-dialog>
          <v-card 
            class="mx-auto" 
            max-width="344" 
            @click="sniperModal = true" 
          >
            <v-card-title> Sniper 155r </v-card-title>
              <v-card-subtitle> YAMAHA </v-card-subtitle>
              <v-img :src="sniper" height="270" :width="344"> </v-img>
          </v-card>
              <v-dialog v-model="sniperModal" 
                max-width="600"> 
                  <v-card>
                    <v-btn 
                      class="orderbtn" 
                      @click="openOrder({
                        brand: 'YAMAHA',
                        model: 'SNIPER 155r'
                      })"> ORDER HERE </v-btn>
                    <v-card-title> SNIPER 155r </v-card-title>
                      <v-card-subtitle> YAMAHA </v-card-subtitle>
                      <v-img :src="sniper" height="500" :width="800"> </v-img>
                        <v-card-text>
                          <h3> Anti-lock Braking System (ABS)
                          gives you maximum braking control</h3>
                        </v-card-text>
                        <v-card-text> 
                          Variable Valve Actuation (VVA)
                          Uses two intake cams: one for low/mid RPM and one for high RPM. 
                          It switches automatically for smooth riding at any speed, 
                          boosting intake efficiency and overall performance.
                        </v-card-text>
                  </v-card>
              </v-dialog>
          <v-card
            class="mx-auto" 
            max-width="344"  
            @click="winnerModal = true"
          >
            <v-card-title> Winner X  </v-card-title>
              <v-card-subtitle> HONDA </v-card-subtitle>
              <v-img :src="winner" height="270" :width="344"> </v-img>
          </v-card>
              <v-dialog 
                v-model="winnerModal" 
                max-width="600"
                > 
                  <v-card>
                    <v-btn 
                      class="orderbtn" 
                      @click="openOrder({
                        brand: 'HONDA',
                        model: 'WINNER X'
                      })"> ORDER HERE </v-btn>
                    <v-card-title> WINNER X </v-card-title>
                      <v-card-subtitle> HONDA </v-card-subtitle>
                      <v-img :src="winner" height="500" :width="800"> </v-img>
                        <v-card-text>
                          Keyless Ignition System
                          First-ever underbone model equipped with an advanced keyless ignition system, 
                          enhancing both convenience and security.
                        </v-card-text>
                        <v-card-text> 
                          <h3>Anti-lock Braking System (ABS)</h3>
                        </v-card-text>
                  </v-card>
              </v-dialog>
          <v-card 
            class="mx-auto" 
            max-width="344" 
            @click="advModal = true"
          >
            <v-card-title> ADV 160 </v-card-title>
              <v-card-subtitle> HONDA </v-card-subtitle>
              <v-img :src="adv" height="270" :width="344"> </v-img>
          </v-card>
              <v-dialog 
                v-model="advModal" 
                max-width="600"
              > 
                <v-card>
                  <v-btn class="orderbtn" 
                    @click="orderModal = true"> ORDER HERE 
                  </v-btn>
                    <v-card-title> ADV 160 </v-card-title>
                      <v-card-subtitle> HONDA </v-card-subtitle>
                        <v-img :src="adv" height="500" :width="800"> </v-img>
                          <v-card-text>
                            Keyless Ignition System
                            First-ever underbone model equipped with an advanced keyless ignition system, 
                            enhancing both convenience and security.
                          </v-card-text>
                          <v-card-text> 
                            <h3>Anti-lock Braking System (ABS)</h3>
                          </v-card-text>
                </v-card>
              </v-dialog>
          <v-card 
            class="mx-auto" 
            max-width="344" 
            @click="nmaxModal = true" 
          >
            <v-card-title> Nmax 155 </v-card-title>
              <v-card-subtitle> YAMAHA </v-card-subtitle>
              <v-img :src="nmax" height="270" :width="344"> </v-img>
          </v-card>
              <v-dialog 
                v-model="nmaxModal" 
                max-width="600"
              > 
                  <v-card >
                    <v-btn 
                      class="orderbtn" 
                      @click="openOrder({
                        brand: 'YAMAHA',
                        model: 'NMAX'
                      })"
                      > 
                        ORDER HERE 
                    </v-btn>
                      <v-card-title > NMAX </v-card-title>
                        <v-card-subtitle> YAMAHA </v-card-subtitle>
                          <v-img 
                            :src="nmax" 
                            height="500" 
                            :width="800"
                          > 
                          </v-img>
                            <v-card-text>
                              Keyless Ignition System
                              First-ever underbone model equipped with an advanced keyless ignition system, 
                              enhancing both convenience and security.
                            </v-card-text>
                            <v-card-text> 
                              <h3>Anti-lock Braking System (ABS)</h3>
                            </v-card-text>
                  </v-card>
              </v-dialog>
      </v-row>
    </v-container>
  </v-app>
  <Orders 
        v-model:orderModal="orderModal"
        :selectedBike="selectedBike"
      >  
    </Orders>
</template>

<script setup>
import { ref } from 'vue';
import { VBtn, VBtnGroup } from 'vuetify/components';
import { RouterView, RouterLink } from 'vue-router';
import Orders from './Orders.vue';
import blade from '../assets/Suzuki/Raiderblade.png';
import sniper from '../assets/Yamaha/Sniper155.png';
import winner from '../assets/Honda/WinnerX.png';
import nmax from '../assets/Yamaha/Nmax155.png';
import adv from '../assets/Honda/Adv160.png';
import pro from '../assets/Suzuki/Raiderpro.png';
import axios from 'axios';

    const proModal = ref(false);
    const bladeModal = ref(false);
    const sniperModal = ref(false);
    const winnerModal = ref(false);
    const nmaxModal = ref(false);
    const advModal = ref(false);
    const orderModal = ref(false);

    const thisDropdown = ref(false);

    const selectedBike = ref({
      brand: '',
      model: ''
    });

    const openOrder = (bike) => {
      selectedBike.value = bike
      orderModal.value = true
    }

    const brands = [
      {value: 'Suzuki', url: 'Suzuki'}, 
      {value: 'Yamaha', url: 'Yamaha'},
      {value: 'Honda', url: 'Honda'}, 
      {value: 'KTM', url: 'KTM'},
      {value: 'Bmw', url: 'Bmw'}, 
      {value: 'Ducati', url: 'Ducati'},
      {value: 'Harley', url: 'Harley'}, 
      {value: 'Kawasaki', url: 'Kawasaki'},
    ]
    

</script>

<style scoped>
  .container{
    background-color: #455d7a;
    height: 5%;
    font-size: medium;
  }
  .btn:hover{
    background-color: #f95959;
  }
  .btn{
    padding: 9px;
    margin-right: 3%;
    border: 0px;
    color: azure;
    font-size: 16px;
  }
  .title{
    margin-left: 3%;
    font-size: 28px;
  }
  .mx-auto{
    background-color: #233142;
  }
  .mx-auto:hover{
    background-color: #f95959;
  }
  .he1{
    font-size: 70px;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
  }
  .space{
    margin-top: 10%;
  }
  .orderbtn{
    border: 0px;
    padding: 9px;
    margin-top: 3%;
    margin-left: 80%;
    width: fit-content;
    background-color: #455d7a;
    font-size: 15px;
  }
  .orderbtn:hover{
    background-color: #f95959;
  }
  .body{
    background-color: #455d7a;
  }
  .form{
    max-width: 900;
    max-height: 80%;
    background-color: #233142;
  }
  .link{
    text-decoration: none;
  }
</style>