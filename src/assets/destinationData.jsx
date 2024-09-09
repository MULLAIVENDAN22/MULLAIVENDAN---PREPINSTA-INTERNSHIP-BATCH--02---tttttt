import {
  parisImage, newYorkImage, tokyoImage, londonImage, romeImage, barcelonaImage,
  losAngelesImage, sanFranciscoImage, bangkokImage, dubaiImage, sydneyImage, rioDeJaneiroImage
} from './images.jsx';

// Paris
import eiffelTowerImage from '../assets/Paris/Eiffel Tower.jpg';
import louvreImage from '../assets/Paris/Louvre Museum.jpg';
import notreDameImage from '../assets/Paris/Notre-Dame Cathedral.jpg';
import champsElyseesImage from '../assets/Paris/Champs-Élysées.jpg';
import sacreCoeurImage from '../assets/Paris/Sacré-Cœur Basilica.jpg';

const paris = [
  { name: 'Paris', image: parisImage, description: 'The city of lights.' },
  { name: 'Eiffel Tower', image: eiffelTowerImage, description: 'An iconic landmark in Paris.' },
  { name: 'Louvre Museum', image: louvreImage, description: 'A world-renowned museum in Paris.' },
  { name: 'Notre-Dame Cathedral', image: notreDameImage, description: 'A historic cathedral in Paris.' },
  { name: 'Champs-Élysées', image: champsElyseesImage, description: 'A famous avenue in Paris.' },
  { name: 'Sacré-Cœur Basilica', image: sacreCoeurImage, description: 'A basilica in Paris.' }
];

// New York
import statueOfLibertyImage from '../assets/New York/Statue of Liberty.jpg';
import centralParkImage from '../assets/New York/Central Park.jpg';
import timesSquareImage from '../assets/New York/Times Square.jpg';
import empireStateBuildingImage from '../assets/New York/Empire State Building.jpg';
import brooklynBridgeImage from '../assets/New York/Brooklyn Bridge.jpg';

const newYork = [
  { name: 'New York', image: newYorkImage, description: 'The city that never sleeps.' },
  { name: 'Statue of Liberty', image: statueOfLibertyImage, description: 'A symbol of freedom in New York.' },
  { name: 'Central Park', image: centralParkImage, description: 'A large public park in New York.' },
  { name: 'Times Square', image: timesSquareImage, description: 'A major commercial intersection in New York.' },
  { name: 'Empire State Building', image: empireStateBuildingImage, description: 'A famous skyscraper in New York.' },
  { name: 'Brooklyn Bridge', image: brooklynBridgeImage, description: 'A historic bridge in New York.' }
];

// Tokyo
import tokyoTowerImage from '../assets/Tokyo/Tokyo Tower.jpg';
import sensoJiImage from '../assets/Tokyo/Senso-ji Temple.jpg';
import shibuyaCrossingImage from '../assets/Tokyo/Shibuya Crossing.jpg';
import meijiShrineImage from '../assets/Tokyo/Meiji Shrine.jpg';
import tokyoDisneylandImage from '../assets/Tokyo/Tokyo Disneyland.jpg';

const tokyo = [
  { name: 'Tokyo', image: tokyoImage, description: 'A bustling metropolis.' },
  { name: 'Tokyo Tower', image: tokyoTowerImage, description: 'A communications and observation tower in Tokyo.' },
  { name: 'Senso-ji Temple', image: sensoJiImage, description: 'An ancient Buddhist temple in Tokyo.' },
  { name: 'Shibuya Crossing', image: shibuyaCrossingImage, description: 'A famous intersection in Tokyo.' },
  { name: 'Meiji Shrine', image: meijiShrineImage, description: 'A Shinto shrine in Tokyo.' },
  { name: 'Tokyo Disneyland', image: tokyoDisneylandImage, description: 'A theme park in Tokyo.' }
];

// London
import bigBenImage from '../assets/london/Big Ben.jpg';
import londonEyeImage from '../assets/london/London Eye.jpg';
import towerOfLondonImage from '../assets/london/Tower of London.jpg';
import buckinghamPalaceImage from '../assets/london/Buckingham Palace.jpg';
import britishMuseumImage from '../assets/london/British Museum.jpg';

const london = [
  { name: 'London', image: londonImage, description: 'The capital of England, known for its rich history and landmarks.' },
  { name: 'Big Ben', image: bigBenImage, description: 'A famous clock tower in London.' },
  { name: 'London Eye', image: londonEyeImage, description: 'A giant Ferris wheel in London.' },
  { name: 'Tower of London', image: towerOfLondonImage, description: 'A historic castle in London.' },
  { name: 'Buckingham Palace', image: buckinghamPalaceImage, description: 'The residence of the British monarch in London.' },
  { name: 'British Museum', image: britishMuseumImage, description: 'A museum in London.' }
];

