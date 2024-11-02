<template>
    <div class="default_layout" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <AppNav />
        <slot></slot>
        <AppFooter />
    </div>
</template>

<script>
</script>

<style lang="scss" scoped></style>