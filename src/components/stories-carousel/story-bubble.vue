<template>
    <button class="story-bubble flex flex-col overflow-hidden flex-shrink-0">
        <figure class="p-0.5 overflow-hidden rounded-full">
            <img class="overflow-hidden rounded-full w-16 h-16 border-2 border-white box-border" :src="story.picture" alt="">
        </figure>
        <p class="text-xs truncate mt-1">{{ story.nickname }}</p>
    </button>
</template>

<script>
export default {
    name: "StoryBubble",
    props: {
        story: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.story-bubble {
    width: 68px;
}

.story-bubble figure {
    width: fit-content;
    background: rgb(196,46,145);
    background: radial-gradient(circle, rgba(196,46,145,1) 0%, rgba(249,158,77,1) 100%);
}

.story-bubble p {
    width: inherit;
}
</style>