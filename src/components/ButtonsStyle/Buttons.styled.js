import styled from 'styled-components';

export const FollowButton = styled.button`
  padding: 14px 28px;
  margin: 12px auto 0 auto;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

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
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

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

export const LoadMoreButton = styled.button`
  padding: 14px 28px;
  margin: 12px 5px 12px 5px;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), 0.3s;

  &:hover,
  &:focus {
    box-shadow: rgba(54, 26, 121, 0.25) 0px 10px 20px 10px,
      rgba(34, 5, 102, 0.3) 0px 10px 7px -2px;
  }

  &:active {
    color: white;
    background: linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
  }
`;

export const BackButton = styled.button`
  padding: 14px 28px;
  margin: 12px auto 0 auto;
  float: left;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), 0.3s;

  &:hover,
  &:focus {
    box-shadow: rgba(54, 26, 121, 0.25) 0px 10px 20px 10px,
      rgba(34, 5, 102, 0.3) 0px 10px 7px -2px;
  }

  &:active {
    color: white;
    border: none;
    background: linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
  }
`;

export const ToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  z-index: 9999;

  &:hover {
    background-color: #283593;
  }
`;
