const AroundTown = ({ spots }) => {
  if (!spots || spots.length === 0) {
    return <p style={styles.empty}>No spots to show.</p>;
  }

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Around Town</h2>
      <ul style={styles.list}>
        {spots.map(({ id, name, location, description, image }) => (
          <li key={id} style={styles.card}>
            {image && <img src={image} alt={name} style={styles.image} />}
            <div style={styles.info}>
              <h3 style={styles.name}>{name}</h3>
              <p style={styles.location}><em>{location}</em></p>
              <p style={styles.description}>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#181818',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Merriweather', serif",
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '1.5rem',
    color: '#dddddd',
    textAlign: 'center',
    borderBottom: '1px solid #444',
    paddingBottom: '0.5rem',
    letterSpacing: '1px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  card: {
    display: 'flex',
    gap: '1.25rem',
    backgroundColor: '#222',
    borderRadius: '8px',
    padding: '1.25rem',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
  },
  image: {
    width: '160px',
    height: '110px',
    objectFit: 'cover',
    borderRadius: '6px',
    flexShrink: 0,
  },
  info: {
    flex: 1,
  },
  name: {
    margin: '0 0 0.3rem 0',
    fontSize: '1.5rem',
    color: '#e0e0e0',
  },
  location: {
    margin: '0 0 0.8rem 0',
    fontSize: '1rem',
    color: '#999',
  },
  description: {
    color: '#ccc',
    lineHeight: '1.6',
    fontSize: '1.05rem',
  },
  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: '3rem',
    fontStyle: 'italic',
  },
};

export default AroundTown;
