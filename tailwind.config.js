/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'half-blue': "rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-50px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(-50px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(50px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(50px)'
            },
        },
        'fade-in': {
          "0%": { opacity: '1', transform: 'scale(0)' },
          "100%": { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-in forwards',
          'fade-out-down': 'fade-out-down 0.5s ease-out',
          'fade-in-up': 'fade-in-up 0.5s ease-in forwards',
          'fade-out-up': 'fade-out-up 0.5s ease-out',
          'fade-in': 'fade-in 0.5s ease-in forwards'
      }
    },
    container: {
      padding: '2rem',
      center: true
    },
  },
  plugins: [],
}
