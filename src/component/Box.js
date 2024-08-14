import styled from 'styled-components';

const BoxStyle = styled.div`
  .text {
    text-align:center;
    font-weight: bold;
  }
  .title {
    font-size: 20px;
  }
  .result {
    font-size: 16px;
  }
  .me {
    border: 4px solid green;
    .title, .result {
      color: green;
    }
  }
  .computer {
    border: 4px solid red;
    .title, .result {
      color: red;
    }
  }
  .image {
    width: 640px;
    height: 426px;
  }
`;

const Box = (props) => {
  const title = props.title;
  const image = `${props.image}.png`;
  const result = props.result;
  
  return (
    <>
        <BoxStyle>
          <div className={`${(props.title == 'user' ? "me" : "computer")}`}>
            <p className='text title'>{title}</p>
            <div>
                <img className='image' src={`game/${image}`} alt='image' />
                <p className='text result'>{result}</p>
            </div>  
          </div>      
        </BoxStyle>
    </>
  )
}

export default Box