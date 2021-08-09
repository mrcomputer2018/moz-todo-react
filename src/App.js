
function App(props) {
  const subject = props.subject;
  /* console.log(props); */
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, {subject}
        </p>
      </header>
      <footer className="App-footer">
        Famadev - 2021
      </footer>
    </div>
  );
}

export default App;
