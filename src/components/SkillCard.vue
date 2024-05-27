<script setup lang="ts">
const props = defineProps(['skill']);

function calcSeverity(valueType: string) {
  switch(valueType) {
    case "framework":
      return "";
    case "language":
      return "info";
    case "other":
      return "contrast";
    case "technology":
      return "secondary";
    default:
      return "success";
  }
}
</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round card-container">
    <Tag :value="props.skill.skillType" class="card-tag" :severity="calcSeverity(props.skill.skillType)"/>
    <div class="text-3xl font-medium text-900 mb-3">{{ props.skill.name }}</div>
    <div style="height: 75px" class="font-medium text-500 mb-3">{{ props.skill.text }}</div>
    
    <ProgressBar class="mt-2" :value="props.skill.value"></ProgressBar>
</div>
</template>

<style scoped>
.card-tag {
  position: absolute;
  top: 0;
  left: 0;
}
.card-container {
  position: relative;
}
</style>