import React from 'react';
import axios from 'axios';
//import { useState } from 'react';

// interface PostData {
//   id: string;
//   title: string;
//   body: string;
//   notice: number;
// };

const Home: React.FC = () => {
  let data!: {id: string, title: string, body: string, notice: number};
  //let postData;
  const getPosts = async () => {
    try {
      data = await axios.get('http://localhost:3001/posts');
      //postData = data
      //console.log(data.data[0]);
    } catch(error: any) {
      throw new Error(error);
    }
  };

  getPosts();
  
  return <div>
    <ul className="list-disc list-inside">
      <li>{data && data.id}</li>
    </ul>
  </div>
}

export default Home;