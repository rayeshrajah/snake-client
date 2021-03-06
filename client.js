const {IP, PORT} = require('./constants');
const net = require('net');
const connect = function() {
    const conn = net.createConnection({ 
      host: IP,
      port: PORT 
    });
    conn.on("connect", () =>{
        console.log("Suessfully connected to the game");
        conn.write('Name: RAY');
    })

    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });
    
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
  
    return conn;
  }

  module.exports = {connect}