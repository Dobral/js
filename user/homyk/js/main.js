let score = 0; // Инициализируем переменную счета

const hamster = document.getElementById('hamster'); // Получаем элемент хомяка

const scoreDisplay = document.getElementById('score'); // Получаем элемент для отображения счета

hamster.addEventListener('click', () => {
    score++; // Увеличиваем счет на 1 при клике

    scoreDisplay.textContent = `Счет: ${score}`; // Обновляем отображение счета

});