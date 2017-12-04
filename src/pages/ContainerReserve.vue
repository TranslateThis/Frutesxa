<template lang="pug">
  .section
    .Container
      .columns
        .column.is-4.is-mobile-12
          b-field(label="Proceso")
            b-select(placeholder="Seleccionar", required)
              option Almendras
              option Castaña
              option Cir
              option Damasco
              option Mani
              option Manzana
              option MixFruta
              option Nuez
              option Pasa
              option Pistacho
              option Rubia
        .column.is-4.is-mobile-12
          b-field(label="Etapa")
            b-select(placeholder="Seleccionar", required)
              option Calibrado
              option Envasado
              option EnvasadoRetail
              option Fresca
              option Horno
              option Laser
              option Partido
              option Procesamiento
              option Recepcion
              option Secado
              option Selenv
        .column.is-4.is-mobile-12
          b-field(label="Linea de OT")
            b-input 
      .columns
        .column.is-12
          button.button(@click="toggleDialog") Scanear Codigo
      .columns(v-for="(quantity, index) in items")
        .column.is-12.is-mobile-12
          input.input(disabled, v-for="qr in qrContent", v-model="qr.id")
      .columns
        .column
          a.button.is-light(@click="validateReserve") Reservar

    .modal(:class="isDialogActive")
      .modal-background
      .modal-content
        qrcode-reader(@decode="onDecode")  QR Scaner

</template>

<script>

  export default {
    name: 'ContainerReserve.vue',
    data() {
      return {
        isDialogActive: '',
        qrContent: [],
        items: 1,
      };
    },
    methods: {
      addItem() {
        this.items = this.items + 1;
      },
      validateReserve() {
        if (this.qrContent.length === 0) {
          this.$toast.open({
            message: 'Error en la creacion de Lote',
            type: 'is-danger',
          });
        } else {
          this.$toast.open({
            message: 'Lote de Contenedores Creado Correctamente',
            type: 'is-success',
          });
        }
      },
      toggleDialog() {
        if (this.isDialogActive === 'is-active') {
          this.isDialogActive = '';
        } else {
          this.isDialogActive = 'is-active';
        }
      },
      onDecode(content) {
        this.qrContent.push({ id: content });
        this.toggleDialog();
      },
    },
  };
</script>

<style scoped>
.select {
  position: relative;
}

</style>