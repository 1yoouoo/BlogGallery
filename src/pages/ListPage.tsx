import React, { useEffect, useState } from 'react';
import service from '../libs/api';

const ListPage = () => {
  const [articles, setArticles] = useState<any>([]);
  const getArticles = () => {
    service.get('/read').then((result) => {
      console.log(result);
    });
  };
  useEffect(() => {
    getArticles();
  }, []);
  return <div>this is ListPage</div>;
};

export default ListPage;
