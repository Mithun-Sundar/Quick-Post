<template>
    ` <div id="LoginView" class="grid h-screen place-items-center bg-black overflow-hidden">
        <div>
            <img width="250" src="img/qp1.png" alt="" class="-mt-5">
            <div class="flex justify-center mt-3">
                <GoogleLogin :callback="callback"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from '@/store/user-store'
    import { onMounted } from '@vue/runtime-core'
    import { useRouter } from 'vue-router';

    const userStore = useUserStore()
    const router = useRouter()

    onMounted(() => {
        setTimeout(() => { router.push('/email') }, 250)
    })

    const callback = async (response) => {
        await userStore.getUserDetailsFromGoogle(response)
        setTimeout(() => { router.push('/email') }, 250)
    }
</script>
