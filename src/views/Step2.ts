import  Header  from "../components/Header";
// import render from "../services/render";
import Renderable from "../interface/Renderable";
import Step1 from "./Step1";
import Step0 from "./Step0";

let header:Header = new Header


class Step2 implements Renderable{
    insertionPoint:HTMLElement;
    private modal: HTMLDivElement;
    private background: HTMLDivElement;

    constructor(selector:HTMLElement) {
        this.insertionPoint = selector;
        this.registerEvents();
        this.createHTML();
    }
    render(){
        this.insertionPoint.append(this.modal);
        this.insertionPoint.append(this.background);
    }
    registerEvents(){
        document.body.addEventListener("click",e=>{
            e.stopPropagation();
            if (e.target instanceof HTMLButtonElement && e.target.matches("[data-step]")) {
                switch (parseInt(e.target.dataset.step)) {
                    case 0:{
                        let view:Renderable = new Step0(this.insertionPoint);
                        view.render();
                        break;
                    }
                    case 1:{
                        let view:Renderable = new Step1(this.insertionPoint);
                        view.render();
                        break;
                    }
                }
            }
        })
    }

    createHTML(){
        this.registerEvents();
        let modal = document.createElement("div");
        modal.innerHTML = `   
        <h2>Paczka odebrana</h2>
        <p>Zrobiłeś to w czasie 10 sekund! Czy możemy zrobić coś jeszcze dla ciebie</p>
        <button data-step="0" class="btn-secondary">To wszystko na dziś</button>
        <button data-step="1" class="btn-secondary">Odbierz kolejną paczkę</button>   
        `
        let background = document.createElement("div");
        background.classList.add("backGround");
        modal.classList.add("modal");
        this.modal = modal;
        this.background = background;
    }

}

export default Step2
