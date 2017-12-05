<template lang="pug">
  .section
    .Container
      h1.title Consulta de Contenedor
      .columns
        .column.is-6
          label ID:
          input.input(disabled, v-model="$route.params.id")
        .column.is-6
          label Item: 
          input.input(disabled, v-model="info.Item")
      .columns
        .column.is-6
          label Version:
          input.input(disabled, v-model="info.Version")
        .column.is-6
          label Cosecha:
          input.input(disabled, v-model="info.Cosecha")
      .columns
        .column.is-6
          label Tipo:
          input.input(disabled, v-model="info.Tipo")
        .column.is-6
          label Envase
          input.input(disabled, v-model="info.Envase")
      .columns
        .column.is-6
          label Proceso:
          input.input(disabled, v-model="info.Proceso")
        .column.is-6
          label Estado:
          input.input(disabled, v-model="info.Estado")
      .columns
        .column.is-6
          label Sub-Estado:
          input.input(disabled, v-model="info.SubEstado")
        .column.is-6
          label OT:
          input.input(disabled, v-model="info.OT")
      .columns
        .column.is-6
          label Neto:
          input.input(disabled, v-model="info.Neto")
        .column.is-6
          label Lote:
          input.input(disabled, v-model="info.Lote") 
      .columns
        .column.is-6
          label Fecha Alta:
          input.input(disabled, v-model="info.FechaAlta")
        .column.is-6
          label Almacen:
          input.input(disabled, v-model="info.Almacen")  
      .columns
        .column.is-12
          label Descripción:
          input.input(disabled, v-model="info.Descripcion")

</template>

<script>
  export default {
    name: 'ContainerDetails',
    data() {
      return {
        info: {
          Item: 'ARFL1011CHUM',
          Version: 0,
          Descripcion: 'Autumn Royal 1011 Cinta Húmeda',
          Cosecha: 2013,
          Tipo: null,
          Envase: 'ENVDOLE0121',
          Proceso: 'CIR',
          Estado: 'EN STOCK',
          SubEstado: 'RESERVADO',
          OT: 289,
          Neto: 5,
          Lote: 2,
          FechaAlta: '2015-01-09 10:57:08.210',
          Almacen: 'BFCA',
        },
      };
    },
  };
</script>

<style scoped>
.title {
  text-align: center;
}
</style>