import React from "react";
import axios from 'axios';
import { useState } from "react";

const GetPosts: React.FC = () => {
  let [data, setData] = useState(null) 
  //let postData;
  const getPosts = async () => {
    try {
      data = await axios.get('http://localhost:3001/posts');
      setData(data);
      //console.log(data.data[0]);
    } catch(error: any) {
      throw new Error(error);
    }
  };

  getPosts();

  return (
    <div>
      <ul>{data}</ul>
    </div>
  )
};

export default GetPosts;