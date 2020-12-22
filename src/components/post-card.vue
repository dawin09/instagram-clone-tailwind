<template>
    <div class="post-card border border-gray-300 rounded overflow-hidden">
        <div class="flex bg-white p-4 items-center justify-between border-b border-gray-300">
            <div class="flex items-center">
                <img class="rounded-full overflow-hidden w-8 h-8 border border-gray-400 mr-3" src="https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130166853_394237098465535_5871991330420396169_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=WoMifRuOWoIAX8VKw1n&tp=1&oh=55a90b227a1aede5bf651f6805eaa692&oe=600C0805">
                <a class="text-sm font-semibold hover:underline" href="#">hondarepublicadominicana</a>
            </div>
            <img class="cursor-pointer" :src="DotsSVG" alt="">
        </div>
        <img class="flex-shrink-0" src="https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/131982683_131841792038761_6345792694851067903_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=TVqK315k8pUAX8QmOq4&tp=1&oh=63d63b24bc70f751ef50b294fee19a5a&oe=600A039C">
        <div class="p-4 bg-white text-sm pb-2">
            <div class="flex mb-2">
                <button type="button" class="ml-3 first:ml-0 last:ml-auto" :key="index" v-for="(icon, index) in actionsIcons">
                    <img :src="icon">
                </button>
            </div>
            <p class="font-semibold text-gray-800">129 likes</p>
            <p class="text-gray-800"><a class="font-semibold hover:underline mr-1" href="#">hondarepublicadominicana</a>El innovador diseño del Civic Hatchback lo puedes ver desde el frente hasta la parte de atrás...<button type="button" class="text-gray-500 ml-1">more</button></p>
            <button type="button" class=" text-gray-500 block">View all 12 comments</button>
            <div class="flex">
                <a class="font-semibold hover:underline" href="#">hondarepublicadominicana</a><a class="ml-1 text-blue-900" href="#">@maria.soriaguevara</a><button type="button" class="w-3 ml-auto"><img :src="LikeSVG"></button>
            </div>
            <div class="flex">
                <a class="font-semibold hover:underline" href="#">hondarepublicadominicana</a><a class="ml-1 text-blue-900" href="#">@ncruzfermin</a><button type="button" class="w-3 ml-auto"><img :src="LikeSVG"></button>
            </div>
            <a href="#" class="text-xxs text-gray-500 font-semibold">7 HOURS AGO</a>
        </div>
        <div class="flex bg-white justify-between px-4 py-4 border-t">
            <input v-model="comment" class="w-full" type="text" placeholder="Add a comment...">
            <button :class="{ 'opacity-100' : comment != '' }" class="text-blue-400 font-semibold text-sm opacity-50">Post</button>
        </div>
    </div>
</template>

<script>
import DotsSVG from "../assets/img/icons/three-dots.svg";
import LikeSVG from "../assets/img/icons/like.svg";
import CommentSVG from "../assets/img/icons/comment.svg";
import ShareSVG from "../assets/img/icons/share.svg";
import SaveSVG from "../assets/img/icons/save.svg";

export default {
    name: "PostCard",
    data() {
        return {
            DotsSVG,
            LikeSVG,
            actionsIcons: [
                LikeSVG,
                CommentSVG,
                ShareSVG,
                SaveSVG
            ],
            comment: ""
        }
    }
}
</script>