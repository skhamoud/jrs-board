import { generate } from "randomstring";
/**
 * Generates an Id for the entry , this is to simulate the id
 * generation made on server 
 */
export function generateId(entry) {
  entry._id = generate({
    length: 24,
    capitalization: "lowercase",
    charset: "hex"
  });
}
export let offersData = [
  {
    "city": "Grenelefe", 
    "description": "Cupidatat tempor nulla anim eiusmod proident. Duis elit minim eiusmod do sit ea non proident cupidatat culpa mollit commodo. Incididunt ad pariatur incididunt sunt ut consequat labore irure cupidatat reprehenderit excepteur reprehenderit. Occaecat sint exercitation officia dolor commodo dolor reprehenderit fugiat Lorem. Adipisicing dolor elit velit Lorem sunt culpa enim. Consequat culpa incididunt laborum elit qui aliqua proident aute. Cillum ullamco sint excepteur in est do Lorem veniam nostrud elit ad.\r\nProident Lorem laborum ea reprehenderit ad Lorem ex excepteur culpa enim nostrud id elit voluptate. Cupidatat voluptate dolor in mollit ipsum consectetur. Eu aliquip exercitation commodo exercitation eu qui consectetur do amet excepteur in aute. Labore exercitation adipisicing consequat commodo nisi aliqua enim adipisicing consequat enim et occaecat fugiat qui. Nulla minim tempor et sunt nisi dolore ullamco minim aliqua ipsum ut.\r\nSunt exercitation commodo esse enim ipsum exercitation sint veniam dolor quis dolor veniam. Exercitation pariatur exercitation minim excepteur enim exercitation Lorem ipsum ad est sint in in nulla. Dolore culpa ullamco labore do. Labore ipsum aliquip consequat aliqua est id esse tempor officia aliquip.\r\n", 
    "title": "Backend Developer", 
    "url": "https://occaecatexercitation.com", 
    "company": "CEMENTION", 
    "summary": "Amet proident in voluptate nulla deserunt eu exercitation nulla. Nulla ad cillum tempor nisi tempor duis minim laborum irure laborum sunt cupidatat Lorem. Qui est velit in veniam fugiat irure anim esse dolor. Minim in enim cupidatat culpa anim do nulla laboris commodo ipsum pariatur ut magna commodo. Officia culpa labore incididunt est mollit reprehenderit irure velit anim.\r\n", 
    "skills": [
      "Node", 
      "React", 
      "Node", 
      "html"
    ], 
    "location": "remote", 
    "logo": "http://placehold.it/32x32", 
    "_id": "597be3e4daef7edd950efdad", 
    "email": "janarios@cemention.com"
  }, 
  {
    "city": "Tibbie", 
    "description": "Laboris non officia adipisicing sint mollit ullamco consequat laboris cillum reprehenderit enim. Labore labore Lorem proident reprehenderit quis nisi fugiat irure eiusmod culpa et. Commodo ut ex quis nisi.\r\nAliquip voluptate anim sit tempor dolor anim proident. Tempor dolor mollit excepteur cillum ullamco voluptate voluptate est qui anim tempor elit et. Eu sint magna est in sit irure elit nostrud. Laborum ut adipisicing aliqua aute tempor cillum.\r\nReprehenderit irure ad excepteur do cupidatat consectetur laborum occaecat aute ipsum. Consectetur qui Lorem enim et consequat pariatur. Non tempor do fugiat adipisicing Lorem exercitation aliqua pariatur veniam. Laboris incididunt aute anim officia laborum enim occaecat nulla laboris.\r\n", 
    "title": "Fullstack Developer", 
    "url": "https://nullalaborum.com", 
    "company": "TRASOLA", 
    "summary": "In sunt ea do tempor magna consectetur est ea. Aliqua deserunt pariatur excepteur irure est dolor. Deserunt nostrud consequat elit minim consectetur velit nulla anim tempor ex mollit.\r\n", 
    "skills": [
      "Angular", 
      "React", 
      "css", 
      "html"
    ], 
    "location": "Waterloo", 
    "logo": "http://placehold.it/32x32", 
    "_id": "597be3e41e444c64deee838d", 
    "email": "janarios@trasola.com"
  }, 
  {
    "city": "Nanafalia", 
    "description": "Ipsum magna commodo est et veniam qui nisi ea ipsum ullamco laborum nostrud voluptate. Irure aliqua ex officia ullamco non enim exercitation sint deserunt est. Commodo adipisicing nisi commodo dolor ut sunt. Ea mollit mollit labore Lorem nostrud exercitation incididunt anim est tempor ipsum. Velit proident consequat laborum quis cillum eiusmod veniam nulla id laborum cupidatat eiusmod eu. Ad fugiat labore minim qui do Lorem qui aute labore enim anim consequat labore est. Laborum consequat minim aliqua cillum veniam magna eiusmod ex ut anim.\r\nEu tempor est laborum ad occaecat labore non tempor do est ea eiusmod adipisicing. Non irure proident enim quis voluptate enim pariatur consectetur irure sint incididunt minim aliqua. Officia ad voluptate pariatur id cillum dolor duis nostrud amet nostrud aute occaecat velit consequat. Nulla veniam aute ut esse mollit pariatur nostrud cupidatat adipisicing. Elit sit mollit adipisicing sint eu aliqua id aliqua laborum officia tempor fugiat cupidatat.\r\nOfficia ex quis nostrud eu in adipisicing minim nostrud sit labore. Occaecat laborum Lorem ea incididunt in enim aliqua incididunt est sunt irure. Nisi eiusmod sunt esse officia nulla ad voluptate amet aliquip. Est culpa quis veniam ad mollit in ullamco et sint voluptate fugiat ex. Laborum minim excepteur anim aliqua. Veniam aute excepteur consequat adipisicing qui aute aliquip excepteur quis sit pariatur sunt. Sunt sunt exercitation dolor elit adipisicing consequat esse.\r\n", 
    "title": "Fullstack Developer", 
    "url": "https://culpaelit.io", 
    "company": "COASH", 
    "summary": "Sunt cupidatat occaecat amet quis. Esse quis id excepteur laboris. Amet veniam dolor excepteur ad Lorem minim sit ullamco voluptate laborum incididunt. Consectetur aliquip exercitation commodo occaecat tempor quis elit. Officia non labore ex excepteur ipsum Lorem commodo id minim est eu cillum esse. Culpa ut dolor deserunt incididunt.\r\n", 
    "skills": [
      "css", 
      "Node", 
      "js", 
      "Node"
    ], 
    "location": "Gratton", 
    "logo": "http://placehold.it/32x32", 
    "_id": "597be3e406b7deed7fda5f82", 
    "email": "janarios@coash.com"
  }, 
  {
    "city": "Bethpage", 
    "description": "Consectetur consequat laborum anim sint dolore aliquip anim. Esse Lorem magna quis tempor ea fugiat officia irure nostrud duis. Sit minim officia ipsum sint sint dolor aute in veniam. Cupidatat eiusmod cillum laboris do laborum et ad. Velit ut minim irure Lorem Lorem ullamco qui aute nisi do ipsum laborum officia culpa.\r\nEx commodo nostrud ex amet cillum nisi incididunt ut adipisicing ullamco pariatur proident excepteur. Veniam proident sunt adipisicing dolor et adipisicing nulla cupidatat. Aute labore exercitation deserunt anim tempor consectetur reprehenderit in ea consectetur ex tempor ipsum reprehenderit. Non minim pariatur do laborum enim dolore ipsum dolor non cupidatat sunt magna ex id. Adipisicing nostrud dolore quis excepteur sit sit.\r\nDo excepteur mollit sit duis dolore amet non incididunt dolor. Mollit ullamco cupidatat ex aute exercitation Lorem non pariatur reprehenderit magna. Anim deserunt ullamco exercitation do reprehenderit occaecat nisi.\r\n", 
    "title": "Android Developer", 
    "url": "https://nonexcepteur.com", 
    "company": "IMANT", 
    "summary": "Ad eiusmod pariatur mollit id quis adipisicing aute sunt amet consequat ea tempor do. Fugiat amet eiusmod id voluptate non voluptate consequat mollit minim Lorem do velit consectetur. Eu minim enim ad qui Lorem cupidatat incididunt aute reprehenderit nulla. Est mollit id adipisicing exercitation magna velit enim laboris. Tempor exercitation labore eu commodo cupidatat tempor anim ipsum qui id ea.\r\n", 
    "skills": [
      "js", 
      "html", 
      "css", 
      "React"
    ], 
    "location": "Layhill", 
    "logo": "http://placehold.it/32x32", 
    "_id": "597be3e4467b3463ded9a0c7", 
    "email": "janarios@imant.com"
  }, 
  {
    "city": "Clarksburg", 
    "description": "Irure veniam nulla anim ut cupidatat reprehenderit tempor deserunt irure occaecat. Amet commodo sunt excepteur do et veniam cillum amet veniam fugiat. Qui dolore enim proident consequat dolore tempor consectetur amet. Sit est fugiat voluptate pariatur non ipsum.\r\nPariatur officia ut ea quis pariatur. Sunt dolore mollit sunt consequat ad enim deserunt laborum amet aute. Amet enim do laboris eiusmod et ullamco mollit esse sit. Sunt ipsum dolor Lorem ea eiusmod ipsum dolor aute amet do.\r\nOfficia deserunt nulla occaecat duis laboris duis consequat laborum adipisicing. In voluptate magna labore Lorem aliquip excepteur mollit. Id qui minim exercitation reprehenderit elit Lorem proident ipsum dolore quis veniam pariatur pariatur.\r\n", 
    "title": "Game Developer", 
    "url": "https://nostrudminim.io", 
    "company": "KAGGLE", 
    "summary": "Ut do commodo reprehenderit eu enim fugiat magna officia. Velit adipisicing adipisicing officia ipsum culpa commodo elit sint labore deserunt ullamco id. Irure cupidatat dolor officia minim ipsum eu dolore amet qui proident. Nisi sit cupidatat id mollit aute pariatur aliquip ipsum pariatur. Dolore ullamco sint fugiat quis ullamco ea magna eiusmod laboris consequat qui sit ullamco officia. Esse tempor sunt aute dolor cupidatat.\r\n", 
    "skills": [
      "Node", 
      "js", 
      "css", 
      "Angular"
    ], 
    "location": "remote", 
    "logo": "http://placehold.it/32x32", 
    "_id": "597be3e4134232e6a61c841b", 
    "email": "janarios@kaggle.com"
  }, 
  {
    "city": "Blairstown", 
    "description": "Fugiat culpa voluptate nostrud ex consequat eiusmod pariatur ullamco. Nulla quis incididunt sunt ea quis excepteur. Aliqua eu occaecat nostrud amet consequat laboris Lorem aute. Exercitation nulla in ipsum officia aliquip ad nisi. Incididunt ullamco reprehenderit reprehenderit nisi labore. Enim do amet mollit deserunt ea deserunt officia amet. Deserunt culpa laborum ullamco consequat culpa et aliquip eu labore duis.\r\nAliquip quis deserunt tempor fugiat ipsum pariatur labore culpa est. Veniam velit qui cillum quis amet ex ea nisi. Magna aliquip sunt officia fugiat elit sint elit est fugiat ullamco voluptate do veniam. Lorem aute excepteur proident et anim elit ad ad elit. Ipsum voluptate reprehenderit quis et nisi aliqua irure exercitation veniam irure ea. Duis in est cupidatat laborum velit anim ex quis incididunt nostrud. Velit aliquip id cillum elit ea labore incididunt amet deserunt.\r\nCillum laboris eiusmod duis duis. Magna et enim reprehenderit quis. Non eu aute voluptate deserunt in velit nisi nisi minim enim laborum sint nisi veniam.\r\n", 
    "title": "Fullstack Developer", 
    "url": "https://fugiatirure.io", 
    "company": "NORALEX", 
    "summary": "Laboris dolor laboris duis voluptate ex anim dolore do. Quis anim eu qui ex occaecat nostrud laboris ea. Nostrud excepteur irure officia Lorem cillum cupidatat nisi commodo fugiat Lorem cillum reprehenderit.\r\n", 
    "skills": [
      "js", 
      "Angular", 
      "Angular", 
      "React"
    ], 
    "location": "remote", 
    "logo": "http://placehold.it/32x32", 
    "_id": "597be3e47aa9f417c93097a4", 
    "email": "janarios@noralex.com"
  }
];

