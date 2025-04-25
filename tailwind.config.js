//import tailwindcss from '@tailwindcss/vite'

export default {
  content: [
    'index.html',
    'src/**/*.{vue,js,ts,jsx,tsx}', // Убедитесь, что пути соответствуют структуре вашего проекта
  ],
  theme: {
    screens: {
      // Добавляем кастомные точки прерывания
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1720px',
    },
    extend: {
      spacing: {
        80: '80px', //Теперь вы можете использовать `w-80` и `h-80`
      },
      fontSize: {
        // Добавляем кастомные размеры шрифта
        xs: ['0.75rem', '1rem'], // 12px
        sm: ['0.875rem', '1.25rem'], // 14px
        base: ['1rem', '1.5rem'], // 16px
        lg: ['1.125rem', '1.75rem'], // 18px
        xl: ['1.25rem', '1.75rem'], // 20px
        '2xl': ['1.5rem', '2rem'], // 24px
        '3xl': ['1.875rem', '2.25rem'], // 30px
        '4xl': ['2.25rem', '2.5rem'], // 36px
        '5xl': ['3rem', '1'], // 48px
        '6xl': ['3.75rem', '1'], // 60px
        '7xl': ['4.5rem', '1'], // 72px
        '8xl': ['6rem', '1'], // 96px
      },
      colors: {
        // Добавляем кастомные цвета
        primary: '#4CAF50', // Зеленый
        secondary: '#FFC107', // Оранжевый
        accent: '#2196F3', // Синий
        dark: '#212121', // Темно-серый
        light: '#FAFAFA', // Светло-серый
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #4CAF50, #FFC107)',
      },
    },
  },
  plugins: [],
}

// console.log('wedf')
