// pages/api/livros/[codigo].ts

import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '@/classes/controle/ControleLivros';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      const codigoLivro = Number(req.query.codigo);
      const controleLivros = new ControleLivros();
      controleLivros.excluir(codigoLivro);
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};
