class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}
customElements.define("x-fullyear", YearElement);

class ParagraphElement extends HTMLElement{
    connectedCallback(){        
        this.innerHTML  = `<p style="font-style: italic">${this.innerHTML}</p>`;
    }
}
customElements.define("x-paragraph", ParagraphElement);