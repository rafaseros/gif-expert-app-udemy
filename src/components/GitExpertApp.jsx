import React, { useState } from 'react';
import AddCategory from './AddCategory';
import Gifgrid from './Gifgrid';

const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory addCategory={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <Gifgrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GitExpertApp;
