<template>
  <div>
    <ChimeraTpl :initialValue="3" @counterChanged="handleCounterChanged"></ChimeraTpl>
    <div>{{ childEvent }}</div>
  </div>
</template>
<script>
import ChimeraTpl from "./../components/ChimeraTpl";

export default {
  name: "ChimeraTplSandbox",
  components: { ChimeraTpl },
  data() {
    return {
      childEvent: ""
    }
  },
  methods: {
    handleCounterChanged(payload) {
      this.childEvent = "Action: " + payload.type;
    }
  }
};
</script>
<style lang="scss" scoped></style>
