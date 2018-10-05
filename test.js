import template from "./template.htt";

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