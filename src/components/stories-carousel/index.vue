<template>
    <div class="stories-carousel relative bg-white border border-gray-300 rounded py-4 flex overflow-hidden">
        <button class="absolute bg-white w-6 h-6 flex items-center justify-center rounded-full shadow right-2 top-2/4 transform -translate-y-2/4 active:opacity-100">
            <img class="h-2/4" :src="RightChevron">
        </button>
        <template v-for="story in stories" :key="story.id">
            <story-bubble class="ml-4" :story="story" />
        </template>
    </div>
</template>

<script>
import StoryBubble from "./story-bubble.vue";
import RightChevron from "../../assets/img/icons/arrow-right.svg";

export default {
    name: "StoriesCarousel",
    components: {
        StoryBubble,
    },
    data() {
        return {
            RightChevron,
            stories: [
                {
                    id: 1,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123733235_222106549305778_5377264640062787_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=mhNuKKRMyYoAX9uB2Ki&tp=1&oh=fce976b3415864b08fa791a17027dfba&oe=600DB3FA",
                    nickname: "pitubear"
                },
                {
                    id: 2,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118692165_791686131576524_7397459608753538824_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=phifpQrLGRAAX9WRF1n&tp=1&oh=1e6061a62ab22175dc7b376be851b03d&oe=600D7B6C",
                    nickname: "rossmariaofficial"
                },
                {
                    id: 3,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/74665270_960222561093451_7482855760129425408_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=DHqOvUZf6IcAX_1wByU&tp=1&oh=3858fc67b67ea76c0a9651f28228df1a&oe=600CD3CA",
                    nickname: "fracifellyb"
                },
                {
                    id: 4,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44841590_338445376955932_7978351224942493696_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=MKSzJBuYPBgAX-NV2Bv&tp=1&oh=00023080b7d00e6111cb75add50fe0e3&oe=600C7507",
                    nickname: "geovanny_style"
                },
                {
                    id: 5,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/89750270_2574606896142619_168145354003316736_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=wZv-qW_uCEwAX8UpUqM&tp=1&oh=a2a6765d20246d394772c2818327c118&oe=600B51C1",
                    nickname: "plazalama"
                },
                {
                    id: 6,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/46702158_1527306730746791_4917233548097748992_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=-K20-sS9ZBwAX8eNVRw&tp=1&oh=ba327892ec2388f5f184582da5ac93ab&oe=600DA114",
                    nickname: "vargasracingshop"
                },
                {
                    id: 7,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119212035_239827994073834_7752811925137782806_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=XCH9PSoIiRMAX-lOf8k&tp=1&oh=6adb7fee10ff7ebff6ceeb5d7beb4b30&oe=600C2949",
                    nickname: "mkbhd"
                },
                {
                    id: 8,
                    picture: "https://instagram.fhex2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106379552_204434247480676_5068653656749265615_n.jpg?_nc_ht=instagram.fhex2-1.fna.fbcdn.net&_nc_ohc=tEuY_cIQnGMAX8jOyra&tp=1&oh=db7454fc4ef271e36e1dc6c0361b7c70&oe=600C2DE5",
                    nickname: "oneplus.nord"
                }
            ]
        }
    }
}
</script>

<style>

</style>