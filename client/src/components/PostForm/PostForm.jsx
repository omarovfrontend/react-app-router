import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { useShockContent } from '../Context';

const PostForm = () => {
  const { shock } = useShockContent();
  return (
    <Form>
      <FormGroup>
        <Input 
          type='title'
          name='title'
          placeholder='title'
        />
      </FormGroup>
      <FormGroup>
        <Input 
          type='text'
          name='text'
          placeholder='text'
        />
      </FormGroup>
      <FormGroup>
        <Input 
          type='file'
          name='file'
          placeholder='file'
        />
      </FormGroup>
      {shock &&
        <Button
          type='submit'
          color="success"
          outline
        >
          success
        </Button>
      }
    </Form>
  )
}

export default PostForm;