export let devsData = [
  {
    picture: "http://placehold.it/32x32",
    education: [
      {
        university: "Consequat Voluptate University, Yonah",
        degree: "MA in Id Est",
        year: 2016
      },
      {
        university: "Minim Lorem University, Singer",
        degree: "BS in Laboris Sunt",
        year: 2017
      }
    ],
    name: "Evans Dixon",
    city: "Loma",
    skills: ["js", "React", "React", "React"],
    company: "NIXELT",
    title: "Backend Developer",
    experience: [
      {
        position: "Exercitation Ex",
        company: "FIBRODYNE",
        time: "8 months"
      },
      {
        position: "Consectetur Sint",
        company: "ONTAGENE",
        time: "9 months"
      }
    ],
    summary:
      "Ut eiusmod cupidatat aute adipisicing laborum reprehenderit duis esse consequat irure reprehenderit laboris. Mollit ea ullamco excepteur deserunt ut laborum dolore minim amet commodo qui. Excepteur adipisicing Lorem sit exercitation ea. Minim cupidatat cupidatat irure elit non voluptate. Pariatur tempor do id commodo. Sint ad enim duis culpa laboris quis sint culpa sit enim ea laborum tempor. Amet ea eu sit et occaecat commodo anim in minim duis.\r\n",
    _id: "596ffd935dbf167113a1c79b",
    email: "evansdixon@nixelt.com"
  },
  {
    picture: "http://placehold.it/32x32",
    education: [
      {
        university: "Ipsum Cupidatat University, Brookfield",
        degree: "MS in Sit Tempor",
        year: 2016
      },
      {
        university: "Aute Velit University, Gerton",
        degree: "MA in Elit Esse",
        year: 2016
      }
    ],
    name: "Brandi Lott",
    city: "Yettem",
    skills: ["Angular", "Node", "js", "Node"],
    company: "POLARIUM",
    title: "Game Developer",
    experience: [
      {
        position: "Deserunt Eu",
        company: "ESCENTA",
        time: "15 months"
      },
      {
        position: "Culpa Lorem",
        company: "EPLODE",
        time: "10 months"
      },
      {
        position: "Sint Non",
        company: "ECRAZE",
        time: "16 months"
      }
    ],
    summary:
      "Sint voluptate dolor incididunt culpa elit amet culpa mollit eiusmod aliquip sunt eiusmod. Laboris quis quis et consequat. Excepteur dolor dolor minim sit deserunt culpa laboris sint cillum est ullamco.\r\n",
    _id: "596ffd934579f68a47e39121",
    email: "brandilott@polarium.com"
  },
  {
    picture: "http://placehold.it/32x32",
    education: [
      {
        university: "Dolore Amet University, Skyland",
        degree: "BS in Laborum Ipsum",
        year: 2014
      }
    ],
    name: "Landry Buchanan",
    city: "Knowlton",
    skills: ["css", "css", "React", "html"],
    company: "QUILM",
    title: "Game Developer",
    experience: [
      {
        position: "Qui Labore",
        company: "MEGALL",
        time: "13 months"
      },
      {
        position: "Occaecat Eu",
        company: "FURNAFIX",
        time: "17 months"
      }
    ],
    summary:
      "Amet sint labore eu qui cupidatat deserunt sint eu pariatur anim Lorem. Incididunt qui ipsum qui sint deserunt incididunt sit in deserunt eu Lorem est officia. Laboris reprehenderit Lorem ex anim dolore ea exercitation deserunt et.\r\n",
    _id: "596ffd93704f1f6f7addc92f",
    email: "landrybuchanan@quilm.com"
  },
  {
    picture: "http://placehold.it/32x32",
    education: [
      {
        university: "Laborum Nisi University, Delshire",
        degree: "MA in Adipisicing Cupidatat",
        year: 2015
      },
      {
        university: "Proident Sit University, Bayview",
        degree: "BS in Quis Consectetur",
        year: 2015
      },
      {
        university: "Qui Aliquip University, Gibsonia",
        degree: "BS in Consequat Et",
        year: 2015
      }
    ],
    name: "Nolan Townsend",
    city: "Warren",
    skills: ["css", "css", "html", "js"],
    company: "VELITY",
    title: "Backend Developer",
    experience: [
      {
        position: "Ex Excepteur",
        company: "EZENTIA",
        time: "6 months"
      },
      {
        position: "Incididunt Commodo",
        company: "FURNIGEER",
        time: "10 months"
      },
      {
        position: "Tempor Dolore",
        company: "XYQAG",
        time: "12 months"
      }
    ],
    summary:
      "Incididunt occaecat tempor aliquip voluptate culpa culpa aliquip proident. Nisi ullamco aliquip Lorem pariatur ad dolor elit eu exercitation. Nostrud sunt sint ullamco sint anim proident occaecat. Qui culpa duis ullamco irure commodo sunt aliquip culpa dolore laborum magna sit laboris anim.\r\n",
    _id: "596ffd93c003f5846e918e2f",
    email: "nolantownsend@velity.com"
  },
  {
    picture: "http://placehold.it/32x32",
    education: [
      {
        university: "Officia Qui University, Dotsero",
        degree: "MA in Ipsum Exercitation",
        year: 2014
      }
    ],
    name: "Estella Hogan",
    city: "Fingerville",
    skills: ["html", "css", "Node", "React"],
    company: "ORBEAN",
    title: "Android Developer",
    experience: [
      {
        position: "Minim Id",
        company: "SENTIA",
        time: "17 months"
      }
    ],
    summary:
      "Commodo in quis consequat et eu dolore laborum incididunt. Sint deserunt sit est laboris. Culpa ipsum in elit ullamco anim incididunt consequat Lorem Lorem id consectetur sint ad. Nulla consequat ad qui ut laborum incididunt aliqua dolor enim adipisicing magna dolore in ad. Amet minim ullamco ea consequat do sint irure eiusmod tempor. Sunt in amet cillum mollit deserunt culpa labore voluptate laborum incididunt.\r\n",
    _id: "596ffd935cacedd7051f0e7a",
    email: "estellahogan@orbean.com"
  },
  {
    picture: "http://placehold.it/32x32",
    education: [
      {
        university: "Ea Nisi University, Wintersburg",
        degree: "BA in Velit Quis",
        year: 2015
      }
    ],
    name: "Paul Morgan",
    city: "Bedias",
    skills: ["Node", "Node", "Node", "js"],
    company: "LUMBREX",
    title: "Frontend Developer",
    experience: [
      {
        position: "Esse Labore",
        company: "SARASONIC",
        time: "13 months"
      },
      {
        position: "Eu Incididunt",
        company: "INJOY",
        time: "13 months"
      }
    ],
    summary:
      "Sint officia ullamco est in id nisi fugiat minim culpa. Aliquip tempor ea mollit deserunt nostrud esse anim Lorem esse proident. Cillum velit sint amet quis culpa elit officia minim laboris ad officia. Commodo deserunt nulla sint amet laboris non ullamco quis esse eu labore minim nostrud laborum. Laborum amet sunt minim ullamco dolore.\r\n",
    _id: "596ffd93aadbf052d9eae575",
    email: "paulmorgan@lumbrex.com"
  }
];
