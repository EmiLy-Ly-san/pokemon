import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Pokemon } from "./components/Card";

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
    description:
      "Même s'il est petit, il est courageux et prêt à combattre pour défendre son territoire.",
  },
  {
    name: "Rapasdepic",
    imgSrc: "../src/assets/Miniature_22.png",
    types: ["Normal", "Vol"],
    description:
      "Il plane dans les airs et repère ses proies de très loin avant de plonger pour les attraper.",
  },
  {
    name: "Abo",
    imgSrc: "../src/assets/Miniature_23.png",
    types: ["Poison"],
    description:
      "Il s'enroule autour de ses proies pour les étouffer et les neutraliser.",
  },
  {
    name: "Arbok",
    imgSrc: "../src/assets/Miniature_24.png",
    types: ["Poison"],
    description:
      "Son motif effrayant sur le ventre intimide ses ennemis et les empêche d'attaquer.",
  },
  {
    name: "Pikachu",
    imgSrc: "../src/assets/Miniature_25.png",
    types: ["Électrik"],
    description:
      "Il accumule de l'électricité dans ses joues et libère de puissantes décharges pour se défendre.",
  },
  {
    name: "Raichu",
    imgSrc: "../src/assets/Miniature_26.png",
    types: ["Électrik"],
    description:
      "Capable de libérer une décharge de 100 000 volts. Il peut être dangereux si on le touche.",
  },
  {
    name: "Sabelette",
    imgSrc: "../src/assets/Miniature_27.png",
    types: ["Sol"],
    description:
      "Il vit dans les zones arides et se roule en boule pour se protéger des ennemis.",
  },
  {
    name: "Sablaireau",
    imgSrc: "../src/assets/Miniature_28.png",
    types: ["Sol"],
    description:
      "Ses griffes puissantes lui permettent de creuser rapidement et de se défendre.",
  },
  {
    name: "Nidoran♀",
    imgSrc: "../src/assets/Miniature_29.png",
    types: ["Poison"],
    description:
      "Ses petites cornes contiennent du poison. Même si elle est timide, elle peut se défendre.",
  },
  {
    name: "Nidorina",
    imgSrc: "../src/assets/Miniature_30.png",
    types: ["Poison"],
    description:
      "Très maternelle, elle protège ses petits en attaquant avec ses crocs empoisonnés.",
  },
  {
    name: "Nidoqueen",
    imgSrc: "../src/assets/Miniature_31.png",
    types: ["Poison", "Sol"],
    description:
      "Son corps robuste est recouvert d'une armure résistante, la protégeant de nombreux coups.",
  },
  {
    name: "Nidoran♂",
    imgSrc: "../src/assets/Miniature_32.png",
    types: ["Poison"],
    description:
      "Il a des oreilles sensibles et détecte les bruits faibles. Ses piques sont empoisonnées.",
  },
  {
    name: "Nidorino",
    imgSrc: "../src/assets/Miniature_33.png",
    types: ["Poison"],
    description:
      "Sa corne est très dure et empoisonnée. Il charge ses ennemis avec beaucoup de puissance.",
  },
  {
    name: "Nidoking",
    imgSrc: "../src/assets/Miniature_34.png",
    types: ["Poison", "Sol"],
    description:
      "Il se bat avec rage pour défendre son territoire et sa famille, utilisant sa queue comme arme.",
  },
  {
    name: "Mélofée",
    imgSrc: "../src/assets/Miniature_35.png",
    types: ["Normal"],
    description:
      "Il adore danser à la lumière de la lune et est souvent observé dans les clairières lors des nuits de pleine lune.",
  },
  {
    name: "Mélodelfe",
    imgSrc: "../src/assets/Miniature_36.png",
    types: ["Normal"],
    description:
      "Ses grandes oreilles lui permettent de détecter les sons lointains. Il préfère rester discret.",
  },
  {
    name: "Goupix",
    imgSrc: "../src/assets/Miniature_37.png",
    types: ["Feu"],
    description:
      "Il a six queues qui, en grandissant, deviennent plus souples et plus brillantes.",
  },
  {
    name: "Feunard",
    imgSrc: "../src/assets/Miniature_38.png",
    types: ["Feu"],
    description:
      "Doté de neuf queues, il est capable de vivre un millier d'années grâce à ses pouvoirs mystiques.",
  },
  {
    name: "Rondoudou",
    imgSrc: "../src/assets/Miniature_39.png",
    types: ["Normal"],
    description:
      "En gonflant son corps, il émet une berceuse pour endormir ses ennemis.",
  },
  {
    name: "Grodoudou",
    imgSrc: "../src/assets/Miniature_40.png",
    types: ["Normal"],
    description:
      "Il peut gonfler son corps à l'infini, devenant alors très difficile à attraper.",
  },
  {
    name: "Nosferapti",
    imgSrc: "../src/assets/Miniature_41.png",
    types: ["Poison", "Vol"],
    description:
      "Ses yeux sont cachés derrière une membrane, mais ses grandes oreilles détectent le moindre son.",
  },
  {
    name: "Nosferalto",
    imgSrc: "../src/assets/Miniature_42.png",
    types: ["Poison", "Vol"],
    description:
      "Il se nourrit du sang des autres Pokémon, en les mordant discrètement dans leur sommeil.",
  },
  {
    name: "Mystherbe",
    imgSrc: "../src/assets/Miniature_43.png",
    types: ["Plante", "Poison"],
    description:
      "Il dégage une odeur nauséabonde pour se protéger des ennemis. Son parfum change la nuit.",
  },
  {
    name: "Ortide",
    imgSrc: "../src/assets/Miniature_44.png",
    types: ["Plante", "Poison"],
    description:
      "Son odeur devient insupportable lorsqu'il est effrayé. Il est très attaché aux environnements humides.",
  },
  {
    name: "Rafflesia",
    imgSrc: "../src/assets/Miniature_45.png",
    types: ["Plante", "Poison"],
    description:
      "Il disperse des spores empoisonnées lorsqu'il se sent menacé. Sa fleur dégage une odeur épouvantable.",
  },
  {
    name: "Paras",
    imgSrc: "../src/assets/Miniature_46.png",
    types: ["Insecte", "Plante"],
    description:
      "Il vit en symbiose avec des champignons qui se nourrissent de ses nutriments.",
  },
  {
    name: "Parasect",
    imgSrc: "../src/assets/Miniature_47.png",
    types: ["Insecte", "Plante"],
    description:
      "Le champignon sur son dos a pris le contrôle de son corps, modifiant son comportement.",
  },
  {
    name: "Mimitoss",
    imgSrc: "../src/assets/Miniature_48.png",
    types: ["Insecte", "Poison"],
    description:
      "Ses poils sont recouverts de venin, qu'il utilise pour se défendre contre ses ennemis.",
  },
  {
    name: "Aéromite",
    imgSrc: "../src/assets/Miniature_49.png",
    types: ["Insecte", "Poison"],
    description:
      "Ses ailes émettent des poudres toxiques qui provoquent de graves irritations.",
  },
  {
    name: "Taupiqueur",
    imgSrc: "../src/assets/Miniature_50.png",
    types: ["Sol"],
    description:
      "Il vit sous terre et ne sort jamais à la lumière du jour, ce qui rend sa peau fragile.",
  },
  {
    name: "Triopikeur",
    imgSrc: "../src/assets/Miniature_51.png",
    types: ["Sol"],
    description:
      "Ses trois têtes travaillent ensemble pour creuser et se déplacer à une grande vitesse.",
  },
  {
    name: "Miaouss",
    imgSrc: "../src/assets/Miniature_52.png",
    types: ["Normal"],
    description:
      "Très habile, il adore jouer avec des objets brillants et les ramener à son repaire.",
  },
  {
    name: "Persian",
    imgSrc: "../src/assets/Miniature_53.png",
    types: ["Normal"],
    description:
      "Son allure élégante et son agilité font de lui un Pokémon de compagnie très prisé.",
  },
  {
    name: "Psykokwak",
    imgSrc: "../src/assets/Miniature_54.png",
    types: ["Eau"],
    description:
      "Il a souvent des maux de tête qui semblent activer ses pouvoirs psychiques de manière aléatoire.",
  },
  {
    name: "Akwakwak",
    imgSrc: "../src/assets/Miniature_55.png",
    types: ["Eau"],
    description:
      "Nageur rapide et puissant, il est capable de traverser de grandes distances sous l'eau.",
  },
  {
    name: "Férosinge",
    imgSrc: "../src/assets/Miniature_56.png",
    types: ["Combat"],
    description:
      "Il est facilement irritable et perd le contrôle de ses émotions en combat.",
  },
  {
    name: "Colossinge",
    imgSrc: "../src/assets/Miniature_57.png",
    types: ["Combat"],
    description:
      "Il entre dans des accès de rage incontrôlables et ne s'arrête que lorsque son adversaire est épuisé.",
  },
  {
    name: "Caninos",
    imgSrc: "../src/assets/Miniature_58.png",
    types: ["Feu"],
    description:
      "Un Pokémon fidèle et courageux qui n'hésite pas à se sacrifier pour protéger son dresseur.",
  },
  {
    name: "Arcanin",
    imgSrc: "../src/assets/Miniature_59.png",
    types: ["Feu"],
    description:
      "Ses prouesses et sa noblesse lui ont valu d'être légendaire dans certaines régions.",
  },
  {
    name: "Ptitard",
    imgSrc: "../src/assets/Miniature_60.png",
    types: ["Eau"],
    description:
      "Sa peau lisse et humide lui permet de se déplacer avec facilité dans l'eau.",
  },
  {
    name: "Tetarte",
    imgSrc: "../src/assets/Miniature_61.png",
    types: ["Eau"],
    description:
      "Il s'adapte aussi bien à la vie dans l'eau qu'à celle sur terre, bien qu'il préfère nager.",
  },
  {
    name: "Tartard",
    imgSrc: "../src/assets/Miniature_62.png",
    types: ["Eau", "Combat"],
    description:
      "Il se bat avec une puissance incroyable, sa peau lisse lui permettant de glisser hors de portée.",
  },
  {
    name: "Abra",
    imgSrc: "../src/assets/Miniature_63.png",
    types: ["Psy"],
    description:
      " Il passe 18 heures par jour à dormir. Quand il sent le danger, il utilise Téléport pour s’échapper.",
  },
  {
    name: "Kadabra",
    imgSrc: "../src/assets/Miniature_64.png",
    types: ["Psy"],
    description:
      " Il émet une énergie spéciale qui cause des migraines aux autres. Il est doué en télékinésie.",
  },
  {
    name: "Alakazam",
    imgSrc: "../src/assets/Miniature_65.png",
    types: ["Psy"],
    description:
      "Son QI est de 5000. Son cerveau en constante activité peut se souvenir de tout.",
  },
  {
    name: "Machoc",
    imgSrc: "../src/assets/Miniature_66.png",
    types: ["Combat"],
    description:
      "Il aime soulever des poids pour se muscler, même si ses muscles sont déjà très développés.",
  },
  {
    name: "Machopeur",
    imgSrc: "../src/assets/Miniature_67.png",
    types: ["Combat"],
    description:
      "Ses muscles sont durs comme de l’acier et il peut soulever jusqu’à deux tonnes avec aisance.",
  },
  {
    name: "Mackogneur",
    imgSrc: "../src/assets/Miniature_68.png",
    types: ["Combat"],
    description:
      "Ses quatre bras peuvent exécuter mille coups de poing à la seconde. Il est très difficile à arrêter.",
  },
  {
    name: "Chetiflor",
    imgSrc: "../src/assets/Miniature_69.png",
    types: ["Plante", "Poison"],
    description:
      "Il utilise ses lianes pour capturer des proies et les dissoudre avec des sucs digestifs puissants.",
  },
  {
    name: "Boustiflor",
    imgSrc: "../src/assets/Miniature_70.png",
    types: ["Plante", "Poison"],
    description:
      "Il adore la chaleur et peut produire une poudre de sommeil pour endormir ses ennemis.",
  },
  {
    name: "Empiflor",
    imgSrc: "../src/assets/Miniature_71.png",
    types: ["Plante", "Poison"],
    description:
      "Il peut avaler des proies entières et les dissoudre en quelques secondes avec des acides puissants.",
  },
  {
    name: "Tentacool",
    imgSrc: "../src/assets/Miniature_72.png",
    types: ["Eau", "Poison"],
    description:
      "Il flotte près de la surface de l’eau et utilise ses tentacules pour se défendre en cas de danger.",
  },
  {
    name: "Tentacruel",
    imgSrc: "../src/assets/Miniature_73.png",
    types: ["Eau", "Poison"],
    description:
      "Ses tentacules empoisonnés peuvent paralyser sa proie. Il vit principalement dans les profondeurs.",
  },
  {
    name: "Racaillou",
    imgSrc: "../src/assets/Miniature_74.png",
    types: ["Roche", "Sol"],
    description:
      "Il se confond souvent avec les pierres dans les montagnes et les plaines.",
  },
  {
    name: "Gravalanch",
    imgSrc: "../src/assets/Miniature_75.png",
    types: ["Roche", "Sol"],
    description:
      " Il dévale les montagnes en roulant et peut traverser des obstacles très durs sans ralentir.",
  },
  {
    name: "Grolem",
    imgSrc: "../src/assets/Miniature_76.png",
    types: ["Roche", "Sol"],
    description:
      "Il est si lourd qu’il peut provoquer des tremblements de terre lorsqu’il marche.",
  },
  {
    name: "Ponyta",
    imgSrc: "../src/assets/Miniature_77.png",
    types: ["Feu"],
    description:
      "Elle peut atteindre une vitesse incroyable, sa crinière s’enflamme lorsqu’elle court à toute allure.",
  },
  {
    name: "Galopa",
    imgSrc: "../src/assets/Miniature_78.png",
    types: ["Feu"],
    description:
      "Elle atteint des vitesses phénoménales, ses sabots ne touchant presque pas le sol.",
  },
  {
    name: "Ramoloss",
    imgSrc: "../src/assets/Miniature_79.png",
    types: ["Eau", "Psy"],
    description:
      "Il est lent et paresseux. Il pêche en plongeant sa queue dans l’eau et attend que les poissons mordent.",
  },
  {
    name: "Flagadoss",
    imgSrc: "../src/assets/Miniature_80.png",
    types: ["Eau", "Psy"],
    description:
      "S’il oublie quelque chose, il peut passer des jours entiers sans s’en rendre compte.",
  },
  {
    name: "Magnéti",
    imgSrc: "../src/assets/Miniature_81.png",
    types: ["Électrik"],
    description:
      "Il se colle aux transformateurs pour absorber de l’énergie et recharger son énergie.",
  },
  {
    name: "Magnéton",
    imgSrc: "../src/assets/Miniature_82.png",
    types: ["Électrik"],
    description:
      "Il provoque des pannes en s'approchant trop près des équipements électriques.",
  },
  {
    name: "Canarticho",
    imgSrc: "../src/assets/Miniature_83.png",
    types: ["Normal", "Vol"],
    description:
      "Il transporte toujours un poireau pour se défendre. Il est prêt à tout pour protéger son trésor.",
  },
  {
    name: "Doduo",
    imgSrc: "../src/assets/Miniature_84.png",
    types: ["Normal", "Vol"],
    description:
      "Ses deux têtes agissent en parfaite harmonie, bien qu’elles se disputent parfois pour la nourriture.",
  },
  {
    name: "Dodrio",
    imgSrc: "../src/assets/Miniature_85.png",
    types: ["Normal", "Vol"],
    description:
      "Ses trois têtes sont en constante surveillance, ne laissant aucun espace sans surveillance.",
  },
  {
    name: "Otaria",
    imgSrc: "../src/assets/Miniature_86.png",
    types: ["Eau"],
    description:
      "Elle adore l’eau froide. Sa fourrure la protège des températures glaciales.",
  },
  {
    name: "Lamantine",
    imgSrc: "../src/assets/Miniature_87.png",
    types: ["Eau", "Glace"],
    description:
      "Elle aime nager dans les eaux polaires et peut atteindre des profondeurs incroyables.",
  },
  {
    name: "Tadmorv",
    imgSrc: "../src/assets/Miniature_88.png",
    types: ["Poison"],
    description:
      "Il est composé de boue toxique et pollue tout ce qu’il touche.",
  },
  {
    name: "Grotadmorv",
    imgSrc: "../src/assets/Miniature_89.png",
    types: ["Poison"],
    description:
      "Il devient plus puissant et dangereux en absorbant les déchets qu’il trouve.",
  },
  {
    name: "Kokiyas",
    imgSrc: "../src/assets/Miniature_90.png",
    types: ["Eau"],
    description:
      "Il vit dans une coquille si dure qu’il est presque impossible de l’ouvrir.",
  },
  {
    name: "Crustabri",
    imgSrc: "../src/assets/Miniature_91.png",
    types: ["Eau", "Glace"],
    description:
      " Il se protège avec sa carapace extrêmement solide. Son dard peut transpercer n’importe quoi.",
  },
  {
    name: "Fantominus",
    imgSrc: "../src/assets/Miniature_92.png",
    types: ["Spectre", "Poison"],
    description:
      "Il est composé de gaz et se faufile partout. Il adore effrayer les gens.",
  },
  {
    name: "Spectrum",
    imgSrc: "../src/assets/Miniature_93.png",
    types: ["Spectre", "Poison"],
    description:
      "Il se cache dans l’ombre et paralyse ses proies en les touchant.",
  },
  {
    name: "Ectoplasma",
    imgSrc: "../src/assets/Miniature_94.png",
    types: ["Spectre", "Poison"],
    description:
      "Il peut se cacher dans l’ombre et imiter n’importe quelle forme pour effrayer ses cibles;",
  },
  {
    name: "Onix",
    imgSrc: "../src/assets/Miniature_95.png",
    types: ["Roche", "Sol"],
    description:
      "Son corps de pierre est si dur qu’il peut creuser sous terre à une vitesse phénoménale.",
  },
  {
    name: "Soporifik",
    imgSrc: "../src/assets/Miniature_96.png",
    types: ["Psy"],
    description:
      "Il endort ses proies avec ses pouvoirs hypnotiques pour les manger en toute tranquillité.",
  },
  {
    name: "Hypnomade",
    imgSrc: "../src/assets/Miniature_97.png",
    types: ["Psy"],
    description:
      "Il se promène avec un pendule et endort ceux qui le regardent trop longtemps.",
  },
  {
    name: "Krabby",
    imgSrc: "../src/assets/Miniature_98.png",
    types: ["Eau"],
    description:
      "Ses pinces sont très puissantes et lui permettent de se défendre contre ses ennemis.",
  },
  {
    name: "Krabboss",
    imgSrc: "../src/assets/Miniature_99.png",
    types: ["Eau"],
    description:
      "Ses pinces sont si lourdes qu’il a du mal à les utiliser, mais elles sont très destructrices.",
  },
  {
    name: "Voltorbe",
    imgSrc: "../src/assets/Miniature_100.png",
    types: ["Électrik"],
    description:
      "Il ressemble à une Poké Ball, ce qui cause souvent des confusions chez les dresseurs.",
  },
  {
    name: "Electrode",
    imgSrc: "../src/assets/Miniature_101.png",
    types: ["Électrik"],
    description:
      "Il accumule de l’énergie électrique et explose souvent sans prévenir.",
  },
  {
    name: "Noeunoeuf",
    imgSrc: "../src/assets/Miniature_102.png",
    types: ["Plante", "Psy"],
    description:
      "Il est constitué de plusieurs graines, et chacune d’elles est dotée d’un cerveau indépendant",
  },
  {
    name: "Noadkoko",
    imgSrc: "../src/assets/Miniature_103.png",
    types: ["Plante", "Psy"],
    description:
      "Ses trois têtes se disputent parfois, mais elles travaillent en harmonie pour survivre.",
  },
  {
    name: "Osselait",
    imgSrc: "../src/assets/Miniature_104.png",
    types: ["Sol"],
    description: "Il porte toujours un os en souvenir de sa mère décédée.",
  },
  {
    name: "Ossatueur",
    imgSrc: "../src/assets/Miniature_105.png",
    types: ["Sol"],
    description:
      "Il utilise son os comme arme et protège farouchement son territoire.",
  },
  {
    name: "Kicklee",
    imgSrc: "../src/assets/Miniature_106.png",
    types: ["Combat"],
    description:
      "Ses jambes puissantes lui permettent d’exécuter des coups dévastateurs.",
  },
  {
    name: "Tygnon",
    imgSrc: "../src/assets/Miniature_107.png",
    types: ["Combat"],
    description:
      "Il est spécialiste des poings et enchaîne des coups d’une vitesse fulgurante.",
  },
  {
    name: "Excelangue",
    imgSrc: "../src/assets/Miniature_108.png",
    types: ["Normal"],
    description:
      "Il peut allonger sa langue pour attraper sa nourriture à distance.",
  },
  {
    name: "Smogo",
    imgSrc: "../src/assets/Miniature_109.png",
    types: ["Poison"],
    description:
      "Il flotte dans les airs et émet des gaz toxiques qui empoisonnent tout autour de lui.",
  },
  {
    name: "Smogogo",
    imgSrc: "../src/assets/Miniature_110.png",
    types: ["Poison"],
    description:
      "Ses deux têtes produisent un gaz très toxique. Il est craint pour ses émanations dangereuses.",
  },
  {
    name: "Rhinocorne",
    imgSrc: "../src/assets/Miniature_111.png",
    types: ["Sol", "Roche"],
    description:
      "Son corps est si robuste qu’il peut détruire tout obstacle en le chargeant.",
  },
  {
    name: "Rhinoféros",
    imgSrc: "../src/assets/Miniature_112.png",
    types: ["Sol", "Roche"],
    description:
      "Il est très puissant et peut soulever des rochers plus lourds que lui.",
  },
  {
    name: "Leveinard",
    imgSrc: "../src/assets/Miniature_113.png",
    types: ["Normal"],
    description:
      "Il porte un œuf nutritif et est très bienveillant envers les autres Pokémon.",
  },
  {
    name: "Saquedeneu",
    imgSrc: "../src/assets/Miniature_114.png",
    types: ["Plante"],
    description:
      "Ses lianes repoussent si elles sont coupées, ce qui lui permet de se défendre efficacement.",
  },
  {
    name: "Kangourex",
    imgSrc: "../src/assets/Miniature_115.png",
    types: ["Normal"],
    description:
      "Elle protège toujours son petit dans sa poche ventrale et attaque violemment pour le défendre.",
  },
  {
    name: "Hypotrempe",
    imgSrc: "../src/assets/Miniature_116.png",
    types: ["Eau"],
    description: "Il se cache dans les coraux pour échapper à ses prédateurs.",
  },
  {
    name: "Hypocéan",
    imgSrc: "../src/assets/Miniature_117.png",
    types: ["Eau"],
    description:
      "Il crache un jet d’encre noire pour aveugler ses ennemis et s’enfuir.",
  },
  {
    name: "Poissirène",
    imgSrc: "../src/assets/Miniature_118.png",
    types: ["Eau"],
    description: "Elle utilise sa corne pour se défendre en cas de danger.",
  },
  {
    name: "Poissoroy",
    imgSrc: "../src/assets/Miniature_119.png",
    types: ["Eau"],
    description:
      "Sa nage rapide et gracieuse attire souvent l’attention dans les eaux claires.",
  },
  {
    name: "Stari",
    imgSrc: "../src/assets/Miniature_120.png",
    types: ["Eau"],
    description:
      "Ses membres peuvent se régénérer si on les coupe. Il scintille la nuit.",
  },
  {
    name: "Staross",
    imgSrc: "../src/assets/Miniature_121.png",
    types: ["Eau", "Psy"],
    description:
      "Il émet une lumière mystérieuse et peut vivre dans les profondeurs de l’océan.",
  },
  {
    name: "M. Mime",
    imgSrc: "../src/assets/Miniature_122.png",
    types: ["Psy"],
    description:
      "Il crée des murs invisibles pour se protéger et jouer avec les autres.",
  },
  {
    name: "Insécateur",
    imgSrc: "../src/assets/Miniature_123.png",
    types: ["Insecte", "Vol"],
    description:
      "Ses lames acérées lui permettent de couper tout obstacle avec une grande précision.",
  },
  {
    name: "Lippoutou",
    imgSrc: "../src/assets/Miniature_124.png",
    types: ["Glace", "Psy"],
    description:
      "Ses baisers provoquent un engourdissement chez ses adversaires.",
  },
  {
    name: "Élektek",
    imgSrc: "../src/assets/Miniature_125.png",
    types: ["Électrik"],
    description:
      "Son corps produit de l’électricité, qu’il utilise pour attaquer.",
  },
  {
    name: "Magmar",
    imgSrc: "../src/assets/Miniature_126.png",
    types: ["Feu"],
    description:
      "Son corps est entouré de flammes, ce qui le rend dangereux à approcher.",
  },
  {
    name: "Scarabrute",
    imgSrc: "../src/assets/Miniature_127.png",
    types: ["Insecte"],
    description: "Ses pinces puissantes peuvent broyer les os les plus solides",
  },
  {
    name: "Tauros",
    imgSrc: "../src/assets/Miniature_128.png",
    types: ["Normal"],
    description:
      "Il aime charger ses ennemis avec force, secouant furieusement ses trois queues.",
  },
  {
    name: "Magicarpe",
    imgSrc: "../src/assets/Miniature_129.png",
    types: ["Eau"],
    description:
      "Il est faible et patauge souvent, mais il peut sauter très haut.",
  },
  {
    name: "Léviator",
    imgSrc: "../src/assets/Miniature_130.png",
    types: ["Eau", "Vol"],
    description:
      "Lorsqu’il entre en colère, il est destructeur et attaque tout autour de lui.",
  },
  {
    name: "Lokhlass",
    imgSrc: "../src/assets/Miniature_131.png",
    types: ["Eau", "Glace"],
    description:
      "Il adore transporter les gens sur son dos et est très doux de nature.",
  },
  {
    name: "Métamorph",
    imgSrc: "../src/assets/Miniature_132.png",
    types: ["Normal"],
    description:
      "Il peut changer de forme pour imiter n’importe quel objet ou être vivant.",
  },
  {
    name: "Évoli",
    imgSrc: "../src/assets/Miniature_133.png",
    types: ["Normal"],
    description:
      "Ses gènes instables lui permettent d’évoluer sous différentes formes selon son environnement.",
  },
  {
    name: "Aquali",
    imgSrc: "../src/assets/Miniature_134.png",
    types: ["Eau"],
    description:
      "Il est capable de se fondre dans l’eau et est souvent difficile à repérer.",
  },
  {
    name: "Voltali",
    imgSrc: "../src/assets/Miniature_135.png",
    types: ["Électrik"],
    description:
      "Son corps chargé d’électricité peut provoquer des étincelles.",
  },
  {
    name: "Pyroli",
    imgSrc: "../src/assets/Miniature_136.png",
    types: ["Feu"],
    description: "Il respire des flammes de plus de 1000 °C pour se défendre.",
  },
  {
    name: "Porygon",
    imgSrc: "../src/assets/Miniature_137.png",
    types: ["Normal"],
    description:
      "Il est constitué de données informatiques et peut se déplacer dans les systèmes numériques",
  },
  {
    name: "Amonita",
    imgSrc: "../src/assets/Miniature_138.png",
    types: ["Roche", "Eau"],
    description:
      "Son fossile a été réanimé et il utilise ses tentacules pour se déplacer.",
  },
  {
    name: "Amonistar",
    imgSrc: "../src/assets/Miniature_139.png",
    types: ["Roche", "Eau"],
    description:
      "Ses tentacules puissants lui permettent de capturer des proies pour se nourrir.",
  },
  {
    name: "Kabuto",
    imgSrc: "../src/assets/Miniature_140.png",
    types: ["Roche", "Eau"],
    description:
      "Il est rare et vit caché dans les eaux profondes pour échapper à ses prédateurs.",
  },
  {
    name: "Kabutops",
    imgSrc: "../src/assets/Miniature_141.png",
    types: ["Roche", "Eau"],
    description: "Ses lames tranchantes lui servent à découper ses proies.",
  },
  {
    name: "Ptéra",
    imgSrc: "../src/assets/Miniature_142.png",
    types: ["Roche", "Vol"],
    description:
      "Ses ailes puissantes lui permettent de voler à grande vitesse et de chasser ses proies.",
  },
  {
    name: "Ronflex",
    imgSrc: "../src/assets/Miniature_143.png",
    types: ["Normal"],
    description:
      "Il passe son temps à dormir et à manger, et il est extrêmement difficile à réveiller.",
  },
  {
    name: "Artikodin",
    imgSrc: "../src/assets/Miniature_144.png",
    types: ["Glace", "Vol"],
    description:
      "Ses ailes glaciales provoquent des tempêtes de neige lorsqu’il vole.",
  },
  {
    name: "Électhor",
    imgSrc: "../src/assets/Miniature_145.png",
    types: ["Électrik", "Vol"],
    description: "Il contrôle la foudre et provoque des tempêtes violentes.",
  },
  {
    name: "Sulfura",
    imgSrc: "../src/assets/Miniature_146.png",
    types: ["Feu", "Vol"],
    description:
      "Ses ailes ardentes embrasent l’air, rendant ses apparitions spectaculaires.",
  },
  {
    name: "Minidraco",
    imgSrc: "../src/assets/Miniature_147.png",
    types: ["Dragon"],
    description:
      "Il se cache dans les rivières et les lacs pour éviter d’être repéré.",
  },
  {
    name: "Draco",
    imgSrc: "../src/assets/Miniature_148.png",
    types: ["Dragon"],
    description:
      "Il vit dans l’eau et se nourrit de poissons. Il est très rare et difficile à capturer.",
  },
  {
    name: "Dracolosse",
    imgSrc: "../src/assets/Miniature_149.png",
    types: ["Dragon", "Vol"],
    description:
      "Son immense force et sa rapidité en font un gardien des océans.",
  },
  {
    name: "Mewtwo",
    imgSrc: "../src/assets/Miniature_150.png",
    types: ["Psy"],
    description:
      "Créé par manipulation génétique, il possède des pouvoirs psychiques redoutables et est difficile à contrôler.",
  },
  {
    name: "Mew",
    imgSrc: "../src/assets/Miniature_151.png",
    types: ["Psy"],
    description:
      "Rare et très mystérieux, il est capable de maîtriser toutes les attaques Pokémon.",
  },
];

