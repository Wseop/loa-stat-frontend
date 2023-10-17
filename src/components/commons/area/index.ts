import styled from '@emotion/styled';

interface AreaProps {
  borderColor?: string;
}

interface RowProps {
  backgroundColor?: string;
  borderColor?: string;
}

interface ColProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const Area = styled.div`
  background-color: #323232;
  border-top: ${(props: AreaProps) =>
    props.borderColor ? `2px solid ${props.borderColor}` : ''};
  border-bottom: ${(props: AreaProps) =>
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

export const Col = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  border-right: ${(props: ColProps) =>
    props.borderColor ? `1px inset ${props.borderColor}` : ''};
  background-color: ${(props: ColProps) =>
    props.backgroundColor ? props.backgroundColor : '#282828'};
`;
