<template lang="pug">
li
    b-collapse(:open='false', v-if="item.childrens")
        a.collapsed(slot='trigger', href='#') 
            i.mdi.mdi-arrow-down-drop-circle-outline
            span {{item.name}}
            span.arrow
        ul#products.sub-menu.collapse
            li(v-for="children in item.childrens")
                router-link(:to='children.url', v-on:click.native="itemToggle") 
                 span {{children.name}}
    router-link(v-else, :to='item.url', v-on:click.native="itemToggle")
        i.mdi(:class="item.icon") 
        span {{item.name}}
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    item: { type: Object, required: true },
  },
  methods: {
    itemToggle() {
      this.$emit('itemToggle');
    },
  },
};
</script>
