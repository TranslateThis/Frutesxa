<template lang="pug">
  .section
    .Container
      h1.title Ingresar Contenedores a OT
      .columns
        .column.is-12.is-mobile-12
          .block
            button.button.is-primary(@click="isOpen = !isOpen") ListaReservada 1
          b-collapse.panel(:open.sync="isOpen")
            .panel-heading(slot="trigger")
              strong Lista De Contenedores
            .panel-block(v-for="item in collection")
              .span {{item.Id}}
              
</template>

<script>
  export default {
    name: 'ContainerAdd',
    data() {
      return {
        isOpen: true,
        collection: [
          { Id: 627415 },
          { Id: 627416 },
          { Id: 180417 },
          { Id: 180418 },
          { Id: 180419 },
        ],
      };
    },
  };
</script>

<style scoped>

</style>