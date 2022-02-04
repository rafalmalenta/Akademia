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
    render(){
        this.insertionPoint.innerHTML = "";
        this.insertionPoint.append(this.componentHTML);
    }
    registerEvents(){
        document.body.addEventListener("click",e=>{
            // console.log(new Date().getMilliseconds());
            e.stopPropagation();
            e.preventDefault();
            if (e.target instanceof HTMLInputElement && e.target.matches("[data-submit]")) {
                console.log(e)
                let view:Renderable = new Step2(this.insertionPoint);
                view.render();
            }
        })
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
