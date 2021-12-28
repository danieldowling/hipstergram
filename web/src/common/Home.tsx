import React from 'react';
import BaseHttpService from '../services/base-http.service';

const Home: React.FC = () => {
  const baseHttpService = new BaseHttpService();
  let data: any;
  let posts: any | undefined;
  let postMap: any | undefined;

  const getPosts = async () => {
    try {
      data = await baseHttpService.get('posts', {});
      posts = data.data;
      console.log(posts);
      postMap = posts.map((post: any) => (
        <li key={post.title}>
          <p>{post.title}</p>
        </li>
      ));
      console.log(postMap);
      return postMap;
    } catch(error: any) {
      throw new Error(error);
    }
  };

  getPosts();
  
  return <div>
    <ul className="list-disc list-inside">
      <div>
        {postMap}
      </div>
    </ul>
  </div>
}

export default Home;