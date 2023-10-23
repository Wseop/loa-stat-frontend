import styled from '@emotion/styled';
import { Col, Row } from '../board';

interface SpanProps {
  fontSize?: string;
  backgroundColor?: string;
  newLine?: boolean;
  width?: string;
}

export const Span = styled.span`
  margin: 10px;
  text-align: center;
  display: ${(props: SpanProps) => (props.newLine ? 'block' : '')};
  font-size: ${(props: SpanProps) => (props.fontSize ? props.fontSize : '')};
  background-color: ${(props: SpanProps) =>
    props.backgroundColor ? props.backgroundColor : '#323232'};
  width: ${(props: SpanProps) => (props.width ? props.width : '')};
`;

interface RatioBarProps {
  label: string;
  max: number;
  total: number;
  value: number;
}

const Progress = styled.progress`
  ::-webkit-progress-bar {
    border: 1px solid white;
    border-radius: 0.3rem;
  }
  ::-webkit-progress-value {
    border-radius: 0.3rem;
    background-color: #20b2aa;
  }
`;

export function RatioBar(props: RatioBarProps) {
  return (
    <Row backgroundColor="#323232">
      <Col>
        <Span fontSize="25px" newLine={true}>
          {props.label}
        </Span>
        <Progress max={props.max} value={props.value}></Progress>
      </Col>
      <Col style={{ width: '100px' }}>
        <Span fontSize="20px" newLine={true}>
          {props.value.toLocaleString()}
        </Span>
        <Span fontSize="20px" newLine={true}>{`(${(
          (props.value / props.total) *
          100
        ).toFixed(2)}%)`}</Span>
      </Col>
    </Row>
  );
}
