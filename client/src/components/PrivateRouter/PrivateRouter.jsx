import React from 'react';
import { Navigate } from 'react-router-dom';
import { useShockContent } from '../Context';

const PrivateRouter = ({ children }) => {
  const { shock } = useShockContent();
    if (!shock) {
      return <Navigate to="/" replace />;
    }
    return children;
}

export default PrivateRouter;
