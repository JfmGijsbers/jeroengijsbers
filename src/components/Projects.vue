<script setup lang="ts">
import { ref } from 'vue';

function goTo(url: string) {
  window.open(url, '_blank')
}

const projects = [
  {
    name: 'ThisOne',
    intro: 'Tinder like inspiration platform for clothing',
    techs: ['Nuxt', 'Node', 'Nginx', 'Docker'],
    achievements: [
      'Secure authentication using JWTs',
      'Working with SEO',
      'Creating a full CRUD backend',
      'Starting a large project from scratch'
    ],
    description: 'A large inspiration platform, so that users can swipe through clothing they like or not. Each user had a list of clothes they liked (items expired after a week stuck in "liked"), a wishlist of items they wished to buy, and account settings. This was the first large project I coded by myself. The git repository is private at the moment.',
    images: [],
    githubLink: 'https://github.com/JfmGijsbers/ThisOne_backend',
    gitDisabled: true,
  },
  {
    name: 'Webcrawl framework',
    intro: 'Created a framework to easier crawl a lot of websites for data',
    techs: ['Python', 'XPath', 'Regular expressions', 'Crontab'],
    achievements: [
      'Crawling with Python',
      'Working with Crontab',
      'Working with XPath and RegEx\'s',
    ],
    description: 'Framework to easily crawl a lot of websites at a time using Python. Also features functionality to grab content from a page using XPath and Regular Expressions. The server used crontab to schedule visits to websites, with folders to dsitribute visit-frequencies.',
    images: [],
    githubLink: 'https://github.com/JfmGijsbers/JeroSpider',
    gitDisabled: false,
  }
]

let currentProject = ref(projects[0]);
</script>

<template>
  <div class="mb-3 mt-4 font-bold text-3xl text-center">
    <span class="text-900">Projects</span>
  </div>
  <div class="flex my-2 justify-content-center align-items-center">
    <Card style="width: 80%; min-height: 40vh;">
      <template #title>
        <div class="grid">
          <div class="col-9">
            {{ currentProject.name }}
          </div>
          <div class="col-3">
            <Button
              icon="pi pi-github"
              :disabled="currentProject.gitDisabled"
              @click="goTo(currentProject.githubLink)"
            ></Button>
          </div>
        </div>
      </template>
      <template #subtitle>
        {{ currentProject.intro }}
      </template>
      <template #content>
        <div class="grid">
          <div class="col-9">
            <div class="grid">
              <div class="col-6">
                <b>Technologies</b>
                <ul>
                  <li v-for="tech in currentProject.techs">{{ tech }}</li>
                </ul>
              </div>
              <div class="col-6">
                <b>Achievements</b>
                <ul>
                  <li v-for="achievement in currentProject.achievements">{{ achievement }}</li>
                </ul>
              </div>
            </div>
            <b>Description</b>
            <p>{{ currentProject.description }}</p>
          </div>
          <!-- Aside for displaying all projects-->
          <div class="col-3">
            <b>Projects</b>
            <p 
              v-for="project in projects"
              @click="currentProject = project"
              style="'cursor: pointer;"
              :class="project.name === currentProject.name ? 'underline' : ''"
            >{{ project.name }}</p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>