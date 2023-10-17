import styled from '@emotion/styled';
import { Col, Row } from '../area';

export const Span = styled.span`
  margin: 5px;
  text-align: center;
`;

export const Label = styled.div`
  margin: 5px;
  text-align: center;
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
    <Row style={{ marginBottom: '5px' }}>
      <Col>
        <Label style={{ fontSize: '25px' }}>{props.label}</Label>
        <Progress max={props.max} value={props.value}></Progress>
      </Col>
      <Col style={{ width: '100px' }}>
        <Label style={{ fontSize: '20px' }}>
          {props.value.toLocaleString()}
        </Label>
        <Label style={{ fontSize: '20px' }}>{`(${(
          (props.value / props.total) *
          100
        ).toFixed(2)}%)`}</Label>
      </Col>
    </Row>
  );
}
