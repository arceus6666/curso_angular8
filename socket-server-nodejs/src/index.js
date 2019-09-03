const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const notas = {};
const messages = [];

io.on("connection", socket => {
  let anteriorId;
  const unirNota = actualId => {
    socket.leave(anteriorId);
    socket.join(actualId, () =>
      console.log(`Socket ${socket.id} se ha unido a la nota: ${actualId}`)
    );
    anteriorId = actualId;
  };

  socket.on("getDoc", docId => {
    unirNota(docId);
    socket.emit("nota", notas[docId]);
  });

  socket.on("addDoc", doc => {
    notas[doc.id] = doc;
    unirNota(doc.id);
    io.emit("notas", Object.keys(notas));
    socket.emit("nota", doc);
  });

  socket.on("editDoc", doc => {
    notas[doc.id] = doc;
    socket.to(doc.id).emit("nota", doc);
  });

  socket.on("message", msg => {
    const resp = `${new Date()} : ${msg}`;
    messages.push(resp);
  });

  console.log(`Socket ID: ${socket.id} conectado`);

  io.emit("notas", Object.keys(notas));

  messages.push(`${new Date()} : ${socket.id} conectado`);

  io.emit("message", messages);

  socket.on("disconnect", () => {
    console.log(`Socket ID: ${socket.id} desconectado`);
    messages.push(`${new Date()} : ${socket.id} desconectado`);
    io.emit("message", messages);
  });

});

http.listen(3000, () => {
  console.log("Servidor socket escuchando en el puerto 3000");
});