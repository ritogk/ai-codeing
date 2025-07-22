<template>
  <div class="game-view">
    <h1>ぷよぷよスコアアタック</h1>
    <div v-if="!isGameStarted">
      <button @click="startGame">ゲーム開始</button>
    </div>
    <div v-else>
      <div>残り時間: {{ remainingTime }}秒</div>
      <div>スコア: {{ score }}</div>
      <!-- ぷよぷよ風の簡易ゲーム盤（ダミー） -->
      <div class="board">
        <button @click="addScore(10)">ぷよ消し！（+10点）</button>
      </div>
      <div v-if="isGameOver">
        <div>ゲーム終了！あなたのスコア: {{ score }}</div>
        <input v-model="playerName" placeholder="名前を入力" />
        <button @click="submitScore" :disabled="!playerName || isSubmitting">スコア送信</button>
        <div v-if="submitMessage">{{ submitMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ScoreApi } from '../../api-client'

const isGameStarted = ref(false)
const isGameOver = ref(false)
const remainingTime = ref(30)
const score = ref(0)
const timer = ref<ReturnType<typeof setInterval> | null>(null)
const playerName = ref('')
const isSubmitting = ref(false)
const submitMessage = ref('')

const startGame = () => {
  isGameStarted.value = true
  isGameOver.value = false
  score.value = 0
  remainingTime.value = 30
  submitMessage.value = ''
  timer.value = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--
    } else {
      endGame()
    }
  }, 1000)
}

const endGame = () => {
  isGameOver.value = true
  if (timer.value) clearInterval(timer.value)
}

const addScore = (point: number) => {
  if (!isGameOver.value) score.value += point
}

const submitScore = async () => {
  isSubmitting.value = true
  try {
    const api = new ScoreApi()
    const dto = { name: playerName.value, score: score.value }
    await api.scoreControllerCreateScore(dto)
    submitMessage.value = 'スコア送信完了！'
  } catch (e) {
    submitMessage.value = '送信失敗...'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.game-view { max-width: 400px; margin: 0 auto; text-align: center; }
.board { margin: 20px 0; }
</style> 