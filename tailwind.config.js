/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#018168',      /* Verde "Teal" Profundo - Confiança e Saúde */
          primaryDark: '#015f4d',
          secondary: '#9FD067',    /* Verde Claro - Vitalidade e Acessibilidade */
          secondaryLight: '#dff5c6',
          text: '#2d3748',
          lightBg: '#f0f9f6'       /* Fundo muito suave esverdeado */
        }
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

