<template>
    <div class="user-strip flex items-center">
        <!-- <figure class="overflow-hidden rounded-full">
            <slot name="user-picture">
                <img class="w-8" :src="user.picture" :alt="user.nickname">
            </slot>
        </figure> -->
        <img class="overflow-hidden rounded-full w-8 mr-2" :src="user.picture" :alt="user.nickname">
        <div class="flex flex-col">
            <a href="#" class="nickname text-sm font-semibold hover:underline">{{ user.nickname }}</a>
            <p class="text-xs text-gray-400">{{ user.footText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserStrip",
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>