import React, { FC } from 'react';
import Helmet from 'react-helmet';
import './PageNotFound.scss';
import { Link } from 'react-router-dom';

interface PageNotFoundProps { }

const PageNotFound: FC<PageNotFoundProps> = () => {

  return <div className="PageNotFound">
    <Helmet>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
    </Helmet>
    <div className="mainbox">
      <div className="err">4</div>
      <i className="far fa-question-circle fa-spin"></i>
      <div className="err2">4</div>
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine?
        Never existed in the first place?
        <p>
          Let's go <Link to=" " >home</Link> and try from there.
        </p>
      </div>
    </div>
  </div>
};

export default PageNotFound;
