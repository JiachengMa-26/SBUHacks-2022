import CookControl from './CookControl.js';
import CookModel from './CookModel.js';
import CookView from './CookView';

export class CookApp{
    constructor(){
        this.control=new CookControl();
        this.model=new CookModel();
        this.view=new CookView();

         this.model.setView(this.view);

         this.view.setController(this.controller);
 
         this.controller.setModel(this.model);
    }
    launch() {
        // DISABLE ALL RELEVANT 
        this.view.init();

        // FIRST TRY AND GET THE LISTS FROM LOCAL STORAGE
        let success = this.model.loadLists(this.model.currentIndex);
        if (!success) {


        }
    }



    

}
window.onload = function() {
    // MAKE THE APP AND LAUNCH IT
    let app = new CookApp();
    app.launch();
}