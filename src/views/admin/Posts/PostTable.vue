<template>
  <div
    class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th class="px-5 py-3 text-left w-1/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">No</p>
            </th>
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Title</p>
            </th>
            <!-- <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Content</p>
            </th> -->
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Thumbnails</p>
            </th>
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Category </p>
            </th>
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Tags</p>
            </th>
             <th class="px-5 py-3 text-left w-3/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Action</p>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr
            v-for="(post, index) in posts"
            :key="index"
            class="border-t border-gray-100 dark:border-gray-800"
          >
            <td class="px-5 py-4 sm:px-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 overflow-hidden rounded-full">
                    {{ index+1 }}
                </div>
            </div>
            </td>
            <td class="px-5 py-4 sm:px-6">
                <div>
                  <span class="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {{ post.title }}
                  </span>
                </div>
            </td>
            <!-- <td class="px-5 py-4 sm:px-6">
              <div>
                    {{ post.body}}
              </div>
            </td> -->

            <td class="px-5 py-4 sm:px-6">
              <div class="rounded-2xl w-24 h-24">
                    <img :src="`http://127.0.0.1:8000/storage/${post.thumbnail}`" />
              </div>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ post.category.name_kh }}</p>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <div class="flex">
                  <p v-for="(tag, idx) in post.tags" :key="idx" class="text-gray-100 text-theme-sm dark:text-gray-100 bg-sky-900 p-1 m-1 rounded-2xl">
                  {{ tag['name'] }}
              </p>
              </div>
              
            </td>
            <td class="px-4 py-2 space-x-2">
            <button
              @click="editPost(post.id)"
              class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
            >
              Edit
            </button>
            <button
              @click="deletePost(post.id)"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

defineProps({
  posts: {
    type: Array,
    default: () => []
  }
});

function editPost(postId) {
  // alert(`Edit post: ${post.title}`)
  // // Open modal or navigate to edit form
  router.push({ name: 'PostEdit', params: { id: postId } })

  
}

function deletePost(id) {
  if (confirm('Are you sure you want to delete this post?')) {
    posts.value = posts.value.filter(p => p.id !== id)
  }
}

</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
