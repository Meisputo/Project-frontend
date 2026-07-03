<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

    const orders = ref([]);

    const displayOrders = async () => {
        try {
            const res = await axios.get('/api/orders');
            orders.value = res.data;
        } catch (error) {
            console.error(error);
        }
    };

    onMounted(() => {
        displayOrders();
    });

    const props = defineProps({
        displayModal: Boolean,
    });

    const emit = defineEmits(['update:displayModal', 'success'])

</script>

<template>
    <v-dialog clas="form" 
        :model-value="props.displayModal"
        @update:model-value="value => emit('update:displayModal', value)"
    >
        <v-card class="displaymodal">
            <v-responsive class="modalcontent">
                <h1>This is your Order</h1>
                    <div v-for="order in orders" :key="order.id">
                        <p>Brand: {{ order.brand }}</p>
                        <p>Model: {{ order.model }}</p>
                    </div>
            </v-responsive> 
        </v-card>
    </v-dialog>
</template>

<style>
.form{
    width: 700px;
    color: #455d7a;
}
.displaymodal {
    width: 600px;
    margin-left: 30%;
}
.modalcontent {
    text-align: center;
}

</style>