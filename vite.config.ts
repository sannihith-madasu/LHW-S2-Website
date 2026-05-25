import { defineConfig } from "@tanstack/start/config";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { vercel } from "@tanstack/start-vercel";

export default defineConfig({
  vite: {
    plugins: [
      react(),
      tsConfigPaths(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
      dedupe: ["react", "react-dom", "@tanstack/react-router"],
    },
  },

  server: {
    preset: vercel(),
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
