<template>
  <div class="ranking-view">
    <h1>ランキング</h1>
    <button @click="fetchRanking">最新のランキング取得</button>
    <ul>
      <li v-for="(item, idx) in ranking" :key="idx">
        {{ idx + 1 }}位: {{ item.name }} - {{ item.score }}点
      </li>
    </ul>
    <div v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ScoreRankingApi } from '../../api-client'

const ranking = ref<{ name: string; score: number }[]>([])
const errorMessage = ref('')

const fetchRanking = async () => {
  try {
    const api = new ScoreRankingApi()
    // timeLimitSec=3600（1時間）で取得
    const res = await api.scoreRankingControllerGetRanking(3600)
    ranking.value = (res.data as any[])
    errorMessage.value = ''
  } catch (e) {
    errorMessage.value = 'ランキング取得失敗'
  }
}

onMounted(fetchRanking)
</script>

<style scoped>
.ranking-view { max-width: 400px; margin: 0 auto; text-align: center; }
ul { list-style: none; padding: 0; }
li { margin: 8px 0; }
</style> 