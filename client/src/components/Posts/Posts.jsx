import React from 'react';
import { Row } from 'reactstrap';
import PostItem from '../PostItem/PostItem';

const Posts = () => {
  return (
    <Row className='mb-5'>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </Row>
  )
}

export default Posts;
