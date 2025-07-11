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
<NewTicker/>
<HeroSection />
<BlocksNewRight />
<BlocksNewsCardList/>
</div>

</template>

<script>
import BlockNewsCard from '@/views/public/home/BlocksNewsCard.vue';
import BlocksNewRight from '@/views/public/home/BlocksNewRight.vue';
import HeroSection from '@/views/public/home/HeroSection.vue';
import BlocksNewsCardList from '@/views/public/home/BlocksNewsCardList.vue';
import NewTicker from '@/views/public/home/NewsTicker.vue';

export default {
  name: "HomePage",
  components: {
    BlockNewsCard,
    HeroSection,
    BlocksNewRight,
    BlocksNewsCardList,
    NewTicker
  }
};
</script>



