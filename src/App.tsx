import Header from './components/layout/Header/Header';
// import './styles/global.scss'; // Make sure this is in main.tsx

function App() {
  return (
    <>
      <Header />
      {/* Add some dummy height so you can see the fixed header working */}
      <main
        style={{
          paddingTop: '80px',
          minHeight: '200vh',
          backgroundColor: '#f2f2f2',
        }}
      >
        <h1 style={{ textAlign: 'center', padding: '2rem' }}>
          Page Content Goes Here
        </h1>
      </main>
    </>
  );
}

export default App;
