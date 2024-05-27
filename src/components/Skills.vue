<script setup lang="ts">
import SkillCard from './SkillCard.vue';

const skills = [
  {
    name: 'Vue',
    icon: '',
    text: 'Along with other reactive frameworks, like React and Nuxt. I have used Vuetify and PrimeVue',
    value: 80,
    skillType: 'framework',
  },
  {
    name: 'Javascript',
    icon: '',
    text: 'After working as a fullstack developer using Node and Vue a lot, I have become very familiar with Javascript.',
    value: 75,
    skillType: 'language',
  },
  {
    name: 'Python',
    icon: '',
    text: 'Lots of experience working with Python in fields like Data Analytics, script programming, spidering websites and much more.',
    value: 80,
    skillType: 'language',
  },
  {
    name: 'Machine Learning',
    icon: '',
    text: 'PyTorch / Keras',
    value: 40,
    skillType: 'other',
  },
  {
    name: 'Docker',
    icon: '',
    text: 'Using docker to deploy my web projects',
    value: 60,
    skillType: 'technology'
  },
  {
    name: 'Git',
    icon: '',
    text: 'I use github to track all my projects. Furthermore, I have used Gitlab extensively at the jobs I worked at.',
    value: 90,
    skillType: 'technology',
  },
  {
    name: 'Databases',
    icon: '',
    text: 'I have a lot of experience with MySQL and MongoDB, and a little experience with Redux.',
    value: 80,
    skillType: 'technology',
  },
  {
    name: 'Nginx',
    icon: '',
    text: '',
    value: 70,
    skillType: 'technology'
  }
]

console.log(skills);
</script>

<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-3xl">
        <span class="text-900">Skills and Technologies</span>
    </div>
    <div class="text-700 mb-6">Picked up from my experience as a full stack developer, or through university courses</div>
    <div class="grid">
        <div
          v-for="skill in skills"
          class="col-12 md:col-4 mb-4 px-5 min-h-0"
        >
        <SkillCard :skill="skill" />
      </div>
  </div>
  </div>
</template>