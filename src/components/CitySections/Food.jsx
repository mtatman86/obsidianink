import React from 'react';

const Food = ({ dishes }) => {
  if (!dishes || dishes.length === 0) {
    return <p>No food items to display.</p>;
  }

  return (
    <section>
      <h2>Food</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {dishes.map(({ id, name, description}) => (
          <li key={id} style={{ marginBottom: '2rem' }}>
            <h3>{name}</h3>
              <p>{description}</p>
            
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Food;