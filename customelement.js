class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}
customElements.define("x-fullyear", YearElement);