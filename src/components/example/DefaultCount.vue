<template>
  <div>
    <p>Count : {{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data () {
   return {
     count: 0 // count에 타입을 지정해줄 수 없다.
   }
  },
  methods: {
    increment(): void {
      this.count++
    },
    decrement(): void {
      this.count--
    }
  }
}
</script>
