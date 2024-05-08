export const state = () => ({
  todoList: [
    {
      id:1,
      content:'666'
    },
    {
      id:2,
      content:'777'
    },
    {
      id:3,
      content:'888'
    },
    {
      id:4,
      content:'999'
    },
  ]
})

export const mutations = {
  delete(state, id) {
    state.todoList=state.todoList.filter(todo=>todo.id!=id)
  },
  add(state,text){
    let item={}
    let id=0
    state.todoList.forEach(e => {
      if(id<e.id){
        id=e.id
      }
    });
    item.id=id+1  // 找到最大的id+1
    item.content=text
    state.todoList.push(item)
  },
  change(state,payload){
    const editItem=state.todoList.filter((todo)=>todo.id===payload.id)
    editItem[0].content=payload.content
  }

}
