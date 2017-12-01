<template lang="pug">
  .section
    h1.title Consulta de Contenedor
    .Container
      .columns
        .column.is-6
          label ID:
          input.input.is-info(disabled)
        .column.is-6
          label Item: 
          input.input.is-info(disabled)
      .columns
        .column.is-6
          label Version:
          input.input.is-info(disabled)
        .column.is-6
          label Cosecha:
          input.input.is-info(disabled)
      .columns
        .column.is-6
          label Tipo:
          input.input.is-info(disabled)
        .column.is-6
          label Envase
          input.input.is-info(disabled)
      .columns
        .column.is-6
          label Proceso:
          input.input.is-info(disabled)
        .column.is-6
          label Estado:
          input.input.is-info(disabled)
      .columns
        .column.is-6
          label Sub-Estado:
          input.input.is-info(disabled)
        .column.is-6
          label OT:
          input.input.is-info(disabled)
      .columns
        .column.is-6
          label Neto:
          input.input.is-info(disabled)
        .column.is-6
          label Ir:
          input.input.is-info(disabled) 
      .columns
        .column.is-6
          label Fecha Alta:
          input.input.is-info(disabled)
        .column.is-6
          label Almacen:
          input.input.is-info(disabled)  
      .columns
        .column.is-12
          label Descripción:
          input.input(disabled)

</template>

<script>
  export default {
    name: 'ContainerDetails',
  };
</script>

<style scoped>
.title {
  text-align: center;
}
</style>