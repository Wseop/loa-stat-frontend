import styled from '@emotion/styled';

interface RowProps {
  backgroundColor?: string;
  borderColor?: {
    top?: string;
    bottom?: string;
  };
}

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: RowProps) =>
    props.backgroundColor ? props.backgroundColor : '#282828'};
  border-top: ${(props: RowProps) =>
    props.borderColor?.top ? `1px inset ${props.borderColor.top}` : ''};
  border-bottom: ${(props: RowProps) =>
    props.borderColor?.bottom ? `1px inset ${props.borderColor.bottom}` : ''};
`;

interface ColProps {
  backgroundColor?: string;
  borderColor?: {
    left?: string;
    right?: string;
  };
}

export const Col = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ColProps) =>
    props.backgroundColor ? props.backgroundColor : '#282828'};
  border-left: ${(props: ColProps) =>
    props.borderColor?.left ? `1px inset ${props.borderColor.left}` : ''};
  border-right: ${(props: ColProps) =>
    props.borderColor?.right ? `1px inset ${props.borderColor.right}` : ''};
`;

export const Table = styled.div`
  display: flex;
  gap: 10px 2%;
  flex-wrap: wrap;
`;

export const TableItem = styled.div`
  width: 32%;
`;