const imagesTypesList = [
  { id: 1, name: "Normal", imgSrc: "../src/assets/normal.png" },
  { id: 2, name: "Eau", imgSrc: "../src/assets/eau.png" },
  { id: 3, name: "Feu", imgSrc: "../src/assets/feu.png" },
  { id: 4, name: "Plante", imgSrc: "../src/assets/plante.png" },
  { id: 5, name: "Électrik", imgSrc: "../src/assets/electrik.png" },
  { id: 6, name: "Roche", imgSrc: "../src/assets/roche.png" },
  { id: 7, name: "Sol", imgSrc: "../src/assets/sol.png" },
  { id: 8, name: "Poison", imgSrc: "../src/assets/poison.png" },
  { id: 9, name: "Psy", imgSrc: "../src/assets/psy.png" },
  { id: 10, name: "Vol", imgSrc: "../src/assets/vol.png" },
  { id: 11, name: "Combat", imgSrc: "../src/assets/combat.png" },
  { id: 12, name: "Glace", imgSrc: "../src/assets/glace.png" },
  { id: 13, name: "Spectre", imgSrc: "../src/assets/spectre.png" },
  { id: 14, name: "Insecte", imgSrc: "../src/assets/insecte.png" },
  { id: 15, name: "Dragon", imgSrc: "../src/assets/dragon.png" },
];

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModalPokemon, setCurrentModalPokemon] =
    useState<Pokemon | null>(null);
  const [pokemons, setPokemons] = useState(pokedex);
  const [activeIdButton, setActiveIdButton] = useState(0);

  const setCurrentModal = (isOpen: boolean, pokemon: Pokemon) => {
    setModalIsOpen(isOpen);
    setCurrentModalPokemon(pokemon);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalIsOpen]); // 🌈 Des que je fais quelque chose avec une des variables du tableau
  //qui est en paramètre de useEffect, il exécute ma fonction fléchée en premier paramètre

  const sortPokemons = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (`${event.currentTarget.dataset.type}` === "All") {
      setPokemons(pokedex);
    } else {
      const newPokemons = pokedex.filter((pokemon) => {
        return pokemon.types.includes(`${event.currentTarget.dataset.type}`);
      });
      console.log(`${event.currentTarget.dataset.type}`);
      setPokemons(newPokemons);
    }
    setActiveIdButton(parseInt(`${event.currentTarget.dataset.id}`));
    console.log(`${event.currentTarget.dataset.id}`);
    console.log({ activeIdButton });
  };

  return (
    <>
      <Header
        activeIdButton={activeIdButton}
        setActiveIdButton={setActiveIdButton}
        imagesTypesList={imagesTypesList}
        sortPokemons={sortPokemons}
      />
      <Main
        setCurrentModal={setCurrentModal}
        pokemons={pokemons}
        setPokemons={setPokemons}
      />
      {modalIsOpen ? (
        <Modal
          currentModalPokemon={currentModalPokemon}
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
        />
      ) : null}

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
