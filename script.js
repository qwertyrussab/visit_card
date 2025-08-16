// Функция плавного, но замедленного скролла
function slowScroll(target, duration = 1500) {
  const element = document.querySelector(target);
  const startPosition = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // easeInOutCubic для плавности
    const easing = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + targetPosition * easing);

    if (elapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// Пример: плавный скролл по клику на ссылку
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    slowScroll(link.getAttribute("href"), 2000); // 2000 мс = 2 сек
  });
});
