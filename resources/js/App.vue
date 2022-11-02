


<template>
    <div>

        
        <router-view v-slot="slotProps">
            <transition mode="out-in" name="route">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

.route-enter-from,
.route-leave-to
{
    opacity: 0;
    transform: translateY(-30px);
}

.route-enter-to,
.route-leave-from{
    opacity: 1;
    transform: translateY(0px) ;
    
}

.route-enter-active{
transition: all 0.2s ease-out;
}

.route-leave-active{
    
    transition: all 0.2s ease-in;
}



</style>