// clientes/livros-react/src/Interface/LivroMongo.ts
interface LivroMongo {
    _id: string;
    titulo: string;
    codEditora: number;
    resumo: string;
    autores: string[];
  }
  
  export default LivroMongo;
  