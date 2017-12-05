<template lang="pug">
  .section
    .Container
      h1.title Reserva de Contenedores
      .columns
        .column.is-4.is-mobile-12
          b-field(label="Proceso")
            b-select(placeholder="Seleccionar", v-model="processSelected", required)
              option(v-for="proceso in Procesos", :value="proceso.Id", :key="proceso.Id") {{proceso.Name}}
        .column.is-4.is-mobile-12
          b-field(label="Etapa")
            b-select(placeholder="Seleccionar", v-model="stageSelected", required)
              option(v-for="etapa in Etapas", :value="etapa.Id", :key="etapa.Id") {{etapa.Name}}
        .column.is-4.is-mobile-12
          b-field(label="Linea de OT")
            b-input(v-model="OTLineInput") 
      .columns
        .column.is-12
          a.button.is-primary(@click="toggleDialog") Scanear Codigo
      .columns(v-for="(qr, index) in qrContent")
        .column.is-8.is-mobile-8
          .field.has-addons
            .control
              input.input.is-rounded(type="text", v-model="qr.Id", disabled)
            .control
              a.button.is-primary(@click="deleteItem(index)")
                i.mdi.mdi-close
      .columns
        .column
          a.button.is-primary(@click="validateReserve") Reservar

    .modal(:class="isDialogActive")
      .modal-background
      .modal-content
        qrcode-reader(@decode="onDecode")  
      button.modal-close.is-large(aria-label="close", @click="toggleDialog")
</template>

<script>

  export default {
    name: 'ContainerReserve.vue',
    data() {
      return {
        isDialogActive: '',
        qrContent: [],
        stageSelected: undefined,
        processSelected: undefined,
        OTLineInput: undefined,
        Procesos: [
          { Id: 1, Name: 'Almendras' },
          { Id: 2, Name: 'Castaña' },
          { Id: 3, Name: 'Cir' },
          { Id: 4, Name: 'Damasco' },
          { Id: 5, Name: 'Mani' },
          { Id: 6, Name: 'Manzana' },
          { Id: 7, Name: 'MixFruta' },
          { Id: 8, Name: 'Nuez' },
          { Id: 9, Name: 'Pasa' },
          { Id: 10, Name: 'Pistacho' },
          { Id: 11, Name: 'Rubia' },
        ],
        Etapas: [
          { Id: 1, Name: 'Calibrado' },
          { Id: 2, Name: 'Envasado' },
          { Id: 3, Name: 'EnvasadoRetail' },
          { Id: 4, Name: 'Fresca' },
          { Id: 5, Name: 'Horno' },
          { Id: 6, Name: 'Laser' },
          { Id: 7, Name: 'Partido' },
          { Id: 8, Name: 'Procesamiento' },
          { Id: 9, Name: 'Recepcion' },
          { Id: 10, Name: 'Secado' },
          { Id: 11, Name: 'Selenv' },
        ],
      };
    },
    methods: {
      deleteItem(index) {
        this.$delete(this.qrContent, index);
      },
      validateReserve() {
        if (this.qrContent.length === 0) {
          this.$toast.open({
            message: 'Error en la creacion de Lote: Lista de Contenedores Vacia',
            type: 'is-danger',
          });
        } else {
          this.stageSelected = undefined;
          this.processSelected = undefined;
          this.OTLineInput = undefined;
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
        this.qrContent.push({ Id: content });
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