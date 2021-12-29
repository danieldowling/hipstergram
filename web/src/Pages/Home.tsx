import React, { useEffect, useState } from 'react';
import BaseHttpService from '../services/base-http.service';

const Home: React.FC = () => {

  const [posts, setPosts] = useState([]);

  const baseHttpService = new BaseHttpService();
  let data: any;

  const getPosts = async () => {
    try {
      data = await baseHttpService.get('posts', {});
      setPosts(data.data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getPosts()
  }, [])

  return <div>
    <ul className="list-inside">
      <div>
        {
          posts.length > 1 ? (
            posts.map((post: any) => {
              return (<li key={post.title}>
                <p>{post.title}</p>
              </li>)
            })
          ) : 'Loading...'
        }
      </div>
    </ul>
  </div>
}

export default Home;