export interface NoticesPresenterProps {
  notices: Notice[];
}

export interface Notice {
  noticeId: number;
  title: string;
  date: string;
  link: string;
}

export interface NoticeLinkProps {
  title: string;
  date: string;
  link: string;
}
