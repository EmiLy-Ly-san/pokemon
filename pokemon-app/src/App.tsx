import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

const pokedex = [
  {
    name: "Bulbizarre",
    imgSrc: "../src/assets/Miniature_0001_EV.png",
    types: ["Plante", "Poison"],
    description:
      "Une graine étrange est plantée sur son dos dès la naissance. Elle grandit avec lui.",
  },
  {
    name: "Herbizarre",
    imgSrc: "../src/assets/Miniature_0002_EV.png",
    types: ["Plante", "Poison"],
    description:
      "Il est couvert d'une énorme plante fleurie. Sa couleur est plus foncée que Bulbizarre.",
  },
  {
    name: "Florizarre",
    imgSrc: "../src/assets/Miniature_0003_EV.png",
    types: ["Plante", "Poison"],
    description:
      "Sa fleur dégage un parfum apaisant capable de calmer les émotions.",
  },
  {
    name: "Salamèche",
    imgSrc: "../src/assets/Miniature_0004_EV.png",
    types: ["Feu"],
    description:
      "Préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de lui.",
  },
  {
    name: "Reptincel",
    imgSrc: "../src/assets/Miniature_0005_EV.png",
    types: ["Feu"],
    description:
      "Quand il s'énerve, la flamme de sa queue s'intensifie et prend une couleur bleue.",
  },
  {
    name: "Dracaufeu",
    imgSrc: "../src/assets/Miniature_0006_EV.png",
    types: ["Feu", "Vol"],
    description:
      "Capable de fondre des rochers avec son souffle brûlant. Il provoque des incendies sans le vouloir.",
  },
  {
    name: "Carapuce",
    imgSrc: "../src/assets/Miniature_0007_EV.png",
    types: ["Eau"],
    description:
      "Son dos dur le protège des attaques. Il recule dans sa carapace pour se défendre.",
  },
  {
    name: "Carabaffe",
    imgSrc: "../src/assets/Miniature_0008_EV.png",
    types: ["Eau"],
    description:
      "Il est en partie aquatique. Les traînées de mousse sur sa carapace montrent son âge.",
  },
  {
    name: "Tortank",
    imgSrc: "../src/assets/Miniature_0009_EV.png",
    types: ["Eau"],
    description:
      "Ses puissants canons lui permettent de projeter de l'eau à grande vitesse.",
  },
  {
    name: "Chenipan",
    imgSrc: "../src/assets/Miniature_0010_DEPS.png",
    types: ["Insecte"],
    description:
      "Son court corps est recouvert d'une peau dure. Il grimpe aux arbres pour se nourrir de feuilles.",
  },
  {
    name: "Chrysacier",
    imgSrc: "../src/assets/Miniature_0011_DEPS.png",
    types: ["Insecte"],
    description:
      "Bien qu'il ne bouge pas beaucoup, son corps se renforce pour devenir un papillon.",
  },
  {
    name: "Papilusion",
    imgSrc: "../src/assets/Miniature_0012_DEPS.png",
    types: ["Insecte", "Vol"],
    description:
      "Ses ailes sont recouvertes d'une poudre empoisonnée. Plus vieux, il peut sécréter de la poudre paralysante.",
  },
  {
    name: "Aspicot",
    imgSrc: "../src/assets/Miniature_0013_DEPS.png",
    types: ["Insecte", "Poison"],
    description:
      "Son dard venimeux est extrêmement dangereux. Son corps est recouvert de petites pointes.",
  },
  {
    name: "Coconfort",
    imgSrc: "../src/assets/Miniature_0014_DEPS.png",
    types: ["Insecte", "Poison"],
    description:
      "Il se cache dans les buissons et les forêts, restant immobile jusqu'à son évolution.",
  },
  {
    name: "Dardargnan",
    imgSrc: "../src/assets/Miniature_0015_DEPS.png",
    types: ["Insecte", "Poison"],
    description:
      "Son vol rapide et ses aiguillons venimeux lui permettent de paralyser ses proies en un instant.",
  },
  {
    name: "Roucool",
    imgSrc: "../src/assets/Miniature_0016_DEPS.png",
    types: ["Normal", "Vol"],
    description:
      "Très docile, il aime picorer des graines. S'il est attaqué, il déploie ses ailes et tente de s'enfuir.",
  },
  {
    name: "Roucoups",
    imgSrc: "../src/assets/Miniature_0017_DEPS.png",
    types: ["Normal", "Vol"],
    description:
      "Grâce à ses ailes puissantes, il peut repousser ses adversaires avec de violentes rafales.",
  },
  {
    name: "Roucarnage",
    imgSrc: "../src/assets/Miniature_0018_DEPS.png",
    types: ["Normal", "Vol"],
    description:
      "Sa taille imposante et ses plumes majestueuses le rendent reconnaissable parmi les oiseaux.",
  },
  {
    name: "Ratata",
    imgSrc: "../src/assets/Miniature_0019_DEPS.png",
    types: ["Normal"],
    description:
      "Ce rongeur est très rapide et grignote tout ce qui est à sa portée pour se nourrir.",
  },
  {
    name: "Ratatac",
    imgSrc: "../src/assets/Miniature_0020_DEPS.png",
    types: ["Normal"],
    description:
      "Avec ses grandes incisives, il peut ronger presque tout. Il est aussi très rapide.",
  },
  {
    name: "Piafabec",
    imgSrc: "../src/assets/Miniature_21.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Rapasdepic",
    imgSrc: "../src/assets/Miniature_22.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Abo",
    imgSrc: "../src/assets/Miniature_23.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Arbok",
    imgSrc: "../src/assets/Miniature_24.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Pikachu",
    imgSrc: "../src/assets/Miniature_25.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Raichu",
    imgSrc: "../src/assets/Miniature_26.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Sabelette",
    imgSrc: "../src/assets/Miniature_27.png",
    types: ["Sol"],
    description: "Lorem",
  },
  {
    name: "Sablaireau",
    imgSrc: "../src/assets/Miniature_28.png",
    types: ["Sol"],
    description: "Lorem",
  },
  {
    name: "Nidoran♀",
    imgSrc: "../src/assets/Miniature_29.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Nidorina",
    imgSrc: "../src/assets/Miniature_30.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Nidoqueen",
    imgSrc: "../src/assets/Miniature_31.png",
    types: ["Poison", "Sol"],
    description: "Lorem",
  },
  {
    name: "Nidoran♂",
    imgSrc: "../src/assets/Miniature_32.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Nidorino",
    imgSrc: "../src/assets/Miniature_33.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Nidoking",
    imgSrc: "../src/assets/Miniature_34.png",
    types: ["Poison", "Sol"],
    description: "Lorem",
  },
  {
    name: "Mélofée",
    imgSrc: "../src/assets/Miniature_35.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Mélodelfe",
    imgSrc: "../src/assets/Miniature_36.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Goupix",
    imgSrc: "../src/assets/Miniature_37.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Feunard",
    imgSrc: "../src/assets/Miniature_38.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Rondoudou",
    imgSrc: "../src/assets/Miniature_39.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Grodoudou",
    imgSrc: "../src/assets/Miniature_40.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Nosferapti",
    imgSrc: "../src/assets/Miniature_41.png",
    types: ["Poison", "Vol"],
    description: "Lorem",
  },
  {
    name: "Nosferalto",
    imgSrc: "../src/assets/Miniature_42.png",
    types: ["Poison", "Vol"],
    description: "Lorem",
  },
  {
    name: "Mystherbe",
    imgSrc: "../src/assets/Miniature_43.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Ortide",
    imgSrc: "../src/assets/Miniature_44.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Rafflesia",
    imgSrc: "../src/assets/Miniature_45.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Paras",
    imgSrc: "../src/assets/Miniature_46.png",
    types: ["Insecte", "Plante"],
    description: "Lorem",
  },
  {
    name: "Parasect",
    imgSrc: "../src/assets/Miniature_47.png",
    types: ["Insecte", "Plante"],
    description: "Lorem",
  },
  {
    name: "Mimitoss",
    imgSrc: "../src/assets/Miniature_48.png",
    types: ["Insecte", "Poison"],
    description: "Lorem",
  },
  {
    name: "Aéromite",
    imgSrc: "../src/assets/Miniature_49.png",
    types: ["Insecte", "Poison"],
    description: "Lorem",
  },
  {
    name: "Taupiqueur",
    imgSrc: "../src/assets/Miniature_50.png",
    types: ["Sol"],
    description: "Lorem",
  },
  {
    name: "Triopikeur",
    imgSrc: "../src/assets/Miniature_51.png",
    types: ["Sol"],
    description: "Lorem",
  },
  {
    name: "Miaouss",
    imgSrc: "../src/assets/Miniature_52.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Persian",
    imgSrc: "../src/assets/Miniature_53.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Psykokwak",
    imgSrc: "../src/assets/Miniature_54.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Akwakwak",
    imgSrc: "../src/assets/Miniature_55.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Férosinge",
    imgSrc: "../src/assets/Miniature_56.png",
    types: ["Combat"],
    description: "Lorem",
  },
  {
    name: "Colossinge",
    imgSrc: "../src/assets/Miniature_57.png",
    types: ["Combat"],
    description: "Lorem",
  },
  {
    name: "Caninos",
    imgSrc: "../src/assets/Miniature_58.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Arcanin",
    imgSrc: "../src/assets/Miniature_59.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Ptitard",
    imgSrc: "../src/assets/Miniature_60.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Tetarte",
    imgSrc: "../src/assets/Miniature_61.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Tartard",
    imgSrc: "../src/assets/Miniature_62.png",
    types: ["Eau", "Combat"],
    description: "Lorem",
  },
  {
    name: "Abra",
    imgSrc: "../src/assets/Miniature_63.png",
    types: ["Psy"],
    description: "Lorem",
  },
  {
    name: "Kadabra",
    imgSrc: "../src/assets/Miniature_64.png",
    types: ["Psy"],
    description: "Lorem",
  },
  {
    name: "Alakazam",
    imgSrc: "../src/assets/Miniature_65.png",
    types: ["Psy"],
    description: "Lorem",
  },
  {
    name: "Machoc",
    imgSrc: "../src/assets/Miniature_66.png",
    types: ["Combat"],
    description: "Lorem",
  },
  {
    name: "Machopeur",
    imgSrc: "../src/assets/Miniature_67.png",
    types: ["Combat"],
    description: "Lorem",
  },
  {
    name: "Mackogneur",
    imgSrc: "../src/assets/Miniature_68.png",
    types: ["Combat"],
    description: "Lorem",
  },
  {
    name: "Chetiflor",
    imgSrc: "../src/assets/Miniature_69.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Boustiflor",
    imgSrc: "../src/assets/Miniature_70.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Empiflor",
    imgSrc: "../src/assets/Miniature_71.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Tentacool",
    imgSrc: "../src/assets/Miniature_72.png",
    types: ["Eau", "Poison"],
    description: "Lorem",
  },
  {
    name: "Tentacruel",
    imgSrc: "../src/assets/Miniature_73.png",
    types: ["Eau", "Poison"],
    description: "Lorem",
  },
  {
    name: "Racaillou",
    imgSrc: "../src/assets/Miniature_74.png",
    types: ["Roche", "Sol"],
    description: "Lorem",
  },
  {
    name: "Gravalanch",
    imgSrc: "../src/assets/Miniature_75.png",
    types: ["Roche", "Sol"],
    description: "Lorem",
  },
  {
    name: "Grolem",
    imgSrc: "../src/assets/Miniature_76.png",
    types: ["Roche", "Sol"],
    description: "Lorem",
  },
  {
    name: "Ponyta",
    imgSrc: "../src/assets/Miniature_77.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Galopa",
    imgSrc: "../src/assets/Miniature_78.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Ramoloss",
    imgSrc: "../src/assets/Miniature_79.png",
    types: ["Eau", "Psy"],
    description: "Lorem",
  },
  {
    name: "Flagadoss",
    imgSrc: "../src/assets/Miniature_80.png",
    types: ["Eau", "Psy"],
    description: "Lorem",
  },
  {
    name: "Magnéti",
    imgSrc: "../src/assets/Miniature_81.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Magnéton",
    imgSrc: "../src/assets/Miniature_82.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Canarticho",
    imgSrc: "../src/assets/Miniature_83.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Doduo",
    imgSrc: "../src/assets/Miniature_84.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Dodrio",
    imgSrc: "../src/assets/Miniature_85.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Otaria",
    imgSrc: "../src/assets/Miniature_86.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Lamantine",
    imgSrc: "../src/assets/Miniature_87.png",
    types: ["Eau", "Glace"],
    description: "Lorem",
  },
  {
    name: "Tadmorv",
    imgSrc: "../src/assets/Miniature_88.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Grotadmorv",
    imgSrc: "../src/assets/Miniature_89.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Kokiyas",
    imgSrc: "../src/assets/Miniature_90.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Crustabri",
    imgSrc: "../src/assets/Miniature_91.png",
    types: ["Eau", "Glace"],
    description: "Lorem",
  },
  {
    name: "Fantominus",
    imgSrc: "../src/assets/Miniature_92.png",
    types: ["Spectre", "Poison"],
    description: "Lorem",
  },
  {
    name: "Spectrum",
    imgSrc: "../src/assets/Miniature_93.png",
    types: ["Spectre", "Poison"],
    description: "Lorem",
  },
  {
    name: "Ectoplasma",
    imgSrc: "../src/assets/Miniature_94.png",
    types: ["Spectre", "Poison"],
    description: "Lorem",
  },
  {
    name: "Onix",
    imgSrc: "../src/assets/Miniature_95.png",
    types: ["Roche", "Sol"],
    description: "Lorem",
  },
  {
    name: "Soporifik",
    imgSrc: "../src/assets/Miniature_96.png",
    types: ["Psy"],
    description: "Lorem",
  },
  {
    name: "Hypnomade",
    imgSrc: "../src/assets/Miniature_97.png",
    types: ["Psy"],
    description: "Lorem",
  },
  {
    name: "Krabby",
    imgSrc: "../src/assets/Miniature_98.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Krabboss",
    imgSrc: "../src/assets/Miniature_99.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Voltorbe",
    imgSrc: "../src/assets/Miniature_100.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Electrode",
    imgSrc: "../src/assets/Miniature_101.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Noeunoeuf",
    imgSrc: "../src/assets/Miniature_102.png",
    types: ["Plante", "Psy"],
    description: "Lorem",
  },
  {
    name: "Noadkoko",
    imgSrc: "../src/assets/Miniature_103.png",
    types: ["Plante", "Psy"],
    description: "Lorem",
  },
  {
    name: "Osselait",
    imgSrc: "../src/assets/Miniature_104.png",
    types: ["Sol"],
    description: "Lorem",
  },
  {
    name: "Ossatueur",
    imgSrc: "../src/assets/Miniature_105.png",
    types: ["Sol"],
    description: "Lorem",
  },
  {
    name: "Kicklee",
    imgSrc: "../src/assets/Miniature_106.png",
    types: ["Combat"],
    description: "Lorem",
  },
  {
    name: "Tygnon",
    imgSrc: "../src/assets/Miniature_107.png",
    types: ["Combat"],
    description: "Lorem",
  },
  {
    name: "Excelangue",
    imgSrc: "../src/assets/Miniature_108.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Smogo",
    imgSrc: "../src/assets/Miniature_109.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Smogogo",
    imgSrc: "../src/assets/Miniature_110.png",
    types: ["Poison"],
    description: "Lorem",
  },
  {
    name: "Rhinocorne",
    imgSrc: "../src/assets/Miniature_111.png",
    types: ["Sol", "Roche"],
    description: "Lorem",
  },
  {
    name: "Rhinoféros",
    imgSrc: "../src/assets/Miniature_112.png",
    types: ["Sol", "Roche"],
    description: "Lorem",
  },
  {
    name: "Leveinard",
    imgSrc: "../src/assets/Miniature_113.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Saquedeneu",
    imgSrc: "../src/assets/Miniature_114.png",
    types: ["Plante"],
    description: "Lorem",
  },
  {
    name: "Kangourex",
    imgSrc: "../src/assets/Miniature_115.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Hypotrempe",
    imgSrc: "../src/assets/Miniature_116.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Hypocéan",
    imgSrc: "../src/assets/Miniature_117.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Poissirène",
    imgSrc: "../src/assets/Miniature_118.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Poissoroy",
    imgSrc: "../src/assets/Miniature_119.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Stari",
    imgSrc: "../src/assets/Miniature_120.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Staross",
    imgSrc: "../src/assets/Miniature_121.png",
    types: ["Eau", "Psy"],
    description: "Lorem",
  },
  {
    name: "M. Mime",
    imgSrc: "../src/assets/Miniature_122.png",
    types: ["Psy"],
    description: "Lorem",
  },
  {
    name: "Insécateur",
    imgSrc: "../src/assets/Miniature_123.png",
    types: ["Insecte", "Vol"],
    description: "Lorem",
  },
  {
    name: "Lippoutou",
    imgSrc: "../src/assets/Miniature_124.png",
    types: ["Glace", "Psy"],
    description: "Lorem",
  },
  {
    name: "Élektek",
    imgSrc: "../src/assets/Miniature_125.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Magmar",
    imgSrc: "../src/assets/Miniature_126.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Scarabrute",
    imgSrc: "../src/assets/Miniature_127.png",
    types: ["Insecte"],
    description: "Lorem",
  },
  {
    name: "Tauros",
    imgSrc: "../src/assets/Miniature_128.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Magicarpe",
    imgSrc: "../src/assets/Miniature_129.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Léviator",
    imgSrc: "../src/assets/Miniature_130.png",
    types: ["Eau", "Vol"],
    description: "Lorem",
  },
  {
    name: "Lokhlass",
    imgSrc: "../src/assets/Miniature_131.png",
    types: ["Eau", "Glace"],
    description: "Lorem",
  },
  {
    name: "Métamorph",
    imgSrc: "../src/assets/Miniature_132.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Évoli",
    imgSrc: "../src/assets/Miniature_133.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Aquali",
    imgSrc: "../src/assets/Miniature_134.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Voltali",
    imgSrc: "../src/assets/Miniature_135.png",
    types: ["Électrik"],
    description: "Lorem",
  },
  {
    name: "Pyroli",
    imgSrc: "../src/assets/Miniature_136.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Porygon",
    imgSrc: "../src/assets/Miniature_137.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Amonita",
    imgSrc: "../src/assets/Miniature_138.png",
    types: ["Roche", "Eau"],
    description: "Lorem",
  },
  {
    name: "Amonistar",
    imgSrc: "../src/assets/Miniature_139.png",
    types: ["Roche", "Eau"],
    description: "Lorem",
  },
  {
    name: "Kabuto",
    imgSrc: "../src/assets/Miniature_140.png",
    types: ["Roche", "Eau"],
    description: "Lorem",
  },
  {
    name: "Kabutops",
    imgSrc: "../src/assets/Miniature_141.png",
    types: ["Roche", "Eau"],
    description: "Lorem",
  },
  {
    name: "Ptéra",
    imgSrc: "../src/assets/Miniature_142.png",
    types: ["Roche", "Vol"],
    description: "Lorem",
  },
  {
    name: "Ronflex",
    imgSrc: "../src/assets/Miniature_143.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Artikodin",
    imgSrc: "../src/assets/Miniature_144.png",
    types: ["Glace", "Vol"],
    description: "Lorem",
  },
  {
    name: "Électhor",
    imgSrc: "../src/assets/Miniature_145.png",
    types: ["Électrik", "Vol"],
    description: "Lorem",
  },
  {
    name: "Sulfura",
    imgSrc: "../src/assets/Miniature_146.png",
    types: ["Feu", "Vol"],
    description: "Lorem",
  },
  {
    name: "Minidraco",
    imgSrc: "../src/assets/Miniature_147.png",
    types: ["Dragon"],
    description: "Lorem",
  },
  {
    name: "Draco",
    imgSrc: "../src/assets/Miniature_148.png",
    types: ["Dragon"],
    description: "Lorem",
  },
  {
    name: "Dracolosse",
    imgSrc: "../src/assets/Miniature_149.png",
    types: ["Dragon", "Vol"],
    description: "Lorem",
  },
  {
    name: "Mewtwo",
    imgSrc: "../src/assets/Miniature_150.png",
    types: ["Psy"],
    description: "Lorem",
  },
  {
    name: "Mew",
    imgSrc: "../src/assets/Miniature_151.png",
    types: ["Psy"],
    description: "Lorem",
  },
];

