const answer = document.getElementById('answer-title');
const petals = document.getElementsByClassName('petal');
const btn = document.getElementById('button');
// answer.textContent = 'Love';
// btn.onclick = () => {
//   if (answer.innerHTML === 'Love') {
//     answer.innerHTML = 'Doesn`t love';
//   } else {
//     answer.innerHTML = 'Love';
//   }
// };

for (let i = 0; i < petals.length; i++) {
  petals[i].onclick = () => {
    if (answer.innerHTML === 'Love') {
      answer.innerHTML = 'Doesn`t love';
    } else {
      answer.innerHTML = 'Loves';
    }
    // petals[i].style.display = 'none';
    petals[i].classList.add('anima');
  };
}
