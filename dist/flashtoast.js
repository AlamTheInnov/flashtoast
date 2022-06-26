import { ref } from 'vue';
import FlashToast from './FlashToast.vue';

export const flashToast = {
    install(app, options) {
        app.component('FlashToast', FlashToast);
        app.directive('zIndex', (el, binding, vnode) => {
            el.style.zIndex = binding.arg;
        });
        app.directive('class', (el, binding, vnode) => {
            el.classList.add(binding.arg);
        });

        const fts = ref([]);

        const hideToast = (toastFlash) => {
            fts.value = fts.value.filter(ft => {
                return ft.id != toastFlash.id;
            });
        }

        const hideToastOnDelay = (toastFlash) => {
            setTimeout(() => {
                fts.value = fts.value.filter(ft => {
                    return ft.id != toastFlash.id;
                });
            }, toastFlash.delay);
        }

        app.provide('toast', {
            success(data) {
                fts.value.push({
                    id: Math.floor(Math.random() * 10000),
                    variant: 'success',
                    title: data.title ? data.title : 'Success',
                    message: data.message,
                    delay: data.delay
                });
            },
            error(data) {
                fts.value.push({
                    id: Math.floor(Math.random() * 10000),
                    variant: 'error',
                    title: data.title ? data.title : 'Error',
                    message: data.message,
                    delay: data.delay
                });
            },
            info(data) {
                fts.value.push({
                    id: Math.floor(Math.random() * 10000),
                    variant: 'info',
                    title: data.title ? data.title : 'Info',
                    message: data.message,
                    delay: data.delay
                });
            },
            warning(data) {
                fts.value.push({
                    id: Math.floor(Math.random() * 10000),
                    variant: 'warning',
                    title: data.title ? data.title : 'Warning',
                    message: data.message,
                    delay: data.delay
                });
            }
        });

        app.provide('fts', fts);
        app.provide('hideToast', hideToast);
        app.provide('hideToastOnDelay', hideToastOnDelay);
    }
}
