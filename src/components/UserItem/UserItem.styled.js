import styled from 'styled-components';

export const Item = styled.li`
  text-align: center;
  justify-content: center;
  width: 380px;
  width: 380px;
  height: 460px;

  background: linear-gradient(114.99deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
  box-shadow: -2px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImg = styled.img`
  padding: 20px 0 0 20px;
`;

export const PictureImg = styled.img`
  width: 308px;
  height: 168px;
  margin: -8px 36px 28px 36px;
`;

export const UserImg = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const UserImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const UserImageLine = styled.div`
  width: 380px;
  height: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.06), inset 0px -2px 3px #ae7be3,
    inset 0px 3px 3px #fbf8ff;
`;

export const UserImageCircle = styled.div`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
  border-radius: 50%;

  position: absolute;
  top: -40px;
`;

export const TweetsStyled = styled.div`
  margin: 12px auto 0 auto;

  width: 300px;
  height: 24px;

  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowersStyled = styled.div`
  margin: 12px auto 0 auto;

  width: 300px;
  height: 24px;

  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const UserStyled = styled.div`
  margin: 42px auto 0 auto;

  width: 350px;
  height: 24px;

  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
