<template>
  <div>
    <h1>Letters</h1>
    <ul>
      <li v-for="letter in letters" :key="letter.id">
        <p><strong>Sender:</strong> {{ letter.sender }}</p>
        <p><strong>Receiver:</strong> {{ letter.receiver }}</p>
        <p><strong>Message:</strong> {{ letter.message }}</p>
        <p><strong>Status:</strong> {{ letter.status ? 'Active' : 'Inactive' }}</p>
        <p><strong>Created At:</strong> {{ new Date(letter.created_at).toLocaleString() }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '../services/api'

export default {
  data() {
    return {
      letters: []
    }
  },
  mounted() {
    this.fetchLetters()
  },
  methods: {
    async fetchLetters() {
      try {
        const response = await apiClient.get('/letters')
        this.letters = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
p {
  margin: 5px 0;
}
</style>
