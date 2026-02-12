function App() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    color: 'green',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={style}>
      <h1>✅ REACT ЖИВ!</h1>
      <p style={{marginLeft: '20px', color: 'black'}}>
        Если ты это видишь, значит AuthContext был сломан.
      </p>
    </div>
  );
}

export default App;