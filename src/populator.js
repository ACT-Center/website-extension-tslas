import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6706e315001949143d10');

const databases = new Databases(client);

const data = [
  {
    Paper: "A Hybrid Deep Learning Framework Using Scaling?Basis Chirplet Transform for Motor Imagery EEG Recognition in Brain–Computer Interface Applications, International Journal of Imaging Systems and Technology 34 (4), e23127, 2024"
  },
  {
    Paper: "A hybrid ensemble voting-based residual attention network for motor imagery EEG Classification, Analog Integrated Circuits and Signal Processing 119 (1), 165-184, 2024"
  },
  {
    Paper: "A low-profile flower-shaped MIMO antenna for wireless applications, International Journal of Electronics, 1-25, 2023"
  },
  {
    Paper: "E?CNNet: Time?reassigned Multisynchrosqueezing transform?based deep learning framework for MI?BCI task classification, International Journal of Imaging Systems and Technology 33 (4), 1406-1423, 2023"
  },
  {
    Paper: "Design of a compact quasi-self-complementary UWB-MIMO antenna with dual band-notched characteristics for wireless communication applications, International Journal of Electronics 110 (5), 804-828, 2023"
  },
  {
    Paper: "Multivariate variational mode decomposition & phase space reconstruction based motor imagery EEG classification, Computers and Electrical Engineering 108, 108737, 2023"
  },
  {
    Paper: "How Visual Stimuli Evoked P300 is Transforming the Brain–Computer Interface Landscape: A PRISMA Compliant Systematic Review, IEEE Transactions on Neural Systems and Rehabilitation Engineering 31, 1429-1439, 2023"
  },
  {
    Paper: "Schizo-Net: A novel Schizophrenia Diagnosis Framework Using Late Fusion Multimodal Deep Learning on Electroencephalogram-Based Brain Connectivity Indices, IEEE Transactions on Neural Systems and Rehabilitation Engineering 31, 464-473, 2023"
  },
  {
    Paper: "Design and analysis of planar four-port UWB-MIMO antenna with band-rejection capability, International Journal of Microwave and Wireless Technologies, 1-13, 2023"
  },
  {
    Paper: "Electroencephalogram Data Collection for Student Engagement Analysis with Audio-Visual Content, bioRxiv, 2022.09. 20.508656, 2022"
  },
  {
    Paper: "Design and analysis of compact quad-element MIMO antenna with asymmetrical ground structures for ultra-wideband communication, Wireless Personal Communications 124 (4), 3105-3127, 2022"
  },
  {
    Paper: "A compact dual-polarized co-radiator MIMO antenna for UWB applications, International Journal of Microwave and Wireless Technologies 14 (2), 225-238, 2022"
  },
  {
    Paper: "Deep-precognitive diagnosis: Preventing future pandemics by novel disease detection with biologically-inspired conv-fuzzy network, M XuIeee Access 10, 23167-23185, 2022"
  },
  {
    Paper: "Bi-LSTM-deep CNN for schizophrenia detection using MSST-spectral images of EEG signals, L LongoElsevier, 2022"
  },
  {
    Paper: "A novel EEG channel selection and classification methodology for multi?class motor imagery?based BCI system design, International Journal of Imaging Systems and Technology, 2022"
  },
  {
    Paper: "From Convolutions towards Spikes: The Environmental Metric that the Community currently Misses, NeurIPS 2021 AI for Science Workshop, 2021"
  },
  {
    Paper: "Scalp EEG Classification Using TQWT-Entropy Features for Epileptic Seizure Detection, Brain and Behavior Computing, 221-241, 2021"
  },
  {
    Paper: "Development of an adaptive neuro fuzzy inference system based vehicular traffic noise prediction model, Journal of Ambient Intelligence and Humanized Computing 12, 2685-2701, 2021"
  },
  {
    Paper: "Reflection and data based adaptive teaching strategy for student centric learning, Academia Letters, 2, 2021"
  },
  {
    Paper: "Hybrid time?reassigned multisynchrosqueezing transform?Picard?based automated electroencephalography artifact correction methodology for brain–computer interface applications, International Journal of Imaging Systems and Technology, 2021"
  },
  {
    Paper: "Novel fuzzy approach to Antimicrobial Peptide Activity Prediction: A tale of limited and imbalanced data that models won’t hear, NeurIPS 2021 AI for Science Workshop, 2021"
  },
  {
    Paper: "A novel machine learning?based analytical framework for automatic detection of COVID?19 using chest X?ray images, International Journal of Imaging Systems and Technology, 2021"
  },
  {
    Paper: "Design and experimental verification of compact dual?element quasi?self?complementary ultra?wideband multiple?input multiple?output antenna for wireless applications, Microwave and Optical Technology Letters, 2021"
  },
]

for(let i = 0; i < data.length; i++){
    const promise = await databases.createDocument(
        '6706e36200146facdec1',
        '6706ecb6003a5a280162',
        ID.unique(),
        {
            TeacherID: 20,
            Paper: data[i].Paper.trim(),
        }
    );
}