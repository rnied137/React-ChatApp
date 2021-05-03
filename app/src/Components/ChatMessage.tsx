import styled from 'styled-components';

import Plus from '../SVG/Plus.svg';
import Enter from '../SVG/Enter.svg';
import Smiley from '../SVG/Smiley.svg';

const  Container = styled.div`

padding-left: ${props=> props.theme.padding.pad2};
padding-right: ${props=> props.theme.padding.pad2};
border-top: 3px solid ${props => props.theme.colors.lightgray};
padding-top: ${props => props.theme.padding.pad2};
display: grid;
grid-gap:20px;
grid-template-columns: 40px auto 24px 40px;




`;

const Input = styled.input`
  font-size: TTNorms;
  color: ${(props) => props.theme.colors.gray};
  border: none;
  background-color: transparent;
  line-height: 30px;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-size: 20px;
  }
`;

const Icon = styled.a`
width: 40px;
height: 40px;
background: linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%);
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.03)), drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.03));
`;




export const ChatMessage = () => {
    return (
      <Container>
        <Icon>
          <img src={Plus} alt="More actions" />
        </Icon>
        <Input type="text" placeholder="Type message here" />
        <img src={Smiley} alt="Smiling" />
        <Icon>
          <img src={Enter} alt="Send!" />{" "}
        </Icon>
      </Container>
    );
}
