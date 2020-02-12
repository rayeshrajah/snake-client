let connections;
const handleUserInput = ('data', (input) =>{
    if(input === '\u0003'){
        process.exit();
    }
    else if(input === 'w'){
        connections.write('Move: up');
    }
    else if(input === 'a'){
        connections.write('Move: left');
    }
    else if(input === 'd'){
        connections.write('Move: right');
    }else if(input === 's'){
        connections.write('Move: down')
    }
  })
const setupInput = function(conn) {
    connections = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    
    return stdin;
  }

  module.exports = {setupInput};