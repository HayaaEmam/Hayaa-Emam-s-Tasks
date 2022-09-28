<script lang="ts">

const counterApp={
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increase() {
      this.count ++;
    },
    decrease() {
      this.count --;
    },
  },
};

export default counterApp
</script>

<template>
  <div class="div">
    <h1>Vue Counter App</h1>
    <h2>{{ count }}</h2>
    <div class="div2">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 30vw;
  margin: 30vh auto;
}

h1 {
  font-family: sans-serif;
  font-size: 5vh;
  color: #fff;
  text-align: center;
}

h2 {
  font-family: sans-serif;
  font-size: 4vh;
  color: #fff;
  text-align: center;
}

.div2 {
  display: flex;
  justify-content: space-evenly;
  margin: 0px;
}

button {
  border-radius: 100%;
  width: 5vh;
  height: 5vh;
  font-size: 4vh;
  text-align: center;
}
</style>
