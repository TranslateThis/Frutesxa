<template lang="pug">
  .section
    .Container
      .columns.is-mobile
        .column
          h1.title Consulta de Contenedor
      .columns.is-mobile
        .column
          qrcode-reader(@decode="onDecode", @init="onInit") Lee algo?
            .decoded-content(v-if="content") {{content}}
      .columns
        .column
          router-link.button(to="/container") Confirmar
            

</template>

<script>

  export default {
    name: 'Container',
    data() {
      return {
      };
    },
    methods: {
      async onInit(promise) {
        console.log('OnInit');

        try {
          await promise;
          // successfully initialized
          console.log('try');
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            // user denied camera access permisson
            console.log('NotAllowedError');
          } else if (error.name === 'NotFoundError') {
            // no suitable camera device installed
            console.log('NotFoundError');
          } else if (error.name === 'NotSupportedError') {
            // page is not served over HTTPS (or localhost)
            console.log('NotSupportedError');
          } else if (error.name === 'NotReadableError') {
            // maybe camera is already in use
            console.log('NotReadableError');
          } else {
            // browser is probably lacking features (WebRTC, Canvas)
            console.log('featuresNot');
          }
        } finally {
          // hide loading indicator
        }
      },
      onDecode(content) {
        this.content = content;
      },
    },
  };
</script>

<style scoped>

</style>