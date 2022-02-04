import  Header  from "../components/Header";
import Renderable from "../interface/Renderable";
import Step1 from "./Step1";

let header:Header = new Header;

class Step0 implements Renderable{
    insertionPoint:HTMLElement;
    componentHTML:HTMLElement;
    constructor(selector:HTMLElement) {
        console.log("con")
        this.insertionPoint = selector;
        this.registerEvents();
        this.createHTML();
    }
    render(){
        this.insertionPoint.innerHTML = "";
        this.insertionPoint.append(this.componentHTML);
    }
    registerEvents(){
        this.insertionPoint.addEventListener("click",this.boundHandler,false);
    }
    cleanEvents(){
        this.insertionPoint.removeEventListener("click",this.boundHandler,false);
    }
    boundHandler = this.handleClick.bind(this);
    handleClick(e:Event){
        e.stopPropagation();
        this.cleanEvents();
        console.log("e.target")
        if (e.target instanceof HTMLButtonElement && e.target.matches("[data-step]")) {
            console.log(e.target)
            let view:Renderable = new Step1(this.insertionPoint);
            this.cleanEvents();
            view.render();
        }
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

export default Step0;
