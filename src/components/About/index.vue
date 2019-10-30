<template>
  <div @click="getTime">
    <h1>Slim Shady about</h1>
    <h1 v-for="(item, index) in data.items['insert_time']" :key="index">{{ item }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        totalItems: 0,
        pageCount: 0,
        items: [
          {
            operator: "string",
            command: "string",
            value: 0,
            status: "string",
            comment: "string",
            insert_time: "2012-01-26T13:51:50.417-07:00"
          },
          {
            operator: "string",
            command: "string",
            value: 0,
            status: "string",
            comment: "string",
            insert_time: "2017-01-26T13:51:50.417-07:00"
          },
          {
            operator: "string",
            command: "string",
            value: 0,
            status: "string",
            comment: "string",
            insert_time: "2018-01-26T13:51:50.417-07:00"
          }
        ]
      }
    };
  },
  computed: {
    getTime() {
      return (this.data = this.data.items.map(item => ({
        ...item,
        insert_time: new Date(item.insert_time)
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, "")
      })));
      const today = new Date();
      // const das = new Date(Date.parse(item.insert_time)).toUTCString()
      return console.log(this.today);
      // const today = new Date().toDateString();

      // console.log(today);

      // const date =
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