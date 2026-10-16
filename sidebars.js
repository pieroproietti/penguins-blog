// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Indice generale',
    },
    {
      type: 'doc',
      id: 'no-matter',
      label: 'Premessa: No Matter',
    },
    {
      type: 'category',
      label: 'Il Libro di Penguins\' Eggs',
      collapsed: false,
      items: [
        { type: 'doc', id: '1', label: 'Cap. 1: L\'anatomia di un organismo vivente' },
        { type: 'doc', id: '2', label: 'Cap. 2: Supporto architetturale' },
        { type: 'doc', id: '3', label: 'Cap. 3: La naked e penguins-chef' },
        { type: 'doc', id: '4', label: 'Cap. 4: Gli strumenti del mestiere' },
        { type: 'doc', id: '5', label: 'Cap. 5: Guide pratiche e flussi' },
      ],
    },
    {
      type: 'doc',
      id: 'eggs-users-guide',
      label: 'Eggs users\' guide (Legacy)',
    },
  ],

  eggsSidebar: [
    {
      type: 'doc',
      id: 'eggs/index',
      label: 'Introduzione a Eggs',
    },
    {
      type: 'category',
      label: '1. Filosofia e Visione',
      collapsed: false,
      items: [
        { type: 'doc', id: 'eggs/manifestum', label: 'Manifestum: Un famoso dialogo' },
        { type: 'doc', id: 'eggs/1', label: 'I Fondamenti Filosofici' },
        { type: 'doc', id: 'eggs/2', label: 'L\'orizzonte evolutivo' },
      ],
    },
    {
      type: 'category',
      label: '2. Manuale Utente',
      collapsed: false,
      items: [
        { type: 'doc', id: 'eggs/quickstart', label: 'Quickstart' },
        { type: 'doc', id: 'eggs/reference', label: 'Command Reference (CLI)' },
        { type: 'doc', id: 'eggs/coexist', label: 'Multi-Boot con Krill Coexist' },
        { type: 'doc', id: 'eggs/fixit', label: 'Chromebook e FixIt!' },
      ],
    },
    {
      type: 'category',
      label: '3. Architettura e Sviluppo',
      collapsed: false,
      items: [
        { type: 'doc', id: 'eggs/architecture/1', label: '1. Panoramica: Mente e Braccio' },
        { type: 'doc', id: 'eggs/architecture/2', label: '2. Compilazione e Sviluppo' },
        { type: 'doc', id: 'eggs/architecture/3', label: '3. Il modulo oa (C)' },
        { type: 'doc', id: 'eggs/architecture/4', label: '4. Il modulo ell (Go)' },
        { type: 'doc', id: 'eggs/architecture/5', label: '5. Il Parser' },
        { type: 'doc', id: 'eggs/architecture/6', label: '6. Il Planner' },
        { type: 'doc', id: 'eggs/architecture/7', label: '7. L\'Installer (Krill e Calamares)' },
        { type: 'doc', id: 'eggs/architecture/8', label: '8. Server MCP (IA)' },
        { type: 'doc', id: 'eggs/ci/1', label: '9. Continuous Integration (CI)' },
      ],
    },
    {
      type: 'category',
      label: 'Visione Generale e Storico',
      collapsed: true,
      items: [
        { type: 'ref', id: 'index', label: 'Indice generale' },
        { type: 'ref', id: 'no-matter', label: 'Premessa: No Matter' },
        { type: 'ref', id: '1', label: 'Cap. 1: L\'anatomia' },
        { type: 'ref', id: '2', label: 'Cap. 2: Architetture' },
        { type: 'ref', id: '3', label: 'Cap. 3: Naked e Chef' },
        { type: 'ref', id: '4', label: 'Cap. 4: Gli strumenti' },
        { type: 'ref', id: '5', label: 'Cap. 5: Il ciclo vitale' },
        { type: 'ref', id: 'eggs-users-guide', label: 'Eggs users\' guide (Legacy)' },
      ],
    },
  ],

  chefSidebar: [
    {
      type: 'doc',
      id: 'chef/index',
      label: 'Introduzione a Penguins Chef',
    },
    {
      type: 'doc',
      id: 'chef/architettura-e-contratto',
      label: 'Architettura e Contratto',
    },
    {
      type: 'doc',
      id: 'chef/ricette-e-costumi',
      label: 'Ricette, Categorie e Costumi',
    },
    {
      type: 'doc',
      id: 'chef/quickstart-e-cli',
      label: 'Quickstart e CLI Reference',
    },
  ],

  guiSidebar: [
    {
      type: 'doc',
      id: 'gui/index',
      label: 'Introduzione a Penguins GUI',
    },
    {
      type: 'doc',
      id: 'gui/funzionalita-e-remastering',
      label: 'Remastering e Strumenti',
    },
    {
      type: 'doc',
      id: 'gui/chef-in-gui',
      label: 'Cook: Chef dentro la GUI',
    },
    {
      type: 'doc',
      id: 'gui/architettura-e-sviluppo',
      label: 'Architettura e Sviluppo',
    },
  ],
};

export default sidebars;
