import { useEffect, useState } from 'react';
import NoticesPresenter from './notices.presenter';
import { Notice } from '../../interfaces/notices.interface';
import axios from 'axios';

const MAX_NOTICE = 10;

export default function NoticesContainer() {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/notices`)
      .then((result) => {
        setNotices(result.data.slice(0, MAX_NOTICE));
      })
      .catch((error) => {
        if (error.response) console.log(error.response.status);
        else if (error.request) console.log(error.request);
        else console.log(error.message);
      });
  }, []);

  return <NoticesPresenter notices={notices} />;
}
