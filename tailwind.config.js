module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1676px',
    },
    extend: {
      backgroundImage: {
        heroText: "url('/src/assets/img/accaro.svg')",
        aboutCord: "url('/src/assets/img/cord.svg')",
        blob: "url('/src/assets/img/blob.svg')",
      },
      content: {
        arrow: "url('/src/assets/img/arrow.svg')",
        pattern: "url('/src/assets/img/pattern.svg')",
      },
      colors: {
        primary: '#161515',
        accent: {
          DEFAULT: '#FD5956',
          hover: '#EB4441',
        },
        grey: '#5F5F5F',
      },
    },
  },
  plugins: [],
};
