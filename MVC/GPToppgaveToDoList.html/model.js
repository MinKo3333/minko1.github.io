toDoList = [


]
category = [
  { id: 1, category: 'done' },
  { id: 2, category: 'undone' },
]
  /*{
    id: 'dummy',
    chore: 'inputValue',
    registeredTime: 'timedata',
    clearedTime: '',
    categoryid: 3,
  
  }*/


const model = {
  app:{
    app: document.getElementById('app'),
  },
  input:{

    toDoListInput: "",
    
  },
  data:{
    category: [
      {id: 1, category: "done"},
      {id: 2, category: "undone"},
    ],

    toDoList: [
      {
        id: 'dummy',
        chore: 'Bake kake',
        registeredTime: 'timedata',
        clearedTime: '',
        categoryid: 3,
      },

    ],
  }
}