const fakedata = [
    {
        id: 1,
        name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        instructor: "Herbert Hoover",
        description: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
        rating: 4,
        status: "",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2018/09/react-redux-connect-tutorial.jpeg?fit=730%2C395&ssl=1"
    },
    {
        id: 2,
        name: "Modern React with Redux [2020 Update]",
        instructor: "Franklin D. Roosevelt",
        description: "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
        rating: 4.5,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://keyholesoftware.com/wp-content/uploads/React-Redux.png.webp"
    },
    {
        id: 3,
        name: "GraphQL with React: The Complete Developers Guide",
        instructor: "Harry S. Truman",
        description: "Learn and master GraphQL by building real web apps with React and Node",
        rating: 4.4,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://www.nylas.com/wp-content/uploads/GraphQL_Blog@2x.png"
    },
    {
        id: 4,
        name: "ES6 Javascript: The Complete Developer's Guide",
        instructor: "Dwight Eisenhower",
        description: "ES6 Javascript Development from scratch. Get practice with live examples and learn exactly where to apply ES6 features.",
        rating: 4.6,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJI1ktJMd8LsvPwtbsi9JmQCxlswwYIKmykw&usqp=CAU"
    },
    {
        id: 5,
        name: "The Complete React Native + Hooks Course [2020 Edition]",
        instructor: "John F. Kennedy",
        description: "Understand React Native v0.62.2 with Hooks, Context, and React Navigation.",
        rating: 4.3,
        status: "",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://miro.medium.com/max/700/1*PfPnMFxARoasGRG2KqhRZg.png"
    },
    {
        id: 6,
        name: "The Complete Node.js Developer Course (1st Edition)",
        instructor: "Lyndon B. Johnson",
        description: "Learn Node.js by building real-world applications with Node, Express, MongoDB, Jest, and more!",
        rating: 4.7,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png?fit=1240%2C700&ssl=1"
    },
    {
        id: 7,
        name: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        instructor: "Richard Nixon",
        description: "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
        rating: 4.6,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://res.cloudinary.com/practicaldev/image/fetch/s--x3PZEZAK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qm3od2fxsw1dgg67vssw.jpg"
    },
    {
        id: 8,
        name: "MongoDB - The Complete Developer's Guide 2020",
        instructor: "Gerald Ford",
        description: "Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
        rating: 4.4,
        status: "",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSmfeqwKnxomICZfZxkyK9WpoSwrlLE1abdw&usqp=CAU"
    },
    {
        id: 9,
        name: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2020",
        instructor: "Jimmy Carter",
        description: "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
        rating: 4.8,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://i.morioh.com/2019/12/24/53dcf7ce495e.jpg"
    },
    {
        id: 10,
        name: "Express.js Node.js & MongoDB",
        instructor: "Ronald Reagan",
        description: "Fast development never been easy",
        rating: 4.1,
        status: "",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://i.morioh.com/1f14860de0.png"
    },
    {
        id: 11,
        name: "Beginning C++ Programming - From Beginner to Beyond",
        instructor: "George H.W. Bush",
        description: "Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills needed for game, system, and application development.",
        rating: 4.6,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://images.idgesg.net/images/article/2020/01/sale_25561_primary_image_wide-100827989-large.jpg"
    },
    {
        id: 12,
        name: "C++: From Beginner to Expert",
        instructor: "Bill Clinton",
        description: "Designed for people who don't have any knowledge about the programming and want to program in C++",
        rating: 4.4,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://hackr.io/blog/features-uses-applications-of-c-plus-plus-language/thumbnail/large"
    },
    {
        id: 13,
        name: "Implement High Fidelity Designs with Material-UI and ReactJS",
        instructor: "George W. Bush",
        description: "Bridge the gap between Design & Development! Break down detailed designs and bring them to life with Material-UI/React.",
        rating: 4.3,
        status: "",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://i.ytimg.com/vi/6VmVYi9yrAA/maxresdefault.jpg"
    },
    {
        id: 14,
        name: "Adobe Photoshop CC – Essentials Training Course",
        instructor: "Barack Obama",
        description: "This Adobe Photoshop Essentials course will teach you Photoshop Retouching as well as Photoshop for graphic design.",
        rating: 4.6,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://freelancerpeople.com/wp-content/uploads/2019/12/Adobe-Photoshop-CC.jpg"
    },
    {
        id: 15,
        name: "Illustrator CC 2020 MasterClass",
        instructor: "Donald Trump",
        description: "Master Adobe Illustrator CC with this in-depth training for all levels.",
        rating: 4.5,
        status: "Bestseller",
        price: `${Math.round(`${Math.random() * 100}`)}`,
        students: `${Math.round(`${Math.random() * 10000}`)}`,
        image: "https://img-a.udemycdn.com/course/750x422/3207717_3497_2.jpg"
    },
]

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakedata);

export default fakedata;