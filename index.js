const rootElement = document.querySelector("#root");

const heading = React.createElement("h1", null, "Topics covered");

const p1 = React.createElement("p", {className: "p1"}, "The following is a list of all the topics we cover in the MDN learning area.");

const gettingStarted = React.createElement("a", {href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web", className: "gettingStarted"}, "Getting started with the web");

const p2 = React.createElement("p", {className: "p2"}, "Provides a practical introduction to web development for complete beginners.");

const firstContainer = React.createElement("div", {className: "firstContainer"}, gettingStarted, p2);

const HTML = React.createElement("a", {className: "html", href: "https://developer.mozilla.org/en-US/docs/Learn/HTML"}, "HTML — Structuring the web");

const p3 = React.createElement("p", {className: "p3"}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");

const secondContainer = React.createElement("div", {className: "secondContainer"}, HTML, p3);

const css = React.createElement("a", {className: "css", href: "https://developer.mozilla.org/en-US/docs/Learn/CSS"}, "CSS — Styling the web");

const p4 = React.createElement("p", {className: "p4"}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");

const thirdContainer = React.createElement("div", {className: "thirdContainer"}, css, p4);

const js = React.createElement("a", {className: "js", href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"}, "JavaScript — Dynamic client-side scripting");

const p5 = React.createElement("p", {className: "p5"}, "JavaScript is the scripting language used to add dynamic functionality to web pages. This topic teaches all the essentials needed to become comfortable with writing and understanding JavaScript.");

const fourthContainer = React.createElement("div", {className: "fourthContainer"}, js, p5);

const mainContainer = React.createElement("div", {className: "mainContainer"}, p1, firstContainer, secondContainer, thirdContainer, fourthContainer);

const outerContainer = React.createElement("div", {className: "outerContainer"}, heading, mainContainer);

ReactDOM.render(outerContainer, rootElement);