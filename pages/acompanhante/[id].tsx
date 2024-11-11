import { PrismaClient } from '@prisma/client';
    import { GetServerSideProps } from 'next';

    type Acompanhante = {
      id: number;
      nome: string;
      cidade: string;
      servicos: string[];
      stories: string[];
      fotos: string[];
      videos: string[];
      videoVerificacao: string;
      documentoIdentidade: string;
      createdAt: Date;
      updatedAt: Date;
    };

    type AcompanhanteProps = {
      acompanhante: Acompanhante;
    };

    export const getServerSideProps: GetServerSideProps<AcompanhanteProps> = async (context) => {
      const prisma = new PrismaClient();
      const acompanhante = await prisma.acompanhante.findUnique({
        where: { id: Number(context.params?.id) },
      });
      return {
        props: { acompanhante },
      };
    };

    export default function Acompanhante({ acompanhante }: AcompanhanteProps) {
      return (
        <div>
          <h1>{acompanhante.nome}</h1>
          <p>Cidade: {acompanhante.cidade}</p>
          <p>Serviços: {acompanhante.servicos.join(', ')}</p>
          <h2>Stories</h2>
          <ul>
            {acompanhante.stories.map((story, index) => (
              <li key={index}>
                <img src={story} alt={`Story ${index}`} />
              </li>
            ))}
          </ul>
          <h2>Fotos</h2>
          <ul>
            {acompanhante.fotos.map((foto, index) => (
              <li key={index}>
                <img src={foto} alt={`Foto ${index}`} />
              </li>
            ))}
          </ul>
          <h2>Vídeos</h2>
          <ul>
            {acompanhante.videos.map((video, index) => (
              <li key={index}>
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              </li>
            ))}
          </ul>
          <h2>Vídeo de Verificação</h2>
          <video controls>
            <source src={acompanhante.videoVerificacao} type="video/mp4" />
          </video>
        </div>
      );
    }
