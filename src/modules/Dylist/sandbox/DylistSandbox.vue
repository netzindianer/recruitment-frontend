<template>
  <div>
    <dylist
      :list="[{ id: 1, name: 'Tomek' }, { id: 2, name: 'Domek' }]"
      :dummy="{ id: 0, name: 'XD' }"
      :limit="6"
      class="my-dylist"
    >

      <template v-slot:item="{ item, index, remove }">
        <div class="my-dylist__item d-flex">
          <div class="handle">
            <i class="material-icons">swap_vert</i>
          </div>
          <div class="my-dylist__item-content">{{ item }}</div>
          <button
            @click="remove(index)"
            type="button"
            class="btn btn-link btn-sm btn-condensed--xs text-dark"
          >
            <i class="material-icons">cancel</i>
          </button>
        </div>
        <hr />
      </template>

      <template v-slot:add="{ add }">
        <button @click="add()" type="button" class="btn btn-light btn-sm p-2">
          <i class="material-icons">add</i>
        </button>
      </template>

    </dylist>
  </div>
</template>

<script>
import Dylist from "./../components/Dylist.vue";

export default {
  components: { Dylist }
};
</script>

<style scoped>
input {
  max-width: 200px;
}
.my-dylist__item-content {
  flex: 1;
}
</style>