const imagesTypesList = [
  { name: "Normal", imgSrc: "../src/assets/normal.png" },
  { name: "Eau", imgSrc: "../src/assets/eau.png" },
  { name: "Feu", imgSrc: "../src/assets/feu.png" },
  { name: "Plante", imgSrc: "../src/assets/plante.png" },
  { name: "Électrik", imgSrc: "../src/assets/electrik.png" },
  { name: "Roche", imgSrc: "../src/assets/roche.png" },
  { name: "Sol", imgSrc: "../src/assets/sol.png" },
  { name: "Poison", imgSrc: "../src/assets/poison.png" },
  { name: "Psy", imgSrc: "../src/assets/psy.png" },
  { name: "Vol", imgSrc: "../src/assets/vol.png" },
  { name: "Combat", imgSrc: "../src/assets/combat.png" },
  { name: "Glace", imgSrc: "../src/assets/glace.png" },
  { name: "Spectre", imgSrc: "../src/assets/spectre.png" },
  { name: "Insecte", imgSrc: "../src/assets/insecte.png" },
  { name: "Dragon", imgSrc: "../src/assets/dragon.png" },
];

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModalDescription, setCurrentModalDescription] = useState("");
  const [pokemons, setPokemons] = useState(pokedex);

  const setCurrentModal = (isOpen: boolean, description: string) => {
    setModalIsOpen(isOpen);
    setCurrentModalDescription(description);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalIsOpen]); // 🌈 Des que je fais quelque chose avec une des variables du tableau
  //qui est en paramètre de useEffect, il existe ma fonction fléchée en premier paramètre

  const sortPokemons = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newPokemons = pokedex.filter((pokemon) => {
      return pokemon.types.includes(`${event.currentTarget.dataset.type}`);
    });
    console.log(`${event.currentTarget.dataset.type}`);
    setPokemons(newPokemons);
  };

  return (
    <>
      <div className="display-site">
        <Header imagesTypesList={imagesTypesList} sortPokemons={sortPokemons} />
        <Main
          setCurrentModal={setCurrentModal}
          pokemons={pokemons}
          setPokemons={setPokemons}
        />
        {modalIsOpen ? (
          <Modal
            currentModalDescription={currentModalDescription}
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        ) : null}
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
