import template from "./template.hyper.html";

const div = document.createElement("div");

const obj = {
    model: {
        text: "text"
    },
    render() {
        template(div, this);
    }
}

export { obj as default }