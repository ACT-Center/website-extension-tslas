import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6706e315001949143d10');

const databases = new Databases(client);

let data = [
    {
      TeacherID: "2",
      Name: "Enhancing Career Resilience through Psychosocial Support: Exploring the Influence of Mentoring, Networking, and Psychological Resources, (Track 4: Sustaining Resilient Quality Cultures in Higher Education)",
      Location: "European Association for Institutional Research (EAIR) Forum, University College Cork, Ireland"
    },
    {
      TeacherID: "2",
      Name: "An Antecedent-Outcome model for Career Resilience, European Association for Institutional Research (EAIR) Forum",
      Location: " University of Continuing Education, Krems, Austria"
    },
    {
      TeacherID: "2",
      Name: " Facets of Organizational Agility",
      Location: "European Association for Institutional Research (EAIR) Forum, Austria"
    },
    {
      TeacherID: "2",
      Name: "Developing Inclusive Learning Environments at Management Education Institutions",
      Location: " AOM 79th Annual Meeting of the Academy of Management, Boston, Massachusetts, U.S.A."
    },
    {
      TeacherID: "2",
      Name: "A Process-oriented framework for corporate social responsibility implementation",
      Location: "8TH PRME, Asia Forum, Sustainable Futures, S P Jain Institute of Management and Research, Mumbai, India."
    },
    {
      TeacherID: "2",
      Name: "A developmental and constructivist approach for designing a course on sustainability.",
      Location: "8TH PRME, Asia Forum, Sustainable Futures, S P Jain Institute of Management and Research, 12-14 December, Mumbai, India."
    },
    {
      TeacherID: "2",
      Name: "Getting Future Ready: Leadership Role to Address ‘Quality versus Access’ Debate in Management Education",
      Location: "8TH PRME, Asia Forum, Sustainable Futures, S P Jain Institute of Management and Research, 12-14 December, Mumbai, India"
    },
    {
      TeacherID: "2",
      Name: " Achieving Quality in Higher Education Through Transformation: The Perfect Mélange of Inclusiveness and Excellence.",
      Location: " 40th Annual European Association for Institutional Research (EAIR) Forum 2018: Competition, Collaboration & Complementarity in Higher Education, Central European University, Budapest, Hungary."
    },
    {
      TeacherID: "2",
      Name: " Understanding corporate social responsibility practice and implementation in the institutional environment, FORE International sustainable development conference 2018, New Delhi: FORE Business school & International Association for Business and Society.",
      Location: ""
    },
    {
      TeacherID: "2",
      Name: "Understanding CSR as a practice: From obligation to opportunity, In 12th Corporate Responsibility Research Conference",
      Location: "Istanbul, Turkey, Organised by University of Leeds – Istanbul University – Kedge Business School."
    },
    {
      TeacherID: "3",
      Name: "An Approach for Offline Handwritten Character Shape Reconstruction Using Active Contour and Morphological Techniques. Advanced Computing and Intelligent Technologies.",
      Location: "Proceedings of ICACIT 2021. Springer Singapore"
    },
    {
      TeacherID: "3",
      Name: "DeepPose: A 2D Image Based Automated Framework for Human Pose Detection and a Trainer App Using Deep Learning, Proceedings of International Conference on Emergent Converging Technologies and Biomedical Systems.",
      Location: "Singapore: Springer Nature Singapore, 2023."
    },
    {
      TeacherID: "3",
      Name: "An Automated Framework for the Segmentation of Skin Lesions Using Deep Learning. Proceedings of International Health Informatics.",
      Location: "Conference (IHIC-2023), New Delhi, 17th – 18th October, 2023."
    },
    {
      TeacherID: "4",
      Name: "Modeling primacy, recency, and cued recall in serial memory task using on-center off-surround recurrent neural network.",
      Location: "International Conference on Machine Learning, Optimization, and Data Science. Springer Nature Switzerland."
    },
    {
      TeacherID: "4",
      Name: "Relative Numerical Context Affects Temporal Processing. In Proceedings of the Annual Meeting of the Cognitive Science Society",
      Location: ""
    },
    {
      TeacherID: "5",
      Name: "New Foundations of Dispositionalism, Synthese",
      Location: ""
    },
    {
      TeacherID: "8",
      Name: "Role of Psychological Factors and Behavioral \nBiases on investment Decision Making: A Mediation Analysis.",
      Location: "Proceedings of the GAW Finance and Economics Conference"
    },
    {
      TeacherID: "8",
      Name: "Biases on investment Decision Making: A Mediation Analysis. Proceedings of the GAW Finance and Economics Conference",
      Location: ""
    },
    {
      TeacherID: "18",
      Name: "For Whom Insurgent Parties Stand and Act in Elections?\nRebel-Based Parties and the Effective Number of the Electorate",
      Location: "Annual International Congress of the Latin American Studies Association, Bogotá (Colombia)"
    },
    {
      TeacherID: "11",
      Name: "Abstract Submitted and Poster Presented: A Novel Brain-Function Based Design of Curriculum and Pedagogy (Brainaculum) A New Educational Approach of 21st Century",
      Location: ""
    },
    {
      TeacherID: "15",
      Name: "“Money Talks: Writing and Rewriting History from Coins” in the International Conference titled Exploring New Research Avenues: A Conversation among Heterodox Economics.",
      Location: "Sociology and History on the 27th and 28th of March, 2024 in TSLAS, TIET"
    },
    {
      TeacherID: "16",
      Name: "Exploring Deep Encoding Dynamics: The Impact of Gender Congruent, Incongruent, and Neutral Advertisements on Consumer Memory and Purchase Intentions",
      Location: " Marketing Conference III (iMarC III) Marketing Transformations: Reimagine, Realign and Rework"
    }
  ]

for(let i = 0; i < data.length; i++){
    const promise = await databases.createDocument(
        '6706e36200146facdec1',
        '6706ecb6003a5a280162',
        ID.unique(),
        {
            TeacherID: parseInt(data[i].TeacherID),
            Name: data[i].Name.trim(),
            Location: data[i].Location?.trim()
        }
    );
}