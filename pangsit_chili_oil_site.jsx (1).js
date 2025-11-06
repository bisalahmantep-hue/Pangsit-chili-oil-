{
  "name": "pangsit-chili-oil",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.344.0",
    "@/components/ui": "*"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.1.0",
    "vite": "^5.0.0"
  }
}

// index.html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pangsit Chili Oil</title>
  </head>
  <body class="bg-orange-50">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
});

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PangsitChiliOil from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PangsitChiliOil />
  </React.StrictMode>
);

// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Flame, Star } from "lucide-react";

export default function PangsitChiliOil() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex flex-col items-center text-center px-6 py-10">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h1 className="text-5xl font-extrabold text-red-700 mb-2">Pangsit Chili Oil</h1>
        <p className="text-lg text-gray-600">Gurih, pedas, dan bikin nagih! Cita rasa autentik khas Nusantara.</p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md shadow-2xl rounded-2xl overflow-hidden border border-red-200 bg-white">
          <img src="https://images.unsplash.com/photo-1601050690597-1fdfef1fd6d3?auto=format&fit=crop&w=800&q=80" alt="Pangsit Chili Oil" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-700 mb-3 flex items-center justify-center gap-2">
              <Flame className="text-red-600" /> Pangsit Chili Oil <Flame className="text-red-600" />
            </h2>
            <p className="text-gray-600 mb-4">Pangsit renyah berpadu dengan minyak cabai khas buatan rumahan. Cocok untuk cemilan, lauk, atau teman nasi!</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="text-3xl font-extrabold text-red-700 mb-4">Rp 10.000</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg rounded-full flex items-center gap-2 mx-auto">
              <ShoppingCart /> Beli Sekarang
            </button>
          </div>
        </div>
      </motion.div>

      <footer className="mt-12 text-gray-500 text-sm">
        <p>© 2025 Pangsit Chili Oil | Dibuat dengan ❤️ oleh Dafa Iy</p>
      </footer>
    </div>
  );
}
