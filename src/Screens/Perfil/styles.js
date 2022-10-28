import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`

    flex: 1;
    background-color: #191919;
`;

export const UserInfo =  styled.View`

    padding-inline: 30px;
    margin-bottom: 25px;
    margin-left: 25px;
`;

export const Row = styled.View`

    flex-direction: row;
    margin-bottom: 10px;
`;

export const Text = styled.Text`

    color:#c9c7c7;
    margin-left: 20px;
`;


export const ContainerInfoBox = styled.View`

    border-bottom-color: #292929;
    border-bottom-width: 1px;
    border-top-color: #292929;
    border-top-width: 1px;
    flex-direction: row;
    height: 100px;
`;

export const InfoBox = styled.View`

    color: #c9c7c7;
    width: 50%;
    align-items: center;
    justify-content: center;
    border-right-color: #292929;
    border-right-width: 1px;
`;

export const ContainerMenu = styled.View`

    margin-top: 10px;
`;

export const   MenuItem = styled.View`

    flex-direction: row;
    padding-inline: 30px;
    margin-top: 10px;
    margin-left: 30px;
    padding-top: 20px
`;

export const MenuText = styled.Text`

    color: #c9c7c7;
    margin-left: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
`;


export const Button = styled.TouchableOpacity`
    margin-top: 16px;
    background-color: ${props => props.bg};
    width: 80%;
    height: 50px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;


export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${props => props.color};
`;
export const Input = styled.TextInput`
  background-color: #DDD;
  width: 90%;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
  color: #121212;
  text-align: center;
`;

export const ModalContainer = styled.KeyboardAvoidingView`
width: 100%;
height: 70%;
background-color: #191919;
position: absolute;
bottom: 0;
align-items: center;
justify-content: center;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 25px;
  flex-direction: row;
  align-items: center;
`;



