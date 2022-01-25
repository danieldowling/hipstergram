import React, { useEffect, useState } from 'react';
import { CardBody } from '../cards/card.body';
import { CardLikes } from '../cards/card.likes';
import { CardTitle } from '../cards/card.title';
import BaseHttpService from '../services/base-http.service';

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const baseHttpService = new BaseHttpService();
  let data: any;

  const getPosts = async () => {
    try {
      data = await baseHttpService.get('posts', {});
      setPosts(data.data);
      console.log(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const getUser = async () => {
    try {
      const user = await baseHttpService.getUser("Jasen11");
    } catch(error: any) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getUser();
    getPosts();
  }, [posts.length]);

  return (
    <div>
      <ul className="list-inside">
        <div>
          {posts.length > 1
            ? posts.map((post: any) => {
                return (
                  <li key={post.title}>
                    <div className="p-10">
                      <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                          <CardTitle title={post.title} />
                          <CardBody body={post.body} />
                          <CardLikes notice={post.notice} />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            : 'Loading...'}
        </div>
      </ul>
    </div>
  );
};

export default Home;
