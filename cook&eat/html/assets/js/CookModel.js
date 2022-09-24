import CookControl from "./CookControl.js";

export default class CookModel {
    constructor() {
        // this is the array containing all the typs
        this.types = [];

        // THIS IS THE LIST CURRENTLY BEING EDITED
        this.currentIndex = 0;
        this.view=null;
    }
    setView(initSetView){
        this.view=initView;
    }
    //load list at index
    loadList(index){
        document.getElementById("Big-table").innerHTML="";
        for(let i=0;i<this.types.length;i++){
            let new_forum_chat=document.createElement("div");
            new_forum_chat.classList.add("table");
            new_forum_chat.id="table-"+i;
            let header=document.createElement("div");
            header.classList.add("header");
            header.id="header-"+i;
            let content=document.createElement("div");
            content.classList.add("content_box");
            content.id="content-"+i;
            let user=document.createElement("div");
            user.id="user-"+i;
            user.classList.add("user-name");
            let title=document.createElement("div");
            title.id="title-"+i;
            title.classList.add("chat-title");
            new_forum_chat.append(header);
            new_forum_chat.append(content);
            new_forum_chat.append(user);
            new_forum_chat.append(title);
            document.getElementById("Big-table").append(new_forum_chat);
        }
    }
   
        
}