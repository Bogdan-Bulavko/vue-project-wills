# **Tasks.md - Отчет о проделанной работе**

## **1. Внесенные изменения**

### **1.1. Исправление TypeScript-ошибок**

- **Проблема**: Несоответствие типов в пропсах (`Function` vs конкретный тип события).
- **Решение**:
  - Заменил `Function` на явное указание типа с `PropType<(e: MouseEvent) => void>`.
  - Указал `required: true` для обязательных пропсов.
  - Добавил правильную передачу события через `(e) => handler(e)`.
  <!-- OK -->

### **1.2. Переход на чистый Tailwind CSS**

- Убрал `<style scoped>` в пользу Tailwind-классов.
- Заменил CSS-анимации на Tailwind-классы (`transition`, `transform`).
- Использовал `transform-gpu` для оптимизации анимаций.
<!-- OK -->

### **1.3. Улучшение структуры компонентов**

- Упростил передачу пропсов между `HeaderItem.vue` и `NavigationMenu.vue`.
- Убедился, что все классы Tailwind используются правильно (без дублирования).
<!-- OK -->

---

## **2. Рекомендации по использованию Tailwind CSS как Pro-разработчик**

### **2.1. Основные принципы**

**Используйте `@apply` только для повторяющихся стилей**

```css
/* Плохо: дублирование классов */
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Кнопка</button>

/* Хорошо: вынести в CSS с @apply (если используется много раз) */
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}
```

<!-- OK -->

**Избегайте кастомного CSS, если можно использовать Tailwind**

```html
<!-- Плохо -->
<style scoped>
  .header {
    background: rgba(255, 255, 255, 0.5);
  }
</style>

<!-- Хорошо -->
<header class="bg-white bg-opacity-50">...</header>
```

<!-- OK -->

**Используйте `theme()` для кастомных значений**

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      peach: "#FF6525",
      peach2: "#FFD9C9",
    },
  },
}
```

```html
<!-- Использование -->
<button class="bg-peach text-peach2">...</button>
```

---

### **2.2. Анимации и Transitions**

**Используйте Tailwind для анимаций вместо CSS**

```html
<!-- Было -->
<style scoped>
  .v-enter-active {
    transition: 1s;
    transform: translateX(0);
  }
</style>

<!-- Стало -->
<Transition
  enter-active-class="transition duration-1000 transform translate-x-0"
  leave-to-class="transition duration-1000 transform translate-x-full"
>
  ...
</Transition>
```

## <!-- OK -->

### **2.4. Советы по организации кода**

**Группируйте классы логически (можно с комментариями)**

```html
<button
  class="
    /* Layout */
    flex items-center justify-center
    /* Typography */
    text-lg font-semibold
    /* Colors */
    bg-peach text-white
    /* Spacing */
    px-4 py-2
    /* Effects */
    hover:bg-opacity-90 transition
  "
>
  Кнопка
</button>
```

## <!-- OK -->

## **3. Вывод**

- **TypeScript**: Все пропсы теперь строго типизированы, ошибок нет.
- **Tailwind CSS**: Полный отказ от `<style scoped>` в пользу utility-классов.
- **Производительность**: Анимации на GPU, удалены неиспользуемые стили.
- **Читаемость**: Код стал чище и легче поддерживается.

**Рекомендация**:  
Продолжайте использовать Tailwind в таком же стиле, избегая кастомного CSS. Если нужны сложные стили — расширяйте `tailwind.config.js`, а не пишите CSS вручную.

**Итог**: Проект теперь соответствует best practices фронтенд-разработки на Vue 3 + TypeScript + Tailwind CSS.
