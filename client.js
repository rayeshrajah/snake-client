const net = require('net');
const connect = function() {
    const conn = net.createConnection({ 
      host: '192.168.0.103',
      port: 50541,
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