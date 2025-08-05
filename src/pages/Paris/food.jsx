import React from 'react';

const Food = ({ data }) => {
  return (
    <section className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Local Food & Specialties</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {data.map(({ name, description }, idx) => (
          <article
            key={idx}
            className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-300">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Food;
