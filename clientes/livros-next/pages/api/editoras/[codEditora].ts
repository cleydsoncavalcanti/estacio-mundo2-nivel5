// pages/api/editoras/[codEditora].ts

import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '@/classes/controle/ControleEditora';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const codEditora = Number(req.query.codEditora);
      const controleEditora = new ControleEditora();
      const nomeEditora = controleEditora.getNomeEditora(codEditora);
      res.status(200).json({ nome: nomeEditora });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};
