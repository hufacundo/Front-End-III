import Aluno from './components/Aluno';

function App() {

  return (
    <div>
      <Aluno>
      {[
        {nome: 'Marcos Limeira', email: 'marcos@gmail.com', curso: 'Engenharia Mecânica', media: 9.00},
        {nome: 'Leonardo Botelho', email: 'botelho@gmail.com', curso: 'Música', media: 8.00},
        {nome: 'Luan Cordeiro', email: 'cordeiro@gmail.com', curso: 'Medicina', media: 7.00}
      ].map((aluno, i) => (
        <>
        <p>Nome: {aluno.nome}</p>
        <p>Email: {aluno.email}</p>
        <p>Curso: {aluno.curso}</p>
        <p>Média: {aluno.media}</p>
        <p>Status: {aluno.media >= 7.00 ? 'Aprovado' : 'Reprovado'}</p>
        </>
      ))}
      </Aluno>    
      
    </div>

  )
}

export default App
