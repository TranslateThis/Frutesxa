<template lang="pug">
  .section
    .Container
      .field
        .label Proceso:
        .control
          .select
            select
              option Opcion 1
              option Opcion 2
              option Opcion 3
      .field
        .label Etapa: 
        .control
          .select
            select
              option Opcion 1
              option Opcion 2
              option Opcion 3
      .field
        .label OT: // Linea de OT
        .control
          .select
            select
              option Opcion 1
              option Opcion 2
              option Opcion 3
      .columns.is-mobile
        .column
          input.input(placeholder="Ingrese Codigo QR", v-model="id")
      .columns
        .column
          button.button(@click="showTime") Confirmar

      
      div
        vue-toast(ref="toast")

</template>

<script>
  import VueToast from 'vue-toast';
  import 'vue-toast/dist/vue-toast.min.css';

  export default {
    name: 'ContainerReserve.vue',
    components: { VueToast },
    data() {
      return {
        maxToasts: 6,
        position: 'bottom right',
        theme: 'success',
        timeLife: 3000,
        closeBtn: true,
      };
    },
    watch: {
      'delayOfJumps + maxToasts + position': 'resetOptions',
    },
    attached() {
      this.resetOptions();
    },
    methods: {
      resetOptions() {
        this.$root.$refs.toast.setOptions({
          delayOfJumps: this.delayOfJumps,
          maxToasts: this.maxToasts,
          position: this.position,
        });
      },
      showTime() {
        this.$root.$refs.toast.showToast('hollou', {
          theme: this.theme,
          timeLife: this.timeLife,
          closeBtn: this.closeBtn,
        });
      },
    },
  };
</script>

<style scoped>
.select {
  position: relative;
}
</style>