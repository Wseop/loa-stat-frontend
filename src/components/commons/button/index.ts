import styled from '@emotion/styled';

interface MenuButtonProps {
  backgroundColor?: string;
}

export const MenuButton = styled.button`
  width: 120px;
  height: 49px;
  border: 0;
  font-size: 30px;
  background-color: ${(props: MenuButtonProps) =>
    props.backgroundColor ? props.backgroundColor : ''};
  cursor: pointer;
  :hover {
    background-color: #505050;
  }
`;
