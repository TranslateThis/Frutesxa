<template lang="pug">
  .section
    .Container
      b-field(label="Estado")
        b-select(placeholder="Seleccionar", required)
          option Opcion 1
          option Opcion 2
          option Opcion 3
      b-field(label="Etapa")
        b-select(placeholder="Seleccionar", required)
          option Opcion 1
          option Opcion 2
          option Opcion 3
      b-field(label="Linea de OT")
        b-select(placeholder="Seleccionar", required)
          option Opcion 1
          option Opcion 2
          option Opcion 3

      .columns.is-mobile(v-for="(quantity, index) in items")
        .column.is-2
          a.button(@click="addItem") Agregar
        .column.is-6
          input.input(disabled, v-model="qrContent[index]")
        .column.is-4
          button.button(@click="toggleDialog") Scanear Codigo
      .columns
        .column
          a.button.is-light(@click="validateReserve") Reservar

    .modal(:class="isDialogActive")
      .modal-background
      .modal-content
        qrcode-reader(@decode="onDecode", @init="onInit", :paused="paused" )  QR Scaner

</template>

<script>

  export default {
    name: 'ContainerReserve.vue',
    data() {
      return {
        isDialogActive: '',
        qrContent: [],
        paused: false,
        items: 1,
      };
    },
    methods: {
      addItem() {
        this.items = this.items + 1;
      },
      validateReserve() {
        this.$toast.open({
          message: 'Lote de Contenedores Creado Correctamente',
          type: 'is-success',
        });
      },
      toggleDialog() {
        if (this.isDialogActive === 'is-active') {
          this.isDialogActive = '';
        } else {
          this.isDialogActive = 'is-active';
        }
      },
      onDecode(content) {
        this.qrContent = content;
        this.paused = true;
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