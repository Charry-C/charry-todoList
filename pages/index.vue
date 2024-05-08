<template lang="pug">
  div.index
    div.index__box
      Title
      contentTodo


</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
.index{
  &__box{
    padding: 5px;
    padding-top: 20px;
    width:60%;
    background-color:rgb(255, 255, 255);
    margin:100px auto;
    box-shadow: rgba(0, 60, 255, 0.5) 0px 0px 0px 3px;
    border-radius: 5px;
  }
}

</style>

