/* Components */
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Timeline from './components/Timeline';

function App() {
  return (

    /* Container */
    <div className="max-w-7xl min-h-screen mx-auto flex">

      {/* Layout */}
      <Sidebar />
      <Content />
      <Timeline />
    </div>
  );
}

export default App;
