// "인사" 함수: 경고 창에 "안녕하세요." 메시지를 표시합니다.
function 인사() {
  alert('안녕하세요.');
}

// "더하기" 함수: 두 숫자를 더한 결과를 경고 창에 표시합니다.
function 더하기(a, b) {
  let 결과 = a + b;
  alert(결과);
}

// "곱하기" 함수: 입력된 두 숫자를 곱한 결과를 경고 창에 표시하고 반환합니다.
function 곱하기() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var 결과 = num1 * num2;
  alert(결과);
  return 결과;
}

// "평가" 함수: 두 숫자를 곱한 결과가 10보다 크면 "합격"을, 그렇지 않으면 "불합격"을 경고 창에 표시합니다.
function 평가(a, b) {
  let 결과 = 곱하기(a, b);
  if (결과 > 10) {
    Swal.fire('합격');
  } else {
    Swal.fire('불합격', '불합격 했습니다.', 'error');
  }
}

// "좋아요" 함수: 0부터 4까지 5번 반복하여 콘솔에 숫자와 "좋아요"를 출력합니다.
const 좋아요 = () => {
  for (let i = 1; i <= 5; i++) {
    // 숫자를 리스트에 추가
    const listItem = document.createElement('h5');
    listItem.textContent = i + '좋아요';
    document.getElementById('good').appendChild(listItem);
  }
}

// "pokemon" 함수: 포켓몬 API를 호출하여 랜덤한 포켓몬 정보를 가져와 이미지와 이름을 표시합니다.
function pokemon() {
  // 1. 랜덤한 포켓몬 ID 생성 (1부터 898까지)
  const randomId = Math.floor(Math.random() * 898);

  // 2. 포켓몬 정보를 가져올 API URL 생성
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + randomId;

  // 3. API를 호출하여 포켓몬 정보 가져오기
  fetch(apiUrl)
    .then(response => {
      return response.json(); // JSON 데이터 파싱
    })
    .then(data => {
      console.log(data)
      // 4. 포켓몬 이미지 URL과 오류 이미지 URL 설정
      const imgUrl = data.sprites.other.dream_world.front_default;

      // 5. 포켓몬 이미지가 있는 경우 이미지 업데이트 및 이름 표시
      if (!!imgUrl) {
        document.getElementById('poketmon').src = imgUrl; // 이미지 업데이트

        const pokemonName = data.name; // 포켓몬 이름 가져오기
        document.getElementById('pokemonName').textContent = pokemonName; // 이름 표시

      } else {
        // 6. 포켓몬 이미지가 없는 경우 대체 이미지 표시
        const boom = "https://t1.daumcdn.net/cfile/tistory/1918280B4B653C4B7C";//대체이미지
        document.getElementById('poketmon').src = boom; // 대체 이미지 표시
        document.getElementById('pokemonName').textContent = ''; // 이름 초기화
      }
    })
    .catch(error => {
      // 7. API 요청 중 오류가 발생한 경우 오류 메시지 출력
      console.log('API 요청 오류:', error);
    });
}

