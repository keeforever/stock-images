import Home from "./components/Home";
import AppProvider from "./context";
function App() {
  return (
    <AppProvider>
      <main>
        <Home/>
      </main>
    </AppProvider>
  );
}

export default App;
