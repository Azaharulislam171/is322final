import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {                          // "mytheme" can be any name you choose
        primary: '#050B14', 
        secondary: '#F8EB00', 
        // Your custom primary color
        // you can also customize other colors if you wish
      },
    },
  
  ],
  },
}
export default config
