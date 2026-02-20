import path from "path";
import { pathToFileURL } from "url";

export function contactFormPlugin() {
  return {
    name: "vite-plugin-contact-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/contact" || req.method !== "POST") {
          return next();
        }
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", async () => {
          let body;
          try {
            body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
          } catch {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid JSON body." }));
            return;
          }
          try {
            const handlerPath = path.resolve(process.cwd(), "server/contactHandler.js");
            const { sendContactEmail } = await import(pathToFileURL(handlerPath).href);
            await sendContactEmail(body);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true, message: "Message sent." }));
          } catch (err) {
            const status = err.message.includes("required")
              ? 400
              : err.message.includes("not configured")
                ? 503
                : 500;
            res.writeHead(status, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: err.message || "Failed to send message." }));
          }
        });
        req.on("error", () => next());
      });
    },
  };
}
