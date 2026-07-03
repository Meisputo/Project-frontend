<template>
    <div>
        <v-dialog class="form"  
            :model-value="props.orderModal"
            @update:model-value="value => emit('update:orderModal', value)"
            max-width="600" >
                <v-card class="orderModal">
                    <form @submit.prevent="handleSubmit">
                        <v-responsive
                            class="mx-auto"
                            max-width="600"
                        >
                            <v-text-field
                                hide-details="auto"
                                label="Name"
                                v-model="orderData.name"
                            ></v-text-field>
                        </v-responsive>
                        <v-responsive
                            class="mx-auto"
                            max-width="600"
                        >
                            <v-text-field
                                hide-details="auto"
                                label="Address"
                                v-model="orderData.address"
                            ></v-text-field>
                        </v-responsive>
                        <v-responsive
                            class="mx-auto"
                            max-width="600"
                        >
                            <v-select
                                :items="['Ducati','BMW','Suzuki','Yamaha','Honda']"
                                label="Brand"
                                v-model="orderData.brand"
                            ></v-select>
                        </v-responsive>
                        <v-responsive
                            class="mx-auto"
                            max-width="600"
                        >
                            <v-text-field
                                hide-details="auto"
                                label="Model"
                                v-model="orderData.model"
                            ></v-text-field>
                            <br>
                        </v-responsive> 
                            <div class="col-6 mx-auto">
                                <div class="d-flex align-items-center justify-content-evenly">      
                                    <v-btn class="orderbtn" cols="auto" type="submit" >Submit</v-btn> 
                                    <v-btn class="orderbtn" variant="text" @click="emit('update:orderModal', false)">Cancel</v-btn>
                                 </div>
                            </div>
                        </form>
                </v-card>
      </v-dialog>
    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import axios from 'axios'


    const emit = defineEmits(['update:orderModal', 'success'])
    
   
    const props = defineProps({
        orderModal: Boolean, 
        selectedBike: Object 
    });

    const orderData = reactive ({
          name: '',
          address: '',
          brand: 'props.selectedBike.brand',
          model: 'props.selectedBike.model',
      });

    const handleSubmit = () => {
        axios.post('/api/order',orderData)
        .then((res) => {
            console.log(res.data)
            alert('Order Done!');
            orderData.name = ''
            orderData.address = ''
        })
        .catch((error) => console.log(error))
    }

    watch (() => props.selectedBike,(bike) => {
        if (bike) 
            {
                orderData.brand = bike.brand
                orderData.model = bike.model
            }
        },
        { immediate: true, deep: true }
        )

</script>

<style scoped>
.orderbtn{
    margin: 15px;
    margin-top: 1px;
    background-color: #455d7a;
    font-size: 15px;
}
.orderbtn:hover{
    background-color: #f95959;
}
.orderModal{
    width: 100%;
}
.form{
    width: 700px;
    color: #455d7a;
}
</style>