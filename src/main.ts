import './style.css'


function setupCounter(button: HTMLButtonElement) {
  let count = 0;
  button.addEventListener('click', () => {
    count += 1;
    button.textContent = `Count: ${count}`;
  });
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <button id="counter">Count: 0</button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
