<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Basic Table 1">
        <PostTable :posts="posts" />
      </ComponentCard>
    </div>
  </AdminLayout>
</template>

<script setup>

import { onMounted, ref } from "vue";
import PageBreadcrumb from "@/components/admin/common/PageBreadcrumb.vue";
import AdminLayout from "@/components/admin/layout/AdminLayout.vue";
import ComponentCard from "@/components/admin/common/ComponentCard.vue";
import PostTable from "@admin/Posts/PostTable.vue";
import axios from "axios";


const currentPageTitle = ref("All Post");

const posts= ref([]);




// for edit post
onMounted(() => {
  fetchPosts()

})

const fetchPosts = async (id) => {
  try
  {
    const res  = await axios.get(`http://127.0.0.1:8000/api/posts`)
    if(res)
    {
        posts.value=res.data
        console.log(res.data)
    }
  }
  catch (err) {
    console.error(err)
  }
  }

  </script>