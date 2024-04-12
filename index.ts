const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home Page!");
    if (url.pathname === "/blog") return new Response("Blog Page!");
    return new Response("404 page not found");
  },
});

console.log("Server running on", server.port);
