<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 記事を入れておく箱（将来はD1からここに入る！）
const posts = ref<{ id: number; title: string; content: string }[]>([])
const loading = ref(true)

const fetchPosts = async () => {
  try {
    // 将来はここが '/api/posts' (Cloudflare Functions) になる！
    // 今は練習として、少し待ってから仮のデータを出すよ
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    posts.value = [
      { id: 1, title: "初投稿！", content: "RustからTypeScriptに引っ越してきました。" },
      { id: 2, title: "Cloudflare D1への野望", content: "次はDBを繋いで、本当のブログにするぞ。" }
    ]
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div class="max-w-2xl mx-auto p-6 font-sans">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-black text-gray-900 mb-2">おもちぶろぐ</h1>
      <p class="text-gray-500">いろいろ備忘録とか書いてくブログです～</p>
    </header>

    <main>
      <div v-if="loading" class="text-center py-10">
        <p class="animate-pulse text-blue-500">記事を読み込み中...</p>
      </div>

      <div v-else class="space-y-8">
        <article v-for="post in posts" :key="post.id" class="p-6 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md transition">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 leading-relaxed">{{ post.content }}</p>
        </article>
      </div>
    </main>
  </div>
</template>