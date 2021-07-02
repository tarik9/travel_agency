import { Server } from "socket.io";

const io = new Server({
    cors:{
        origin: "http://localhost:3000",
    },
});
io.listen(8900);

let users = [];

const addUser = (userId, socketId)=>{
    !users.some((user)=> user.userId === userId) &&
    users.push({userId, socketId});
};

const removeUser = (socketId)=>{
    users = users.filter((user)=>user.socketId !==socketId );
}

const getUser = (userId)=>{
    return users.find((user)=> user.userId === userId );
}

 io.on("connection" , (socket) =>{
    console.log("a user connected");

    socket.on("addUser", userId =>{
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    //send and get message
    socket.on("sendMessage", ({senderId, receiverId, text})=>{
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage",{
            senderId,
            text,
        })
    })

    socket.on("disconnect",()=>{
        console.log("a user disconnected."); 
        removeUser(socket.id);
        io.emit("getUsers", users);

    })
 })
