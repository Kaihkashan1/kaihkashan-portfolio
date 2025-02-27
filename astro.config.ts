// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkDirective from "remark-directive";
import remarkCallout from "./src/plugins/callouts";

console.log('Registered remarkPlugins:', [remarkDirective.name, 'remarkCallout']); // Debug

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkDirective, remarkCallout]
  }
});