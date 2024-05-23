import './App.css'
import Narbar from './component/Narbar';
import BookCard from './component/BookCard';

function App() {
const libros = [ 
  {
    imagen:"https://picsum.photos/seed/picsum/200/300",
    title: "Titulo1",
    description: "Descripcion1"
  },

  {
    imagen:"https://picsum.photos/seed/picsum/200/300",
    title: "Titulo2",
    description: "Descripcion2"
  },
  {
    imagen:"https://picsum.photos/seed/picsum/200/300",
    title: "Titulo3",
    description: "Descripcion3"
  }

] 

  return (
    <>
      <Narbar title="Biblioteca de Libros " /> 
      <div className='container mt-3'>
        <div className='row'>
          {
            libros.map((libro,index) => (
              <div className='col-md-4'
              key={index}
              >
                <BookCard {...libro}/>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default App
