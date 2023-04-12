<script setup lang="ts">
type Props = {
  id: string;
  avatar: string;
};

defineProps<{
  characters: Props[];
}>();
</script>

<template>
  <div id="display">
    <div>
      <img :src="item.avatar" v-for="item in characters" :key="item.id" />
    </div>
  </div>
</template>

<style scoped>
#display {
  width: 100%;
  height: 70px;
  background-color: #646464;
  border-radius: 0 0 20px 20px;
  padding: 6px;
}

#display div {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 50px);
  align-items: center;
  gap: 2px;
  justify-content: center;
  background-color: #282727;
  padding: 5px 0;
  border-radius: 0 0 20px 20px;
}

#display img {
  width: 100%;
  height: 100%;
}
</style>
