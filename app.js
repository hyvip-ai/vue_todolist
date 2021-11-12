

var app = new Vue({
    el: '#app',
    data: {
        todos: [
            {id:0,name:"todo1", text: 'Learn JavaScript',completed:true },
            {id:1,name:"todo2", text: 'Learn Vue' ,completed:false},
            {id:2,name:"todo3" ,text: 'Build something awesome' ,completed:true}
          ],
          name:"",
          text:""
    },
    methods:{
        toogletask:function(id){
            console.log("called"+id)
            for(let item of this.todos){
                if(item.id == id){
                    item.completed = !item.completed
                }
            }
        },
        addtodo:function(){
            
            myobject = {
                id:Math.random(),
                name:this.name,
                text:this.text,
                completed:false
            }
            this.text=""
            this.name=""
            console.log(myobject)
           this.todos.push(myobject)
         }
    }
  })
