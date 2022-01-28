module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        base: 'hsl(203, 89%, 53%)',
        dark: 'hsl(203, 89%, 40%)',
        light: 'hsl(203, 89%, 65%)'
      },
      gray: {
        base: 'hsl(207, 14%, 46%)',
        light: 'hsl(205, 16%, 71%)',
        extralight: 'hsl(205, 25%, 91%)',
        lightest: 'hsl(204, 33%, 97%)'
      },
      black: '#14171A',
      white: '#FFFFFF',
      blue: '#007bff',
      green: '#28a745',
      red: '#dc3545',
    },
    extend: {},
  },
  plugins: [],
}
