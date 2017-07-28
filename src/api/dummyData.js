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
    city: "Fostoria",
    Description:
      "Do deserunt culpa esse consequat proident. Id et ea officia adipisicing. Velit ut ipsum voluptate fugiat non laboris duis excepteur. Ipsum deserunt ut adipisicing non. Deserunt eiusmod voluptate incididunt non fugiat consequat commodo deserunt reprehenderit Lorem ex labore anim. Aliquip proident ad culpa officia laborum cillum consequat aute laborum laboris ad. Ea laborum sint dolor enim.\r\nNon pariatur nulla irure aliqua qui Lorem. Officia ut sit aliquip enim exercitation aliquip sunt excepteur minim amet. Do qui occaecat in aliquip id consequat. Anim ullamco do aliqua enim do sit qui. Dolore tempor reprehenderit ullamco amet cupidatat nisi eiusmod. Consectetur esse deserunt aliqua sit Lorem voluptate. Anim exercitation sunt veniam labore nulla magna deserunt dolor anim aute Lorem do.\r\nVoluptate elit nostrud non est eu duis qui quis. Sit ad magna mollit aute laboris amet nostrud ea ipsum sit eu do. Deserunt nulla do consectetur veniam irure et culpa cillum laborum consequat laboris consectetur. Ex do est ipsum deserunt mollit amet officia dolore ullamco. Est do deserunt do tempor aliquip nulla in occaecat. Dolor laboris sunt enim nulla. Do nostrud ex ad do eu pariatur aliqua reprehenderit ex qui elit magna elit voluptate.\r\n",
    title: "Frontend Developer",
    url: "https://nullaaute.io",
    company: "GEEKOL",
    summary:
      "Occaecat quis sunt aute mollit ut dolore. Exercitation pariatur ut pariatur cupidatat dolor. Enim id amet fugiat officia laboris sint. Adipisicing ex reprehenderit consequat labore aliqua labore mollit ullamco amet deserunt non non dolore eiusmod. Aliquip occaecat adipisicing irure incididunt quis dolore elit elit aute nostrud qui dolore voluptate. Aliquip est ipsum labore tempor voluptate do Lorem adipisicing.\r\n",
    logo: "http://placehold.it/32x32",
    _id: "597007857fa10ae81aababb8",
    email: "paulmorgan@geekol.com"
  },
  {
    city: "Dargan",
    Description:
      "Dolor voluptate in culpa nostrud aliquip sunt esse. Cupidatat velit deserunt ullamco non eiusmod ullamco elit. Do irure ad nulla duis commodo sint. Dolor pariatur dolore nulla ut proident et tempor excepteur Lorem. Amet nostrud veniam sunt aliquip non et velit enim ipsum sit laboris. Est cupidatat minim exercitation voluptate officia. Lorem veniam ipsum exercitation laboris dolore commodo exercitation ex nulla culpa ex culpa exercitation eiusmod.\r\nSunt eu sunt laborum laboris aliqua reprehenderit pariatur ut consequat deserunt sint. Quis proident ex est ex proident esse. Cupidatat sit magna anim amet occaecat tempor.\r\nMollit excepteur ad dolor ea non eu ad incididunt ut minim tempor nulla labore et. Sunt cupidatat esse cupidatat fugiat elit nisi veniam. Cupidatat cupidatat nisi excepteur proident irure officia qui aute proident dolor laborum proident. Officia ut do nisi eiusmod. Eu ex enim cillum magna dolor ullamco ad anim aliquip.\r\n",
    title: "Backend Developer",
    url: "https://exdo.com",
    company: "EURON",
    summary:
      "Et aliquip commodo eu sit esse. Ut ea occaecat qui velit id do proident officia eiusmod adipisicing est. Aliquip nulla cupidatat reprehenderit esse mollit aliquip pariatur sit tempor tempor irure do exercitation. Pariatur mollit aute esse pariatur dolore sit labore enim exercitation pariatur do dolor mollit do. Voluptate adipisicing consequat eu nisi veniam sint ea.\r\n",
    logo: "http://placehold.it/32x32",
    _id: "59700785e5d667009c79f9c1",
    email: "paulmorgan@euron.com"
  },
  {
    city: "Caroleen",
    Description:
      "Sit adipisicing commodo esse aliqua tempor in occaecat eiusmod. Quis voluptate tempor dolor ipsum labore excepteur veniam ut anim sunt quis officia voluptate velit. Sunt sunt veniam mollit adipisicing sint amet adipisicing nisi. Quis pariatur reprehenderit amet in veniam qui cupidatat pariatur officia eiusmod in.\r\nConsectetur minim est reprehenderit veniam consequat in veniam ut fugiat. Velit commodo amet voluptate quis aliquip qui aliqua enim mollit et non ullamco. Fugiat qui consequat dolore sunt sit qui laboris fugiat minim exercitation.\r\nQui aliqua qui culpa officia ipsum pariatur dolore fugiat mollit sit sint aliqua quis. Excepteur elit est commodo occaecat in non do cupidatat sit. Incididunt culpa mollit qui in aliqua minim eu enim.\r\n",
    title: "Backend Developer",
    url: "https://voluptatereprehenderit.com",
    company: "PROFLEX",
    summary:
      "Amet in nulla nostrud dolore magna ea pariatur amet ad irure. Dolor culpa eu velit esse cillum. Ipsum sunt sint in exercitation duis. Eu do id dolor nulla dolore duis officia officia enim reprehenderit elit nostrud officia sunt.\r\n",
    logo: "http://placehold.it/32x32",
    _id: "5970078586b9536cb522a8c7",
    email: "paulmorgan@proflex.com"
  },
  {
    city: "Cazadero",
    Description:
      "Nostrud incididunt minim esse nulla esse et irure Lorem aliqua. Enim mollit et ex cupidatat qui labore ullamco fugiat tempor ad. Labore non minim dolor fugiat velit minim irure non esse ad.\r\nCommodo proident nisi laboris est culpa occaecat excepteur occaecat incididunt irure tempor sint est. Consectetur sit reprehenderit non commodo in officia est culpa amet nulla eiusmod dolor magna. Amet laboris sint consectetur culpa minim. Ut qui sit dolor aute id. Laborum sint nulla aute ex ullamco nostrud aliquip magna anim.\r\nAd incididunt pariatur occaecat reprehenderit quis nulla deserunt voluptate ipsum. Incididunt occaecat ipsum eiusmod irure occaecat eiusmod esse aute est dolor non cillum nostrud. Amet commodo ipsum amet amet laborum sunt culpa excepteur minim ullamco deserunt ea quis velit.\r\n",
    title: "Game Developer",
    url: "https://nostrudquis.io",
    company: "NIXELT",
    summary:
      "Id cillum ullamco anim cupidatat veniam cupidatat incididunt fugiat id sit elit. Labore officia ullamco eiusmod excepteur id. Ex eiusmod officia id labore magna qui tempor adipisicing. Tempor non fugiat ullamco sint labore dolor mollit magna mollit magna. Nulla eu esse quis ipsum consequat exercitation velit esse consectetur anim adipisicing.\r\n",
    logo: "http://placehold.it/32x32",
    _id: "59700785b5eb8c3a2cc9605f",
    email: "paulmorgan@nixelt.com"
  },
  {
    city: "Advance",
    Description:
      "Laboris aliquip occaecat amet quis ullamco sunt labore dolore eu duis minim. Elit ipsum Lorem est duis laboris reprehenderit proident non cillum non fugiat. Aute irure aute ullamco qui dolore.\r\nEst reprehenderit dolore mollit ad irure fugiat nostrud. Qui ex irure minim laborum ex est nisi veniam ex nisi. Occaecat laboris amet duis proident sint commodo eiusmod. Culpa excepteur dolore sint minim ullamco amet adipisicing est.\r\nExcepteur pariatur aliquip anim fugiat officia veniam dolor do. Aliquip nostrud fugiat irure ut laborum laborum culpa pariatur ex tempor magna mollit laboris eiusmod. Reprehenderit Lorem elit velit nulla ea excepteur anim Lorem eiusmod. Adipisicing eiusmod deserunt ipsum elit veniam consequat dolor non mollit aliqua. Laborum elit laboris aute duis et excepteur quis cillum magna deserunt. Dolor sit id ea ex proident Lorem velit ad. Proident id aute nostrud tempor do id in in aute mollit magna.\r\n",
    title: "Game Developer",
    url: "https://officianon.com",
    company: "BEZAL",
    summary:
      "Cupidatat reprehenderit veniam occaecat duis nisi adipisicing commodo nostrud deserunt fugiat incididunt aute irure nulla. Minim est est magna in consectetur eiusmod duis id eu qui. Officia excepteur ex magna incididunt anim cillum amet consequat occaecat nulla commodo. Est occaecat dolor duis consequat pariatur in cillum. Mollit proident exercitation nostrud commodo veniam esse aliqua magna amet.\r\n",
    logo: "http://placehold.it/32x32",
    _id: "5970078563aefb30fd693578",
    email: "paulmorgan@bezal.com"
  },
  {
    city: "Southmont",
    Description:
      "Ullamco do adipisicing aliquip nisi eu ea cupidatat et fugiat. Occaecat ad amet sint fugiat sit dolore irure est. In nulla nisi id incididunt pariatur.\r\nDolor elit culpa ea duis enim ullamco labore consectetur occaecat dolor excepteur occaecat cillum sint. Deserunt occaecat mollit aliquip magna cupidatat minim fugiat sint irure elit sint quis voluptate. Elit minim dolor aute laborum consequat culpa exercitation ad duis aliqua. Anim nisi veniam exercitation eu dolor culpa officia mollit ea pariatur dolore ipsum. Incididunt adipisicing aute magna duis duis adipisicing ipsum excepteur cillum non dolore. Proident sunt cupidatat Lorem tempor officia consequat aliqua.\r\nEst nisi minim adipisicing in exercitation laboris magna ex in ea enim nostrud ut exercitation. Cillum ipsum sunt velit laborum ullamco labore nulla. Ullamco aliquip mollit velit excepteur est commodo nostrud et do adipisicing enim aliquip nisi enim. Lorem aliqua ullamco laborum anim.\r\n",
    title: "Android Developer",
    url: "https://utlaboris.io",
    company: "CEMENTION",
    summary:
      "Proident cillum ullamco velit ad commodo do eiusmod irure voluptate. Amet velit ex nisi irure amet laboris eiusmod ea nisi aliqua in eiusmod consectetur. Proident laborum excepteur labore exercitation officia occaecat id labore. Aute elit non ea incididunt. Anim deserunt pariatur sit duis ex consequat et. Officia sunt nostrud et nisi nostrud sit. In commodo minim ullamco amet ipsum laboris nostrud laborum nisi magna pariatur.\r\n",
    logo: "http://placehold.it/32x32",
    _id: "597007859ce8ad90a2eb4fd5",
    email: "paulmorgan@cemention.com"
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
