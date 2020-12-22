<template>
  <nav-bar />
  <div class="container pt-24 mx-auto grid grid-cols-3 gap-7">
    <main class="col-span-2">
      <stories-carousel class="mb-6" />
      <post-card class="mb-16" />
      <post-card class="mb-16" />
      <post-card class="mb-16" />
      <post-card class="mb-16" />
      <post-card class="mb-16" />
    </main>
    <aside class="col-span-1">
      <div class="fixed" style="max-width: 313px;">
        <!-- <user-strip :user="currentAccount" class="mb-5">
          <template v-slot:user-picture>
            <img class="w-16" :src="currentAccount.picture">
          </template>
        </user-strip> -->
        <div class="flex justify-between items-center mb-5">
            <user-strip class="current-user" :user="currentAccount" />
            <button class="text-blue-500 text-xs font-semibold">Switch</button>
        </div>
        <suggested-friends :users="suggestedFriends" class="mb-6" />
        <div class="links flex flex-wrap mb-4 -ml-2">
          <template v-for="(link, index) in footerLinks" :key="index">
            <a href="#" class="text-xxs text-gray-400 ml-1 flex items-center">
              <div class="relative w-0.5 h-0.5 bg-gray-400 mr-1 rounded-full" />
              {{ link }}
            </a>
          </template>
        </div>
        <p class="copyright text-xxs text-gray-400">&copy; 2020 INSTAGRAM FROM FACEBOOK</p>
      </div>
    </aside>
  </div>
</template>

<script>
import NavBar from './components/nav-bar.vue';
import PostCard from './components/post-card.vue';
import suggestedFriendsVue from './components/suggested-friends.vue';
import SuggestedFriends from './components/suggested-friends.vue';
import UserStrip from './components/user-strip.vue';
import StoriesCarousel from './components/stories-carousel/index.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    PostCard,
    SuggestedFriends,
    UserStrip,
    StoriesCarousel,
  },
  data() {
    return {
      currentAccount: {
        id: 563,
        picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/28156012_457524727996658_7777947015824015360_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=Wk7nx3LqeLwAX8qaqxT&tp=1&oh=6f431fc9212c44dc71daaf5182a91583&oe=600CA6EF",
        nickname: "dawin09",
        footText: "Dawin Camilo Cortes"
      },
      suggestedFriends: [
        {
          id: 1,
          picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/129773099_429597871388764_3095818332694142592_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=ILwXhj_z1OYAX8y2T_I&tp=1&oh=36c5a3bbb1dbf7c35741576d57b799e1&oe=600C883E",
          nickname: "loly.mercedes",
          footText: "New to Instagram"
        },
        {
          id: 2,
          picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/81815812_183118986226761_2266545222391431168_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=6-uu474TdawAX8V3tYU&tp=1&oh=6775eb1130f6007d43e191e68c2ada06&oe=600B8172",
          nickname: "walter_ztrife",
          footText: "Suggested for you"
        },
        {
          id: 3,
          picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122819972_786143225497093_84678818040600126_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=8d2QiPvPOPMAX_L_Bu0&tp=1&oh=2c0760db3379a3da2ecf4da0facd9eb6&oe=600D6937",
          nickname: "santiagoquezada30",
          footText: "Suggested for you"
        },
        {
          id: 4,
          picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119704326_653591955292081_2429838999235437458_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=liN5HK4HJ_cAX8L-Zl-&tp=1&oh=c9d16a561f84f31701e8faadb3c7b14b&oe=600C0E5E",
          nickname: "lajapolatina",
          footText: "Followed by lilisabel.juliplacido + 8 more"
        },
        {
          id: 5,
          picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71827259_2464460997147332_5275104259153592320_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=17qMU169uUMAX8lstMj&tp=1&oh=cb344f16bc960ede1cf43b03c393ddee&oe=600C6F7F",
          nickname: "nosfe.666",
          footText: "Followed by icingdeath28 + 2 more"
        }
      ],
      footerLinks: [
        "About",
        "Help",
        "Press",
        "API",
        "Jobs",
        "Privacy",
        "Terms",
        "Locations",
        "Top Accounts",
        "Hashtags",
        "Language"
      ]
    }
  }
}
</script>

<style>
.current-user img {
  width: 56px !important;
}
</style>
