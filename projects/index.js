import Skill from "../components/Skill";

export const projectsDB = [
  {
    id: 1,
    name: "Smite Filter",
    src: "../images/projects/smitefilter.png",
    alt: "img-o",
    description:
      "Filter of gods for the video game Smite using Javscript vanilla",
    preview: "https://francescoalterio.github.io/smitefilter/",
    repo: "https://github.com/francescoalterio/smitefilter",
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
    id: 3,
    name: "Francesco Pomodoro",
    src: "../images/projects/francescopomodoro.png",
    alt: "img-francescopomodoro",
    description:
      "Clock pomodoro to increase the productivity of your study using React",
    preview: "https://francescopomodoro.netlify.app/",
    repo: "https://github.com/francescoalterio/pomodoro-timer",
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
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
    name: "Study Panel",
    src: "../images/projects/studypanel.png",
    alt: "img-studypanel",
    description: `Study panel for Web programming. It has a user system using Firebase and stores each of the technologies that you are learning and those learned.`,
    preview: "https://studypanel.vercel.app/",
    repo: "https://github.com/francescoalterio/react-study-panel",
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactjs.org/"}
        alt={"img-react-logo"}
        technology="React"
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
    id: 5,
    name: "Dualsend",
    src: "../images/projects/dualsend.png",
    alt: "img-dualsend",
    description: `Program that allows you to send files of any type between a PC and a mobile. You only need to start the server on the machine which has the core of the entire ecosystem, the app being the client with which to interact.`,
    preview: "",
    repo: "https://github.com/francescoalterio/dualsend-mobileapp",
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
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
    id: 6,
    name: "Project Manager",
    src: "../images/projects/project-manager.png",
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
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
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
    id: 7,
    name: "PokeBook",
    src: "../images/projects/pokebook.png",
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
    techs: [
      <Skill
        src={"/images/technologies/react-logo.png"}
        href={"https://reactnative.dev/"}
        alt={"img-reactnative-logo"}
        technology="React Native"
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
];
