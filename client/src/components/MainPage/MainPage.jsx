import React from 'react';
import { Col, Row } from 'reactstrap';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';

const MainPage = () => {
  return (
    <>
      <Row>
        <Col className='mt-2'>
          <PostForm />
        </Col>
      </Row>
      <Posts />
    </>
  )
}

export default MainPage;
