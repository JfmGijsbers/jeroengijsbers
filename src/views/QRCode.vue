<script lang="ts" setup>
import { ref } from 'vue';
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue';

const value = ref('https://www.jeroengijsbers.com');
const level = ref<Level>('M');
const renderAs = ref<RenderAs>('canvas');

const foreground = ref('000000');
const background = ref('ffffff');

const url = ref('');

function download() {
  var download = document.getElementById("download");
  // @ts-ignore
  var image = document.getElementById("qrcode").toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
  // @ts-ignore
  download.setAttribute("href", image);
  //download.setAttribute("download","archive.png");
}
</script>

<template>
  <div class="grid grid-nogutter p-d-flex p-justify-center mt-5">
    <div class="col-8">
      <FloatLabel class="mr-2">
        <InputText
          style="width: 100%"
          id="qrUrl"
          v-model="url"
        />
        <label for="qrUrl">URL</label>
      </FloatLabel>
    </div>
    <div class="col-4">
      <Button @click="value = url">
        Generate
      </Button>
    </div>
    <div class="col-12 mt-2">
      <span>Kleur voorgrond: </span>
      <ColorPicker v-model="foreground" format="hex" />
      <InputText 
        class="ml-2"
        v-model="foreground"
      />
    </div>
    <div class="col-12 mt-2">
      <span>Kleur achtergrond: </span>
      <ColorPicker v-model="background" format="hex" />
      <InputText 
        class="ml-2"
        v-model="background"
      />
    </div>
    <div class="col-12 mt-3">
      <qrcode-vue
        id="qrcode"
        class="mt-4"
        :size="300"
        :value="value"
        :level="level"
        :render-as="renderAs"
        :foreground="`#${foreground}`"
        :background="`#${background}`"
      />
    </div>
    <div class="col-12">
      <a id="download" download="JeroenGeeftQRCode.png">
        <Button @click="download">Download QR</Button>
      </a>
    </div>
  </div>
</template>