import styled from '@emotion/styled';
import {
  NoticeLinkProps,
  NoticesPresenterProps,
} from './interfaces/notices.interface';
import { Col, Row } from '@/components/commons/table';
import { Span } from '@/components/commons/data';

const Wrapper = styled.div`
  display: block;
  width: 75vw;
  justify-content: center;
`;

const NoticeBoard = styled.div`
  margin: 30px;
  display: inline-block;
  background-color: #323232;
  border-radius: 1rem;
  width: 35vw;
`;

const NoticeLink = (props: NoticeLinkProps) => {
  const date = new Date(props.date.replace('Z', ''));

  return (
    <Row
      borderColor={{ bottom: 'white' }}
      backgroundColor="#323232"
      style={{ margin: '10px', paddingBottom: '10px' }}
    >
      <Col>
        <a
          href={props.link}
          target="_blank"
          style={{
            fontSize: '20px',
            textDecoration: 'none',
            backgroundColor: '#323232',
          }}
        >
          {props.title}
        </a>
        <Row style={{ fontSize: '15px' }} backgroundColor="#323232">
          {`${date.getFullYear()}.${
            date.getMonth() + 1
          }.${date.getDate()} - ${date
            .getHours()
            .toString()
            .padStart(2, '0')}:${date
            .getMinutes()
            .toString()
            .padStart(2, '0')}`}
        </Row>
      </Col>
    </Row>
  );
};

export default function NoticesPresenter(props: NoticesPresenterProps) {
  return (
    <Wrapper>
      <NoticeBoard>
        <Row
          borderColor={{ bottom: 'white' }}
          backgroundColor="#323232"
          style={{ margin: '10px' }}
        >
          <Span style={{ fontSize: '30px', backgroundColor: '#323232' }}>
            로스트아크 공지
          </Span>
        </Row>
        {props.notices.map((v) => (
          <NoticeLink
            key={v.noticeId}
            link={v.link}
            title={v.title}
            date={v.date}
          />
        ))}
      </NoticeBoard>
    </Wrapper>
  );
}
