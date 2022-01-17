// function App() {
//   return (
//     <div className="App">
//       Blog app
//     </div>
//   );
// }

import React from "react";
import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home";

class App extends React.Component <{}> {
  render(): React.ReactNode {
      return (
        <div>
          <TopBar />
          <Home />
        </div>
      )
  }
}

export default App;
