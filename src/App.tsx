import { useState } from 'react';
import Navbar from './components/navbar/index';
import { SelectedPage } from './modules/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="App bg-white text-black w-full h-screen font-dmsans">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
