<template>
 <!-- hero big grid -->
  <div class="bg-white py-2">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
    <!-- big grid 1 -->
    <div class="flex flex-row flex-wrap">
      <!--Start left cover-->
      <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
      <div class="relative hover-img max-h-98 overflow-hidden">
        <a href="#">
        <img class="max-w-full w-full mx-auto h-auto hover:scale-101 hover:opacity-80" src="@/img/dummy/img1.jpg" alt="Image description">
        </a>
        <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
        <a href="#" class="p-0">
          <h2 class="text-xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
        </a>
        <!-- <p class="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p> -->
        <div class="pt-1">
          <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
        </div>
        </div>
      </div>
      </div>

      <!--Start box news-->
      <div class="flex-shrink max-w-full w-full lg:w-1/2">
      <div class="box-one flex flex-row flex-wrap">
        <article class="flex-shrink max-w-full w-full sm:w-1/2">
        <div class="relative hover-img max-h-48 overflow-hidden">
          <a href="#">
          <img class="max-w-full w-full mx-auto h-auto hover:scale-101 hover:opacity-80" src="@/img/dummy/img2.jpg" alt="Image description">
          </a>
          <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
          <a href="#">
            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
          </a>
          <div class="pt-1">
            <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno</div>
          </div>
          </div>
        </div>
        </article>
        <article class="flex-shrink max-w-full w-full sm:w-1/2">
        <div class="relative hover-img max-h-48 overflow-hidden">
          <a href="#">
          <img class="max-w-full w-full mx-auto h-auto" src="@/img/dummy/img3.jpg" alt="Image description">
          </a>
          <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
          <a href="#">
            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Minimalist designs are starting to be popular with the next generation</h2>
          </a>
          <div class="pt-1">
            <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Architecture</div>
          </div>
          </div>
        </div>
        </article>
        <article class="flex-shrink max-w-full w-full sm:w-1/2">
        <div class="relative hover-img max-h-48 overflow-hidden">
          <a href="#">
          <img class="max-w-full w-full mx-auto h-auto" src="@/img/dummy/img4.jpg" alt="Image description">
          </a>
          <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
          <a href="#">
            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Tips for decorating the interior of the living room</h2>
          </a>
          <div class="pt-1">
            <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Interior</div>
          </div>
          </div>
        </div>
        </article>
        <article class="flex-shrink max-w-full w-full sm:w-1/2">
        <div class="relative hover-img max-h-48 overflow-hidden">
          <a href="#">
          <img class="max-w-full w-full mx-auto h-auto" src="@/img/dummy/img5.jpg" alt="Image description">
          </a>
          <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
          <a href="#">
            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
          </a>
          <div class="pt-1">
            <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Lifestyle</div>
          </div>
          </div>
        </div>
        </article>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.box-one > article:nth-child(1) { 
	padding-top: 0;
	padding-bottom: 0.125rem;
	padding-right: 0.125rem;
}
.box-one > article:nth-child(2) {
	padding-top: 0;
	padding-bottom: 0.125rem;
	padding-left: 0.125rem;
}
.box-one > article:nth-child(3) {
	padding-top: 0.125rem;
	padding-bottom: 0.125rem;
	padding-right: 0.125rem;
}
.box-one > article:nth-child(4) {
	padding-top: 0.125rem;
	padding-bottom: 0.125rem;
	padding-left: 0.125rem;
}
/*hover img*/
.hover-img:hover img {
 filter: brightness(103%) contrast(103%);
  opacity:.99;
}
</style>