// Rome
import colosseumImage from '../assets/rome/Colosseum.jpg';
import vaticanMuseumsImage from '../assets/rome/Vatican Museums.jpg';
import pantheonImage from '../assets/rome/Pantheon.jpg';
import treviFountainImage from '../assets/rome/Trevi Fountain.jpg';
import romanForumImage from '../assets/rome/Roman Forum.jpg';

const rome = [
  { name: 'Rome', image: romeImage, description: 'The Eternal City, famous for its ancient ruins and Vatican City.' },
  { name: 'Colosseum', image: colosseumImage, description: 'An ancient amphitheater in Rome.' },
  { name: 'Vatican Museums', image: vaticanMuseumsImage, description: 'Museums in Vatican City.' },
  { name: 'Pantheon', image: pantheonImage, description: 'A former Roman temple in Rome.' },
  { name: 'Trevi Fountain', image: treviFountainImage, description: 'A famous fountain in Rome.' },
  { name: 'Roman Forum', image: romanForumImage, description: 'A plaza surrounded by ruins in Rome.' }
];

// Barcelona
import sagradaFamiliaImage from '../assets/barcelona/Sagrada Família.jpg';
import parkGuellImage from '../assets/barcelona/Park Güell.jpg';
import laRamblaImage from '../assets/barcelona/La Rambla.jpeg';
import casaBatlloImage from '../assets/barcelona/Casa Batlló.jpg';
import gothicQuarterImage from '../assets/barcelona/Gothic Quarter.jpeg';

const barcelona = [
  { name: 'Barcelona', image: barcelonaImage, description: 'A city known for its unique architecture and vibrant culture.' },
  { name: 'Sagrada Família', image: sagradaFamiliaImage, description: 'A large unfinished basilica in Barcelona.' },
  { name: 'Park Güell', image: parkGuellImage, description: 'A public park in Barcelona.' },
  { name: 'La Rambla', image: laRamblaImage, description: 'A street in central Barcelona.' },
  { name: 'Casa Batlló', image: casaBatlloImage, description: 'A building designed by Antoni Gaudí in Barcelona.' },
  { name: 'Gothic Quarter', image: gothicQuarterImage, description: 'A historic neighborhood in Barcelona.' }
];

// Los Angeles
import hollywoodSignImage from '../assets/los-angeles/Hollywood Sign.jpg';
import universalStudiosImage from '../assets/los-angeles/Universal Studios.jpg';
import griffithObservatoryImage from '../assets/los-angeles/Griffith Observatory.jpg';
import santaMonicaPierImage from '../assets/los-angeles/Santa Monica Pier.jpg';
import gettyCenterImage from '../assets/los-angeles/Getty Center.jpeg';

const losAngeles = [
  { name: 'Los Angeles', image: losAngelesImage, description: 'The entertainment capital of the world, home to Hollywood.' },
  { name: 'Hollywood Sign', image: hollywoodSignImage, description: 'A landmark and cultural icon in Los Angeles.' },
  { name: 'Universal Studios', image: universalStudiosImage, description: 'A film studio and theme park in Los Angeles.' },
  { name: 'Griffith Observatory', image: griffithObservatoryImage, description: 'An observatory in Los Angeles.' },
  { name: 'Santa Monica Pier', image: santaMonicaPierImage, description: 'A large pier in Santa Monica.' },
  { name: 'Getty Center', image: gettyCenterImage, description: 'A campus of the Getty Museum in Los Angeles.' }
];

//san franncisco
import goldenGateBridgeImage from '../assets/san-francisco/Golden Gate Bridge.jpg';
import alcatrazIslandImage from '../assets/san-francisco/Alcatraz Island.jpg';
import fishermansWharfImage from '../assets/san-francisco/Fishermans Wharf.jpeg';
import chinatownImage from '../assets/san-francisco/Chinatown.jpeg';
import lombardStreetImage from '../assets/san-francisco/Lombard Street.jpeg';

const sanFrancisco = [
  { name: 'San Francisco', image: sanFranciscoImage, description: 'Known for the Golden Gate Bridge and its historic cable cars.' },
  { name: 'Golden Gate Bridge', image: goldenGateBridgeImage, description: 'A suspension bridge in San Francisco.' },
  { name: 'Alcatraz Island', image: alcatrazIslandImage, description: 'An island with a former prison in San Francisco.' },
  { name: 'Fishermans Wharf', image: fishermansWharfImage, description: 'A neighborhood and popular tourist attraction in San Francisco.' },
  { name: 'Chinatown', image: chinatownImage, description: 'A historic Chinatown in San Francisco.' },
  { name: 'Lombard Street', image: lombardStreetImage, description: 'A famous crooked street in San Francisco.' }
];

