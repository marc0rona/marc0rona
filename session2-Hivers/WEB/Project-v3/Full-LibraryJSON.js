//Base de Données (Bibliothèques) complète, de tous les livres disponibles
const Biblio = 
{
    "CoverIMG" : 
    [
        "./Img/Covers/Cover1-GeorgeOrwell.png","./Img/Covers/Cover2-Dune.png","./Img/Covers/Cover3-ForeverWar.png",
        "./Img/Covers/Cover4-AmosDaragon.png","./Img/Covers/Cover5-GameOfThrones.png","./Img/Covers/Cover6-TrojanHorse.png",
        "./Img/Covers/Cover7-Metamorphosis.png","./Img/Covers/Cover8-DaVinciCode.png","./Img/Covers/Cover9-Rayuela.jpg",
        "./Img/Covers/Cover10-DetteHistoire.png","./Img/Covers/Cover11-CapitaleXXsiecle.png","./Img/Covers/Cover12-ArtofWar.png",
        "./Img/Covers/CoverBD1-KidPaddle.png","./Img/Covers/CoverBD2-Ttiteuf.png","./Img/Covers/CoverBD3-Gaston.png"
    ],

    "LivreID" : 
    [
        "B01","B02","B03",
        "B04","B05","B06",
        "B07","B08","B09",
        "B10","B11","B12",
        "B13","B14","B15"
    ],

    "Titres": 
    [
        "1 9 8 4","Dune","The Forever War",
        "Amos Daragon","A Game of Thrones","Trojan Horse",
        "La Metamorfosis","The Da Vinci Code","HopScotch",
        "Dette :5000 ans d'histoire","Le capital au XXIe siècle","L'Art de la Guerre",
        "Kid-Paddle","Titeuf","Gaston"
    ],

    "Auteurs" :
    [
        "George Orwell","Frank Herbert","Joe Haldeman",
        "Bryan Perro","George RR Martin","J.J. Benitez",
        "Franz Kafka","Dan Brown","Julio Cortázar",
        "David Graeber","Thomas Piketty","Sun Tzu",
        "Michel Ledent","Philippe Chappuis","André Franquin"
    ],

    "Publication": 
    [
        "16 Novembre, 1972","Août 1965","Décembre 1 1974",
        "Mars 28, 2003","6 Août 1998","Mai 1984",
        "Juillet 1915","Mars 18, 2003","Juin 28, 1963",
        "Mai 10 2016","18 Février 2019","publié vers 1772 ",
        "Depuis 1996","Depuis 1992","Depuis Février 1957"
    ],

    "Pages" :
    [
        "368","896","278",
        "176","694","730",
        "201","490","720",
        "667","970","80",
        "30","40","30"
    ],


    "Genre": 
    [
        "Science-Fiction","Science-Fiction","Science-Fiction",
        "Fantastique","Fantastique","Fantastique",
        "Realisme","Realisme","Realisme",
        "Histoire","Histoire","Histoire",
        "Comics","Comics","Comics"
    ],

    "Description" : 
    [
        /*B01 */ "De tous les carrefours importants, le visage à la moustache noire vous fixait du regard. Il y en avait un sur le mur d'en face. BIG BROTHER VOUS REGARDE, répétait la légende,tandis que le regard des yeux noirs pénétrait les yeux de WINSTON... \nAu loin, un hélicoptère glissa entre les toits, plana un moment, telle une mouche bleue, puis repartit comme une flèche, dans un vol courbe. C'était une patrouille qui venait mettre le nez aux fenêtres des gens. \nMais les patrouilles n'avaient pas d'importance. Seule comptait la police de la Pensée.",
        /*B02 */ "Partout des sables à perte de vue. Une seule richesse : l'épice de longue vie, née du désert, et que tout l'univers convoite. \nQuand Leto Atréides reçoit Dune en fief, il flaire le piège. Il aura besoin des guerriers Fremen qui, réfugiés au fond du désert, se sont adaptés à une vie très dure en préservant leur liberté, leurs coutumes et leur foi. Ils rêvent du prophète qui proclamera la guerre sainte et changera le cours de l'histoire.\nependant, les Révérendes Mères du Bene Gesserit poursuivent leur programme millénaire de sélection génétique : elles veulent créer un homme qui réunira tous les dons latents de l'espèce. Le Messie des Fremen est-il déjà né dans l'Empire ? ",
        /*B03 */ "The Earth's leaders have drawn a line in the interstellar sand—despite the fact that the fierce alien enemy that they would oppose is inscrutable, unconquerable, and very far away. A reluctant conscript drafted into an elite Military unit, to perform his duties without rancor and even rise up through military ranks. \nPvt. Mandella is willing to do whatever it takes to survive the ordeal and return home. But 'home' may be even more terrifying than battle, because, thanks to the time dilation caused by space travel, Mandella is aging months while the Earth he left behind is aging centuries.",
        /*B04 */ "Amos Daragon, un brillant garçon de douze ans, devient malgré lui le premier élu de la nouvelle génération des porteurs de masques. \n Grâce à ses pouvoirs sur les éléments et aidé de Béorf Bromanson, un jeune garçon de la race des béorites capable de se transformer en ours, Amos parcourt les contrées étranges peuplées de créatures légendaires à la recherche des masques de pouvoir.\nLes deux amis vivent maintenant chez Junos, un vieil homme de 71 ans qui a subi une croissance accélérée lorsqu'il était enfant et qu'il s'est introduit dans le bois de Tarkasis. Junos retrouvera son âge normal grâce à Amos et deviendra plus tard le seigneur de Berrion.",
        /*B05 */ "Après avoir tué le monarque dément Aerys II Targaryen, Robert Baratheon est devenu le nouveau souverain du royaume des Sept Couronnes. Tandis que, en son domaine de Winterfell, son fidèle ami le duc Eddard Stark rend paisiblement la justice. \nMais un jour, le roi Robert lui rend visite, porteur de sombres nouvelles : le trône est en péril. Stark, qui s'est toujours tenu éloigné des affaires du pouvoir, doit alors abandonner les terres du Nord pour rejoindre la cour et ses intrigues. \nL'heure est grave, d'autant qu'au-delà du...",
        /*B06 */ "Narra la vida de Jesús de Nazaret, según el relato de un viajero del tiempo procedente del siglo XX. Podemos apuntar, eso sí, que para la elaboración de esta obra, el autor se ha basado en una documentación real, depositada hace años en Estados Unidos.Una documentación que pone al descubierto multitud de datos nuevos sobre la figura y la obra de Jesús de Nazaret. \nPodemos asegurar que ­tal y como sospecha buena parte de la Humanidad- las grandes potencias ocultan muchos de sus proyectos espaciales y militares.Podemos revelar, por ejemplo, que en 1973 las Fuerzas Aéreas norteamericanas, después de varios años de preparación y tras un sinfín de peripecias, ejecutaron en pleno corazón de Israel uno de sus proyectos «supersecretos» que fue bautizado, precisamente, como Operación Caballo de Troya",
        /*B07 */ "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. \n He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes",
        /*B08 */ "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. \nAs Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
        /*B09 */ "Horacio Oliveira is an Argentinean writer who lives in Paris with his mistress, La Maga, surrounded by a loose-knit circle of bohemian friends who call themselves 'The Club.' A child's death and La Maga's disappearance put an end to his life of empty pleasures and intellectual acrobatics, and returns to Buenos Aires.\nRayuela is the dazzling, freewheeling account of his astonishing adventures. Written in an episodic, snapshot manner, the novel has 155 chapters, the last 99 designated as 'expendable.\n' Some of these 'expendable' chapters fill in gaps that occur in the main storyline, while others add information about the characters or record the aesthetic or literary speculations of a writer named Morelli who makes a brief appearance in the narrative.",
        /*B10 */ "En remettant en perspective l'histoire de la dette depuis cinq mille ans, David Graeber renverse magistralement les théories admises.Aujourd'hui encore, les économistes entretiennent une vieille illusion : celle que l'opprobre est forcément à jeter sur les débiteurs, jamais sur les créanciers. Et si l'unique moyen d'éviter l'explosion sociale était justement... d'effacer les dettes ? \nCet essai essentiel et foisonnant, par une des plus grandes figures de la réflexion politique contemporaine (David Graeber a directement inspiré le mouvement Occupy Wall Street), permet de mieux comprendre l'histoire du monde, la crise du crédit en cours et l'avenir de notre économie.",
        /*B11 */ "Le capital au XXIe siècleLa répartition des richesses est l'une des questions les plus débattues aujourd'hui.Mais que sait-on vraiment de l'évolution des inégalités sur le long terme? \nSi la diffusion des connaissances apparaît comme la force principale d'égalisation des conditions sur le long terme, à l'heure actuelle, le décrochage des plus hautes rémunérations et, plus encore, la concentration extrême des patrimoines menacent les valeurs de méritocratie et de justice sociale des sociétés démocratiques.Un best-seller mondial qui est déjà devenu un classique. ",
        /*B12 */ "L'Art de la Guerre est un court traité de stratégie militaire chinois, datant de la période des Printemps et Automnes. Attribué au stratège Sun Zi, \nle texte s'articule autour de treize chapitres consacrés à l'analyse rationnelle des différentes dimensions de la guerre et qui dégagent les principes de la poursuite intelligente d'une guerre victorieuse : fondée sur une stratégie indirecte, toute d'économie, de ruse, de connaissance de l'adversaire, d'action psychologique, destinée à ne laisser au choc que le rôle de coup de grâce asséné à un ennemi désemparé.",
        /*B13 */ "Savez-vous capturer un Blork ? Utiliser au mieux un copy 2000 ? Ce que devient l'argent une fois glissé dans le fente d'un bouffe-fric ? Kid Paddle est là pour répondre à toutes ces importantes questions existentielles, à une époque où jeux vidéo, ordinateurs et autres CD-ROM dirigent les loisirs des enfants... et des adultes.",
        /*B14 */ "La série raconte la vie quotidienne de Titeuf, un garçon turbulent et naïf âgé de huit ans1 puis dix ans, à la mèche blonde caractéristique, de ses amis et de leur vision du monde des grands. \nUne grande partie des discussions abordées concernent les mystères des filles, du sexe, de la séduction, et de Nadia, la fille dont Titeuf est plus ou moins secrètement amoureux. Une grande caractéristique de Titeuf sont ses nombreuses expressions, notamment « tchô » et « c'est pô juste ». \nIl est souvent accompagné de ses meilleurs amis, Manu, Hugo et François. Le nom Titeuf viendrait de « p'tit œuf » car Zep trouvait que son personnage avait la tête en forme d'œuf.",
        /*B15 */ "Gaston, c'est un des personnages les plus sympathiques de toute la bande dessinée franco-belge. Né il y a 66 ans sous le crayon d'André Franquin, Gaston est au début un antihéros paresseux qui très vite va devenir un personnage à l'imagination et à l'énergie débordantes (tant qu'il ne s'agit pas de travailler) \n La série comporte une galerie de personnages réjouissante : Moizelle Jeanne, l'amoureuse transie de Gaston (qui ne capte aucun des signaux qu'elle envoie) ; M. De Mesmaecker, l'homme d'affaires irascible qui n'arrive jamais à signer des contrats ; Prunelle, le patron stressé de Gaston, victime favorite de ses inventions, etc. « Gaston » est sans conteste la série la plus drôle de l'histoire de la bande dessinée franco-belge, servie par un graphisme expressif et ultra dynamique."              
    ],

    "Prix" : 
    [
        "20.50","30.00","15.50",
        "10.00","35.00","26.00",
        "11.50","15.00","24.00",
        "22.50","32.00","5.00",
        "17.50","17.00","18.00"              
    ]
};
