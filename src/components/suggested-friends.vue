<template>
    <div class="suggested-friends">
        <div class="flex justify-between items-center mb-3">
            <h3 class="text-gray-500 text-sm font-semibold">Suggestions For You</h3>
            <a class="text-xs" href="#">See all</a>
        </div>
        <template v-for="user in users" :key="user.id">
            <div class="flex justify-between items-center mb-4 last:mb-0">
                <user-strip :user="user" />
                <button class="text-blue-500 text-xs font-semibold">Follow</button>
            </div>
        </template>
    </div>
</template>

<script>
import UserStrip from "./user-strip.vue"

export default {
    name: "SuggestedFriends",
    components: {
        UserStrip
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    }
}
</script>