function Header({ totalPendientes }) {
  
  const handleInputChange = (e) => {
    console.log("Buscando tarea:", e.target.value);
  };

  return (
    <header style={{ backgroundColor: '#242424', padding: '1rem', color: 'white' }}>
      <h1>TaskUPC</h1>
      <p>Pendientes: {totalPendientes}</p>
      
      <input 
        type="text" 
        placeholder="Buscar tarea..." 
        onChange={handleInputChange} 
        style={{ padding: '5px', borderRadius: '4px' }}
      />
    </header>
  );
}

export default Header;