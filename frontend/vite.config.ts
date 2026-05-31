import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Automatically updates the app when a new version is deployed
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Nexa",
        short_name: "Nexa",
        description: "An office productivity tool",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone", // Makes it feel like a native mobile app without browser bars
        orientation: "portrait",
        start_url: "/login",
        icons: [
          {
            src: "nexa-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "nexa-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "nexa-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable", // Crucial for clean adaptive icons on Android
          },
        ],
        screenshots: [
          {
            src: "desktop-view.png",
            sizes: "1365x627", // update to match your actual image dimensions
            type: "image/png",
            form_factor: "wide", // Tells the browser this is for desktop
          },
          {
            src: "mobile-view.png",
            sizes: "366x658", // update to match your actual image dimensions
            type: "image/png",
            form_factor: "narrow", // Tells the browser this is for mobile
          },
        ],
      },
    }),
  ],
});
