import React, { FC } from 'react';
import './Loader.scss';
import { Button, Spinner } from 'react-bootstrap';

interface LoaderProps {
}

const Loader: FC<LoaderProps> = (props: LoaderProps) => (
  <Button className='loader'
    disabled
  >
    <Spinner size="sm">
    </Spinner>
    <span>
      {' '}Loading
    </span>
  </Button>

);

export default Loader;
