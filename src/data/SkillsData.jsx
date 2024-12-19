import {
  faShoppingCart,
  faExchangeAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SkillsData = [
  {
    type: "Frontend",
    list: [
      { name: "HTML5", icon: <i className="devicon-html5-plain colored"></i> },
      { name: "CSS3", icon: <i className="devicon-css3-plain colored"></i> },
      { name: "Sass", icon: <i className="devicon-sass-original colored"></i> },
      { name: "Bootstrap", icon: <i className="devicon-bootstrap-plain colored"></i> },
      { name: "TailwindCSS", icon: <i className="devicon-tailwindcss-original colored"></i> },
      { name: "MaterialUI", icon: <i className="devicon-materialui-plain colored"></i> },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
      { name: "jQuery", icon: <i className="devicon-jquery-plain colored"></i> },
      { name: "ReactJS", icon: <i className="devicon-react-original colored"></i> },
      { name: "Vite", icon: <i className="devicon-vitejs-plain colored"></i> },
      { name: "NextJS", icon: <i className="devicon-nextjs-original-wordmark colored"></i> },
      { name: "VueJS", icon: <i className="devicon-vuejs-plain colored"></i> },
      { name: "JSON", icon: <i className="devicon-json-plain colored"></i> },
      { name: "Firebase", icon: <i className="devicon-firebase-plain colored"></i>}
    ],
  },
  {
    type: "Backend",
    list: [
      {
        name: "Django",
        icon: <i className="devicon-django-plain colored"></i>,
      },
      {
        name: "NodeJS",
        icon: <i className="devicon-nodejs-plain colored"></i>,
      },
      {
        name: "ExpressJS",
        icon: <i className="devicon-express-original colored"></i>,
      },
      {
        name: "MySQL",
        icon: <i className="devicon-mysql-original colored"></i>,
      },
      {
        name: "PostgreSQL",
        icon: <i className="devicon-postgresql-plain colored"></i>,
      },
      { name: "Swagger", icon: <i className="devicon-swagger-plain colored"></i> },
      { name: "RestAPI", icon: <img src="./assets/icons/icon-rest-api.png" height={30} width={30} className="mb-1" /> },
      { name: "Docker", icon: <i className="devicon-docker-plain colored"></i> },
      { name: "Bokeh", icon: <img src="./assets/icons/icon-bokeh.png" height={30} width={30} className="mb-1" /> }
    ],
  },
  {
    type: "CMS",
    list: [
      {
        name: "Prestashop",
        icon: <FontAwesomeIcon icon={faShoppingCart} />,
      },
      {
        name: "Wordpress",
        icon: <i className="devicon-wordpress-plain colored"></i>,
      },
      {
        name: "Woocomerce",
        icon: <i className="devicon-woocommerce-plain colored"></i>,
      },
    ],
  },
  {
    type: "Programas",
    list: [
      {
        name: "VSCode",
        icon: <i className="devicon-vscode-plain colored"></i>,
      },
      { name: "Postman", icon: <i className="devicon-postman-plain colored"></i> },
      {
        name: "SourceTree",
        icon: <i className="devicon-sourcetree-plain colored"></i>,
      },
      { name: "GitHub", icon: <i className="devicon-github-original colored"></i> },
      { name: "Netlify", icon: <i className="devicon-netlify-plain colored"></i> },
      {
        name: "Photoshop",
        icon: <i className="devicon-photoshop-plain colored"></i>,
      },
      {
        name: "Filezilla",
        icon: <i className="devicon-filezilla-plain colored"></i>,
      },
      { name: "Trello", icon: <i className="devicon-trello-plain colored"></i> },
    ],
  },
];
