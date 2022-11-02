



<template>


    <button class=""> <slot>Button</slot></button>
</template>

<script>
    export default {

        
        
    }
</script>

<style  scoped>

button{
    cursor: pointer;
    width: 100%;
    padding:6px 8px;
    color: white;
    background: #0076DE;
    border-color: #0076DE;
    border-radius: 20px;
    transition: all 0.1s ease;
}

button:hover{
    transform: scale(0.98);
    background: #0b518f;
}

</style>