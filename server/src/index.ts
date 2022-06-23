import http from "http";
import { Server } from "socket.io";

const server = http.createServer(function (req, res) {
    console.log("asda")
});

const io = new Server(server, {
    pingInterval: 2000,
    pingTimeout: 5000,
    cors: {
        origin: "*"
    }
});

io.on("connection", function (socket) {
    socket.join("chat");
    socket.on("message", function (data) {
        console.log(data);
        socket.broadcast.to("chat").emit("message", data);
    })
});

server.listen(3000);