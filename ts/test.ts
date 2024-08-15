export class Test {
    constructor(){
        console.log('Test class constructed');
    }

    print(message: string): void {
        const el = this.getElement(message);
        document.getElementsByTagName('body')[0].appendChild(el);
    }

    private getElement(message: string): HTMLDivElement {
        const el = document.createElement("div");
        el.innerText = message;

        return el;
    }
}
