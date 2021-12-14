import React from 'react';
import axios from 'axios';

// interface PostData {
//   id: string;
//   title: string;
//   body: string;
//   notice: number;
// };

const Home: React.FC = () => {
  let data;
  let postData;
  const getPosts = async () => {
    try {
      data = await axios.get('http://localhost:3001/posts');
      postData = data.data[0].id;
      //console.log(data.data[0]);
    } catch(error: any) {
      throw new Error(error);
    }
  };

  getPosts();
  
  return <div>
    <ul className="list-disc list-inside">
      <li>{postData}</li>
    </ul>
  </div>
}

export default Home;