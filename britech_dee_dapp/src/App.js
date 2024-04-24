

function App() {
  return (
    <div className="app">
      <Head/>
      <ProposalBody/>
    </div>
  );
}

function Head () {
  return (
    <nav classNamee="nav-bar">
      <h2>BriTech Labs</h2>
      <button>CONNECT WALLET</button>
    </nav>
  )
}

function ProposalBody () {
  return (
    <>
    <div classNamee="input-proposal">
      <form action="">
        <input type="text" value="description" placeholder="writer your porposal" />
        <input type="number" value="numVotes" />
        <button type="submite">Submite</button>
      </form>
    </div>
    </>
  )
}

export default App;
