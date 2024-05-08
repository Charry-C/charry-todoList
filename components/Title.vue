<template lang="pug">
  div.title
    h2.title__name Charry NUXT TODOLIST
    div.title__input-box
      input(
        v-model="mytodo"
      )
      button.title__input-box-add(
        @click="addTodo"
      ) ADD
    span.title__tip(
      v-if="tip"
    ) 请输入内容!

</template>

<script>
export default {
  name:'TodoTitleContent',
  data(){
    return{
      mytodo:'',
      tip:false
    }
  },
  methods:{
    addTodo(){
      if(this.mytodo==''){
        this.tip=true
        setTimeout(()=>{
          this.tip=false
        },3000)
      }else{
        this.$store.commit('add',this.mytodo)
        this.mytodo='' // 清空
      }
    }
  },
  watch:{
    mytodo:function(newVal,oldVal){
      console.log('watch:',this.mytodo);
      console.log('new:',newVal,'old:',oldVal);
    },

  }


}
</script>

<style lang="scss">
.title{
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  &__name{
    text-align: center;
  }
  &__input-box{
    background-color: aqua;
    height: 30px;
    border-radius:  4px 0 0 4px;
    display: flex;
    input{
      outline-color: rgb(0, 0, 0);
      border: 1px solid #ccc;
      padding: 5px;
      border-radius:  4px 0 0 4px;
      flex: 10;
    }
    &-add{
      flex: 1;
    }
  }
  &__tip{
    font-size: 12px;
    font-weight: bold;
    color: red;
  }

}
</style>

