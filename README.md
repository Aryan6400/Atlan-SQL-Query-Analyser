# Atlan-SQL-Query-Analyser

This web-based application based on React.js provides a user-friendly interface for running SQL queries and visualizing results. It offers essential features for data analysts, including a code editor, history tracking, table manipulation (create, read, update, delete), and a visualization section. The application aims to enhance the analyst's workflow by ensuring code history persistence, on-site visualization, and theme customization.

**Key Features:**

History Section: Access a comprehensive history of executed queries. Analysts can review and reuse queries from the extensive code history, even after refreshing or restarting sessions. This ensures continuity in their work and prevents the frustration of losing crucial code snippets.

Local Storage Sync: Code history is synchronized with local storage, ensuring persistence across sessions. The history is saved for one day and can be changed based on requirements.

Graphical Representation: Visualize generated tables using various graph types by inputting parameters for graph generation, including graph type, column number, and row range. This enables on-site visualization and saves time by visualizing data directly on the site, eliminating the need for external tools. This streamlines the workflow and enhances productivity.

Light and Dark Modes: Toggle between light and dark themes for optimal viewing in different environments which enhances user experience while improving usability, especially during late-night or low-light working conditions and ensuring a comfortable and strain-free experience during extended usage.

**Framework and libraries used:**

React.js
react-router-dom
Material UI: For custom UI
Faker: For generating fake dataset to create graphs
Paraparse: To parse csv file into array
react-chartjs-2: For generating desired graph
react-modal: For generating graph modals

**Deployed Link:** https://sql-query-analyser.vercel.app/

**Page Load Time:**

According to *Google Lighthouse*:

Performance: 96/100, Accessibility: 93/100, Best Practices: 100/100

According to *PageSpeed Insights*:

Performance: 75/100, Accessibility: 96/100, Best Practices: 100/100


**Optimisations:**

Improved performance and load time by implementing lazy loading on the tables and graphs components. Minifying and compressing JavaScript and CSS files also reduces their size. This not only speeds up the download but also benefits users with limited bandwidth.

New metrics:

According to *Google Lighthouse*: Performance: 98/100

According to *PageSpeed Insights*: Performance: 81/100

