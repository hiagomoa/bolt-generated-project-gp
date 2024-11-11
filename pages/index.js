import { PrismaClient } from '@prisma/client';
    import Link from 'next/link';

    export async function getServerSideProps() {
      const prisma = new PrismaClient();
      const acompanhantes = await prisma.acompanhante.findMany();
      return {
        props: { acompanhantes },
      };
    }

    export default function Home({ acompanhantes }) {
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
