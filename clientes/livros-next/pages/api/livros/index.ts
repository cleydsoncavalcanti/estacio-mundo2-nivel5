// pages/api/livros/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '@/classes/controle/ControleLivros';

const controleLivros = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const livros = controleLivros.obterLivros();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else if (req.method === 'POST') {
    try {
      const novoLivro = req.body;
      controleLivros.incluir(novoLivro);
      res.status(200).json({ message: 'Livro adicionado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};
