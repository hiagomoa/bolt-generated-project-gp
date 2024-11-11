CREATE TABLE "Acompanhante" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "nome" TEXT NOT NULL,
      "cidade" TEXT NOT NULL,
      "servicos" TEXT NOT NULL,
      "stories" TEXT NOT NULL,
      "fotos" TEXT NOT NULL,
      "videos" TEXT NOT NULL,
      "videoVerificacao" TEXT NOT NULL,
      "documentoIdentidade" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL
    );
