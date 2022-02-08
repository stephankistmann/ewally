import http from 'http';
import './env';
import Server from './frameworks_drivers/webserver/server';

const server: http.Server = new Server().createHTTP();

const port: string | number = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is running on port ${port} 🤖`));
