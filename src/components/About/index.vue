<template>
  <div @click="getTime">
    <h1>Slim Shady about</h1>
    <h1>{{ data }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  computed: {
    getTime() {
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      };
      var today = new Date();
      this.data = today.toLocaleDateString("ru", options);
      console.log(this.data);
      // const today = new Date().toDateString();

      // console.log(today);

      // var date =
      //   today.getFullYear() +
      //   "-" +
      //   (today.getMonth() + 1) +
      //   "-" +
      //   today.getDate();
      // var time =
      //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // this.data = date + " " + time;

      // const data =
      //   today.getFullYear() +
      //   "-" +
      //   (today.getMonth() + 1) +
      //   "-" +
      //   today.getDate() +
      //   " " +
      //   today.getHours() +
      //   ":" +
      //   String(today.getMinutes()).padStart(2, 0) +
      //   ":" +
      //   today.getSeconds();
      // this.data = data;
    }
  }
};
</script>

<style>
</style>