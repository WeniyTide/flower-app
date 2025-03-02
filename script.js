const answer = document.getElementById('answer-title');
const petals = document.getElementsByClassName('petal');
const btn = document.getElementById('button');


for (let i = 0; i < petals.length; i++) {
  petals[i].onclick = () => {
    if (answer.innerHTML === 'Loves') {
      answer.innerHTML = 'Doesn`t love';
    } else {
      answer.innerHTML = 'Loves';
    }
    // petals[i].style.display = 'none';
    petals[i].classList.add('anima');
  };
}
