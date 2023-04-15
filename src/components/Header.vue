<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <div id="user-detail-container">
      <div class="avatar">avatar</div>
      <div class="user-nickname">nickname do usuario checar tamanho da string</div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: blanchedalmond;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;

  #user-detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 70px;
    height: 70px;
    border: 1px solid green;
    border-radius: 50%;
  }
}
</style>
