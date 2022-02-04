import  Header  from "../components/Header";
import Renderable from "../interface/Renderable";
import Step1 from "./Step1";

let header:Header = new Header

class Step0 implements Renderable{
    insertionPoint:HTMLElement;
    componentHTML:HTMLElement;
    constructor(selector:HTMLElement) {
        this.insertionPoint = selector;
        this.registerEvents();
        this.createHTML();
    }
    render(){
        this.insertionPoint.innerHTML = "";
        this.insertionPoint.append(this.componentHTML);
    }
    registerEvents(){
        document.body.addEventListener("click",this.renderView.bind(this));
    }
    renderView(e:Event){
        e.stopPropagation();
        if (e.target instanceof HTMLButtonElement && e.target.matches("[data-step]")) {
            let view:Renderable = new Step1(this.insertionPoint);
            this.cleanEvents();
            view.render();
            console.log(e)
        }
    }
    cleanEvents(){
        document.body.removeEventListener("click",this.renderView.bind(this),false);
    }
    createHTML(){
        let wrapper:HTMLElement = document.createElement("div");
        wrapper.innerHTML = `
        ${header.render()}        
        <button id="btn-main" data-step="1">Odbierz paczkę</button>
        `
        this.componentHTML = wrapper
    }

}

export default Step0
