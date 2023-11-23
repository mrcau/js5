document.write("자바스크립트 핵심문법 5가지");

function 인사() {
  alert('안녕하세요');
}

function 더하기(aaa,bbb){
  let 결과 = aaa+bbb;
  alert(결과)
}

function 평가(a,b){
  let 결과 = a + b;
  if(결과>10){
    alert('합격');
  }else{
    alert('불합격');
  }
}

const 반복 = ()=>{
  for(let i=0;i<5;i=i+1){
    console.log(i,'좋아요');
  }
}


function poketmon() {
  const randomId = Math.floor(Math.random() * 898);
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + randomId;

  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const imgUrl = data.sprites.other.dream_world.front_default;
      const boom = "https://t1.daumcdn.net/cfile/tistory/1918280B4B653C4B7C";

      if (!!imgUrl) {
        document.getElementById('poketmon').src = imgUrl;

        const pokemonName = data.name;
        document.getElementById('pokemonName').textContent = pokemonName;

      } else {
        document.getElementById('pokemonName').textContent = '';
        document.getElementById('poketmon').src = boom;
      }
    })
    .catch(error => {
      console.log('API 요청 오류:', error);
    });
}