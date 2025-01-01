import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

export default function DownloadPage() {
  const [visitCount, setVisitCount] = useState(0);

  // Funzione per aggiornare il contatore
  const updateCounter = () => {
    if (typeof Storage !== "undefined") {
      let count = localStorage.getItem('visitCount');
      count = count ? Number(count) + 1 : 1;
      localStorage.setItem('visitCount', count);
      setVisitCount(count);
    }
  };

  // Funzione per reindirizzare al file di Google Drive
  const redirectToDrive = () => {
    window.location.href = "https://penguins-eggs.net/drive";
  };

  // Esegui il contatore e il reindirizzamento al caricamento della pagina
  useEffect(() => {
    updateCounter();
    setTimeout(redirectToDrive, 3000); // Reindirizza dopo 3 secondi
  }, []);

  return (
    <Layout title="Download File" description="Pagina di reindirizzamento per il download">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Stai per essere reindirizzato al download...</h1>
        <p>Se il reindirizzamento non funziona, <a href="https://penguins-eggs.net/drive">clicca qui</a>.</p>
        <p>Visite: {visitCount}</p>
      </div>
    </Layout>
  );
}