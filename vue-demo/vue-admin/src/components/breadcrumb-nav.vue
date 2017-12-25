<template>
  <Breadcrumb>
    <BreadcrumbItem
      v-for="item in currentPath"
      :to="item.path"
      :key="item.name"
    >{{ menuTitle(item) }}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
  export default {
    props: {
      currentPath: Array
    },
    methods: {
      menuTitle (item) {
        if (typeof item.title === 'object') {
          return this.$t(item.title.i18n)
        } else {
          return item.title
        }
      }
    }
  }
</script>
