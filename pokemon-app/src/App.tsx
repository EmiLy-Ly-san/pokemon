import "./App.css";

const pokedex = [
  {
    name: "Bulbizarre",
    imgSrc: "../src/assets/Miniature_0001_EV.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Herbizarre",
    imgSrc: "../src/assets/Miniature_0002_EV.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Florizarre",
    imgSrc: "../src/assets/Miniature_0003_EV.png",
    types: ["Plante", "Poison"],
    description: "Lorem",
  },
  {
    name: "Salamèche",
    imgSrc: "../src/assets/Miniature_0004_EV.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Reptincel",
    imgSrc: "../src/assets/Miniature_0005_EV.png",
    types: ["Feu"],
    description: "Lorem",
  },
  {
    name: "Dracaufeu",
    imgSrc: "../src/assets/Miniature_0006_EV.png",
    types: ["Feu", "Vol"],
    description: "Lorem",
  },
  {
    name: "Carapuce",
    imgSrc: "../src/assets/Miniature_0007_EV.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Carabaffe",
    imgSrc: "../src/assets/Miniature_0008_EV.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Tortank",
    imgSrc: "../src/assets/Miniature_0009_EV.png",
    types: ["Eau"],
    description: "Lorem",
  },
  {
    name: "Chenipan",
    imgSrc: "../src/assets/Miniature_0010_DEPS.png",
    types: ["Insecte"],
    description: "Lorem",
  },
  {
    name: "Chrysacier",
    imgSrc: "../src/assets/Miniature_0011_DEPS.png",
    types: ["Insecte"],
    description: "Lorem",
  },
  {
    name: "Papilusion",
    imgSrc: "../src/assets/Miniature_0012_DEPS.png",
    types: ["Insecte", "Vol"],
    description: "Lorem",
  },
  {
    name: "Aspicot",
    imgSrc: "../src/assets/Miniature_0013_DEPS.png",
    types: ["Insecte", "Poison"],
    description: "Lorem",
  },
  {
    name: "Coconfort",
    imgSrc: "../src/assets/Miniature_0014_DEPS.png",
    types: ["Insecte", "Poison"],
    description: "Lorem",
  },
  {
    name: "Dardargnan",
    imgSrc: "../src/assets/Miniature_0015_DEPS.png",
    types: ["Insecte", "Poison"],
    description: "Lorem",
  },
  {
    name: "Roucool",
    imgSrc: "../src/assets/Miniature_0016_DEPS.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Roucoups",
    imgSrc: "../src/assets/Miniature_0017_DEPS.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Roucarnage",
    imgSrc: "../src/assets/Miniature_0018_DEPS.png",
    types: ["Normal", "Vol"],
    description: "Lorem",
  },
  {
    name: "Ratata",
    imgSrc: "../src/assets/Miniature_0019_DEPS.png",
    types: ["Normal"],
    description: "Lorem",
  },
  {
    name: "Ratatac",
    imgSrc: "../src/assets/Miniature_0020_DEPS.png",
    types: ["Normal"],
    description: "Lorem",
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
    types: ["Fée"],
    description: "Lorem",
  },
  {
    name: "Mélodelfe",
    imgSrc: "../src/assets/Miniature_36.png",
    types: ["Fée"],
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
    types: ["Normal", "Fée"],
    description: "Lorem",
  },
  {
    name: "Grodoudou",
    imgSrc: "../src/assets/Miniature_40.png",
    types: ["Normal", "Fée"],
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
    types: ["Électrik", "Acier"],
    description: "Lorem",
  },
  {
    name: "Magnéton",
    imgSrc: "../src/assets/Miniature_82.png",
    types: ["Électrik", "Acier"],
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
    types: ["Psy", "Fée"],
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

// <img class="cani" src="images/Miniature_58.png"></img>
// <img class="arca" src="images/Miniature_59.png"></img>
// <img class="ptit" src="images/Miniature_60.png"></img>
// <img class="teta" src="images/Miniature_61.png"></img>
// <img class="tarta" src="images/Miniature_62.png"></img>
// <img class="abra" src="images/Miniature_63.png"></img>
// <img class="kada" src="images/Miniature_64.png"></img>
// <img class="alak" src="images/Miniature_65.png"></img>
// <img class="macho" src="images/Miniature_66.png"></img>
// <img class="machop" src="images/Miniature_67.png"></img>
// <img class="mako" src="images/Miniature_68.png"></img>
// <img class="cheti" src="images/Miniature_69.png"></img>
// <img class="bousti" src="images/Miniature_70.png"></img>
// <img class="empi" src="images/Miniature_71.png"></img>
// <img class="tenta" src="images/Miniature_72.png"></img>
// <img class="tentac" src="images/Miniature_73.png"></img>
// <img class="raca" src="images/Miniature_74.png"></img>
// <img class="grava" src="images/Miniature_75.png"></img>
// <img class="grolem" src="images/Miniature_76.png"></img>
// <img class="pony" src="images/Miniature_77.png"></img>
// <img class="galo" src="images/Miniature_78.png"></img>
// <img class="ramo" src="images/Miniature_79.png"></img>
// <img class="flaga" src="images/Miniature_80.png"></img>
// <img class="magne" src="images/Miniature_81.png"></img>
// <img class="magnon" src="images/Miniature_82.png"></img>
// <img class="canar" src="images/Miniature_83.png"></img>
// <img class="doduo" src="images/Miniature_84.png"></img>
// <img class="dodri" src="images/Miniature_85.png"></img>
// <img class="ota" src="images/Miniature_86.png"></img>
// <img class="laman" src="images/Miniature_87.png"></img>
// <img class="tadm" src="images/Miniature_88.png"></img>
// <img class="grota" src="images/Miniature_89.png"></img>
// <img class="koki" src="images/Miniature_90.png"></img>
// <img class="crusta" src="images/Miniature_91.png"></img>
// <img class="fanto" src="images/Miniature_92.png"></img>
// <img class="spectr" src="images/Miniature_93.png"></img>
// <img class="ecto" src="images/Miniature_94.png"></img>
// <img class="onix" src="images/Miniature_95.png"></img>
// <img class="sopo" src="images/Miniature_96.png"></img>
// <img class="hypno" src="images/Miniature_97.png"></img>
// <img class="krab" src="images/Miniature_98.png"></img>
// <img class="krabo" src="images/Miniature_99.png"></img>
// <img class="volto" src="images/Miniature_100.png"></img>
// <img class="electro" src="images/Miniature_101.png"></img>
// <img class="noeu" src="images/Miniature_102.png"></img>
// <img class="noad" src="images/Miniature_103.png"></img>
// <img class="osse" src="images/Miniature_104.png"></img>
// <img class="ossa" src="images/Miniature_105.png"></img>
// <img class="kick" src="images/Miniature_106.png"></img>
// <img class="tygn" src="images/Miniature_107.png"></img>
// <img class="excel" src="images/Miniature_108.png"></img>
// <img class="smog" src="images/Miniature_109.png"></img>
// <img class="smogro" src="images/Miniature_110.png"></img>
// <img class="rhino" src="images/Miniature_111.png"></img>
// <img class="rhinof" src="images/Miniature_112.png"></img>
// <img class="levei" src="images/Miniature_113.png"></img>
// <img class="sacq" src="images/Miniature_114.png"></img>
// <img class="kangou" src="images/Miniature_115.png"></img>
// <img class="hypo" src="images/Miniature_116.png"></img>
// <img class="hypoc" src="images/Miniature_117.png"></img>
// <img class="poissi" src="images/Miniature_118.png"></img>
// <img class="poisso" src="images/Miniature_119.png"></img>
// <img class="stari" src="images/Miniature_120.png"></img>
// <img class="staross" src="images/Miniature_121.png"></img>
// <img class="mime" src="images/Miniature_122.png"></img>
// <img class="insec" src="images/Miniature_123.png"></img>
// <img class="lipo" src="images/Miniature_124.png"></img>
// <img class="elek" src="images/Miniature_125.png"></img>
// <img class="magma" src="images/Miniature_126.png"></img>
// <img class="scara" src="images/Miniature_127.png"></img>
// <img class="tauro" src="images/Miniature_128.png"></img>
// <img class="magic" src="images/Miniature_129.png"></img>
// <img class="levia" src="images/Miniature_130.png"></img>
// <img class="lock" src="images/Miniature_131.png"></img>
// <img class="metam" src="images/Miniature_132.png"></img>
// <img class="evo" src="images/Miniature_133.png"></img>
// <img class="aqua" src="images/Miniature_134.png"></img>
// <img class="volta" src="images/Miniature_135.png"></img>
// <img class="pyro" src="images/Miniature_136.png"></img>
// <img class="pory" src="images/Miniature_137.png"></img>
// <img class="amon" src="images/Miniature_138.png"></img>
// <img class="amonis" src="images/Miniature_139.png"></img>
// <img class="kabu" src="images/Miniature_140.png"></img>
// <img class="kabut" src="images/Miniature_141.png"></img>
// <img class="ptera" src="images/Miniature_142.png"></img>
// <img class="ronfl" src="images/Miniature_143.png"></img>
// <img class="artik" src="images/Miniature_144.png"></img>
// <img class="electo" src="images/Miniature_145.png"></img>
// <img class="sulfu" src="images/Miniature_146.png"></img>
// <img class="mini" src="images/Miniature_147.png"></img>
// <img class="draco" src="images/Miniature_148.png"></img>
// <img class="draloss" src="images/Miniature_149.png"></img>
// <img class="mewtwo" src="images/Miniature_150.png"></img>
// <img class="mew" src="images/Miniature_151.png"></img>

function App() {
  return (
    <>
      <p>{pokedex[112].name}</p>
      <img src={pokedex[112].imgSrc} alt="" srcset="" />
    </>
  );
}

export default App;
