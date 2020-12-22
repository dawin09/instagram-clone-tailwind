<template>
    <div class="nav-bar z-10 fixed w-full bg-white border border-gray-300 flex py-2">
        <div class="container mx-auto flex items-center justify-between">
            <img class="mt-2" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png">
            <input type="text" class="w-56 h-7 border border-gray-300 rounded bg-gray-50 text-center text-base focus:text-left py-0.5 px-2.5" placeholder="Search">
            <div class="flex">
                <a class="ml-5 first:ml-0 w-6 h-6 rounded-full last:overflow-hidden" :href="link.url" :key="index" v-for="(link, index) in links">
                    <img :src="link.icon">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import HomeSVG from "../assets/img/icons/home.svg";
import InboxSVG from "../assets/img/icons/inbox.svg";
import ExploreSVG from "../assets/img/icons/explore.svg";
import ActivitySVG from "../assets/img/icons/activities.svg";

export default {
    name: "NavBar",
    data() {
        return {
            links: [
                {
                    icon: HomeSVG,
                    url: "#"
                },
                {
                    icon: InboxSVG,
                    url: "#"
                },
                {
                    icon: ExploreSVG,
                    url: "#"
                },
                {
                    icon: ActivitySVG,
                    url: "#"
                },
                {
                    icon: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/28156012_457524727996658_7777947015824015360_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=Wk7nx3LqeLwAX8qaqxT&tp=1&oh=6f431fc9212c44dc71daaf5182a91583&oe=600CA6EF",
                    url: "#"
                }
            ]
        };
    }
}
</script>