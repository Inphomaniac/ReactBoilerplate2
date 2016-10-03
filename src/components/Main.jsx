import React from 'react';

const Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          { props.children }
        </div>
      </div>
    </div>
  );
};

export default Main;
