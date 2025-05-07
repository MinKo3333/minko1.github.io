let model={
  app:{
    currentRecipe:'',
    currentPage:'',
    searchInput:''    
  },
  data:{
    recipe:[
      {id: 1,
        name: '00',
        type: 4,
        picture: '',
        ingredient: [
         {name:'떡',amount:''},
         {name:'어묵',amount:''},
         {name:'고추장',amount:'1 큰 술'},
         {name:'소고기 다시다',amount:'1 작은 술'},
         {name:'고춧가루',amount:'1 큰 술'},
         {name:'설탕',amount:'1 큰 술'},
         {name:'물엿',amount:'1 큰 술'},
         {name:'파',amount:'송송송'}],
        taste:'학교 앞 분식집 떡볶이 맛',
        cookingTime: 30,
        instruction: 'sample instruction'
      },

      {id: 0,
       name: '떡볶이',
       type: 0,
       picture: "picture/다운로드.jpg",
       ingredient: [
        {name:'떡',amount:''},
        {name:'어묵',amount:''},
        {name:'고추장',amount:'1 큰 술'},
        {name:'소고기 다시다',amount:'1 작은 술'},
        {name:'고춧가루',amount:'1 큰 술'},
        {name:'설탕',amount:'1 큰 술'},
        {name:'물엿',amount:'1 큰 술'},
        {name:'파',amount:'송송송'}],
       taste:'학교 앞 분식집 떡볶이 맛',
       cookingTime: 30,
       instruction:`
       1. 물 200ml를 끓이고 끓는 물에 소고기다시다, 떡, 어묵, 고추장, 고춧가루, 설탕, 물엿을 넣고 끓인다.
       2. 떡이 한번 부풀어 올랐다가 다시 작아지면 파를 송송송뿌린다.
       3. 맛있게 먹는다!
       `        
      }],

    foodTypeid:{
      korean:0,
      japanese:1,
      chinese:2,
      western:3,
      others:4
    }

    
  }
}