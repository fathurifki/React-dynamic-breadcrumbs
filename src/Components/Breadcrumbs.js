import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  console.log('KRUM', crumbs)
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <div>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key} className="bold">{name}</span>
        ) : (
          <Link key={key} className="underline text-blue-500 mr-4" to={path}>
            {name}
          </Link>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
