<template>
    <div id="flashtoast-container" class="flashtoast-container" :class="position">
        <TransitionGroup :name="position">
            <div v-for="(ft, index) in fts" :key="`flash-toast${index}`" class="flashtoast" :class="direction"
                v-bind:class="`flashtoast-${ft.variant}`">
                <button type="button" class="flashtoast-close-button" role="button"
                    v-on:click="hideToast(ft)">×</button>
                <div class="flashtoast-title">{{ ft.title }}</div>
                <div class="flashtoast-message">{{ ft.message }}</div>
                {{ hideToastOnDelay(ft) }}
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    props: {
        position: {
            type: String,
            default: 'top-right'
        },
        direction: {
            type: String,
            default: 'ltr'
        }
    },
    setup() {
        const fts = inject('fts');
        const hideToast = inject('hideToast');
        const hideToastOnDelay = inject('hideToastOnDelay');

        // watch(() => fts, function (newValue, oldValue) {
        //     console.log('herer ' + newValue);
        // });

        return {
            fts,
            hideToast,
            hideToastOnDelay
        }
    },
}
</script>
