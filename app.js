


// let num = Math.floor(Math.random() * omikujiImage.length);
// console.log(num);
let omikujiImage = ['img/dai.png','img/chu.png','img/suekichi.png','img/syo.png','img/kichi.png','img/kyou.png','img/daikyo.png'];
let omikujiWords = ['大吉！やったー！','中吉！いい感じ！','末吉！まぁまぁ？','小吉！小さいけど吉だよ！','吉！いいことあるよ！','凶！！あれまー！何か人にいいことをしよ！','大凶！！背後に気をつけて！！'];
document.getElementById('clickOmikuji');
document.getElementById('comments');
clickOmikuji.addEventListener('click',
  function omikuji(){
  let num = Math.floor(Math.random() * omikujiImage.length);
  clickOmikuji.src = omikujiImage[num];
  comments.textContent = omikujiWords[num];
  if(num === 6){
    document.body.style.backgroundColor = 'red';
    document.body.style.fontSize = '30px';

  }else if(num === 0){
    document.body.style.backgroundColor = 'lightpink';
    document.body.style.color = 'black';
    document.body.style.fontSize = '30px';
  }else{
    document.body.style.backgroundColor = '#1d1d1d';
    document.body.style.color = 'aliceblue';
    document.body.style.fontSize = '20px';
    
  }



})
