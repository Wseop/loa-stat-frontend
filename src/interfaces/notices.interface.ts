export interface NoticesPresenterProps {
  notices: Notice[];
  pageNotices: string[];
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
