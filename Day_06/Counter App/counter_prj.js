let count = 0;

function Display() {
  document.getElementById('count').textContent = count;
}

function increment() {
  count++;
  Display();
}

function decrement() {
  count--;
  Display();
}
