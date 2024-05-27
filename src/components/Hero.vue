<script setup lang="ts">
function goToWebsite(url: string, newtab: boolean) {
  if (newtab) window.open(url, '_newtab');
  else window.open(url);
}
</script>

<template>
  <div class="grid grid-nogutter surface-ground text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Hi, my name is</span>
            <div class="text-6xl text-primary font-bold mb-3">Jeroen Gijsbers</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Master student Data Science and Artificial Intelligence @TU/e</p>
            
            <Button
              icon="pi pi-file-o"
              size="large"
              type="button"
              class="mr-3 p-button-raised"
              @click="goToWebsite('/ResumeJeroenGijsbers.pdf', true)"
            ></Button>
            <Button
              icon="pi pi-linkedin"
              severity="secondary"
              size="large"
              type="button"
              class="mr-3 p-button-raised"
              @click="goToWebsite('https://linkedin.com/in/jeroen-gijsbers0403', true)"
            ></Button>
            <Button
              icon="pi pi-github"
              severity="secondary"
              size="large"
              type="button"
              class="mr-3 p-button-raised"
              @click="goToWebsite('https://github.com/JfmGijsbers/', true)"
            ></Button>
            <Button
              icon="pi pi-send"
              severity="secondary"
              size="large"
              type="button"
              class="mr-3 p-button-raised"
              @click="goToWebsite('mailto:jfmgijsbers@gmail.com', false)"
            ></Button>
            <!-- <div class="grid">
              <div class="col-3">
                <Button icon="pi pi-file-o" size="large" type="button" class="mr-3 p-button-raised"></Button>
              </div>
              <div class="col-3">
                <Button icon="pi pi-linkedin" type="button" class="mr-3 p-button-raised"></Button>
              </div>
              <div class="col-3">
                <Button icon="pi pi-github" type="button" class="mr-3 p-button-raised"></Button>
              </div>
              <div class="col-3">
                <Button icon="pi pi-send" type="button" class="mr-3 p-button-raised"></Button>
              </div>
            </div> -->
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Image"
          class="md:ml-auto block md:h-full"
          style="
            clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);
            max-height: 500px;
          "
          />
    </div>
  </div>
</template>