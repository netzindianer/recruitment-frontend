<template>
  <div class="dylist">
    <draggable :list="value" handle=".handle">
      <div v-for="(item, index) in value" :key="index">
        <slot
          name="item"
          :item="item"
          :index="index"
          :remove="() => remove(index)"
        >
          <div class="dylist__item d-flex">
            <div class="handle">
              <i class="material-icons">swap_vert</i>
            </div>
            <div class="dylist__item-content">
              {{ item }}
            </div>
            <button
              @click="remove(index)"
              type="button"
              class="btn btn-link btn-sm btn-condensed--xs text-dark"
            >
              <i class="material-icons">cancel</i>
            </button>
          </div>
        </slot>
      </div>
    </draggable>

    <div v-show="canAdd()">
      <slot name="add" :add="add">
        <button @click="add()" type="button" class="btn btn-light btn-sm p-2">
          <i class="material-icons">add</i>
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import clonedeep from "lodash.clonedeep";

export default {
  name: "Dylist",
  components: { draggable },
  props: {
    list: Array,
    dummy: [Array, Number, Object, String],
    limit: {
      default: 0,
      type: Number
    }
  },
  data: self => ({
    value: self.list
  }),
  methods: {
    remove(index) {
      this.$delete(this.value, index);
    },
    add() {
      this.value.push(clonedeep(this.dummy));
    },
    canAdd() {
      return this.limit == 0 || this.limit > this.value.length;
    }
  }
};
</script>

<style scoped>
.dylist__item-content {
  flex: 1;
}
</style>
