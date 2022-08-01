module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      },
      boxShadow: {
        myShadow1 : '4.1px -5px 0 0 rgb(17,24,39)',
        myShadow2 : '-4.1px -5px 0 0 rgb(17,24,39)',
      }
    }
  },
  plugins: [],
}
