window.onload = () => {
  const shuffleBtn = document.getElementById('btn-shuffle');
  const sortBtn = document.getElementById('btn-sort');
  const leftWrapper = document.getElementById('left-wrapper')

  shuffleBtn.addEventListener('click', () => {
    const newArr = Array.from(leftWrapper.children);
    var j, x, i;
    for (i = newArr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = x;
    }
    leftWrapper.appendChild(newArr[0])
  });

  sortBtn.addEventListener('click', () => {
    let nodes = leftWrapper.children;
    nodes = [].slice.call(nodes);
    nodes
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((val) => {
        leftWrapper.appendChild(val);
      });
  })
}