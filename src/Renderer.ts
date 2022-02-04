import Renderable from "./interface/Renderable";
export default class Renderer{
    view: Renderable;
    setView(view:Renderable){
        this.view = view;
    }
    render(){
        this.view.render();
    }
}
