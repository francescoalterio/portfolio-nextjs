import Skill from "../components/Skill";

export const projectsDB = [
  {
    id: 1,
    name: "Smite Filter",
    src: "/images/projects/smitefilter.png",
    alt: "img-o",
    description:
      "Filter of gods for the video game Smite using Javscript vanilla",
    preview: "https://francescoalterio.github.io/smitefilter/",
    repo: "https://github.com/francescoalterio/smitefilter",
    coreTechs: ["Javascript", "HTML"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/html.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"}
        alt={"img-html5-logo"}
        technology="HTML"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
    ],
  },
  {
    id: 2,
    name: "React Calculator",
    src: "/images/projects/react-calculator.png",
    alt: "img-react-calculator",
    description: "Calculator developed with React.",
    preview: "https://react-calculator-fran.netlify.app",
    repo: "https://github.com/francescoalterio/react-calculator",
    coreTechs: ["Javascript", "React.js"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/tailwind-logo.png"}
        href={"https://tailwindcss.com/"}
        alt={"img-tailwind-logo"}
        technology="Tailwindcss"
        size={80}
      />,
    ],
  },
  {
    id: 3,
    name: "React Cryptocurrency List",
    src: "/images/projects/crypto-list.png",
    alt: "img-crypto-list",
    description: "List of the most famous cryptocurrencies and their prices.",
    preview: "https://stackblitz.com/edit/cryptocurrencylist?file=src%2FApp.js",
    repo: "https://github.com/francescoalterio/react-cryptocurrencylist",
    coreTechs: ["Javascript", "React.js"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 4,
    name: "Money Converter",
    src: "/images/projects/money-converter.png",
    alt: "img-money-converter",
    description: "Converter from one currency to another.",
    preview: "https://stackblitz.com/edit/react-e9kmsj?file=README.md",
    repo: "https://github.com/francescoalterio/money-converter",
    coreTechs: ["Javascript", "React.js"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 5,
    name: "Quizz App",
    src: "/images/projects/quizz-app.png",
    alt: "img-quizz-app",
    description: "App of questions of various categories.",
    preview: "https://stackblitz.com/edit/react-scdye8?file=README.md",
    repo: "https://github.com/francescoalterio/quiz-app",
    coreTechs: ["Javascript", "React.js"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 6,
    name: "Francesco Pomodoro",
    src: "/images/projects/francescopomodoro.png",
    alt: "img-francescopomodoro",
    description:
      "Clock pomodoro to increase the productivity of your study using React",
    preview: "https://francescopomodoro.netlify.app/",
    repo: "https://github.com/francescoalterio/pomodoro-timer",
    coreTechs: ["Javascript", "React.js"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 7,
    name: "API Joke",
    src: "/images/projects/api-joke.png",
    alt: "img-api-joke",
    description: "Consuming joke API with react.",
    preview: "https://stackblitz.com/edit/react-e6wwrx?file=README.md",
    repo: "https://github.com/francescoalterio/react-API-Joke",
    coreTechs: ["Javascript", "React.js"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 8,
    name: "Study Panel",
    src: "/images/projects/studypanel.png",
    alt: "img-studypanel",
    description: `Study panel for Web programming. It has a user system using Firebase and stores each of the technologies that you are learning and those learned.`,
    preview: "https://studypanel.vercel.app/",
    repo: "https://github.com/francescoalterio/react-study-panel",
    coreTechs: ["Javascript", "React.js"],

    isFavorite: true,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/tailwind-logo.png"}
        href={"https://tailwindcss.com/"}
        alt={"img-tailwind-logo"}
        technology="Tailwindcss"
        size={80}
      />,
      <Skill
        src={"/images/technologies/firebase.png"}
        href={
          "https://firebase.google.com/?gclid=CjwKCAjw2rmWBhB4EiwAiJ0mtWoGToqePmnPSACjkRRFf7J2n6JzXoJkwSj88GymbZw6Bd6EgSysExoCT2AQAvD_BwE&gclsrc=aw.ds"
        }
        alt={"img-firebase-logo"}
        technology="Firebase"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 9,
    name: "Dualsend",
    src: "/images/projects/dualsend.png",
    alt: "img-dualsend",
    description: `Program that allows you to send files of any type between a PC and a mobile. You only need to start the server on the machine which has the core of the entire ecosystem, the app being the client with which to interact.`,
    preview: "",
    repo: "https://github.com/francescoalterio/dualsend-mobileapp",
    coreTechs: ["Javascript", "React Native"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/electron.png"}
        href={"https://www.electronjs.org/"}
        alt={"img-express-logo"}
        technology="Electron"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/express.png"}
        href={"https://expressjs.com"}
        alt={"img-express-logo"}
        technology="Express"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 10,
    name: "Project Manager",
    src: "/images/projects/project-manager.png",
    alt: "img-project-manager",
    description: `Manage and manage your projects and tasks in an easy and fast way.

The app is the easiest and fastest way to manage your projects and tasks, from simple tasks to important tasks, speeding up your work and increasing your productivity.

1. Creation of projects.
2. Task creation.
3. Increased productivity.
4. Acceleration of work.
5. Daily organization.
6. Detailed description of tasks and projects.
7. Completion of projects and tasks.`,
    app: "https://play.google.com/store/apps/details?id=com.francescox5.projectmanager",
    repo: "https://github.com/francescoalterio/project-manager",
    coreTechs: ["Javascript", "React Native"],
    isFavorite: true,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/redux.png"}
        href={"https://redux.js.org/"}
        alt={"img-redux-logo"}
        technology="Redux"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/react-navigation.png"}
        href={"https://reactnavigation.org/"}
        alt={"img-reactnavigation-logo"}
        technology="React Navigation"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 11,
    name: "PokeBook",
    src: "/images/projects/pokebook.png",
    alt: "img-pokebook",
    description: `The application has information on each existing Pokemon in all the games of the main saga.

  Pokedex:
  A pokedex has a source of accurate and detailed information on each of the pokemon and their abilities, all in one place.

  Features:
  PokeBook has a specific search section to easily find the pokemon or ability you want to search for!
  Have a pokemon filter using their types (Fire, Water, ...etc).
  The pokedex stores your last searches to avoid forgetting and easy access to previously found pokemon.

  Skill Dex
  Learn all the information about the skills
  Look what pokemon has what abilities
  You don't have to worry about forgetting the names of the skills, PokeBook will save it for you

  Dex of Types
  Filter pokemons by their types to learn more in depth.`,
    app: "https://play.google.com/store/apps/details?id=com.franstudios.pokebook",
    repo: "https://github.com/francescoalterio/pokebook",
    coreTechs: ["Javascript", "React Native"],

    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/redux.png"}
        href={"https://redux.js.org/"}
        alt={"img-redux-logo"}
        technology="Redux"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/react-navigation.png"}
        href={"https://reactnavigation.org/"}
        alt={"img-reactnavigation-logo"}
        technology="React Navigation"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 12,
    name: "IP Finder",
    src: "/images/projects/ipfinder.png",
    alt: "img-o",
    description:
      "IP Finder app allows you to locate the IP location of any IP address.IP Finder allows you to locate and search any IP anywhere in the world for free. The app provides you with a lot of information about the located IP such as location, time zone, etc.",
    app: "https://play.google.com/store/apps/details?id=com.franstudios.ipfinder",
    repo: "https://github.com/francescoalterio/ip-finder",
    coreTechs: ["Javascript", "React Native"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/react-navigation.png"}
        href={"https://reactnavigation.org/"}
        alt={"img-reactnavigation-logo"}
        technology="React Navigation"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 13,
    name: "Fran Studios",
    src: "/images/projects/fran-studios.png",
    alt: "img-fran-studios",
    description:
      "Fran Studios was born from the idea of creating a personal brand on mobile application development. Simple, pleasant apps that solve user problems directly, whether they are tools or entertainment.",
    preview: "https://franstudios.vercel.app/",
    repo: "https://github.com/francescoalterio/fran-studios",
    coreTechs: ["Javascript", "Next.js"],
    isFavorite: true,
    techs: [
      <Skill
        src={"/images/technologies/next.png"}
        href={"https://nextjs.org/"}
        alt={"img-nextjs-logo"}
        technology="Next.js"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 14,
    name: "Cocktails Library",
    src: "/images/projects/cocktails-library.png",
    alt: "img-o",
    description:
      "Cocktail Recipe App is a mobile application that helps you find cocktail recipes and drink recipes.",
    app: "https://play.google.com/store/apps/details?id=com.franstudios.cocktaillibrary",
    repo: "https://github.com/francescoalterio/cocktails-app",
    coreTechs: ["Javascript", "React Native"],
    isFavorite: true,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/redux.png"}
        href={"https://redux.js.org/"}
        alt={"img-redux-logo"}
        technology="Redux"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/react-navigation.png"}
        href={"https://reactnavigation.org/"}
        alt={"img-reactnavigation-logo"}
        technology="React Navigation"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 15,
    name: "Login APP",
    src: "/images/projects/login-api.png",
    alt: "img-loginapi",
    description: `Login APP is my first backend project with Typescript, it is a study project where I learned to use a relational database such as SQLite and an ORM as prism, I also wanted to improve my knowledge in typescript.

The app is based on a simple login/register with a home where you can create and delete posts, the curious thing about the app is that it has a session cookie so you don't have to log in every time you enter the app.`,
    preview: "",
    repo: "https://github.com/francescoalterio/login-api-express-typescript",
    coreTechs: ["Typescript", "Express"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/express.png"}
        href={"https://expressjs.com"}
        alt={"img-express-logo"}
        technology="Express"
        size={80}
      />,
      <Skill
        src={"/images/technologies/typescript.png"}
        href={"https://www.typescriptlang.org/"}
        alt={"img-typescript-logo"}
        technology="Typesript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/sqlite.png"}
        href={"https://www.sqlite.org/index.html"}
        alt={"img-sqlite-logo"}
        technology="SQLite"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/prisma.webp"}
        href={"https://www.prisma.io/"}
        alt={"img-prisma-logo"}
        technology="Prisma"
        size={80}
      />,
    ],
  },
  {
    id: 16,
    name: "Fran Editor",
    src: "/images/projects/franeditor.png",
    alt: "img-franeditor",
    description: `Fran Editor is a Javascript code editor on a web. The code is executed every time a change is made without the need to save and each console.log is reflected in a console on the right side of the editor.

The app is built with Monaco Editor, the same editor that VS Code uses.`,
    preview: "https://franeditor.vercel.app/",
    repo: "https://github.com/francescoalterio/fran-editor",
    coreTechs: ["Javascript"],
    isFavorite: true,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/css.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        alt={"img-css3-logo"}
        technology="CSS"
        size={80}
      />,
    ],
  },
  {
    id: 17,
    name: "Fran Calculator PY",
    src: "/images/projects/fran-calculator.png",
    alt: "img-fran-calculator",
    description: "Calculator developed with Python and Tkinter.",
    preview: "",
    repo: "https://github.com/francescoalterio/fran-calculator-python",
    coreTechs: ["Python", "TKinter"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/python.png"}
        href={"https://www.python.org/"}
        alt={"img-python-logo"}
        technology="Python"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 18,
    name: "Fran Testing Library",
    src: "/images/projects/fran-testing-library.png",
    alt: "img-fran-testing-library",
    description: "Mini test library inspired by jest.",
    preview:
      "https://www.npmjs.com/package/fran-testing-library?activeTab=readme",
    repo: "https://github.com/francescoalterio/fran-testing-library",
    coreTechs: ["Javascript"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/node.png"}
        href={"https://nodejs.org/en/"}
        alt={"img-node-logo"}
        technology="Node.js"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 19,
    name: "Gym Timer",
    src: "/images/projects/gym-timer.png",
    alt: "img-gymtimer",
    description: "Timers for exercise, both simple and supersets.",
    preview: "https://fran-gym-timer.netlify.app/",
    repo: "https://github.com/francescoalterio/gym-timer",
    coreTechs: ["Javascript", "React.js"],
    isFavorite: true,
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
        size={80}
      />,
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/tailwind-logo.png"}
        href={"https://tailwindcss.com/"}
        alt={"img-tailwind-logo"}
        technology="Tailwindcss"
        size={80}
      />,
    ],
  },
  {
    id: 20,
    name: "Login Form Simulation",
    src: "/images/projects/login-form-simulation-php.png",
    alt: "img-login-simulation-php",
    description: "Simulation of login with PHP and MySQL.",
    preview:
      "https://francescoalteriog.000webhostapp.com/login-form-simulation",
    repo: "https://github.com/francescoalterio/login-form-simulation-php",
    coreTechs: ["PHP", "MySQL"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/php.png"}
        href={"https://www.php.net"}
        alt={"img-php-logo"}
        technology="PHP"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/mysql.png"}
        href={"https://www.mysql.com/"}
        alt={"img-mysql-logo"}
        technology="MySQL"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 21,
    name: "PHP Calculator",
    src: "/images/projects/php-calculator.png",
    alt: "img-php-calculator",
    description: "Calculator created only with PHP.",
    preview: "https://francescoalteriog.000webhostapp.com/calculator-php/",
    repo: "https://github.com/francescoalterio/calculator-php",
    coreTechs: ["PHP"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/php.png"}
        href={"https://www.php.net"}
        alt={"img-php-logo"}
        technology="PHP"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 22,
    name: "Task list CRUD PHP",
    src: "/images/projects/crud-php.png",
    alt: "img-crud-php",
    description: "Basic Task List, create, complete, edit and delete tasks.",
    preview: "https://francescoalteriog.000webhostapp.com/crud-php/",
    repo: "https://github.com/francescoalterio/CRUD-PHP",
    coreTechs: ["PHP", "MySQL", "Bootstrap"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/php.png"}
        href={"https://www.php.net"}
        alt={"img-php-logo"}
        technology="PHP"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/mysql.png"}
        href={"https://www.mysql.com/"}
        alt={"img-mysql-logo"}
        technology="MySQL"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/bootstrap.png"}
        href={"https://getbootstrap.com/"}
        alt={"img-bootstrap-logo"}
        technology="Bootstrap"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 23,
    name: "Users API",
    src: "/images/projects/users-api-laravel.png",
    alt: "img-users-api-laravel",
    description:
      "Random Users API built with Laravel. Perfect for testing any frontend.",
    preview: "https://users-api.fly.dev/",
    repo: "https://github.com/francescoalterio/users-api-php",
    coreTechs: ["PHP", "Laravel", "Bootstrap"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/php.png"}
        href={"https://www.php.net"}
        alt={"img-php-logo"}
        technology="PHP"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/laravel.png"}
        href={"https://laravel.com/"}
        alt={"img-laravel-logo"}
        technology="Laravel"
        size={80}
        needPadding
      />,
      <Skill
        src={"/images/technologies/bootstrap.png"}
        href={"https://getbootstrap.com/"}
        alt={"img-bootstrap-logo"}
        technology="Bootstrap"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 24,
    name: "Skywind",
    src: "/images/projects/skywind.png",
    alt: "img-skywind",
    description: `Skywind makes it easy to create web pages with Server Side Rendering and Javascript. Its simplicity and low dependencies allow it to be run on any node server. Skywind allows you to granulate your pages into small components that can be reused anywhere on your website.

    It has a very intuitive, powerful and easy to learn routing system, it also allows you to create APIs using node's HTTP module.`,
    preview: "https://www.npmjs.com/package/skywind",
    repo: "https://github.com/francescoalterio/skywind",
    coreTechs: ["Javascript", "Node.js"],
    isFavorite: true,
    techs: [
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/node.png"}
        href={"https://nodejs.org/en/"}
        alt={"img-node-logo"}
        technology="Node.js"
        size={80}
        needPadding
      />,
    ],
  },
  {
    id: 25,
    name: "Snake Game",
    src: "/images/projects/snakegame.png",
    alt: "img-snakegame",
    description:
      "Classic snake game using object-oriented programming in Typescript.",
    preview: "https://francescoalterio.github.io/snake-game-compiled/",
    repo: "https://github.com/francescoalterio/snake-game",
    coreTechs: ["Typescript", "HTML"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/html.svg"}
        href={"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"}
        alt={"img-html5-logo"}
        technology="HTML"
        size={80}
      />,
    ],
  },
  {
    id: 26,
    name: "Project Manager Vue",
    src: "/images/projects/project-manager-vue.png",
    alt: "img-project-manager-vue",
    description: "CRUD project manager with Vue.js",
    preview: "https://fran-project-manager.vercel.app/",
    repo: "https://github.com/francescoalterio/web-project-manager",
    coreTechs: ["Javascript", "Vue"],
    isFavorite: false,
    techs: [
      <Skill
        src={"/images/technologies/javascript-2752148-2284965.png"}
        href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        alt={"img-javascript-logo"}
        technology="Javascript"
        size={80}
      />,
      <Skill
        src={"/images/technologies/vue-logo.png"}
        href={"https://vuejs.org/"}
        alt={"img-vue-logo"}
        technology="Vue"
        needPadding
        size={80}
      />,
      <Skill
        src={"/images/technologies/tailwind-logo.png"}
        href={"https://tailwindcss.com/"}
        alt={"img-tailwind-logo"}
        technology="Tailwindcss"
        size={80}
      />,
      <Skill
        src={"/images/technologies/firebase.png"}
        href={
          "https://firebase.google.com/?gclid=CjwKCAjw2rmWBhB4EiwAiJ0mtWoGToqePmnPSACjkRRFf7J2n6JzXoJkwSj88GymbZw6Bd6EgSysExoCT2AQAvD_BwE&gclsrc=aw.ds"
        }
        alt={"img-firebase-logo"}
        technology="Firebase"
        size={80}
        needPadding
      />,
    ],
  },
];
