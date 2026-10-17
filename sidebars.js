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
      type: 'ref',
      id: 'no-matter/no-matter',
      label: 'Premessa: No Matter',
    },
    {
      type: 'category',
      label: 'Il Libro di Penguins\' Eggs',
      collapsed: false,
      items: [
        { type: 'ref', id: 'no-matter/1', label: 'Cap. 1: L\'anatomia di un organismo vivente' },
        { type: 'ref', id: 'no-matter/2', label: 'Cap. 2: Supporto architetturale' },
        { type: 'ref', id: 'no-matter/3', label: 'Cap. 3: La naked e penguins-chef' },
        { type: 'ref', id: 'no-matter/4', label: 'Cap. 4: Gli strumenti del mestiere' },
        { type: 'ref', id: 'no-matter/5', label: 'Cap. 5: Guide pratiche e flussi' },
      ],
    },
    {
      type: 'category',
      label: 'Manuali della triade',
      collapsed: false,
      items: [
        { type: 'ref', id: 'gui/index', label: '1. Penguins GUI (Desktop)' },
        { type: 'ref', id: 'chef/index', label: '2. Penguins Chef (Ricette YAML)' },
        { type: 'ref', id: 'eggs/index', label: '3. Penguins\' Eggs (Motore CLI)' },
      ],
    },
    {
      type: 'doc',
      id: 'eggs-users-guide',
      label: 'Eggs users\' guide (Legacy)',
    },
  ],

  noMatterSidebar: [
    {
      type: 'ref',
      id: 'index',
      label: 'Indice generale',
    },
    {
      type: 'doc',
      id: 'no-matter/no-matter',
      label: 'Premessa: No Matter',
    },
    { type: 'doc', id: 'no-matter/1', label: 'Cap. 1: L\'anatomia di un organismo vivente' },
    { type: 'doc', id: 'no-matter/2', label: 'Cap. 2: Supporto architetturale' },
    { type: 'doc', id: 'no-matter/3', label: 'Cap. 3: La naked e penguins-chef' },
    { type: 'doc', id: 'no-matter/4', label: 'Cap. 4: Gli strumenti del mestiere' },
    { type: 'doc', id: 'no-matter/5', label: 'Cap. 5: Guide pratiche e flussi' },
  ],

  eggsSidebar: [
    {
      type: 'doc',
      id: 'eggs/index',
      label: 'Introduzione a Eggs',
    },
    {
      type: 'category',
      label: '1. Filosofia e visione',
      collapsed: false,
      items: [
        { type: 'doc', id: 'eggs/manifestum', label: 'Manifestum: un famoso dialogo' },
        { type: 'doc', id: 'eggs/1', label: 'Genesi e filosofia di eggs' },
        { type: 'doc', id: 'eggs/2', label: 'La triade: Eggs, Chef e GUI' },
      ],
    },
    {
      type: 'category',
      label: '2. Manuale utente e amministratore',
      collapsed: false,
      items: [
        { type: 'doc', id: 'eggs/quickstart', label: 'Guida rapida: in 5 passi' },
        { type: 'doc', id: 'eggs/reference', label: 'Riferimento dei comandi (CLI)' },
        { type: 'doc', id: 'eggs/coexist', label: 'Avvio multiplo con Krill Coexist' },
        { type: 'doc', id: 'eggs/fixit', label: 'Chromebook e FixIt!' },
      ],
    },
    {
      type: 'category',
      label: '3. Architettura interna e sviluppo',
      collapsed: false,
      items: [
        { type: 'doc', id: 'eggs/architecture/1', label: '1. Panoramica: mente, braccio e tecnico' },
        { type: 'doc', id: 'eggs/architecture/2', label: '2. Compilazione e pacchettizzazione' },
        { type: 'doc', id: 'eggs/architecture/5', label: '3. Il navigatore (parser)' },
        { type: 'doc', id: 'eggs/architecture/6', label: '4. L\'ingegnere (planner)' },
        { type: 'doc', id: 'eggs/architecture/3', label: '5. Il braccio in C (oa)' },
        { type: 'doc', id: 'eggs/architecture/4', label: '6. Il tecnico in Go (coa ell)' },
        { type: 'doc', id: 'eggs/architecture/7', label: '7. L\'installatore (Krill e Calamares)' },
        { type: 'doc', id: 'eggs/architecture/8', label: '8. Il server MCP (agenti IA)' },
        { type: 'doc', id: 'eggs/ci/1', label: '9. Integrazione continua (CI)' },
      ],
    },
    {
      type: 'ref',
      id: 'eggs-users-guide',
      label: 'Eggs users\' guide (Legacy)',
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
      id: 'chef/quickstart-e-cli',
      label: 'Quickstart e CLI Reference',
    },
    {
      type: 'doc',
      id: 'chef/ricette-e-costumi',
      label: 'Ricette, Categorie e Costumi',
    },
    {
      type: 'doc',
      id: 'chef/architettura-e-contratto',
      label: 'Architettura e Contratto',
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
      label: 'Rimasterizzazione e strumenti',
    },
    {
      type: 'doc',
      id: 'gui/chef-in-gui',
      label: 'Cook: Chef dentro la GUI',
    },
    {
      type: 'doc',
      id: 'gui/architettura-e-sviluppo',
      label: 'Architettura e sviluppo',
    },
  ],
};

export default sidebars;
