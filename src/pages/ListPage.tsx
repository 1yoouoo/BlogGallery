import React, { useEffect, useState } from 'react';
import service from '../libs/api';

const ListPage = () => {
  const [articles, setArticles] = useState<any>([]);
  useEffect(() => {
    service.get('/read').then((result) => {
      console.log(result);
    });
  }, []);
  return <div>this is ListPage</div>;
};

export default ListPage;
