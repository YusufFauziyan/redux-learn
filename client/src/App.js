import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div className="container box">
      <h2 className="has-text-weight-bold mb-5">Aplikasi kontak</h2>
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
