import Adicao from "./components/Adicao";
import Divisao from "./components/Divisao";
import Multiplicacao from "./components/Multiplicacao";
import PrecisoEstudar from "./components/PrecisoEstudar";
import Subtracao from "./components/Subtracao";

function App() {
  return (
    <div>
      <Adicao num1={1} num2={2} />
      <Subtracao num5={5} num3={3}/>
      <Multiplicacao num2={2} num5={5}/>
      <Divisao num20={20} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia="React"/>
    </div>
  );
}

export default App;
