import { io } from "./socket.io.min.js"
;import { input, putMessage } from "./html.js";
( async () => {
    const socket = io("ws://localhost:3000");
    socket.on("message", function (data) {
        putMessage(data);
    });
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            putMessage(input.value);
            socket.emit("message", input.value);
            input.value = "";
        }
    });

    socket.on("connect", function() {
        console.log("connection");
        socket.emit("message", "asdsadasd");
    })
})();