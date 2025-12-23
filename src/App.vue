<script setup lang="ts">
import { ref, onMounted } from 'vue' // 1. Vueの便利な道具を借りてくるよ

// 2. 画面に表示するための「空っぽの箱」を用意するよ
const serverMessage = ref('') 

// 3. 画面がパッと表示された瞬間に、自動で動く魔法をかけるよ
onMounted(async () => {
  // 4. お店（バックエンド）に「データちょうだい！」ってメールを送るよ
  const response = await fetch('/api/hello') 
  
  // 5. 返ってきたメールの内容（JSON）を読み取るよ
  const data = await response.json()
  
  // 6. 読み取ったメッセージを、さっきの「箱」に入れるよ！
  serverMessage.value = data.message
})
</script>

<template>
  <div style="text-align: center; margin-top: 50px; font-family: sans-serif;">
    
    <h1 style="color: #42b883;">Vue 🚀 Node.js</h1>
    
    <div style="background: #f0f0f0; padding: 20px; border-radius: 10px; display: inline-block;">
      <p>サーバーからの返事：</p>
      <strong style="font-size: 1.5rem; color: #35495e;">
        {{ serverMessage || '読み込み中...' }}
      </strong>
    </div>

  </div>
</template>