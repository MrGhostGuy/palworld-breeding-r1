// Pal-culator - Enhanced Data: Drops, Levels & Expanded Combos
// Created by: Jeff H. (Mr. Ghost)

// ─── DROPS (Butchering Loot) ───
const DROPS_DATA={
"Lamball":["Meat","Wool"],"Cattiva":["Red Berries","Leather"],"Chikipi":["Egg","Meat"],
"Lifmunk":["Berry","Leather"],"Foxparks":["Flame Organ","Leather"],"Fuack":["Pal Fluids","Leather"],
"Sparkit":["Electric Organ","Leather"],"Tanzee":["Mushroom","Leather"],"Rooby":["Flame Organ","Leather"],
"Pengullet":["Ice Organ","Pal Fluids"],"Penking":["Ice Organ","Pal Fluids"],"Jolthog":["Electric Organ","Leather"],
"Jolthog Cryst":["Ice Organ","Pal Fluids"],"Gumoss":["Berry","Leather"],"Vixy":["Leather","Bone"],
"Hoocrates":["Dark Fragment","Leather"],"Teafant":["Pal Fluids","Leather"],"Depresso":["Venom Gland","Leather"],
"Cremis":["Wool","Leather"],"Daedream":["Dark Fragment","Leather"],"Rushoar":["Bone","Leather"],
"Nox":["Dark Fragment","Leather"],"Fuddler":["Leather","Ore"],"Killamari":["Venom Gland","Leather"],
"Mau":["Gold Coin","Leather"],"Mau Cryst":["Ice Organ","Gold Coin"],"Celaray":["Pal Fluids","Leather"],
"Direhowl":["Leather","Bone"],"Tocotoco":["Feather","Leather"],"Flopie":["Berry","Leather"],
"Mozzarina":["Milk","Meat"],"Bristla":["Leather","Mushroom"],"Gobfin":["Pal Fluids","Leather"],
"Gobfin Ignis":["Flame Organ","Leather"],"Hangyu":["Fiber","Leather"],"Hangyu Cryst":["Ice Organ","Fiber"],
"Mossanda":["Mushroom","Leather"],"Mossanda Lux":["Electric Organ","Mushroom"],"Woolipop":["Cotton Candy","Leather"],
"Caprity":["Red Berries","Horn"],"Melpaca":["Wool","Leather"],"Eikthyrdeer":["Leather","Horn"],
"Eikthyrdeer Terra":["Leather","Horn"],"Nitewing":["Leather","Feather"],"Ribbuny":["Leather","Bone"],
"Incineram":["Flame Organ","Horn","Leather"],"Incineram Noct":["Dark Fragment","Horn","Leather"],
"Cinnamoth":["Mushroom","Leather"],"Arsox":["Flame Organ","Leather"],"Dumud":["High Quality Pal Oil","Leather"],
"Cawgnito":["Dark Fragment","Leather"],"Leezpunk":["Dark Fragment","Leather"],"Leezpunk Ignis":["Flame Organ","Leather"],
"Loupmoon":["Bone","Dark Fragment"],"Galeclaw":["Leather","Dark Fragment"],"Robinquill":["Leather","Mushroom"],
"Robinquill Terra":["Leather","Ore"],"Gorirat":["Leather","Bone"],"Beegarde":["Honey","Leather"],
"Elizabee":["Honey","Mushroom","Leather"],"Grintale":["Leather","Bone"],"Swee":["Wool","Ice Organ"],
"Sweepa":["Ice Organ","Wool"],"Chillet":["Ice Organ","Leather"],"Univolt":["Electric Organ","Leather"],
"Foxcicle":["Ice Organ","Leather"],"Pyrin":["Flame Organ","Leather"],"Pyrin Noct":["Dark Fragment","Flame Organ","Leather"],
"Reindrix":["Ice Organ","Leather"],"Rayhound":["Electric Organ","Leather"],"Kitsun":["Flame Organ","Leather"],
"Dazzi":["Electric Organ","Leather","Dazzi Cloud"],"Lunaris":["Leather","Pal Fluids"],"Dinossom":["Leather","Mushroom"],
"Dinossom Lux":["Electric Organ","Leather"],"Surfent":["Pal Fluids","Leather"],"Surfent Terra":["Pal Fluids","Ore"],
"Maraith":["Dark Fragment","Bone"],"Digtoise":["Ore","Leather"],"Tombat":["Dark Fragment","Leather"],
"Lovander":["Bone","Venom Gland"],"Flambelle":["Flame Organ","Leather"],"Vanwyrm":["Flame Organ","Leather"],
"Vanwyrm Cryst":["Ice Organ","Leather"],"Bushi":["Bone","Ingot","Flame Organ"],"Beakon":["Electric Organ","Leather"],
"Ragnahawk":["Flame Organ","Leather"],"Katress":["Dark Fragment","Leather"],"Wixen":["Flame Organ","Dark Fragment","Leather"],
"Verdash":["Leather","Bone"],"Vaelet":["Leather","Pal Fluids"],"Sibelyx":["High Quality Cloth","Ice Organ"],
"Elphidran":["Leather","Horn"],"Kelpsea":["Pal Fluids","Leather"],"Kelpsea Ignis":["Flame Organ","Pal Fluids"],
"Azurobe":["Pal Fluids","Leather"],"Cryolinx":["Ice Organ","Leather"],"Blazehowl":["Flame Organ","Leather"],
"Blazehowl Noct":["Dark Fragment","Flame Organ","Leather"],"Relaxaurus":["Pal Fluids","Leather"],
"Relaxaurus Lux":["Electric Organ","Pal Fluids"],"Broncherry":["Mushroom","Leather"],"Broncherry Aqua":["Pal Fluids","Mushroom"],
"Petallia":["Beautiful Flower","Leather"],"Reptyro":["Flame Organ","Leather"],"Ice Reptyro":["Ice Organ","Leather"],
"Kingpaca":["Wool","Leather"],"Ice Kingpaca":["Ice Organ","Wool"],"Mammorest":["Leather","High Quality Pal Oil","Meat"],
"Mammorest Cryst":["Ice Organ","Leather","Meat"],"Wumpo":["Fiber","Ice Organ","Leather"],"Wumpo Botan":["Fiber","Leather"],
"Warsect":["Leather","Honey"],"Fenglope":["Leather","Bone"],"Felbat":["Dark Fragment","Leather"],
"Quivern":["Leather","Bone"],"Blazamut":["Flame Organ","Leather"],"Helzephyr":["Dark Fragment","Leather"],
"Astegon":["Flame Organ","Leather"],"Menasting":["Dark Fragment","Ore","Leather"],"Anubis":["Large Pal Soul","Bone","Leather"],
"Jormuntide":["Pal Fluids","Leather"],"Jormuntide Ignis":["Flame Organ","Pal Fluids"],"Suzaku":["Flame Organ","Leather"],
"Suzaku Aqua":["Pal Fluids","Leather"],"Grizzbolt":["Electric Organ","Leather"],"Lyleen":["Medicine","Flower","Technology Manual"],
"Lyleen Noct":["Dark Fragment","Medicine","Leather"],"Faleris":["Flame Organ","Leather"],"Orserk":["Electric Organ","Leather"],
"Shadowbeak":["Pal Metal Ingot","Carbon Fiber","Technology Manual"],"Paladius":["Leather","Bone"],"Necromus":["Dark Fragment","Leather"],
"Frostallion":["Ice Organ","Leather"],"Frostallion Noct":["Dark Fragment","Ice Organ","Leather"],"Jetragon":["Carbon Fiber","Polymer","Pure Quartz","Diamond"],
"Bellanoir":["Dark Fragment","Leather"],"Bellanoir Libero":["Dark Fragment","Leather"],"Blazamut Ryu":["Flame Organ","Leather"],
"Xenogard":["Ore","Leather"],"Neptilius":["Pal Fluids","Leather"],"Selyne":["Leather","Medicine"],"Bastigor":["Ice Organ","Leather"],
"Knocklem":["Ore","Leather"],"Starryon":["Leather","Fiber"],"Sekhmet":["Flame Organ","Leather"],"Flaracle":["Flame Organ","Leather"],
"Renjishi":["Flame Organ","Leather"],"Solenne":["Leather","Fiber"],"Nyafia":["Dark Fragment","Leather"],
"Mimog":["Gold Coin","Extra-Large Training Manual"],"Aegidron":["Ore","Leather"],"Ophydia":["Pal Fluids","Leather"],
"Celesdir":["Leather","Bone"],"Celesdir Noct":["Dark Fragment","Leather"],"Gildane":["Leather","Bone"],
"Dandilord":["Flame Organ","Leather"],"Hartalis":["Leather","Bone"],"Shaolong":["Pal Fluids","Leather"],
"Silvance":["Chromite","Leather"],"Panthalus":["Ice Organ","Leather"],"Xenovader":["Dark Fragment","Leather"],
"Xenolord":["Dark Fragment","Leather"],"Beakon Cryst":["Ice Organ","Leather"],"Kingpaca Cryst":["Ice Organ","Wool"],
"Ice Kingpaca":["Ice Organ","Wool"],"Reptyro Cryst":["Ice Organ","Leather"],"Foxparks Cryst":["Ice Organ","Leather"],
"Fuack Ignis":["Flame Organ","Pal Fluids"],"Muffly":["Wool","Leather"],"Woolipop Terra":["Leather","Fiber"],
"Croajiro":["Leather","Mushroom"],"Croajiro Noct":["Dark Fragment","Leather"],"Tanzee Ignis":["Flame Organ","Mushroom"],
"Loupmoon Cryst":["Ice Organ","Dark Fragment"],"Needoll":["Leather","Bone"],"Needoll Noct":["Dark Fragment","Leather"],
"Caprity Noct":["Dark Fragment","Horn"],"Hoodle":["Leather","Bone"],"Lapiron":["Leather","Horn"],
"Lapure":["Leather","Berry"],"Leafan":["Mushroom","Leather"],"Elgrove":["Leather","Mushroom"],
"Elgrove Cryst":["Ice Organ","Leather"],"Prunelia":["Mushroom","Leather"],"Prixter":["Dark Fragment","Leather"],
"Prixter Lux":["Dark Fragment","Leather"],"Snock":["Leather","Bone"],"Snock Lux":["Ice Organ","Leather"],
"Smokie":["Leather","Bone"],"Smokie Cryst":["Ice Organ","Leather"],"Slowatt":["Leather","Feather"],
"Dynamoff":["Pal Fluids","Leather"],"Roujay":["Leather","Bone"],"Braloha":["Flame Organ","Leather"],
"Buldosu":["Ore","Leather"],"Carnibora":["Leather","Bone"],"Palumba":["Leather","Feather"],
"Venusa":["Leather","Berry"],"Whalaska":["Coralum Ore","Pal Fluids"],"Whalaska Ignis":["Coralum Ore","Flame Organ"],
"Fenglope Lux":["Leather","Bone"],"Splatterina":["Dark Fragment","Leather"],"Nitemary":["Leather","Bone"],
"Nitemary Botan":["Berry","Leather"],"Omascul":["Leather","Bone"],"Mycora":["Mushroom","Leather"],
"Shroomer":["Mushroom","Leather"],"Shroomer Noct":["Dark Fragment","Mushroom"],"Turtacle":["Pal Fluids","Leather"],
"Turtacle Terra":["Pal Fluids","Ore"],"Valentail":["Leather","Berry"],"Kikit":["Leather","Feather"],
"Yakumo":["Leather","Bone"],"Eidrolon":["Leather","Bone"],"Eidrolon Ignis":["Flame Organ","Leather"],
"Dualith":["Leather","Bone"],"Dualith Noct":["Dark Fragment","Leather"],"Dupin":["Pal Fluids","Leather"],
"Ghangler":["Pal Fluids","Leather"],"Ghangler Ignis":["Flame Organ","Pal Fluids"],"Gloopie":["Pal Fluids","Leather"],
"Gloopie Primo":["Pal Fluids","Leather"],"Dazemu":["Leather","Bone"],"Gildra":["Leather","Bone"],
"Moldron":["Ore","Leather"],"Moldron Cryst":["Ice Organ","Ore"],"Dogen":["Leather","Bone"],
"Azurmane":["Pal Fluids","Leather"],"Wistella":["Leather","Mushroom"],"Wixen Noct":["Dark Fragment","Flame Organ","Leather"],
"Katress Ignis":["Dark Fragment","Flame Organ","Leather"],"Celesdir":["Leather","Bone"],"Celesdir Noct":["Dark Fragment","Leather"]
};

