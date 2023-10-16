import styled from '@emotion/styled';

interface RowProps {
  backgroundColor?: string;
}

export const Board = styled.div`
  background-color: #323232;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 100vh;
  margin: 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px inset white;
  border-bottom: 1px inset white;
  background-color: ${(props: RowProps) =>
    props.backgroundColor ? props.backgroundColor : '#282828'};
`;
