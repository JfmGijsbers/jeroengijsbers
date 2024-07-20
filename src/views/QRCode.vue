<script lang="ts" setup>
import { ref } from 'vue';
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue';

const value = ref('https://www.jeroengijsbers.com');
const level = ref<Level>('M');
const renderAs = ref<RenderAs>('svg');

const foreground = ref('');
const background = ref('');

const url = ref('');
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
    <div class="col-6 mt-2">
      <span>Kleur voorgrond: </span>
      <ColorPicker v-model="foreground" format="hex" />
    </div>
    <div class="col-6 mt-2">
      <span>Kleur achtergrond: </span>
      <ColorPicker v-model="background" format="hex" />
    </div>
    <div class="col-12 mt-3">
      <qrcode-vue
        id="qrcode"
        class="w-full mt-4"
        :size="300"
        :value="value"
        :level="level"
        :render-as="renderAs"
        :foreground="`#${foreground}`"
        :background="`#${background}`"
      />
    </div>
  </div>
</template>