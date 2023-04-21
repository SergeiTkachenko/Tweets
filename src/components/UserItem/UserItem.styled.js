import styled from 'styled-components';

export const Item = styled.li`
  text-align: center;
  justify-content: center;
  width: 380px;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImg = styled.img`
  /* position: absolute; */
  padding: 20px 0 0 20px;
`;

export const PictureImg = styled.img`
  /* position: absolute; */
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
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserImageCircle = styled.div`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;

  position: absolute;
  top: -40px;
`;

export const TweetsStyled = styled.div`
  margin: 12px auto 0 auto;

  width: 250px;
  height: 24px;

  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowersStyled = styled.div`
  margin: 12px auto 0 auto;

  width: 250px;
  height: 24px;

  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const UserStyled = styled.div`
  margin: 42px auto 0 auto;

  width: 300px;
  height: 24px;

  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  padding: 14px 28px;
  margin: 12px auto 0 auto;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  cursor: pointer;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: #5cd3a8;
    box-shadow: rgba(45, 224, 140, 0.25) 0px 10px 20px 10px,
      rgba(12, 231, 96, 0.3) 0px 10px 7px -2px;
  }
`;

export const FollowingButton = styled.button`
  padding: 14px 28px;
  margin: 12px auto 0 auto;
  width: 196px;
  height: 50px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  cursor: pointer;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #5cd3a8;
    background-color: #ebd8ff;
    box-shadow: rgba(215, 232, 233, 0.25) 0px 10px 20px 10px,
      rgba(205, 236, 217, 0.3) 0px 10px 7px -2px;
  }
`;
