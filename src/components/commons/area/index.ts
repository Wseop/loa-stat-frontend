import styled from '@emotion/styled';

interface BoardProps {
  borderColor?: string;
}

interface RowProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const Board = styled.div`
  background-color: #323232;
  border-top: ${(props: BoardProps) =>
    props.borderColor ? `2px solid ${props.borderColor}` : ''};
  border-bottom: ${(props: BoardProps) =>
    props.borderColor ? `2px solid ${props.borderColor}` : ''};
  width: 100vh;
  margin: 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props: RowProps) =>
    props.borderColor ? `1px inset ${props.borderColor}` : ''};
  background-color: ${(props: RowProps) =>
    props.backgroundColor ? props.backgroundColor : '#282828'};
`;
