import CookModel from "./CookModel.js";

export default class CookModel {
    constructor(){
        this.model=null;
        
    }
    setModel(initModel){
        this.model=initModel;
    }
    addEentHandlerForView(i){
        let table=document.getElementById("table-"+i);
        let 
    }
    viewinit(){
        this.addEventHandlerForAddButon();
    }
    addEventHandlerForAddButon(){
        document.getElementById("newForumCook").onmousedown = (event) => {
            
        }
    }
    addEventListenerForforum(table){
        let name_of_forum=table;
        name_of_forum.add
    }

}