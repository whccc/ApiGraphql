import { server } from "./server";

server.start({ port: 3333 }, ({ port }) => {
  console.log(port);
});
