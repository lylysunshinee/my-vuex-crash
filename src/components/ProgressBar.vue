<template>
  <div class="progress-bar" v-if="isAuthenticated">
    <p>Progress : {{ progress }} %</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProgressBar",
  computed: { ...mapGetters(["progress", "isAuthenticated"]) },
};
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>