import Header from './component/Header';
import './app.css'
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  const quote = "Jett is the best valorant agent. "
  return (
    <div>
      <Header title="Noob"></Header>
      <Content></Content>
      <Footer quote = {quote}></Footer>
    </div>
  )
}

export default App
