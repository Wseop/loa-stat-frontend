import styled from '@emotion/styled';
import { NoticesPresenterProps } from '../../interfaces/notices.interface';
import { Span } from '@/components/commons/data';
import { Board, Row } from '@/components/commons/board';

const NOTICE_FONT_SIZE = '30px';
const CONTENT_FONT_SIZE = '20px';

const Wrapper = styled.div`
  display: block;
  width: 1440px;
`;

const SpanLink = styled.a`
  margin: 10px;
  font-size: ${CONTENT_FONT_SIZE};
  background-color: #323232;
  text-decoration: none;
`;

export default function NoticesPresenter(props: NoticesPresenterProps) {
  return (
    <Wrapper>
      <Row backgroundColor="#282828" justifyContent="center">
        <Board>
          <Row borderColor={{ bottom: 'white' }}>
            <Span fontSize={NOTICE_FONT_SIZE}>공지</Span>
          </Row>
          {props.pageNotices?.map((v) => (
            <Row key={v} borderColor={{ bottom: 'white' }}>
              <Span fontSize={CONTENT_FONT_SIZE} newLine={true}>{`${v}`}</Span>
            </Row>
          ))}
        </Board>
        <Board>
          <Row borderColor={{ bottom: 'white' }}>
            <Span fontSize={NOTICE_FONT_SIZE}>로스트아크 공지</Span>
          </Row>
          {props.notices?.map((v) => (
            <Row key={v.noticeId} borderColor={{ bottom: 'white' }}>
              <SpanLink href={v.link} target="_blank">
                {v.title}
              </SpanLink>
            </Row>
          ))}
        </Board>
      </Row>
    </Wrapper>
  );
}
