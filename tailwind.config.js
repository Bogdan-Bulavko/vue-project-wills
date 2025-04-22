import tailwindcss from '@tailwindcss/vite'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Убедитесь, что пути соответствуют структуре вашего проекта
  ],
  theme: {
    extend: {
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

console.log('wedf')
