




import { type } from "os";

/**@type{import('tailwindcss').config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f6FFF',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
        
      }
    }
  },
  Plugin:[],
}
