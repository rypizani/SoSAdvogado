import styled from 'styled-components/native';




export const Background = styled.View`
 flex:1;
 background-color: #191919;
 `;
export const Container = styled.KeyboardAvoidingView`
 flex:1;
 align-items: center;
 justify-content: center;
 `;
export const Logo = styled.Image`
 margin-bottom: 15px;
 width: 40%;
 height: 40%;
 `;
export const AreaInput = styled.View`
 align-items: center
 `;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.20)'
})`
 background: rgba(0,0,0,0.20);
 width: 350px;
 font-size: 17px;
 color: #FFF;
 margin-bottom: 15px;
 padding: 10px;
 border-radius: 7px;
 align-self: flex-start;
 `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #efbc1c;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
     border-radius: 7px;

`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #131313;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #FFF;
`;


