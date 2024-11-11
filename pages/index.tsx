import { PrismaClient } from '@prisma/client';
    import Link from 'next/link';
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

    type HomeProps = {
      acompanhantes: Acompanhante[];
    };

    export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
      const prisma = new PrismaClient();
      const acompanhantes = await prisma.acompanhante.findMany();
      return {
        props: { acompanhantes },
      };
    };

    export default function Home({ acompanhantes }: HomeProps) {
      return (
        <div>
          <h1>Acompanhantes</h1>
          <ul>
            {acompanhantes.map((acompanhante) => (
              <li key={acompanhante.id}>
                <Link href={`/acompanhante/${acompanhante.id}`}>
                  <a>{acompanhante.nome}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
