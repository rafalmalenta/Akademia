import Step0 from "../views/Step0";

class Header {
   render():string{
        return `
        <div class="header">
            <h1 class="brand">ENVELO</h1>
            <p class="txt">Możesz mieś swoją przesyłkę w kilkanaście sekund.</p>
            <p class="txt">Rozpocznij klikając w przycisk</p>            
        </div>
        `
    }
}
export default Header
