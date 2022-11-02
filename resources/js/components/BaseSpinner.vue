<template>
    <div class="parent-spinner">

        <div class="lds-dual-ring"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

.parent-spinner{
    text-align: center;
}
.lds-dual-ring {
    display: inline-block;
    width: 40px;
    height: 40px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 34px;
    height: 34px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #0076DE;
    border-color: #0076DE transparent #0076DE transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  

</style>