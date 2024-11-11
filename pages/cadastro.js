import { useState } from 'react';
    import { PrismaClient } from '@prisma/client';

    export default function Cadastro() {
      const [nome, setNome] = useState('');
      const [cidade, setCidade] = useState('');
      const [servicos, setServicos] = useState('');
      const [stories, setStories] = useState('');
      const [fotos, setFotos] = useState('');
      const [videos, setVideos] = useState('');
      const [videoVerificacao, setVideoVerificacao] = useState('');
      const [documentoIdentidade, setDocumentoIdentidade] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const prisma = new PrismaClient();
        await prisma.acompanhante.create({
          data: {
            nome,
            cidade,
            servicos: servicos.split(','),
            stories: stories.split(','),
            fotos: fotos.split(','),
            videos: videos.split(','),
            videoVerificacao,
            documentoIdentidade,
          },
        });
        alert('Cadastro realizado com sucesso!');
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label>
            Cidade:
            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          </label>
          <label>
            Serviços (separados por vírgula):
            <input type="text" value={servicos} onChange={(e) => setServicos(e.target.value)} />
          </label>
          <label>
            Stories (URLs separadas por vírgula):
            <input type="text" value={stories} onChange={(e) => setStories(e.target.value)} />
          </label>
          <label>
            Fotos (URLs separadas por vírgula):
            <input type="text" value={fotos} onChange={(e) => setFotos(e.target.value)} />
          </label>
          <label>
            Vídeos (URLs separadas por vírgula):
            <input type="text" value={videos} onChange={(e) => setVideos(e.target.value)} />
          </label>
          <label>
            Vídeo de Verificação:
            <input type="text" value={videoVerificacao} onChange={(e) => setVideoVerificacao(e.target.value)} />
          </label>
          <label>
            Documento de Identidade:
            <input type="text" value={documentoIdentidade} onChange={(e) => setDocumentoIdentidade(e.target.value)} />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      );
    }
