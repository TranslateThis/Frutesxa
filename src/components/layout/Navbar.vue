<template lang="pug">
nav.navbar
      #navMenuColorlight-example.navbar-menu
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                a.button.is-primary.is-inverted.is-outlined
                  span.icon
                    i.mdi.mdi-message-outline
              p.control
                a.button.is-primary.is-inverted.is-outlined
                  span.icon
                    i.mdi.mdi-bell-outline
              p.control
                 a.button.is-primary.is-inverted.is-outlined
                  img(src="https://translatethis.github.io/Frutexsa/dist/UserLogo.png") 
                  span Usuario
                  span.icon
                    i.mdi.mdi-chevron-down
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar-menu {
  display: inline;
}
.field.is-grouped {
    justify-content: flex-end;
}
</style>