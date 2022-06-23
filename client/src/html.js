export const input = document.createElement("input");
document.body.appendChild(input);
export const container = document.createElement("div");
document.body.appendChild(container);
export const putMessage = (text) => {
    const [span, line] = [document.createElement("span"), document.createElement("br")];
    span.innerText = text;
    container.appendChild(span);
    container.appendChild(line);
};