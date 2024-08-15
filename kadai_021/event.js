const changeText = document.getElementById('btn');
const text = document.getElementById('text');

changeText.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});