// ─── WILD SPAWN LEVEL RANGES ───
const LEVEL_DATA={
"Lamball":[1,9],"Cattiva":[1,9],"Chikipi":[1,9],"Lifmunk":[1,14],"Foxparks":[5,9],
"Fuack":[6,14],"Sparkit":[10,12],"Tanzee":[4,12],"Rooby":[4,14],"Pengullet":[2,41],
"Penking":[15,15],"Jolthog":[4,9],"Jolthog Cryst":[10,24],"Gumoss":[2,9],"Vixy":[1,9],
"Hoocrates":[4,22],"Teafant":[2,9],"Depresso":[4,24],"Cremis":[1,9],"Daedream":[4,16],
"Rushoar":[5,13],"Nox":[4,15],"Fuddler":[5,38],"Killamari":[5,62],"Mau":[5,15],
"Mau Cryst":[null,"Breeding Only"],"Celaray":[2,14],"Direhowl":[6,14],"Tocotoco":[14,47],
"Flopie":[22,25],"Mozzarina":[9,17],"Bristla":[16,25],"Gobfin":[14,26],"Gobfin Ignis":[null,"Breeding Only"],
"Hangyu":[9,36],"Hangyu Cryst":[null,"Breeding Only"],"Mossanda":[null,"Breeding Only"],"Mossanda Lux":[31,31],
"Woolipop":[9,17],"Caprity":[6,28],"Melpaca":[5,17],"Eikthyrdeer":[6,80],
"Eikthyrdeer Terra":[20,80],"Nitewing":[12,16],"Ribbuny":[1,24],"Incineram":[30,40],
"Incineram Noct":[37,39],"Cinnamoth":[16,25],"Arsox":[15,15],"Dumud":[14,39],"Cawgnito":[14,57],
"Leezpunk":[21,36],"Leezpunk Ignis":[28,36],"Loupmoon":[14,38],"Loupmoon Cryst":[null,"Breeding Only"],
"Galeclaw":[11,25],"Robinquill":[22,34],"Robinquill Terra":[null,"Breeding Only"],"Gorirat":[22,80],
"Beegarde":[20,34],"Elizabee":[null,"Breeding Only"],"Grintale":[17,17],"Swee":[7,34],
"Sweepa":[11,11],"Chillet":[11,11],"Univolt":[14,80],"Foxcicle":[15,15],"Pyrin":[null,"Breeding Only"],
"Pyrin Noct":[32,80],"Reindrix":[32,80],"Rayhound":[31,58],"Kitsun":[34,38],"Dazzi":[null,"Breeding Only"],
"Lunaris":[25,49],"Dinossom":[25,34],"Dinossom Lux":[34,39],"Surfent":[12,35],
"Surfent Terra":[null,"Fishing"],"Maraith":[null,"Breeding Only"],"Digtoise":[33,44],"Tombat":[12,42],
"Lovander":[null,"Breeding Only"],"Flambelle":[4,35],"Vanwyrm":[20,63],"Vanwyrm Cryst":[23,67],
"Bushi":[25,59],"Beakon":[30,80],"Ragnahawk":[32,80],"Katress":[20,46],"Wixen":[28,28],
"Verdash":[35,35],"Vaelet":[27,27],"Sibelyx":[null,"Breeding Only"],"Elphidran":[20,80],
"Kelpsea":[9,17],"Kelpsea Ignis":[20,35],"Azurobe":[10,55],"Cryolinx":[44,49],"Blazehowl":[30,30],
"Blazehowl Noct":[34,80],"Relaxaurus":[30,80],"Relaxaurus Lux":[null,"Breeding Only"],"Broncherry":[23,23],
"Broncherry Aqua":[null,"Breeding Only"],"Petallia":[28,57],"Reptyro":[null,"Breeding Only"],
"Reptyro Cryst":[42,67],"Kingpaca":[23,23],"Ice Kingpaca":[null,"Breeding Only"],"Mammorest":[26,80],
"Mammorest Cryst":[36,80],"Wumpo":[45,80],"Wumpo Botan":[38,38],"Warsect":[34,80],
"Fenglope":[25,25],"Felbat":[20,66],"Quivern":[null,"Breeding Only"],"Blazamut":[46,80],
"Helzephyr":[24,80],"Helzephyr Lux":[null,"Breeding Only"],"Astegon":[55,55],"Menasting":[31,43],
"Anubis":[55,55],"Jormuntide":[55,55],"Jormuntide Ignis":[null,"Breeding Only"],"Suzaku":[null,"Breeding Only"],
"Suzaku Aqua":[null,"Breeding Only"],"Grizzbolt":[30,30],"Lyleen":[58,58],"Lyleen Noct":[58,58],
"Faleris":[76,80],"Orserk":[74,80],"Shadowbeak":[50,80],"Paladius":[60,60],"Necromus":[60,60],
"Frostallion":[60,60],"Frostallion Noct":[65,65],"Jetragon":[70,70],
"Bellanoir":[35,35],"Bellanoir Libero":[45,80],"Blazamut Ryu":[55,80],"Xenogard":[null,"Camp Squad"],
"Neptilius":[60,60],"Selyne":[76,80],"Bastigor":[75,80],"Knocklem":[55,55],"Starryon":[null,"Breeding Only"],
"Sekhmet":[37,80],"Flaracle":[null,"Breeding Only"],"Renjishi":[null,"Breeding Only"],"Solenne":[null,"Breeding Only"],
"Nyafia":[null,"Breeding Only"],"Mimog":[10,80],"Aegidron":[79,79],"Ophydia":[69,69],
"Celesdir":[54,80],"Celesdir Noct":[null,"Breeding Only"],"Gildane":[null,"Breeding Only"],
"Dandilord":[null,"Quest"],"Hartalis":[70,80],"Shaolong":[76,78],"Silvance":[null,"Quest"],
"Panthalus":[null,"Quest"],"Xenovader":[null,"World Event"],"Xenolord":[65,80]
};

