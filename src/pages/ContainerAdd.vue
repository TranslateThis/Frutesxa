<template lang="pug">
  .section
    .Container
      h1.title Ingresar Contenedores a OT
      .columns
        .column.is-12.is-mobile-12
          input.input(v-model="OTLine", placeholder="Ingrese linea de OT")
      .columns
        .column.is-12.is-mobile-12
          section.section
            b-table(:data="collection", :mobile-cards="true", :checked-rows.sync="checkedRows", checkable)
              template(slot-scope="props")
                b-table-column(label="ID", width="40", centered) {{props.row.Id}}
                b-table-column(label="Reservada para OT", centered) {{props.row.ROT}}
                b-table-column(label="Fecha de Reserva", centered) {{props.row.Date}}

              
</template>

<script>
  export default {
    name: 'ContainerAdd',
    data() {
      return {
        collection: [
          { Id: 627415, ROT: 289, Date: '32/13/2017' },
          { Id: 627416, ROT: 289, Date: '32/13/2017' },
          { Id: 180417, ROT: 289, Date: '32/13/2017' },
          { Id: 180418, ROT: 289, Date: '32/13/2017' },
          { Id: 180419, ROT: 289, Date: '32/13/2017' },
        ],
        OTLine: '',
        checkedRows: [],
      };
    },
  };
</script>

<style scoped>

</style>