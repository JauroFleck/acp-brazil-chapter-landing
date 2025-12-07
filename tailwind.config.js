/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acp: {
          primary: '#018168',      /* Cor Principal (Deep Teal/Emerald) */
          primaryDark: '#015c4a',  /* Variação mais escura para hover */
          secondary: '#9FD067',    /* Cor Secundária (Light Green/Lime) */
          secondaryDark: '#88b655',/* Variação para hover da secundária */
          text: '#334155',         /* Cinza chumbo para leitura confortável */
          bgLight: '#F8FAFC'       /* Fundo muito claro, quase branco */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

