<template>
<div class="max-w-screen-xl mx-auto px-4">

  <div class="flex justify-between mt-20">
    <div class="mx-auto table text-center text-sm">
        <a class="uppercase" href="#">Advertisement</a>
        <a href="#">
          <img src="@/img/ads/ads_728.jpg" alt="advertisement area">
        </a>
    </div>
  </div>
<NewTicker :newsTickers="newsTickers"/>
<HeroSection :firstPost="firstPost" :remainingPosts="remainingPosts" />
<!-- <BlocksNewRight /> -->
<BlocksNewsCardList :firstPost="firstPost" :remainingPosts="remainingPosts"/>
<BlocksNewsCardList :firstPost="firstPost" :remainingPosts="remainingPosts"/>
<BlocksNewsCardList :firstPost="firstPost" :remainingPosts="remainingPosts"/>
</div>

</template>

<!-- <script>
import BlockNewsCard from '@/views/public/home/BlocksNewsCard.vue';
import BlocksNewRight from '@/views/public/home/BlocksNewRight.vue';
import HeroSection from '@/views/public/home/HeroSection.vue';
import BlocksNewsCardList from '@/views/public/home/BlocksNewsCardList.vue';
import NewTicker from '@/views/public/home/NewsTicker.vue';
import { onMounted, ref } from "vue";
import axios from "axios";


const recentPosts= ref([]);
onMounted(() => {
  fetchPosts()

})

const fetchPosts = async (id) => {
    try
    {
      const res  = await axios.get(`http://127.0.0.1:8000/api/articles`)
      if(res)
      {
          recentPosts.value=res.data
          console.log(recentPost.value)
      }
    }
      catch (err) {
      console.error(err)
    }
}


export default {
  name: "HomePage",
  components: {
    BlockNewsCard,
    HeroSection,
    BlocksNewRight,
    BlocksNewsCardList,
    NewTicker
  },
  data(){

  }
};
</script> -->

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

import BlockNewsCard from '@/views/public/home/BlocksNewsCard.vue';
import BlocksNewRight from '@/views/public/home/BlocksNewRight.vue';
import HeroSection from '@/views/public/home/HeroSection.vue';
import BlocksNewsCardList from '@/views/public/home/BlocksNewsCardList.vue';
import NewTicker from '@/views/public/home/NewsTicker.vue';

const recentPosts = ref([]);
const firstPost =ref([]);
const remainingPosts=ref([]);
const newsTickers=ref([]);

const fetchPosts = async () => {
  try {
    //const res = await axios.get("http://127.0.0.1:8000/api/articles");
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/articles`);
    if (res?.data) {
      recentPosts.value = res.data.posts;
      newsTickers.value=res.data.news_tickers;
      // ✅ បែងចែកអត្ថបទ
        firstPost.value = recentPosts.value.slice(0, 1);
        remainingPosts.value = recentPosts.value.slice(1);
      console.log(recentPosts.value); // ✅ correct spelling
    }
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
};

onMounted(() => {
  fetchPosts();
});



</script>
