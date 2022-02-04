import  Header from "../components/Header";
import Renderable from "../interface/Renderable";
import Step2 from "./Step2";

let header:Header = new Header();

class Step1 implements Renderable{
    insertionPoint:HTMLElement;
    componentHTML:HTMLElement;

    constructor(selector:HTMLElement) {
        this.insertionPoint = selector;
        this.registerEvents();
        this.createHTML();
    }
    boundHandler = this.handleClick.bind(this);
    render(){
        this.insertionPoint.innerHTML = "";
        this.insertionPoint.append(this.componentHTML);
    }
    handleClick(e:Event) {
        e.stopPropagation();
        e.preventDefault();
        if (e.target instanceof HTMLInputElement && e.target.matches("[data-submit]")) {
            //todo this.validateForm()
            this.cleanEvents();
            let view: Renderable = new Step2(this.insertionPoint);
            view.render();
        }
    }
    registerEvents(){
        this.insertionPoint.addEventListener("click",this.boundHandler,false);
    }

    cleanEvents(){
        this.insertionPoint.removeEventListener("click",this.boundHandler,false);
    }
    createHTML(){
        let wrapper:HTMLElement = document.createElement("div");
        wrapper.innerHTML = `
        ${header.render()}
        <form>
        <div class="inputContainer">
            <label for="phone">
            numer telefonu
            </label>
            <input id="phone" type="number" minlength="9" maxlength="9"/>
        </div>
        <div class="inputContainer">
            <label for="pin">
            kod odbioru
            </label>
            <input id="pin" type="number" minlength="4" maxlength="4">
        </div>
        <input id="btn-main" type="submit" data-submit value="Odbierz paczkę"/>
        </form>
        `
        this.componentHTML = wrapper;
    }
}

export default Step1
