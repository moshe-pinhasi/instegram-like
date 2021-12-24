<template>
  <div class="app-loader-mask">
    <div class="app-loader-spinner">
      <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
      <p class="app-loader-text"><slot /></p>
    </div>
  </div>
</template>