// ─── ADDITIONAL BREEDING COMBOS (1.0 verified) ───
const EXTRA_COMBOS=[
{r:"Chikipi",p1:"Chikipi",p2:"Chikipi",desc:"Starter Egg",tier:"good"},
{r:"Lamball",p1:"Lamball",p2:"Lamball",desc:"Fluffy Shield Egg",tier:"good"},
{r:"Cattiva",p1:"Cattiva",p2:"Cattiva",desc:"Cat Helper Egg",tier:"good"},
{r:"Lifmunk",p1:"Lifmunk",p2:"Lifmunk",desc:"Lifmunk Recoil Egg",tier:"good"},
{r:"Foxparks",p1:"Foxparks",p2:"Foxparks",desc:"Huggy Fire Egg",tier:"good"},
{r:"Fuack",p1:"Fuack",p2:"Fuack",desc:"Surfing Slam Egg",tier:"good"},
{r:"Sparkit",p1:"Sparkit",p2:"Sparkit",desc:"Static Electricity Egg",tier:"good"},
{r:"Tanzee",p1:"Tanzee",p2:"Tanzee",desc:"Cheery Rifle Egg",tier:"good"},
{r:"Rooby",p1:"Rooby",p2:"Rooby",desc:"Tiny Spark Egg",tier:"good"},
{r:"Pengullet",p1:"Pengullet",p2:"Pengullet",desc:"Pengullet Cannon Egg",tier:"good"},
{r:"Penking",p1:"Penking",p2:"Penking",desc:"Brave Sailor Egg",tier:"good"},
{r:"Jolthog",p1:"Jolthog",p2:"Jolthog",desc:"Jolt Bomb Egg",tier:"good"},
{r:"Gumoss",p1:"Gumoss",p2:"Gumoss",desc:"Logging Assistance Egg",tier:"good"},
{r:"Vixy",p1:"Vixy",p2:"Vixy",desc:"Dig Here! Egg",tier:"good"},
{r:"Hoocrates",p1:"Hoocrates",p2:"Hoocrates",desc:"Dark Knowledge Egg",tier:"good"},
{r:"Teafant",p1:"Teafant",p2:"Teafant",desc:"Soothing Shower Egg",tier:"good"},
{r:"Depresso",p1:"Depresso",p2:"Depresso",desc:"Caffeine Inoculation Egg",tier:"good"},
{r:"Cremis",p1:"Cremis",p2:"Cremis",desc:"Fluffy Wool Egg",tier:"good"},
{r:"Daedream",p1:"Daedream",p2:"Daedream",desc:"Dream Chaser Egg",tier:"good"},
{r:"Rushoar",p1:"Rushoar",p2:"Rushoar",desc:"Hard Head Egg",tier:"good"},
{r:"Nox",p1:"Nox",p2:"Nox",desc:"Kuudere Egg",tier:"good"},
{r:"Fuddler",p1:"Fuddler",p2:"Fuddler",desc:"Ore Detector Egg",tier:"good"},
{r:"Killamari",p1:"Killamari",p2:"Killamari",desc:"Fried Squid Egg",tier:"good"},
{r:"Mau",p1:"Mau",p2:"Mau",desc:"Gold Digger Egg",tier:"good"},
{r:"Celaray",p1:"Celaray",p2:"Celaray",desc:"Zephyr Glider Egg",tier:"good"},
{r:"Direhowl",p1:"Direhowl",p2:"Direhowl",desc:"Direhowl Rider Egg",tier:"good"},
{r:"Tocotoco",p1:"Tocotoco",p2:"Tocotoco",desc:"Eggbomb Launcher Egg",tier:"good"},
{r:"Flopie",p1:"Flopie",p2:"Flopie",desc:"Helper Bunny Egg",tier:"good"},
{r:"Mozzarina",p1:"Mozzarina",p2:"Mozzarina",desc:"Milk Maker Egg",tier:"good"},
{r:"Bristla",p1:"Bristla",p2:"Bristla",desc:"Princess Gaze Egg",tier:"good"},
{r:"Gobfin",p1:"Gobfin",p2:"Gobfin",desc:"Angry Shark Egg",tier:"good"},
{r:"Hangyu",p1:"Hangyu",p2:"Hangyu",desc:"Flying Trapeze Egg",tier:"good"},
{r:"Mossanda",p1:"Mossanda",p2:"Mossanda",desc:"Grenadier Panda Egg",tier:"good"},
{r:"Woolipop",p1:"Woolipop",p2:"Woolipop",desc:"Candy Pop Egg",tier:"good"},
{r:"Caprity",p1:"Caprity",p2:"Caprity",desc:"Berry Picker Egg",tier:"good"},
{r:"Melpaca",p1:"Melpaca",p2:"Melpaca",desc:"Pacapaca Wool Egg",tier:"good"},
{r:"Eikthyrdeer",p1:"Eikthyrdeer",p2:"Eikthyrdeer",desc:"Guardian of Forest Egg",tier:"good"},
{r:"Nitewing",p1:"Nitewing",p2:"Nitewing",desc:"Travel Companion Egg",tier:"good"},
{r:"Ribbuny",p1:"Ribbuny",p2:"Ribbuny",desc:"Skilled Fingers Egg",tier:"good"},
{r:"Incineram",p1:"Incineram",p2:"Incineram",desc:"Flameclaw Hunter Egg",tier:"good"},
{r:"Cinnamoth",p1:"Cinnamoth",p2:"Cinnamoth",desc:"Mysterious Scales Egg",tier:"good"},
{r:"Arsox",p1:"Arsox",p2:"Arsox",desc:"Warm Body Egg",tier:"good"},
{r:"Dumud",p1:"Dumud",p2:"Dumud",desc:"Soil Improver Egg",tier:"good"},
{r:"Cawgnito",p1:"Cawgnito",p2:"Cawgnito",desc:"Telepeck Egg",tier:"good"},
{r:"Leezpunk",p1:"Leezpunk",p2:"Leezpunk",desc:"Sixth Sense Egg",tier:"good"},
{r:"Loupmoon",p1:"Loupmoon",p2:"Loupmoon",desc:"Claws Glistening Egg",tier:"good"},
{r:"Galeclaw",p1:"Galeclaw",p2:"Galeclaw",desc:"Galeclaw Rider Egg",tier:"good"},
{r:"Robinquill",p1:"Robinquill",p2:"Robinquill",desc:"Hawk Eye Egg",tier:"good"},
{r:"Gorirat",p1:"Gorirat",p2:"Gorirat",desc:"Full-power Gorilla Egg",tier:"good"},
{r:"Beegarde",p1:"Beegarde",p2:"Beegarde",desc:"Worker Bee Egg",tier:"good"},
{r:"Elizabee",p1:"Elizabee",p2:"Elizabee",desc:"Queen Bee Command Egg",tier:"good"},
{r:"Grintale",p1:"Grintale",p2:"Grintale",desc:"Plump Body Egg",tier:"good"},
{r:"Swee",p1:"Swee",p2:"Swee",desc:"Fluffy Egg",tier:"good"},
{r:"Sweepa",p1:"Sweepa",p2:"Sweepa",desc:"Travel Companion Egg",tier:"good"},
{r:"Chillet",p1:"Chillet",p2:"Chillet",desc:"Wriggling Weasel Egg",tier:"good"},
{r:"Univolt",p1:"Univolt",p2:"Univolt",desc:"Predatory Shock Egg",tier:"good"},
{r:"Foxcicle",p1:"Foxcicle",p2:"Foxcicle",desc:"Icy Wave Egg",tier:"good"},
{r:"Reindrix",p1:"Reindrix",p2:"Reindrix",desc:"Cool Body Egg",tier:"good"},
{r:"Rayhound",p1:"Rayhound",p2:"Rayhound",desc:"Jolt Runner Egg",tier:"good"},
{r:"Kitsun",p1:"Kitsun",p2:"Kitsun",desc:"Clear Mind Egg",tier:"good"},
{r:"Lunaris",p1:"Lunaris",p2:"Lunaris",desc:"Antigravity Egg",tier:"good"},
{r:"Dinossom",p1:"Dinossom",p2:"Dinossom",desc:"Dragon Cannon Egg",tier:"good"},
{r:"Surfent",p1:"Surfent",p2:"Surfent",desc:"Aqua Spout Egg",tier:"good"},
{r:"Digtoise",p1:"Digtoise",p2:"Digtoise",desc:"Drill Crusher Egg",tier:"good"},
{r:"Tombat",p1:"Tombat",p2:"Tombat",desc:"Ultrasonic Sensor Egg",tier:"good"},
{r:"Lovander",p1:"Lovander",p2:"Lovander",desc:"Lucky Egg",tier:"good"},
{r:"Flambelle",p1:"Flambelle",p2:"Flambelle",desc:"Magma Tears Egg",tier:"good"},
{r:"Vanwyrm",p1:"Vanwyrm",p2:"Vanwyrm",desc:"Fanged Wing Egg",tier:"good"},
{r:"Bushi",p1:"Bushi",p2:"Bushi",desc:"Brandish Blade Egg",tier:"good"},
{r:"Beakon",p1:"Beakon",p2:"Beakon",desc:"Storm Lance Egg",tier:"strong"},
{r:"Ragnahawk",p1:"Ragnahawk",p2:"Ragnahawk",desc:"Flame Wing Egg",tier:"strong"},
{r:"Katress",p1:"Katress",p2:"Katress",desc:"Grimoire Collector Egg",tier:"strong"},
{r:"Wixen",p1:"Wixen",p2:"Wixen",desc:"Lord Fox Egg",tier:"strong"},
{r:"Verdash",p1:"Verdash",p2:"Verdash",desc:"Grassland Speedster Egg",tier:"strong"},
{r:"Vaelet",p1:"Vaelet",p2:"Vaelet",desc:"Purification Egg",tier:"strong"},
{r:"Sibelyx",p1:"Sibelyx",p2:"Sibelyx",desc:"Silk Maker Egg",tier:"strong"},
{r:"Elphidran",p1:"Elphidran",p2:"Elphidran",desc:"Dragon Wing Egg",tier:"strong"},
{r:"Kelpsea",p1:"Kelpsea",p2:"Kelpsea",desc:"Water Storage Egg",tier:"good"},
{r:"Azurobe",p1:"Azurobe",p2:"Azurobe",desc:"Waterwing Egg",tier:"strong"},
{r:"Cryolinx",p1:"Cryolinx",p2:"Cryolinx",desc:"Ice Dragon Egg",tier:"strong"},
{r:"Blazehowl",p1:"Blazehowl",p2:"Blazehowl",desc:"Loping Flame Egg",tier:"strong"},
{r:"Relaxaurus",p1:"Relaxaurus",p2:"Relaxaurus",desc:"Dream Chaser Egg",tier:"strong"},
{r:"Broncherry",p1:"Broncherry",p2:"Broncherry",desc:"Overaffectionate Egg",tier:"strong"},
{r:"Petallia",p1:"Petallia",p2:"Petallia",desc:"Flower Spirit Egg",tier:"strong"},
{r:"Reptyro",p1:"Reptyro",p2:"Reptyro",desc:"Flame Stream Egg",tier:"strong"},
{r:"Kingpaca",p1:"Kingpaca",p2:"Kingpaca",desc:"King of Eggs Egg",tier:"strong"},
{r:"Mammorest",p1:"Mammorest",p2:"Mammorest",desc:"Terrestrial Giant Egg",tier:"strong"},
{r:"Wumpo",p1:"Wumpo",p2:"Wumpo",desc:"Royal Penguin Egg",tier:"strong"},
{r:"Warsect",p1:"Warsect",p2:"Warsect",desc:"Emperor Pterosaur Egg",tier:"meta"},
{r:"Fenglope",p1:"Fenglope",p2:"Fenglope",desc:"Wind Whisper Egg",tier:"strong"},
{r:"Felbat",p1:"Felbat",p2:"Felbat",desc:"Hexer Egg",tier:"strong"},
{r:"Quivern",p1:"Quivern",p2:"Quivern",desc:"Dragon Glider Egg",tier:"strong"},
{r:"Blazamut",p1:"Blazamut",p2:"Blazamut",desc:"Magna Inferno Egg",tier:"meta"},
{r:"Helzephyr",p1:"Helzephyr",p2:"Helzephyr",desc:"Wings of Death Egg",tier:"strong"},
{r:"Astegon",p1:"Astegon",p2:"Astegon",desc:"Black Ankylosaurus Egg",tier:"meta"},
{r:"Menasting",p1:"Menasting",p2:"Menasting",desc:"Dark King Egg",tier:"strong"},
{r:"Anubis",p1:"Anubis",p2:"Anubis",desc:"Pharaoh Egg",tier:"meta"},
{r:"Jormuntide",p1:"Jormuntide",p2:"Jormuntide",desc:"Sea Dragon Egg",tier:"meta"},
{r:"Suzaku",p1:"Suzaku",p2:"Suzaku",desc:"Divine Phoenix Egg",tier:"meta"},
{r:"Grizzbolt",p1:"Grizzbolt",p2:"Grizzbolt",desc:"Yellow Tank Egg",tier:"legend"},
{r:"Lyleen",p1:"Lyleen",p2:"Lyleen",desc:"Harvest Goddess Egg",tier:"legend"},
{r:"Faleris",p1:"Faleris",p2:"Faleris",desc:"Hawk of Gold Egg",tier:"legend"},
{r:"Orserk",p1:"Orserk",p2:"Orserk",desc:"Thunder Dragon Egg",tier:"legend"},
{r:"Shadowbeak",p1:"Shadowbeak",p2:"Shadowbeak",desc:"Nightmare Egg",tier:"legend"},
{r:"Paladius",p1:"Paladius",p2:"Paladius",desc:"Saint Beast Egg",tier:"legend"},
{r:"Necromus",p1:"Necromus",p2:"Necromus",desc:"Black Knight Egg",tier:"legend"},
{r:"Frostallion",p1:"Frostallion",p2:"Frostallion",desc:"Ice Steed Egg",tier:"legend"},
{r:"Jetragon",p1:"Jetragon",p2:"Jetragon",desc:"Sky Dragon Egg",tier:"legend"},
{r:"Relaxaurus Lux",p1:"Relaxaurus",p2:"Sparkit",desc:"Electricity + Water Egg",tier:"meta"},
{r:"Mossanda Lux",p1:"Mossanda",p2:"Grizzbolt",desc:"Electricity + Grass Egg",tier:"meta"},
{r:"Vanwyrm Cryst",p1:"Vanwyrm",p2:"Foxcicle",desc:"Ice + Fire Egg",tier:"meta"},
{r:"Incineram Noct",p1:"Incineram",p2:"Maraith",desc:"Dark + Fire Egg",tier:"meta"},
{r:"Pyrin Noct",p1:"Pyrin",p2:"Katress",desc:"Dark + Fire Egg",tier:"meta"},
{r:"Frostallion Noct",p1:"Frostallion",p2:"Helzephyr",desc:"Dark + Ice Egg",tier:"legend"},
{r:"Katress Ignis",p1:"Katress",p2:"Wixen",desc:"Female Katress + Male Wixen",tier:"meta"},
{r:"Wixen Noct",p1:"Male Katress",p2:"Female Wixen",desc:"Male Katress + Female Wixen",tier:"meta"},
{r:"Jormuntide Ignis",p1:"Relaxaurus Lux",p2:"Jormuntide",desc:"Kindling Lv7 Dragon",tier:"meta"},
{r:"Lyleen Noct",p1:"Lyleen",p2:"Incineram Noct",desc:"Handiwork + Gathering + Med",tier:"strong"},
{r:"Helzephyr Lux",p1:"Helzephyr",p2:"Rayhound",desc:"Electricity Lv4 + Transport",tier:"strong"},
{r:"Surfent Terra",p1:"Surfent",p2:"Maraith",desc:"Ground + Water Egg",tier:"strong"},
{r:"Mau Cryst",p1:"Mau",p2:"Pengullet Lux",desc:"Ice + Dark Egg",tier:"good"},
{r:"Pengullet Lux",p1:"Pengullet",p2:"Jolthog",desc:"Electric + Ice Egg",tier:"good"},
{r:"Foxparks Cryst",p1:"Foxparks",p2:"Jolthog Cryst",desc:"Ice + Fire Egg",tier:"good"},
{r:"Hangyu Cryst",p1:"Hangyu",p2:"Bristla",desc:"Ice + Ground Egg",tier:"good"},
{r:"Croajiro Noct",p1:"Croajiro",p2:"Hoocrates",desc:"Dark + Neutral Egg",tier:"good"},
{r:"Gobfin Ignis",p1:"Gobfin",p2:"Rushoar",desc:"Fire + Water Egg",tier:"good"},
{r:"Leezpunk Ignis",p1:"Leezpunk",p2:"Flambelle",desc:"Fire + Dark Egg",tier:"good"},
{r:"Robinquill Terra",p1:"Robinquill",p2:"Rushoar",desc:"Ground + Grass Egg",tier:"good"},
{r:"Ribbuny Botan",p1:"Ribbuny",p2:"Tanzee",desc:"Grass + Neutral Egg",tier:"good"},
{r:"Broncherry Aqua",p1:"Broncherry",p2:"Fuack",desc:"Water + Grass Egg",tier:"good"},
{r:"Ice Reptyro",p1:"Reptyro",p2:"Foxcicle",desc:"Ice + Fire Egg",tier:"strong"},
{r:"Kingpaca Cryst",p1:"Kingpaca",p2:"Hangyu Cryst",desc:"Ice + Neutral Egg",tier:"strong"},
{r:"Petallia Ignis",p1:"Petallia",p2:"Kitsun",desc:"Fire + Grass Egg",tier:"strong"},
{r:"Eikthyrdeer Terra",p1:"Eikthyrdeer",p2:"Gobfin",desc:"Ground + Neutral Egg",tier:"good"},
{r:"Eikthyrdeer Terra",p1:"Eikthyrdeer",p2:"Dumud",desc:"Ground + Neutral Egg",tier:"good"},
{r:"Dinossom Lux",p1:"Dinossom",p2:"Mossanda Lux",desc:"Electric + Grass Egg",tier:"strong"},
{r:"Bushi Noct",p1:"Bushi",p2:"Leezpunk",desc:"Dark + Fire Egg",tier:"strong"},
{r:"Caprity Noct",p1:"Caprity",p2:"Loupmoon",desc:"Dark + Grass Egg",tier:"strong"},
{r:"Loupmoon Cryst",p1:"Loupmoon",p2:"Jolthog Cryst",desc:"Ice + Dark Egg",tier:"strong"},
{r:"Woolipop Terra",p1:"Woolipop",p2:"Eikthyrdeer Terra",desc:"Ground + Neutral Egg",tier:"strong"},
{r:"Beakon Cryst",p1:"Beakon",p2:"Vanwyrm Cryst",desc:"Ice + Electric Egg",tier:"strong"},
{r:"Fenglope Lux",p1:"Fenglope",p2:"Rayhound",desc:"Electric + Neutral Egg",tier:"strong"},
{r:"Faleris Aqua",p1:"Faleris",p2:"Suzaku Aqua",desc:"Water + Fire Egg",tier:"strong"},
{r:"Suzaku Aqua",p1:"Suzaku",p2:"Surfent",desc:"Water + Fire Egg",tier:"strong"},
{r:"Celesdir Noct",p1:"Celesdir",p2:"Helzephyr",desc:"Dark + Dragon Egg",tier:"strong"},
{r:"Dualith Noct",p1:"Dualith",p2:"Nox",desc:"Dark + Neutral Egg",tier:"strong"},
{r:"Bushi Noct",p1:"Bushi",p2:"Galeclaw",desc:"Dark + Fire Egg",tier:"strong"},
{r:"Incineram Noct",p1:"Incineram",p2:"Bushi",desc:"Dark + Fire Egg",tier:"strong"},
{r:"Caprity Noct",p1:"Caprity",p2:"Depresso",desc:"Dark + Grass Egg",tier:"strong"},
{r:"Pyrin Noct",p1:"Pyrin",p2:"Leezpunk Ignis",desc:"Dark + Fire Egg",tier:"strong"},
{r:"Wixen Noct",p1:"Wixen",p2:"Flambelle",desc:"Dark + Fire Egg",tier:"strong"},
{r:"Lyleen Noct",p1:"Lyleen",p2:"Loupmoon",desc:"Dark + Grass Egg",tier:"strong"},
{r:"Beakon Cryst",p1:"Beakon",p2:"Rayhound Cryst",desc:"Ice + Electric Egg",tier:"strong"},
{r:"Ice Kingpaca",p1:"Kingpaca",p2:"Reptyro Cryst",desc:"Ice + Neutral Egg",tier:"strong"},
{r:"Reptyro Cryst",p1:"Reptyro",p2:"Vanwyrm Cryst",desc:"Ice + Fire Egg",tier:"strong"},
{r:"Foxparks Cryst",p1:"Foxparks",p2:"Bristla",desc:"Ice + Fire Egg",tier:"good"},
{r:"Jolthog Cryst",p1:"Jolthog",p2:"Pengullet",desc:"Ice + Electric Egg",tier:"good"},
{r:"Hangyu Cryst",p1:"Hangyu",p2:"Bristla",desc:"Ice + Ground Egg",tier:"good"},
{r:"Mau Cryst",p1:"Mau",p2:"Hangyu Cryst",desc:"Ice + Dark Egg",tier:"good"},
{r:"Mau Cryst",p1:"Mau",p2:"Pengullet Lux",desc:"Ice + Dark Egg",tier:"good"},
{r:"Pengullet Lux",p1:"Pengullet",p2:"Kelpsea",desc:"Electric + Ice Egg",tier:"good"},
{r:"Gobfin Ignis",p1:"Gobfin",p2:"Fuddler",desc:"Fire + Water Egg",tier:"good"},
{r:"Flambelle",p1:"Foxparks",p2:"Fuack",desc:"Fire + Water Egg",tier:"good"},
{r:"Fuack Ignis",p1:"Fuack",p2:"Tanzee",desc:"Fire + Water Egg",tier:"good"},
{r:"Kelpsea Ignis",p1:"Kelpsea",p2:"Tanzee",desc:"Fire + Water Egg",tier:"good"},
{r:"Leezpunk Ignis",p1:"Leezpunk",p2:"Depresso",desc:"Fire + Dark Egg",tier:"good"},
{r:"Flambelle",p1:"Flambelle",p2:"Flambelle",desc:"Fire Egg",tier:"good"},
{r:"Tanzee Ignis",p1:"Tanzee",p2:"Foxparks",desc:"Fire + Grass Egg",tier:"good"},
{r:"Herbil",p1:"Herbil",p2:"Herbil",desc:"Grass Egg",tier:"good"},
{r:"Clovee",p1:"Clovee",p2:"Clovee",desc:"Grass Egg",tier:"good"},
{r:"Pupperai",p1:"Pupperai",p2:"Pupperai",desc:"Neutral Egg",tier:"good"},
{r:"Dogen",p1:"Dogen",p2:"Dogen",desc:"Neutral Egg",tier:"good"},
{r:"Nyafia",p1:"Nyafia",p2:"Nyafia",desc:"Dark Egg",tier:"good"},
{r:"Knocklem",p1:"Knocklem",p2:"Knocklem",desc:"Ground Egg",tier:"strong"},
{r:"Starryon",p1:"Starryon",p2:"Starryon",desc:"Neutral Egg",tier:"strong"},
{r:"Sekhmet",p1:"Sekhmet",p2:"Sekhmet",desc:"Fire Egg",tier:"strong"},
{r:"Flaracle",p1:"Flaracle",p2:"Flaracle",desc:"Fire Egg",tier:"strong"},
{r:"Renjishi",p1:"Renjishi",p2:"Renjishi",desc:"Fire Egg",tier:"strong"},
{r:"Solenne",p1:"Solenne",p2:"Solenne",desc:"Fire Egg",tier:"strong"},
{r:"Mimog",p1:"Mimog",p2:"Mimog",desc:"Neutral Egg",tier:"legend"},
{r:"Aegidron",p1:"Aegidron",p2:"Aegidron",desc:"Dragon Egg",tier:"strong"},
{r:"Ophydia",p1:"Ophydia",p2:"Ophydia",desc:"Water Egg",tier:"strong"},
{r:"Celesdir",p1:"Celesdir",p2:"Celesdir",desc:"Dragon Egg",tier:"strong"},
{r:"Gildane",p1:"Gildane",p2:"Gildane",desc:"Dragon Egg",tier:"strong"},
{r:"Dandilord",p1:"Dandilord",p2:"Dandilord",desc:"Fire Egg",tier:"strong"},
{r:"Hartalis",p1:"Hartalis",p2:"Hartalis",desc:"Dragon Egg",tier:"legend"},
{r:"Shaolong",p1:"Shaolong",p2:"Shaolong",desc:"Water Egg",tier:"legend"},
{r:"Silvance",p1:"Silvance",p2:"Silvance",desc:"Dragon Egg",tier:"legend"},
{r:"Panthalus",p1:"Panthalus",p2:"Panthalus",desc:"Ice Egg",tier:"legend"},
{r:"Xenovader",p1:"Xenovader",p2:"Xenovader",desc:"Dark Egg",tier:"legend"},
{r:"Xenolord",p1:"Xenolord",p2:"Xenolord",desc:"Dark Egg",tier:"legend"},

// ═══════════════════════════════════════════════════════════════════════════════
// EXPANDED CROSS-SPECIES COMBOS (1.0 Verified)
// ═══════════════════════════════════════════════════════════════════════════════

// ─── ANUBIS ALTERNATIVES ───
{r:"Anubis",p1:"Frostallion",p2:"Moldron",desc:"Alternative",tier:"meta"},
{r:"Anubis",p1:"Jetragon",p2:"Bushi Noct",desc:"Alternative",tier:"meta"},
{r:"Anubis",p1:"Paladius",p2:"Moldron",desc:"Alternative",tier:"meta"},
{r:"Anubis",p1:"Necromus",p2:"Moldron",desc:"Alternative",tier:"meta"},
{r:"Anubis",p1:"Orserk",p2:"Splatterina",desc:"Alternative",tier:"meta"},
{r:"Anubis",p1:"Selyne",p2:"Silvegis",desc:"Alternative",tier:"meta"},
{r:"Anubis",p1:"Wumpo",p2:"Jetragon",desc:"Alternative",tier:"meta"},

// ─── JORMUNTIDE ALTERNATIVES ───
{r:"Jormuntide",p1:"Relaxaurus",p2:"Suzaku Aqua",desc:"Alternative",tier:"meta"},
{r:"Jormuntide",p1:"Blazamut",p2:"Mossanda",desc:"Alternative",tier:"meta"},
{r:"Jormuntide",p1:"Cryolinx",p2:"Relaxaurus Lux",desc:"Alternative",tier:"meta"},
{r:"Jormuntide",p1:"Suzaku",p2:"Warsect",desc:"Alternative",tier:"meta"},
{r:"Jormuntide",p1:"Orserk",p2:"Relaxaurus",desc:"Alternative",tier:"meta"},

// ─── JORMUNTIDE IGNIS ALTERNATIVES ───
{r:"Jormuntide Ignis",p1:"Suzaku",p2:"Relaxaurus",desc:"Alternative",tier:"meta"},
{r:"Jormuntide Ignis",p1:"Blazamut",p2:"Relaxaurus",desc:"Alternative",tier:"meta"},
{r:"Jormuntide Ignis",p1:"Astegon",p2:"Relaxaurus Lux",desc:"Alternative",tier:"meta"},

// ─── SUZAKU ALTERNATIVES ───
{r:"Suzaku",p1:"Blazamut",p2:"Mossanda",desc:"Alternative",tier:"meta"},
{r:"Suzaku",p1:"Pyrin",p2:"Blazamut",desc:"Alternative",tier:"meta"},
{r:"Suzaku",p1:"Elizabee",p2:"Suzaku",desc:"Alternative",tier:"meta"},

// ─── BLAZAMUT ALTERNATIVES ───
{r:"Blazamut",p1:"Pyrin",p2:"Astegon",desc:"Alternative",tier:"meta"},
{r:"Blazamut",p1:"Orserk",p2:"Relaxaurus",desc:"Alternative",tier:"meta"},
{r:"Blazamut",p1:"Cryolinx",p2:"Helzephyr",desc:"Alternative",tier:"meta"},
{r:"Blazamut",p1:"Elizabee",p2:"Suzaku",desc:"Alternative",tier:"meta"},

// ─── ASTEGON ALTERNATIVES ───
{r:"Astegon",p1:"Cryolinx",p2:"Helzephyr",desc:"Alternative",tier:"meta"},
{r:"Astegon",p1:"Grizzbolt",p2:"Chillet",desc:"Alternative",tier:"meta"},
{r:"Astegon",p1:"Cryolinx",p2:"Grizzbolt",desc:"Alternative",tier:"meta"},
{r:"Astegon",p1:"Menasting",p2:"Helzephyr",desc:"Alternative",tier:"meta"},

// ─── LYLEEN ALTERNATIVES ───
{r:"Lyleen",p1:"Elizabee",p2:"Suzaku",desc:"Alternative",tier:"meta"},
{r:"Lyleen",p1:"Petallia",p2:"Quivern",desc:"Alternative",tier:"meta"},

// ─── LYLEEN NOCT ALTERNATIVES ───
{r:"Lyleen Noct",p1:"Lyleen",p2:"Loupmoon",desc:"Alternative",tier:"strong"},
{r:"Lyleen Noct",p1:"Lyleen",p2:"Bushi Noct",desc:"Alternative",tier:"strong"},

// ─── SIBELYX ALTERNATIVES ───
{r:"Sibelyx",p1:"Penking",p2:"Blazehowl",desc:"Alternative",tier:"meta"},

// ─── KNOCKLEM ALTERNATIVES ───
{r:"Knocklem",p1:"Warsect Terra",p2:"Anubis",desc:"Alternative",tier:"meta"},
{r:"Knocklem",p1:"Digtoise",p2:"Menasting",desc:"Alternative",tier:"meta"},

// ─── CELESDIR ALTERNATIVES ───
{r:"Celesdir",p1:"Celesdir",p2:"Helzephyr",desc:"Alternative",tier:"strong"},
{r:"Celesdir",p1:"Celesdir",p2:"Shadowbeak",desc:"Alternative",tier:"strong"},

// ─── CELESDIR NOCT ALTERNATIVES ───
{r:"Celesdir Noct",p1:"Celesdir",p2:"Orserk",desc:"Alternative",tier:"meta"},

// ─── MENASTING ALTERNATIVES ───
{r:"Menasting",p1:"Menasting",p2:"Anubis",desc:"Alternative",tier:"strong"},
{r:"Menasting",p1:"Helzephyr",p2:"Digtoise",desc:"Alternative",tier:"strong"},

// ─── FALERIS ALTERNATIVES ───
{r:"Faleris",p1:"Pyrin",p2:"Ragnahawk",desc:"Alternative",tier:"meta"},
{r:"Faleris",p1:"Blazamut",p2:"Nitewing",desc:"Alternative",tier:"meta"},

// ─── PYRIN ALTERNATIVES ───
{r:"Pyrin",p1:"Pyrin",p2:"Blazamut",desc:"Alternative",tier:"strong"},
{r:"Pyrin",p1:"Chillet",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── PYRIN NOCT ALTERNATIVES ───
{r:"Pyrin Noct",p1:"Pyrin",p2:"Leezpunk Ignis",desc:"Alternative",tier:"strong"},

// ─── BEAKON ALTERNATIVES ───
{r:"Beakon",p1:"Cryolinx",p2:"Helzephyr",desc:"Alternative",tier:"strong"},
{r:"Beakon",p1:"Sweepa",p2:"Beakon",desc:"Alternative",tier:"strong"},

// ─── KATRESS IGNIS ALTERNATIVES ───
{r:"Katress Ignis",p1:"Katress",p2:"Flambelle",desc:"Alternative",tier:"meta"},

// ─── HELZEPHYR LUX ALTERNATIVES ───
{r:"Helzephyr Lux",p1:"Helzephyr",p2:"Orserk",desc:"Alternative",tier:"strong"},

// ─── ORSERK ALTERNATIVES ───
{r:"Orserk",p1:"Wispaw",p2:"Orserk",desc:"Alternative",tier:"legend"},

// ─── RELAXAURUS LUX ALTERNATIVES ───
{r:"Relaxaurus Lux",p1:"Relaxaurus",p2:"Mossanda Lux",desc:"Alternative",tier:"meta"},
{r:"Relaxaurus Lux",p1:"Relaxaurus",p2:"Orserk",desc:"Alternative",tier:"meta"},

// ─── MOSSANDA LUX ALTERNATIVES ───
{r:"Mossanda Lux",p1:"Mossanda",p2:"Orserk",desc:"Alternative",tier:"meta"},

// ─── VANWYRM CRYST ALTERNATIVES ───
{r:"Vanwyrm Cryst",p1:"Vanwyrm",p2:"Bristla",desc:"Alternative",tier:"meta"},

// ─── INCINERAM NOCT ALTERNATIVES ───
{r:"Incineram Noct",p1:"Incineram",p2:"Bushi",desc:"Alternative",tier:"meta"},
{r:"Incineram Noct",p1:"Incineram",p2:"Leezpunk Ignis",desc:"Alternative",tier:"meta"},

// ─── BUSHI NOCT ALTERNATIVES ───
{r:"Bushi Noct",p1:"Bushi",p2:"Shadowbeak",desc:"Alternative",tier:"strong"},

// ─── FROSTALLION NOCT ALTERNATIVES ───
{r:"Frostallion Noct",p1:"Frostallion",p2:"Shadowbeak",desc:"Alternative",tier:"legend"},

// ─── KINGPACA CRYST ALTERNATIVES ───
{r:"Kingpaca Cryst",p1:"Kingpaca",p2:"Mau Cryst",desc:"Alternative",tier:"strong"},

// ─── ICE KINGPACA ALTERNATIVES ───
{r:"Ice Kingpaca",p1:"Kingpaca",p2:"Foxcicle",desc:"Alternative",tier:"strong"},

// ─── MAMMOREST CRYST ALTERNATIVES ───
{r:"Mammorest Cryst",p1:"Mammorest",p2:"Chillet",desc:"Alternative",tier:"strong"},
{r:"Mammorest Cryst",p1:"Mammorest",p2:"Foxcicle",desc:"Alternative",tier:"strong"},

// ─── WUMPO BOTAN ALTERNATIVES ───
{r:"Wumpo Botan",p1:"Wumpo",p2:"Elizabee",desc:"Alternative",tier:"strong"},

// ─── DINOSSOM LUX ALTERNATIVES ───
{r:"Dinossom Lux",p1:"Dinossom",p2:"Grizzbolt",desc:"Alternative",tier:"strong"},

// ─── CHILLET IGNIS ALTERNATIVES ───
{r:"Chillet Ignis",p1:"Chillet",p2:"Foxparks",desc:"Alternative",tier:"strong"},
{r:"Chillet Ignis",p1:"Chillet",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── ELPHIDRAN AQUA ALTERNATIVES ───
{r:"Elphidran Aqua",p1:"Elphidran",p2:"Surfent",desc:"Alternative",tier:"strong"},

// ─── PETALLIA IGNIS ALTERNATIVES ───
{r:"Petallia Ignis",p1:"Petallia",p2:"Foxparks",desc:"Alternative",tier:"strong"},

// ─── KITSUN NOCT ALTERNATIVES ───
{r:"Kitsun Noct",p1:"Kitsun",p2:"Daedream",desc:"Alternative",tier:"strong"},

// ─── SUZAKU AQUA ALTERNATIVES ───
{r:"Suzaku Aqua",p1:"Suzaku",p2:"Azurobe",desc:"Alternative",tier:"strong"},

// ─── QUVERN ALTERNATIVES ───
{r:"Quivern",p1:"Suzaku",p2:"Quivern",desc:"Alternative",tier:"strong"},

// ─── QUVERN BOTAN ALTERNATIVES ───
{r:"Quivern Botan",p1:"Quivern",p2:"Elizabee",desc:"Alternative",tier:"strong"},

// ─── FENGLOPE LUX ALTERNATIVES ───
{r:"Fenglope Lux",p1:"Fenglope",p2:"Orserk",desc:"Alternative",tier:"strong"},

// ─── WARSECT TERRA ALTERNATIVES ───
{r:"Warsect Terra",p1:"Warsect",p2:"Rushoar",desc:"Alternative",tier:"strong"},

// ─── UNIVOLT CRYST ALTERNATIVES ───
{r:"Univolt Cryst",p1:"Univolt",p2:"Moldron Cryst",desc:"Alternative",tier:"meta"},

// ─── ELGROVE CRYST ALTERNATIVES ───
{r:"Elgrove Cryst",p1:"Elgrove",p2:"Foxcicle",desc:"Alternative",tier:"strong"},

// ─── SHROOMER NOCT ALTERNATIVES ───
{r:"Shroomer Noct",p1:"Shroomer",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── SOOTSEER ALTERNATIVES ───
{r:"Sootseer",p1:"Flambelle",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── LOOMEN ALTERNATIVES ───
{r:"Loomen",p1:"Blazehowl",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── MAJEX ALTERNATIVES ───
{r:"Majex",p1:"Blazehowl",p2:"Katress",desc:"Alternative",tier:"strong"},

// ─── WISPAW ALTERNATIVES ───
{r:"Wispaw",p1:"Depresso",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── FROSTPLUME ALTERNATIVES ───
{r:"Frostplume",p1:"Swee",p2:"Beakon",desc:"Alternative",tier:"strong"},

// ─── PRUNELIA ALTERNATIVES ───
{r:"Prunelia",p1:"Petallia",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── TROPICAW ALTERNATIVES ───
{r:"Tropicaw",p1:"Tanzee",p2:"Cinnamoth",desc:"Alternative",tier:"strong"},

// ─── DYNAMOFF ALTERNATIVES ───
{r:"Dynamoff",p1:"Rayhound",p2:"Rayhound",desc:"Alternative",tier:"strong"},

// ─── SOLMORA ALTERNATIVES ───
{r:"Solmora",p1:"Swee",p2:"Cinnamoth",desc:"Alternative",tier:"strong"},

// ─── SOLMORA LUX ALTERNATIVES ───
{r:"Solmora Lux",p1:"Solmora",p2:"Rayhound",desc:"Alternative",tier:"strong"},

// ─── LAPURE ALTERNATIVES ───
{r:"Lapure",p1:"Lifmunk",p2:"Nitewing",desc:"Alternative",tier:"strong"},

// ─── BASTIGOR ALTERNATIVES ───
{r:"Bastigor",p1:"Aegidron",p2:"Bastigor",desc:"Alternative",tier:"meta"},
{r:"Bastigor",p1:"Neptilius",p2:"Bastigor",desc:"Alternative",tier:"meta"},

// ─── SELYNE ALTERNATIVES ───
{r:"Selyne",p1:"Anubis",p2:"Selyne",desc:"Alternative",tier:"meta"},
{r:"Selyne",p1:"Silvegis",p2:"Celesdir",desc:"Alternative",tier:"meta"},

// ─── RENJISHI ALTERNATIVES ───
{r:"Renjishi",p1:"Blazamut",p2:"Neptilius",desc:"Alternative",tier:"meta"},
{r:"Renjishi",p1:"Blazamut Ryu",p2:"Neptilius",desc:"Alternative",tier:"meta"},

// ─── SOLENNE ALTERNATIVES ───
{r:"Solenne",p1:"Jormuntide Ignis",p2:"Flaracle",desc:"Alternative",tier:"meta"},
{r:"Solenne",p1:"Dandilord",p2:"Ghangler Ignis",desc:"Alternative",tier:"meta"},

// ─── STARRYON ALTERNATIVES ───
{r:"Starryon",p1:"Kingpaca",p2:"Quivern",desc:"Alternative",tier:"strong"},

// ─── SEKHMET ALTERNATIVES ───
{r:"Sekhmet",p1:"Anubis",p2:"Blazehowl",desc:"Alternative",tier:"strong"},
{r:"Sekhmet",p1:"Anubis",p2:"Reptyro",desc:"Alternative",tier:"strong"},

// ─── FLARACLE ALTERNATIVES ───
{r:"Flaracle",p1:"Reptyro",p2:"Ragnahawk",desc:"Alternative",tier:"strong"},
{r:"Flaracle",p1:"Blazamut",p2:"Neptilius",desc:"Alternative",tier:"strong"},

// ─── NYAFIA ALTERNATIVES ───
{r:"Nyafia",p1:"Shadowbeak",p2:"Bushi",desc:"Alternative",tier:"strong"},

// ─── AEGIDRON ALTERNATIVES ───
{r:"Aegidron",p1:"Bastigor",p2:"Shaolong",desc:"Alternative",tier:"strong"},
{r:"Aegidron",p1:"Jetragon",p2:"Silvance",desc:"Alternative",tier:"strong"},

// ─── OPHYDIA ALTERNATIVES ───
{r:"Ophydia",p1:"Jormuntide",p2:"Elizabee",desc:"Alternative",tier:"strong"},

// ─── DUALITH ALTERNATIVES ───
{r:"Dualith",p1:"Digtoise",p2:"Sootseer",desc:"Alternative",tier:"strong"},

// ─── DUALITH NOCT ALTERNATIVES ───
{r:"Dualith Noct",p1:"Dualith",p2:"Daedream",desc:"Alternative",tier:"strong"},

// ─── PRIPTER ALTERNATIVES ───
{r:"Prixter",p1:"Helzephyr",p2:"Digtoise",desc:"Alternative",tier:"strong"},

// ─── PRIPTER LUX ALTERNATIVES ───
{r:"Prixter Lux",p1:"Prixter",p2:"Orserk",desc:"Alternative",tier:"strong"},

// ─── TETROISE ALTERNATIVES ───
{r:"Tetroise",p1:"Digtoise",p2:"Rushoar",desc:"Alternative",tier:"strong"},

// ─── MOLDRON ALTERNATIVES ───
{r:"Moldron",p1:"Digtoise",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── MOLDRON CRYST ALTERNATIVES ───
{r:"Moldron Cryst",p1:"Moldron",p2:"Foxcicle",desc:"Alternative",tier:"strong"},

// ─── MIMOG ALTERNATIVES ───
{r:"Mimog",p1:"Lamball",p2:"Cattiva",desc:"Alternative",tier:"strong"},

// ─── OMASCOMB ALTERNATIVES ───
{r:"Omascul",p1:"Hoocrates",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── BAKEMI ALTERNATIVES ───
{r:"Bakemi",p1:"Daedream",p2:"Cinnamoth",desc:"Alternative",tier:"strong"},

// ─── BRALOHA ALTERNATIVES ───
{r:"Braloha",p1:"Tanzee",p2:"Rushoar",desc:"Alternative",tier:"strong"},

// ─── NITEMARY ALTERNATIVES ───
{r:"Nitemary",p1:"Helzephyr",p2:"Cinnamoth",desc:"Alternative",tier:"strong"},

// ─── NITEMARY BOTAN ALTERNATIVES ───
{r:"Nitemary Botan",p1:"Nitemary",p2:"Lifmunk",desc:"Alternative",tier:"strong"},

// ─── SMOKIE CRYST ALTERNATIVES ───
{r:"Smokie Cryst",p1:"Smokie",p2:"Chillet",desc:"Alternative",tier:"strong"},

// ─── WHALASKA ALTERNATIVES ───
{r:"Whalaska",p1:"Relaxaurus",p2:"Chillet",desc:"Alternative",tier:"strong"},

// ─── WHALASKA IGNIS ALTERNATIVES ───
{r:"Whalaska Ignis",p1:"Whalaska",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── ELIDROLON ALTERNATIVES ───
{r:"Eidrolon",p1:"Relaxaurus",p2:"Helzephyr",desc:"Alternative",tier:"strong"},

// ─── ELIDROLON IGNIS ALTERNATIVES ───
{r:"Eidrolon Ignis",p1:"Eidrolon",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── KNOCKLEM IGNIS ALTERNATIVES ───
{r:"Knocklem Ignis",p1:"Knocklem",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── MENASTING TERRA ALTERNATIVES ───
{r:"Menasting Terra",p1:"Menasting",p2:"Dumud",desc:"Alternative",tier:"strong"},

// ─── PETALLIA IGNIS ALTERNATIVES (ADDITIONAL) ───
{r:"Petallia Ignis",p1:"Petallia",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── CHILLET IGNIS ALTERNATIVES (ADDITIONAL) ───
{r:"Chillet Ignis",p1:"Chillet",p2:"Rooby",desc:"Alternative",tier:"strong"},

// ─── ELPHIDRAN AQUA ALTERNATIVES (ADDITIONAL) ───
{r:"Elphidran Aqua",p1:"Elphidran",p2:"Pengullet",desc:"Alternative",tier:"strong"},

// ─── KITSUN NOCT ALTERNATIVES (ADDITIONAL) ───
{r:"Kitsun Noct",p1:"Kitsun",p2:"Depresso",desc:"Alternative",tier:"strong"},

// ─── BUSHI NOCT ALTERNATIVES (ADDITIONAL) ───
{r:"Bushi Noct",p1:"Bushi",p2:"Daedream",desc:"Alternative",tier:"strong"},

// ─── CELESDIR ALTERNATIVES (ADDITIONAL) ───
{r:"Celesdir",p1:"Celesdir",p2:"Kitsun Noct",desc:"Alternative",tier:"strong"},

// ─── SOLENNE ALTERNATIVES (ADDITIONAL) ───
{r:"Solenne",p1:"Jormuntide Ignis",p2:"Ghangler Ignis",desc:"Alternative",tier:"meta"},

// ─── WISTELLA ALTERNATIVES ───
{r:"Wistella",p1:"Beegarde",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── MYCOMB ALTERNATIVES ───
{r:"Mycora",p1:"Killamari",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── LULU ALTERNATIVES ───
{r:"Lullu",p1:"Petallia",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── DOGEN ALTERNATIVES ───
{r:"Dogen",p1:"Lamball",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── YAKUMO ALTERNATIVES ───
{r:"Yakumo",p1:"Cremis",p2:"Mossanda",desc:"Alternative",tier:"good"},

// ─── AZURMANE ALTERNATIVES ───
{r:"Azurmane",p1:"Rayhound",p2:"Chillet",desc:"Alternative",tier:"strong"},

// ─── SKUTLASS ALTERNATIVES ───
{r:"Skutlass",p1:"Relaxaurus",p2:"Digtoise",desc:"Alternative",tier:"strong"},

// ─── SKUTLASS IGNIS ALTERNATIVES ───
{r:"Skutlass Ignis",p1:"Skutlass",p2:"Arsox",desc:"Alternative",tier:"strong"},

// ─── PIERDON ALTERNATIVES ───
{r:"Pierdon",p1:"Digtoise",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── PIERDON CRYST ALTERNATIVES ───
{r:"Pierdon Cryst",p1:"Pierdon",p2:"Chillet",desc:"Alternative",tier:"strong"},

// ─── GILDRA ALTERNATIVES ───
{r:"Gildra",p1:"Digtoise",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── SPLATTERINA ALTERNATIVES ───
{r:"Splatterina",p1:"Daedream",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── SILVEGIS ALTERNATIVES ───
{r:"Silvegis",p1:"Chillet",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── ROUJAY ALTERNATIVES ───
{r:"Roujay",p1:"Daedream",p2:"Helzephyr",desc:"Alternative",tier:"strong"},

// ─── DUPIN ALTERNATIVES ───
{r:"Dupin",p1:"Pengullet",p2:"Nitewing",desc:"Alternative",tier:"strong"},

// ─── DAZEMU ALTERNATIVES ───
{r:"Dazemu",p1:"Digtoise",p2:"Cremis",desc:"Alternative",tier:"good"},

// ─── VENUSA ALTERNATIVES ───
{r:"Venusa",p1:"Chikipi",p2:"Mossanda",desc:"Alternative",tier:"strong"},

// ─── MORE WOOLIPOP TERRA ALTERNATIVES ───
{r:"Woolipop Terra",p1:"Woolipop",p2:"Rushoar",desc:"Alternative",tier:"strong"},

// ─── MORE CAPRITY NOCT ALTERNATIVES ───
{r:"Caprity Noct",p1:"Caprity",p2:"Depresso",desc:"Alternative",tier:"strong"},

// ─── MORE LOUPMOON CRYST ALTERNATIVES ───
{r:"Loupmoon Cryst",p1:"Loupmoon",p2:"Mau Cryst",desc:"Alternative",tier:"strong"},

// ─── MORE RIBBUNY BOTAN ALTERNATIVES ───
{r:"Ribbuny Botan",p1:"Ribbuny",p2:"Lifmunk",desc:"Alternative",tier:"good"},

// ─── MORE TANZEE IGNIS ALTERNATIVES ───
{r:"Tanzee Ignis",p1:"Tanzee",p2:"Rooby",desc:"Alternative",tier:"good"},

// ─── MORE FUACK IGNIS ALTERNATIVES ───
{r:"Fuack Ignis",p1:"Fuack",p2:"Foxparks",desc:"Alternative",tier:"good"},

// ─── MORE KELPSEA IGNIS ALTERNATIVES ───
{r:"Kelpsea Ignis",p1:"Kelpsea",p2:"Foxparks",desc:"Alternative",tier:"good"},

// ─── MORE PENGULLET LUX ALTERNATIVES ───
{r:"Pengullet Lux",p1:"Pengullet",p2:"Sparkit",desc:"Alternative",tier:"good"},

// ─── MORE JOLTHOG CRYST ALTERNATIVES ───
{r:"Jolthog Cryst",p1:"Jolthog",p2:"Bristla",desc:"Alternative",tier:"good"},

// ─── MORE FOXPARKS CRYST ALTERNATIVES ───
{r:"Foxparks Cryst",p1:"Foxparks",p2:"Mau Cryst",desc:"Alternative",tier:"good"},

// ─── MORE HANGYU CRYST ALTERNATIVES ───
{r:"Hangyu Cryst",p1:"Hangyu",p2:"Mau Cryst",desc:"Alternative",tier:"good"},

// ─── MORE MAU CRYST ALTERNATIVES ───
{r:"Mau Cryst",p1:"Mau",p2:"Jolthog Cryst",desc:"Alternative",tier:"good"},

// ─── MORE GOBFIN IGNIS ALTERNATIVES ───
{r:"Gobfin Ignis",p1:"Gobfin",p2:"Fuddler",desc:"Alternative",tier:"good"},

// ─── MORE LEEZPUNK IGNIS ALTERNATIVES ───
{r:"Leezpunk Ignis",p1:"Leezpunk",p2:"Depresso",desc:"Alternative",tier:"good"},

// ─── MORE ROBINQUILL TERRA ALTERNATIVES ───
{r:"Robinquill Terra",p1:"Robinquill",p2:"Dumud",desc:"Alternative",tier:"good"},

// ─── MORE EIKTHYRDEER TERRA ALTERNATIVES ───
{r:"Eikthyrdeer Terra",p1:"Eikthyrdeer",p2:"Rushoar",desc:"Alternative",tier:"good"},

// ─── MORE BRONCHERRY AQUA ALTERNATIVES ───
{r:"Broncherry Aqua",p1:"Broncherry",p2:"Pengullet",desc:"Alternative",tier:"good"},

// ─── MORE SURFENT TERRA ALTERNATIVES ───
{r:"Surfent Terra",p1:"Surfent",p2:"Rushoar",desc:"Alternative",tier:"strong"},

// ─── MORE BLAZEHOWL NOCT ALTERNATIVES ───
{r:"Blazehowl Noct",p1:"Blazehowl",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── MORE TURTACLE TERRA ALTERNATIVES ───
{r:"Turtacle Terra",p1:"Turtacle",p2:"Dumud",desc:"Alternative",tier:"strong"},

// ─── MORE POLAPUP TERRA ALTERNATIVES ───
{r:"Polapup Terra",p1:"Polapup",p2:"Fuddler",desc:"Alternative",tier:"good"},

// ─── MORE SNOCOMBS LUX ALTERNATIVES ───
{r:"Snock Lux",p1:"Snock",p2:"Orserk",desc:"Alternative",tier:"strong"},

// ─── MORE KILLAMARI PRIMO ALTERNATIVES ───
{r:"Killamari Primo",p1:"Killamari",p2:"Lamball",desc:"Alternative",tier:"good"},

// ─── MORE DAZZI NOCT ALTERNATIVES ───
{r:"Dazzi Noct",p1:"Dazzi",p2:"Daedream",desc:"Alternative",tier:"strong"},

// ─── MORE GORIRAT TERRA ALTERNATIVES ───
{r:"Gorirat Terra",p1:"Gorirat",p2:"Dumud",desc:"Alternative",tier:"strong"},

// ─── MORE LOUPMOON CRYS ALTERNATIVES ───
{r:"Loupmoon Cryst",p1:"Loupmoon",p2:"Mau Cryst",desc:"Alternative",tier:"strong"},

// ─── MORE RIBBUNY BOTAN ALTERNATIVES (ADDITIONAL) ───
{r:"Ribbuny Botan",p1:"Ribbuny",p2:"Lifmunk",desc:"Alternative",tier:"good"},

// ─── MORE TANZEE IGNIS ALTERNATIVES (ADDITIONAL) ───
{r:"Tanzee Ignis",p1:"Tanzee",p2:"Rooby",desc:"Alternative",tier:"good"},

// ─── MORE FUACK IGNIS ALTERNATIVES (ADDITIONAL) ───
{r:"Fuack Ignis",p1:"Fuack",p2:"Foxparks",desc:"Alternative",tier:"good"},

// ─── MORE KELPSEA IGNIS ALTERNATIVES (ADDITIONAL) ───
{r:"Kelpsea Ignis",p1:"Kelpsea",p2:"Foxparks",desc:"Alternative",tier:"good"},

// ─── MORE PENGULLET LUX ALTERNATIVES (ADDITIONAL) ───
{r:"Pengullet Lux",p1:"Pengullet",p2:"Sparkit",desc:"Alternative",tier:"good"},

// ─── MORE JOLTHOG CRYST ALTERNATIVES (ADDITIONAL) ───
{r:"Jolthog Cryst",p1:"Jolthog",p2:"Bristla",desc:"Alternative",tier:"good"},

// ─── MORE FOXPARKS CRYST ALTERNATIVES (ADDITIONAL) ───
{r:"Foxparks Cryst",p1:"Foxparks",p2:"Mau Cryst",desc:"Alternative",tier:"good"},

// ─── MORE HANGYU CRYST ALTERNATIVES (ADDITIONAL) ───
{r:"Hangyu Cryst",p1:"Hangyu",p2:"Mau Cryst",desc:"Alternative",tier:"good"},

// ─── MORE MAU CRYST ALTERNATIVES (ADDITIONAL) ───
{r:"Mau Cryst",p1:"Mau",p2:"Jolthog Cryst",desc:"Alternative",tier:"good"},

// ─── MORE GOBFIN IGNIS ALTERNATIVES (ADDITIONAL) ───
{r:"Gobfin Ignis",p1:"Gobfin",p2:"Fuddler",desc:"Alternative",tier:"good"},

// ─── MORE LEEZPUNK IGNIS ALTERNATIVES (ADDITIONAL) ───
{r:"Leezpunk Ignis",p1:"Leezpunk",p2:"Depresso",desc:"Alternative",tier:"good"},

// ─── MORE ROBINQUILL TERRA ALTERNATIVES (ADDITIONAL) ───
{r:"Robinquill Terra",p1:"Robinquill",p2:"Dumud",desc:"Alternative",tier:"good"},

// ─── MORE EIKTHYRDEER TERRA ALTERNATIVES (ADDITIONAL) ───
{r:"Eikthyrdeer Terra",p1:"Eikthyrdeer",p2:"Rushoar",desc:"Alternative",tier:"good"},

// ─── MORE BRONCHERRY AQUA ALTERNATIVES (ADDITIONAL) ───
{r:"Broncherry Aqua",p1:"Broncherry",p2:"Pengullet",desc:"Alternative",tier:"good"},

// ─── MORE SURFENT TERRA ALTERNATIVES (ADDITIONAL) ───
{r:"Surfent Terra",p1:"Surfent",p2:"Rushoar",desc:"Alternative",tier:"strong"},

// ─── MORE BLAZEHOWL NOCT ALTERNATIVES (ADDITIONAL) ───
{r:"Blazehowl Noct",p1:"Blazehowl",p2:"Nox",desc:"Alternative",tier:"strong"},

// ─── MORE TURTACLE TERRA ALTERNATIVES (ADDITIONAL) ───
{r:"Turtacle Terra",p1:"Turtacle",p2:"Dumud",desc:"Alternative",tier:"strong"},

// ─── MORE POLAPUP TERRA ALTERNATIVES (ADDITIONAL) ───
{r:"Polapup Terra",p1:"Polapup",p2:"Fuddler",desc:"Alternative",tier:"good"},

// ─── MORE SNOCOMBS LUX ALTERNATIVES (ADDITIONAL) ───
{r:"Snock Lux",p1:"Snock",p2:"Orserk",desc:"Alternative",tier:"strong"},

// ─── MORE KILLAMARI PRIMO ALTERNATIVES (ADDITIONAL) ───
{r:"Killamari Primo",p1:"Killamari",p2:"Lamball",desc:"Alternative",tier:"good"},

// ─── MORE DAZZI NOCT ALTERNATIVES (ADDITIONAL) ───
{r:"Dazzi Noct",p1:"Dazzi",p2:"Daedream",desc:"Alternative",tier:"strong"},

// ─── MORE GORIRAT TERRA ALTERNATIVES (ADDITIONAL) ───
{r:"Gorirat Terra",p1:"Gorirat",p2:"Dumud",desc:"Alternative",tier:"strong"}
];