// Bangkok
import grandPalaceImage from '../assets/bangkok/Grand Palace.jpeg';
import watArunImage from '../assets/bangkok/Wat Arun.jpeg';
import chatuchakMarketImage from '../assets/bangkok/Chatuchak Market.jpeg';

const bangkok = [
  { name: 'Bangkok', image: bangkokImage, description: 'A city of vibrant street life and ornate temples.' },
  { name: 'Grand Palace', image: grandPalaceImage, description: 'A complex of buildings in Bangkok.' },
  { name: 'Wat Arun', image: watArunImage, description: 'A Buddhist temple in Bangkok.' },
  { name: 'Chatuchak Market', image: chatuchakMarketImage, description: 'A large market in Bangkok.' }
];

// Dubai
import burjKhalifaImage from '../assets/dubai/Burj Khalifa.jpg';
import dubaiMallImage from '../assets/dubai/Dubai Mall.jpg';
import palmJumeirahImage from '../assets/dubai/Palm Jumeirah.jpg';
import dubaiMarinaImage from '../assets/dubai/Dubai Marina.jpeg';
import burjAlArabImage from '../assets/dubai/Burj Al Arab.jpg';

const dubai = [
  { name: 'Dubai', image: dubaiImage, description: 'A city known for its modern architecture and luxury shopping.' },
  { name: 'Burj Khalifa', image: burjKhalifaImage, description: 'The tallest building in the world in Dubai.' },
  { name: 'Dubai Mall', image: dubaiMallImage, description: 'A large shopping mall in Dubai.' },
  { name: 'Palm Jumeirah', image: palmJumeirahImage, description: 'An artificial archipelago in Dubai.' },
  { name: 'Dubai Marina', image: dubaiMarinaImage, description: 'A district in Dubai.' },
  { name: 'Burj Al Arab', image: burjAlArabImage, description: 'A luxury hotel in Dubai.' }
];

// Sydney
import sydneyOperaHouseImage from '../assets/sydney/Sydney Opera House.jpeg';
import sydneyHarbourBridgeImage from '../assets/sydney/Sydney Harbour Bridge.jpg';
import bondiBeachImage from '../assets/sydney/Bondi Beach.jpg';

const sydney = [
  { name: 'Sydney', image: sydneyImage, description: 'Famous for the Sydney Opera House and beautiful beaches.' },
  { name: 'Sydney Opera House', image: sydneyOperaHouseImage, description: 'A multi-venue performing arts centre in Sydney.' },
  { name: 'Sydney Harbour Bridge', image: sydneyHarbourBridgeImage, description: 'A steel arch bridge in Sydney.' },
  { name: 'Bondi Beach', image: bondiBeachImage, description: 'A popular beach in Sydney.' }
];

// Rio de Janeiro
import christTheRedeemerImage from '../assets/rio-de-janeiro/Christ the Redeemer.jpg';
import sugarloafMountainImage from '../assets/rio-de-janeiro/Sugarloaf Mountain.jpeg';
import copacabanaBeachImage from '../assets/rio-de-janeiro/Copacabana Beach.jpg';
import maracanaStadiumImage from '../assets/rio-de-janeiro/Maracanã Stadium.jpeg';

const rioDeJaneiro = [
    { name: 'Rio de Janeiro', image: rioDeJaneiroImage, description: 'Known for its Carnival festival and Christ the Redeemer statue.' },
    { name: 'Christ the Redeemer', image: christTheRedeemerImage, description: 'A statue of Jesus Christ in Rio de Janeiro.' },
    { name: 'Sugarloaf Mountain', image: sugarloafMountainImage, description: 'A peak in Rio de Janeiro.' },
    { name: 'Copacabana Beach', image: copacabanaBeachImage, description: 'A famous beach in Rio de Janeiro.' },
    { name: 'Maracanã Stadium', image: maracanaStadiumImage, description: 'A large football stadium in Rio de Janeiro.' }
  ];


  const destinationsData = {
    Paris: paris,
    'New York': newYork,
    Tokyo: tokyo,
    London: london,
    Rome: rome,
    Barcelona: barcelona,
    'Los Angeles': losAngeles,
    'San Francisco': sanFrancisco,
    Bangkok: bangkok,
    Dubai: dubai,
    Sydney: sydney,
    'Rio de Janeiro': rioDeJaneiro,
  };

  export default destinationsData ;