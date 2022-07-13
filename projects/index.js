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
    id: 2,
    name: "Most Famous Cryptocurrencies",
    src: "../images/projects/cryptoproject.png",
    alt: "img-crypto",
    description:
      "Web that shows the price of the 10 cryptocurrencies with the most volume in real time using React",
    preview: "https://cryptocurrencylist.stackblitz.io/",
    repo: "https://github.com/francescoalterio/react-cryptocurrencylist",
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
    description: "Panel study on web technologies using React and Firebase",
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
    description:
      "Program that allows you to send files of any type between a pc and a mobile with react native and expressjs",
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
    description:
      "Program that allows you to manage all the tasks and versions of your projects with react native, react navigation and redux.",
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
];
