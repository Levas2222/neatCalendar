/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  theme: {
    extend: {
      colors:{
        /*My Lighter Color Pallet */
          primarylight:"#fafaf6",
          secondarylight:"#00FFF0",
          whitish:"#fafaf6",
          cyanish:"#00FFF0",
          lightblueish:"#00D1FF",
          blueish:"#3D6CB9",
          redish:"#FF5959",




        /* My Darker Color Pallet */
          primarydark:'#0b132bff',
          secondarydark:'#1c2541ff',
          primary: '#0b132bff',
          secondary: '#1c2541ff',
          tertiary: '#3a506bff',
          quaternary: '#5bc0beff',
          quinary: '#6fffe9ff',
          shadedprimary: '#060a17ff',
          shadedsecondary: '#0e1321ff',
          shadedtertiary: '#1b2633ff',

        /*Text Color Pallet */
          textwhite: '#edf2f4ff',
          textdark:'#2b2d42ff',
          textgray:"#1f2937",
        }

    },
  },
  plugins: [
    require('daisyui')
  ],
}

