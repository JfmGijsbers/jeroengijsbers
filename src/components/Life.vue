<script setup lang="ts">
import { ref } from "vue";

const events = ref([
    { 
      status: 'Born in ',
      date: '04/03/2000',
      icon: 'pi pi-face-smile',
      color: '#9C27B0',
      location: 'Heeze, North Brabant',
    },
    { 
      status: 'Bartender at ',
      date: 'June 2015',
      icon: 'pi pi-users',
      color: '#673AB7',
      location: 'Tapperij de Zwaan',
    },
    { status: 'Started bachelor Computer Science and Engineering at ',
      date: 'September 2018',
      icon: 'pi pi-graduation-cap',
      color: '#FF9800',
      location: 'TU/e'
    },
    { 
      status: 'Script developer at ',
      date: 'October 2019',
      icon: 'pi pi-desktop',
      color: '#673AB7',
      location: 'Coosto',
    },
    { 
      status: 'Fullstack developer at ',
      date: 'October 2020',
      icon: 'pi pi-desktop',
      color: '#673AB7',
      location: 'Coosto',
    },
    { 
      status: 'Fullstack developer at ',
      date: 'October 2022',
      icon: 'pi pi-desktop',
      color: '#673AB7',
      location: 'TextKernel',
    },
    { 
      status: 'Started master Data Science and Artificial Intelligence at ',
      date: 'September 2021',
      icon: 'pi pi-graduation-cap',
      color: '#FF9800',
      location: 'TU/e',
    },
    { 
      status: 'Started as Functionaris Vereniging at ',
      date: 'September 2023',
      icon: 'pi pi-building-columns',
      color: '#9C27B0',
      location: 'T.S.V. Plato',
    },
]);


</script>
<template>
  <div class="card mt-2">
    <div class="mb-3 mt-4 font-bold text-3xl text-center">
        <span class="text-900">Education and career</span>
    </div>
      <Timeline :value="events" align="alternate">
          <template #marker="slotProps">
              <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                  <i :class="slotProps.item.icon"></i>
              </span>
          </template>
          <template #content="slotProps">
              <Card class="mt-3">
                  <template #title>
                      {{ slotProps.item.status }}<span class="text-primary">{{ slotProps.item.location }}</span>
                  </template>
                  <template #subtitle>
                      {{ slotProps.item.date }}
                  </template>
                  <!-- <template #content>
                      <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-1" />
                      <p>
                          Korte tekst
                      </p>
                  </template> -->
              </Card>
          </template>
      </Timeline>
  </div>
</template>


<style scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>