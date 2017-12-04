<template lang="pug">
  .section
    .Container
      .columns.is-mobile
        .column
          h1.title Consulta de Contenedor
      .columns.is-mobile
        .column
          qrcode-reader(@decode="onDecode", @locate="onLocate")
            .decoded-content {{content}}
      .columns
        .column
          router-link.button(:to='"/containerView/"+id') Confirmar
            

</template>

<script>
  import { QrcodeReader } from 'vue-qrcode-reader';

  export default {
    name: 'Container',
    components: { QrcodeReader },
    data() {
      return {
        id: '',
      };
    },
    methods: {
      async onInit(promise) {
        // show loading indicator

        try {
          await promise;
          // successfully initialized
        } catch (error) {
          if (error.name === 'NotAllowedError') {
          // user denied camera access permisson
          } else if (error.name === 'NotFoundError') {
            // no suitable camera device installed
          } else if (error.name === 'NotSupportedError') {
            // page is not served over HTTPS (or localhost)
          } else if (error.name === 'NotReadableError') {
            // maybe camera is already in use
          } else {
          // browser is probably lacking features (WebRTC, Canvas)
          }
        } finally {
          // hide loading indicator
        }
      },
      onDecode(content) {
        this.content = content;
      },

      onLocate() {
        // ...
      },
    },
  };
</script>

<style scoped>

</style>