
let image = ['img/dai.png', 'img/chu.png', 'img/suekichi.png', 'img/syo.png', 'img/kichi.png', 'img/kyou.png', 'img/daikyo.png'];
let words = ['大吉！やったー！', '中吉！いい感じ！', '末吉！まぁまぁ？', '小吉！小さいけど吉だよ！', '吉！いいことあるよ！', '凶！！あれまー！何か人にいいことをしよ！', '大凶！！背後に気をつけて！！'];
document.getElementById('omikujiImg');
let text = document.getElementById('text');
let container = document.getElementById('container');
let drop = document.getElementById('dropOmikuji');
let btn = document.createElement('button');

clickOmikuji.addEventListener('click',
  function omikuji() {
    let num = Math.floor(Math.random() * image.length);
    omikujiImg.src = image[num];
    text.textContent = words[num];
    if (num === 6) {

      document.body.style.backgroundColor = 'red';
      container.classList.add('kyou');


    } else if (num === 0) {
      document.body.style.backgroundColor = 'lightpink';
      document.body.style.color = 'black';
      document.body.style.fontSize = '30px';
    } else {
      document.body.style.backgroundColor = '#1d1d1d';
      document.body.style.color = 'aliceblue';
      document.body.style.fontSize = '20px';

    }
  })
