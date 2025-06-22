// import Body from './components/Body';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading="Enter the text to process" />
      {/* <Body /> */}
    </>
  );
}

export default App;