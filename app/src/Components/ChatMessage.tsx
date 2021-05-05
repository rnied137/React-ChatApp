import styled from 'styled-components';
import { useState} from 'react';
import Plus from '../SVG/Plus.svg';
import Enter from '../SVG/Enter.svg';
import Smiley from '../SVG/Smiley.svg';
import Picture from '../SVG/Picture.svg';
import Attachment from '../SVG/Attachment.svg';
import Video from '../SVG/Video.svg';

import { IMessageProps } from './Message';
import { ICharAreaProps } from './ChatArea';

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
  word-wrap: break-word-all;
  overflow-y: auto;

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
position: relative;

`;

const AdditionalActions = styled.div`
height: 164px;
width: 40px;
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-around;
transform: translateY(-165px);
`;


type ChatMessageProps = {
  messages: IMessageProps[];
  setMessages: React.Dispatch<React.SetStateAction<IMessageProps[]>>
}

export const ChatMessage = ({setMessages, messages}:ChatMessageProps) => {


  const [children, setMessage] = useState("");
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target) {
      const message = e.target.value;
      setMessage(message);
      }
}
  const handleSend = () => {
    if (children.length === 0) return;
    const isUser = false;
    const myMessage = { children, isUser };
  setMessages([...messages, myMessage])
}
  const [actions, setActions] = useState(false);
    return (
      <Container>
        <Icon  onClick={()=>setActions(!actions)}>
          <img src={Plus} alt="More actions" />
        </Icon>
        { actions ? <AdditionalActions>
            <Icon href="http://interia.pl">
          <img src={Video} alt="Send!" />{" "}
        </Icon>
        <Icon>
          <img src={Picture} alt="Send!" />{" "}
        </Icon>
        <Icon>
          <img src={Attachment} alt="Send!" />{" "}
        </Icon>

          </AdditionalActions>:null}
        <Input type="text" placeholder="Type message here" onChange={(e)=>handleMessage(e)}/>
        <img src={Smiley} alt="Smiling" />
        <Icon onClick={()=>handleSend()}>
          <img src={Enter} alt="Send!" />{" "}
        </Icon>
      </Container>
    );
}
