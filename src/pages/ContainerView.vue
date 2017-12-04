<template lang="pug">
  .section
    .Container
      .columns.is-mobile
        .column
          h1.title Consulta de Contenedor
      .columns.is-mobile
        .column
          input.input(disabled, v-model="qrContent")
        .column
          a.button(@click="toggleDialog") Scanear Codigo
      .columns
        .column
          router-link.button(:to='"/containerView/" + qrContent') Consultar
  
    .modal(:class="isDialogActive")
      .modal-background
      .modal-content
        qrcode-reader(@decode="onDecode")  QR Scaner

</template>

<script>
  export default {
    name: 'Container',
    data() {
      return {
        isDialogActive: '',
        qrContent: null,
      };
    },
    methods: {
      toggleDialog() {
        if (this.isDialogActive === 'is-active') {
          this.isDialogActive = '';
        } else {
          this.isDialogActive = 'is-active';
        }
      },
      onDecode(content) {
        this.qrContent = content;
        this.toggleDialog();
      },
    },
  };
</script>

<style scoped>
.decoded-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  padding: 0px 20px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  background-color: rgba(0,0,0,.5);
}
</style>