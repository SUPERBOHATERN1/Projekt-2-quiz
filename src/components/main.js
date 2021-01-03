//Dynamiczne ładuje cały moduł do wskazanego miejsca po wykonaniu akcji
// 1. place - selektor mijesca gdzie ma być załadowany moduł
// 2. listenerSelector - selektor elementu na którym nasłuchujemy
// 3. fileName - nazwa pliku z którego pobieramy moduł

//////PROBLEM
// 1. Nie działa podanie nazwy pliku, zgłąsza błąd MIME oraz Failed to fetch dynamically imported modul przy odpaleniu przez serwer

const moduleLoader = (listenerSelector, folderName, fileName) => {
  const moduleActivator = document.querySelector(listenerSelector);
  moduleActivator.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      const module = await import(`./${folderName}/${fileName}`);
      //wywołanie pobranej funkcji z innego pliku
      module.rankingTemplate();
    } catch (e) {
      console.log(e);
    }
  });
};

moduleLoader('.btn', 'loader', 'loader.js');

//Funkcja przyjmuje dwa argumenty:
// 1. module => callback z templatka html
// 2. selector => selektor html rodzica - miejsce dodania elementu
const renderFn = (module, selector) => {
  const htmlTemplate = `${module}`;
  const place = document.querySelector(selector);
  place.innerHTML = htmlTemplate;
};

const rankingTemplates = () => {
  const place = document.querySelector('#swquiz-app');
  const liInject = `<ul class="ranking-people">
   <li class="bold">Player</li>
   <li>Karolina</li>
 </ul>`;
  return (place.innerHTML = liInject);
};

// renderFn(rankingTemplates(), '#swquiz-app');

// DO TESTOWANIA
// const rankingTemplate = (name, selector) => {
//   const liInject = `<ul class="ranking-people">
//    <li class="bold">Player</li>
//    <li>${name}</li>
//  </ul>`;
//   const place = document.querySelector(selector);
//   place.innerHTML = liInject;
// };

// export const renderFunction = (selector) => {
//   const htmlTemplate = document.createElement('img');
//   htmlTemplate.setAttribute(
//     'src',
//     'src="../../static/assets/img/modes/people/16.jpg"',
//   );
//   const place = document.querySelector(selector);
//   place.prepend(htmlTemplate);
// };

// export const rankingTemplate = (name, selector) => {
//   const liInject = `<ul class="ranking-people">
//    <li class="bold">Player</li>
//    <li>${name}</li>
//  </ul>`;
//  const place = document.querySelector(selector)
//   place.innerHTML = liInject
// };