import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Wade Varesio's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome!</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> The source code for this website is available <a href="https://github.com/WadeVaresio/personal-site">here</a>.</p>
      <p>A link to my most recent project: <a href="https://personal-tracker.wadevaresio.com">Personal Tracker</a> built with privacy in mind,
        please find the source code on GitHub<a href="https://github.com/WadeVaresio/Personal-Tracker"> here</a>
      </p>
    </article>
  </Main>
);

export default Index;
