Error vigente: 

Error en la consulta: Error: Table 'coffeartbd.usuarios' doesn't exist
    at Packet.asError (C:\Users\SENA\Documents\CoffeArt\node_modules\mysql2\lib\packets\packet.js:728:17)
    at Query.execute (C:\Users\SENA\Documents\CoffeArt\node_modules\mysql2\lib\commands\command.js:29:26)
    at Connection.handlePacket (C:\Users\SENA\Documents\CoffeArt\node_modules\mysql2\lib\connection.js:481:34)
    at PacketParser.onPacket (C:\Users\SENA\Documents\CoffeArt\node_modules\mysql2\lib\connection.js:97:12)
    at PacketParser.executeStart (C:\Users\SENA\Documents\CoffeArt\node_modules\mysql2\lib\packet_parser.js:75:16)
    at Socket.<anonymous> (C:\Users\SENA\Documents\CoffeArt\node_modules\mysql2\lib\connection.js:104:25)
    at Socket.emit (node:events:518:28)
    at addChunk (node:internal/streams/readable:559:12)
    at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
    at Readable.push (node:internal/streams/readable:390:5) {
  code: 'ER_NO_SUCH_TABLE',
  errno: 1146,
  sqlState: '42S02',
  sqlMessage: "Table 'coffeartbd.usuarios' doesn't exist",
  sql: "SELECT * FROM Usuarios WHERE nombre_usuario = 'usuario_prueba'"


Poner a correr Xamapp antes de correr el comando de npm start

descargar el archivo de bases de datos antes, crear tablas y eso
