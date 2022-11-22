/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
      logo: 'Proxima Nova',
      main: 'Abyssinica SIL',
      subtitle: 'Roboto Slab'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'heroBanner': "url('/src/assets/img/hero4.png')",
        'shopNow': "url('/src/assets/img/button.png')",
        'bannerRepair': "url('/src/assets/img/banner/repair.webp')",
        'newsletterBanner': "url('/src/assets/img/banner/newsletter.png')",
        'shopBanner': "url('/src/assets/img/banner/shopBanner.jpg')",
        'blogBanner': "url('/src/assets/img/banner/blogBanner.jpg')",
      },
      colors: {
        primary: '#fff',
        secondary: '#e3e6f3',
        lightgray: '#c9cbce',
        red: '#f51d2d',
        feature1: '#fddde4',
        feature2: '#cdebbc',
        feature3: '#d1e8f2',
        feature4: '#cdd4f8',
        feature5: '#f6dbf6',
        feature6: '#fff2e5',
        yellow: '#f3b819',
        newsletterBg: '#041e42',
        button: '#088178',
      }
    },
  },
  plugins: [],
}
