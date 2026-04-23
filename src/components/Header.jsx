function Header({ totalPendientes }) {
  return (
    <header style={{ backgroundColor: '#242424', padding: '1rem', color: 'white' }}>
      <h1>TaskUPC</h1>
      <p>Tienes <strong>{totalPendientes}</strong> tareas por terminar</p>
    </header>
  );
}

export default Header;