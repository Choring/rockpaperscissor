import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import styled from 'styled-components';
// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템이 선택이 된다.
// 5. 3, 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면-초록색, 지면-빨간색, 비기면- 검은색)

const GameBox = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: center;
  gap: 10px;

`;

const ResultBox = styled.div`
    text-align:center;
    .resultText {
        font-size: 35px;
        font-weight: bold;
        margin-top: 0;
    }
`;
const ChoiceBox = styled.div`
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    p {
        width: 30px;
        height: 30px;
        font-size: 30px;
    }
`;
let value;

function App() {
  const [clickValue, setClickValue] = useState(null);
  const [computerValue, setComputerValue] = useState(null);
  const [meText, setMeText] = useState(null);
  const [comText, setComText] = useState(null);

  const gameClick = (e) => {
    let imageNum = e.target.dataset.num;
    let randomNum = String(Math.floor(Math.random() * (4 -  1) + 1));
    if (imageNum) {
      setClickValue(imageSelect(imageNum));
      setComputerValue(imageSelect(randomNum));
      
      if (imageNum == "1" && randomNum == "3" || imageNum == "2" && randomNum == "1" || imageNum == "3" && randomNum == "2") {
        setMeText("이겼습니다.");
        setComText("졌습니다.");
      } else if (imageNum == "1" && randomNum == "2" || imageNum == "2" && randomNum == "3" || imageNum == "3" && randomNum == "1") {
        setMeText("졌습니다.");
        setComText("이겼습니다.");
      } else {
        setMeText("비겼습니다.");
        setComText("비겼습니다.");
      }
    }
  };

  const imageSelect = (imageNum) => {
    switch (imageNum) {
      case "1":
        value ="scissors"; 
        break;
      case "2":
        value = "rock"; 
        break;
      default:
        value = "paper"; 
        break;
    }
    return value;
  }

  return (
    <>
      <GameBox>
        <Box title = "user" result={meText} image={clickValue}/>
        <Box title = "computer" result={comText} image={computerValue} />
      </GameBox>
      <ResultBox>
          <ChoiceBox>
            <div onClick={gameClick}>
              <p data-num={1}>👉</p>
              <p data-num={2}>👊</p>
              <p data-num={3}>✋</p>
            </div>
          </ChoiceBox>
          <p className='resultText'>{meText}</p>
      </ResultBox>
    </>
  );
}

export default App;
