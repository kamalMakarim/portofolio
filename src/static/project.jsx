import Tool from "./tools";
import Bukom1 from "../assets/bukom1.png";
import Bukom2 from "../assets/bukom2.png";
import JBus1 from "../assets/jbus1.png";
import JBus2 from "../assets/jbus2.png";
import JBus3 from "../assets/jbus3.png";
import JBus4 from "../assets/jbus4.png";
import Bluetooth1 from "../assets/bluetooth1.png";
import Midtrans1 from "../assets/midtrans1.png";
import WebExercise1 from "../assets/exercise1.png";
import Pemira1 from "../assets/pemira1.png";
import Pemira2 from "../assets/pemira2.png";
import Pemira3 from "../assets/pemira3.png";
import Otaly1 from "../assets/otakly1.png";

var projects = [
  {
    name: `PEMIRA FTUI 2024`,
    tools: [`Remix`, `Node`],
    description: `An e-voting website for 2700+ voters in Faculty Of Engineering University of Indonesia`,
    type: ["Frontend", "Backend"],
    photos: [Pemira1, Pemira2, Pemira3],
    individual: false,
    features: [
      "Frontend sanitizer",
      "Image host deployment and integration",
      "Server side function request",
      "Project lead",
      "Pick department page",
    ],
    repo: [
      "https://github.com/EXERCISE-FTUI/eVoting-Pemira-FTUI-FE",
      "https://github.com/EXERCISE-FTUI/eVoting-Pemira-FTUI-BE",
    ],
  },
  {
    name: `Bukom`,
    tools: [
      `Android Studio`,
      `React`,
      `Tailwind`,
      `Node`,
      `MongoDB`,
      `PostgreSQL`,
      `JWT`,
    ],
    type: ["Frontend", "Backend"],
    description: `A platform for a kindergarten school to connect teachers and parents`,
    photos: [Bukom1, Bukom2],
    individual: true,
    features: [
      "Teachers and parents can chat with each other",
      "Teachers can send logs for all or selected students",
      "JWT authentication",
      "Admin can add, delete, and edit teachers, parents, and students",
      "Admin can monitor and delete all chats or logs",
    ],
    repo: [
      "https://github.com/kamalMakarim/FE-Parents_Teachers_Link",
      "https://github.com/kamalMakarim/BE-Parents_Teachers_Link",
      "https://github.com/kamalMakarim/FE-Bhinekas",
      "https://github.com/kamalMakarim/BE-Bhinekas",
    ],
  },
  {
    name: `Bluetooth Positioning`,
    description: `A react native based project that uses bluetooth to track which floor a user is, then show the map of the floor`,
    tools: [`React`, `Mapbox`],
    type: ["Frontend"],
    photos: [Bluetooth1],
    individual: false,
    features: [
      "Bluetooth floor prediction algorithm and integration",
      "Mapbox integration",
      "Mapbox floor map creation",
      "Project initializer and manager",
    ],
    repo: ["https://github.com/EXERCISE-FTUI/Bluetooth-Positioning"],
  },
  {
    name: `JBus`,
    tools: [`Android Studio`, `Spring Boot`],
    type: ["Frontend", "Backend"],
    description: `A Java based bus ticketing system application`,
    photos: [JBus1, JBus2, JBus3, JBus4],
    individual: true,
    features: [
      `User login and registration`,
      `User can see available busses`,
      `User can buy selected ticket bus`,
      `bus company account can add busses and their schedules`,
    ],
    repo: [
      "https://github.com/kamalMakarim/JBus",
      "https://github.com/kamalMakarim/JBus-android",
    ],
  },
  {
    name: `Coffee Payment`,
    tools: [`Node`, `PostgreSQL`, `Midtrans`],
    type: ["Backend"],
    description: `A payment system for an automatic coffee machine, using Midtrans as the payment gateway`,
    photos: [Midtrans1],
    individual: true,
    features: ["Midtrans integration", "Database integration"],
    repo: ["https://github.com/EXERCISE-FTUI/Kopi"],
  },
  {
    name: `Otakly`,
    tools: [`React`, `Tailwind`, `Node`, `PostgreSQL`, `JWT`],
    type: ["Frontend", "Backend"],
    description: `A forum like website for students to ask and answer questions`,
    photos: [Otaly1],
    individual: false,
    features: [
      "Database schema",
      "Question details",
      "User login, register, and edits",
      "Image hosting intergration",
    ],
    repo: ["https://github.com/SistemBasisData2024/Otakly"],
  },
  {
    name: `Web Exercise`,
    tools: [`React`, `Tailwind`],
    type: ["Frontend"],
    description: `A website for introducing EXERCISE FTUI 2023`,
    photos: [WebExercise1],
    features: ["Project initializer and manager", "Extile page creation"],
    repo: ["https://github.com/EXERCISE-FTUI/Website-Exercise-FE"],
  },
];

projects.forEach((project) => {
  project.tools = project.tools.map((tool) => {
    if (typeof tool === "string") {
      return Tool.find((t) => t.name === tool);
    }
    return tool;
  });
});

export default projects;
