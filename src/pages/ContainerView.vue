<template lang="pug">
  .section
    .Container
      .columns.is-mobile
        .column
          h1.title Consulta de Contenedor
      .columns.is-mobile
        .column
          input.input(disabled, placeholder="CodigoQR Ingresado", v-model="qrCode")
        .column
          a.button.is-primary(@click="toggleDialog") Scanear Codigo
      .columns
        .column
          router-link.button.is-primary(:to='"/Frutexsa/containerView/" + qrCode') Consultar
  
    .modal(:class="isDialogActive")
      .modal-background
      .modal-content
        qrcode-reader(@decode="onDecode")
      button.modal-close.is-large(aria-label="close", @click="toggleDialog")

</template>

<script>
  export default {
    name: 'Container',
    data() {
      return {
        isDialogActive: '',
        qrCode: null,
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
        this.qrCode = content;
        this.qrCode = Math.ceil(Math.random() * 100);
        this.$toast.open({
          message: 'Codigo Leido Exitosamente',
          type: 'is-success',
        });
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