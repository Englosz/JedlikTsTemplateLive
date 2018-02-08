
namespace Jedlik {

    export class MyApplication  {

        constructor() {
            const element = document.createElement("h1");
            element.innerHTML = "Hello!";
            element.setAttribute("style", "color:Red");
            document.body.appendChild(element);
        }
    }
}

window.onload = () => {
    const app = new Jedlik.MyApplication();
};