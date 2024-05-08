<template lang="pug">
  ul.todo-item
    li.todo-item__item(
      v-for="todo in todos"
      :key="todo.id"
    )
      div.todo-item__item-content(
        v-if="!isEdit"
      ) {{todo.content}}
      input.todo-item__item-content--edit(
        v-if="isEdit"
        :value="todo.content"
        @input="editText($event,todo.id)"
      )
      div.todo-item__item-time {{time}}
      div.todo-item__item-tool
        div.todo-item__item-edit(
          @click="editContent(todo.id)"
        ) {{isEdit?'存':'改'}}
        div.todo-item__item-del(
          @click="delContent(todo.id)"
        ) 删

</template>

<script>
export default {
  name:'todo-item',
  data(){
    return{
      time:null,
      isEdit:false,
    }
  },
  methods:{
    editContent(id){
      this.isEdit=!this.isEdit

    },
    delContent(id){
      console.log('shan',id);
      this.$store.commit('delete',id)
    },
    editText(e,id){
      console.log(e.target.value,'id:',id);
      this.$store.commit('change',{id,content:e.target.value})
    }
  },
  computed:{
    todos(){
      return this.$store.state.todoList
    }
  },
  created(){
    const date=new Date
    this.time=date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate()
  }



}
</script>

<style lang="scss">
.todo-item{
  padding: 2px 10px;
  border-radius: 5px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  height: 220px;
  overflow: hidden;
  overflow-y: auto;
  &__item{
    list-style: none;
    margin: 10px 0;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 5px;
    transition: all 0.3s;
    display: flex;
    &:hover{
      background-color: rgb(222, 248, 255);
      transform: translateY(-3px);
      font-weight: bold;
    }
    &-content{
      flex: 8;
      &--edit{
        flex: 8;
        outline: none;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #ccc;
        margin-right: 5px;
      }
    }
    &-tool{
      flex: 2;
      display: flex;
      justify-content: space-around;
      div{
        width: 20px;
        height: 17px;
        text-align: center;
        line-height: 17px;
        padding: 3px;
        color: #fff;
        border-radius: 3px;

      }
    }
    &-del{
        background-color: rgb(165, 0, 0);
        &:hover{
          background-color: rgb(255, 44, 44);
          cursor: pointer;
        }
      }
    &-edit{
        background-color: rgb(0, 62, 208);
        &:hover{
          background-color: rgb(0, 42, 255);
          cursor: pointer;
        }
      }
    &-time{
      float: right;
      margin-top: 10px;
      font-size: 10px;
      font-weight: bold;
      color: rgb(73, 73, 73);
    }
  }
}

</style>

