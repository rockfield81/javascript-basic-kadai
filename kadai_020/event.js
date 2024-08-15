const changeText = document.getElementById('btn');
const text = document.getElementById('text');

changeText.addEventListener('click', () => {
  const list = document.createElement('li');
  text.appendChild(list);
  text.textContent = 'ボタンをクリックしました';
})