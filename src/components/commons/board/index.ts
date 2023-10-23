import styled from '@emotion/styled';

interface RowProps {
  backgroundColor?: string;
  borderColor?: {
    top?: string;
    bottom?: string;
  };
  justifyContent?: string;
  alignItems?: string;
}

interface ColProps {
  backgroundColor?: string;
  borderColor?: {
    left?: string;
    right?: string;
  };
}

export const Board = styled.div`
  margin: 30px;
  display: block;
  background-color: #323232;
  border-radius: 1rem;
`;

export const Row = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props: RowProps) =>
    props.backgroundColor ? props.backgroundColor : '#323232'};
  border-top: ${(props: RowProps) =>
    props.borderColor?.top ? `1px solid ${props.borderColor.top}` : ''};
  border-bottom: ${(props: RowProps) =>
    props.borderColor?.bottom ? `1px solid ${props.borderColor.bottom}` : ''};
  justify-content: ${(props: RowProps) =>
    props.justifyContent ? props.justifyContent : ''};
  align-items: ${(props: RowProps) =>
    props.alignItems ? props.alignItems : ''};
`;

export const Col = styled.div`
  margin: 10px;
  display: block;
  background-color: ${(props: ColProps) =>
    props.backgroundColor ? props.backgroundColor : '#323232'};
  border-left: ${(props: ColProps) =>
    props.borderColor?.left ? `1px solid ${props.borderColor.left}` : ''};
  border-right: ${(props: ColProps) =>
    props.borderColor?.right ? `1px solid ${props.borderColor.right}` : ''};
`;
