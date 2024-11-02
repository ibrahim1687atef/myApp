<template>
  <div>
    <NuxtLayout>
      <NuxtPage :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" />
    </NuxtLayout>
  </div>
</template>



<script setup>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: auto;
}

@font-face {
  font-family: myFont;
  src: url(/fonts/Roboto-Medium.ttf);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}




.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: blur(0.25rem);
}
</style>