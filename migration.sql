DROP TABLE IF EXISTS homes;

CREATE TABLE homes(
   id            SERIAL PRIMARY KEY
  ,zipcode       VARCHAR(10) NOT NULL
  ,city          VARCHAR(19) NOT NULL
  ,streetname    VARCHAR(19) NOT NULL
  ,streetaddress VARCHAR(24) NOT NULL
  ,country       VARCHAR(37) NOT NULL
  ,state         VARCHAR(14) NOT NULL
  ,latitude      NUMERIC(8,4) NOT NULL
  ,longitude     NUMERIC(9,4) NOT NULL
);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('21223-2344','Lake Evansview','Sadie Vista','8920 Shana Ridges','Oman','California',61.0856,-14.1575);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('22212-3362','Cronachester','Ivy Station','465 Schroeder Square','Marshall Islands','Pennsylvania',-74.7011,-67.5002);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('69177','Shyannburgh','Kessler Center','8067 Wilderman Divide','Thailand','New Mexico',-57.8954,-137.5663);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('02340-7159','Aufderharchester','Marks Manor','42340 Lehner Curve','Liechtenstein','Alabama',-66.1777,-29.3467);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('57578','North Beryl','Zboncak Mall','740 Cordell Greens','Ukraine','Wisconsin',55.7897,129.6727);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('50289-4392','Kutchmouth','Rebeca Port','36670 Mosciski Parks','Russian Federation','Alabama',-80.4605,-94.8209);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('61276-3690','Rupertfort','Ethyl Harbor','24175 Gleason Turnpike','Falkland Islands (Malvinas)','Alaska',-5.0849,66.9455);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('59262-8741','Selenafurt','Delphia Roads','145 Olson Island','Tunisia','Wyoming',-38.9358,69.8320);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('39185-8325','New Christiana','Lea Lights','76347 Emiliano Hollow','Jersey','Montana',6.7997,152.5047);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('62764-5746','South Anissaton','Cruickshank Spur','6371 Korey Meadows','Dominica','Oklahoma',40.5384,-142.8847);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('96620','South Jonstad','Bethel Parks','1386 Corkery Brooks','Mongolia','Tennessee',44.8203,13.2872);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('06193','Lake Kenna','Darion Light','050 Ellsworth Dale','India','New Mexico',-6.4060,163.8885);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('90661','Cormierland','Arlene Wall','918 Hand Divide','Guam','Massachusetts',-17.1558,89.4145);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('26029-9113','East Brentborough','Stark Route','36363 Morissette Wall','Liberia','Iowa',-83.5598,-127.2093);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('86312-8638','Annettabury','Kathryne Mill','88722 Rowe Light','Nigeria','Maine',60.7043,152.8323);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('10019-8485','Nitzscheport','Rosalyn Drive','46513 Elinore Isle','Papua New Guinea','Kentucky',-22.9017,6.2759);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('10836-3501','Kovacekborough','Hermann Villages','2094 Keebler Shoals','Bahamas','Oklahoma',89.1754,80.9696);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('68702','Doyleview','Stokes View','3150 Ethel Manors','Azerbaijan','Iowa',-88.5986,-152.5443);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('67904-0223','Lake Autumnbury','Elouise Divide','28874 Hollis Valleys','Afghanistan','Utah',84.2484,-64.1386);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('71565','Jeanieborough','Dorothy Lakes','322 Shanny Mills','Sweden','Wisconsin',-65.4689,-130.6591);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('35492','Conroyfort','Schultz Unions','88572 Gibson Junction','Peru','Illinois',-79.3729,167.1217);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('07135-8190','Lake Dante','Sheldon Forge','5166 Ewell Village','Senegal','Wyoming',-40.9987,116.3268);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('06341-5265','North Frederick','Zieme Inlet','288 Trantow Harbors','Mauritania','Arkansas',-71.3055,133.5787);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('44607','Johnpaulburgh','Chaim Gardens','455 Muller Ford','Gibraltar','Mississippi',-56.5332,-85.2003);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('26783','South Alyssonberg','Bogan Summit','281 Bednar Manors','Kazakhstan','Wisconsin',-58.9217,-91.4495);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('74525','West Hans','Edna Mall','357 Magnolia Knolls','Iraq','Connecticut',8.4177,82.0205);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('96896','Armstrongborough','Maegan Cape','361 Luettgen Wall','Congo','Colorado',32.5793,111.3679);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('42686-3678','Herzogstad','Gerlach Path','7826 Maybell Gardens','French Guiana','Mississippi',32.7771,-7.3941);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('44776-2726','New Paul','Mabelle Parkway','52338 Alexzander Center','Dominican Republic','Arizona',-1.0548,-127.9220);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('29013-6038','DuBuquehaven','Kreiger Hollow','2787 Eldred Loop','Fiji','Nevada',-41.4976,6.9646);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('32686','Port Dexterport','Rolfson Spurs','30106 Ena Squares','Cocos (Keeling) Islands','South Dakota',85.0495,116.7458);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('75014-5819','Karliestad','Jacinto Key','392 Jenkins Summit','Ireland','Mississippi',4.6256,16.7192);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('81804','North Hillaryside','Reece Passage','699 Bert Key','Uganda','Arizona',12.7437,-23.8337);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('54859-5733','Collierbury','Abernathy Causeway','93864 Jacobi Pike','Maldives','Rhode Island',77.3394,-45.6914);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('34381-0879','Port Jacinthe','Whitney Plains','57085 Douglas Shore','Antigua and Barbuda','Minnesota',22.0513,83.9300);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('59921-7348','O''Reillyhaven','Conn Pike','839 Dewitt Harbor','Germany','Wyoming',-69.8951,114.2830);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('75412-5049','East Randall','Jerde Station','618 Hintz Greens','Uganda','Wyoming',59.7844,131.6439);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('30201','Ratkehaven','Brody Islands','113 Kovacek Track','Fiji','New Mexico',-45.4278,-177.9142);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('75056-9340','Shanelleview','Dickinson Camp','98366 Schmitt Villages','Bermuda','South Dakota',-29.1099,164.0680);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('96810-1702','Kristyside','Fiona Plain','497 Clemens Square','Mexico','Alabama',-42.6125,-137.6217);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('18680','Catherineburgh','Blair Square','71832 Glover Fall','Qatar','Louisiana',49.1036,-84.8655);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('50939','North Leliafurt','Johns Center','41704 Shany Oval','Iraq','Wisconsin',-52.6414,165.1500);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('37201','West Arnaldofurt','Stoltenberg Canyon','5030 Vince Camp','Democratic People''s Republic of Korea','North Carolina',0.6873,-164.7812);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('28545','Port Dixiehaven','Donnelly Locks','955 McGlynn Hill','Germany','New Jersey',-14.6121,93.9172);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('01539-9575','Port Jamalstad','Wellington Views','8073 Prohaska Roads','Taiwan','Nevada',80.2216,-87.9256);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('71711','North Agustinamouth','Bechtelar Common','90526 Stacy Junction','Belgium','North Carolina',0.2518,22.9287);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('51309','Lyricfort','Matt Freeway','98526 Verda Union','Philippines','New York',0.7327,-71.5808);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('38238','Port Ursula','Laila Walks','129 Lorine Stream','Papua New Guinea','Alaska',81.2847,-138.8556);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('39008','Rosaleebury','Monserrate Summit','59232 Deven Club','Ecuador','Wyoming',54.3459,-120.7924);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('07659-5505','Gaylordshire','Rylan Lake','00879 Norris Hills','Oman','Illinois',34.8014,-36.2610);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('83999','East Tavares','Lockman Pines','74026 Feest Ridges','Swaziland','Indiana',-27.1495,-57.9894);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('57539-7910','West Luellaland','Dorris Locks','3063 Winifred Place','Malawi','South Dakota',-20.6798,-40.6600);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('91384-3656','Port Rhiannamouth','Kale Curve','20854 Murphy Club','Guadeloupe','Iowa',-33.5106,-159.0959);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('91753-3820','Isobeltown','Caden Stravenue','70798 Imogene Wall','Antigua and Barbuda','Hawaii',34.3576,42.8244);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('28962','Freemanport','Towne Lakes','584 D''Amore Curve','Benin','Alabama',12.9284,-106.6128);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('82367','Tateview','Ashton Creek','8460 Boyer Spur','Brazil','Vermont',85.2034,47.6338);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('86934','New Jacinto','Kutch Ferry','8765 Ewell Road','Congo','Illinois',0.0959,21.9878);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('95539','McGlynnton','Friedrich Fords','0873 Greta Burg','Saint Pierre and Miquelon','West Virginia',-7.9051,-49.6171);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('71576-2526','Abbeyport','Lera Ferry','6680 Wiegand Spurs','United States of America','Kansas',-84.1917,-16.6694);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('53757','Gwendolynfort','Rosalind Well','217 Dooley Islands','Central African Republic','Montana',13.2167,163.2184);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('89626','Hermannborough','Kathleen Walk','103 Graham Fort','Svalbard & Jan Mayen Islands','Michigan',-66.7676,-122.0069);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('44537','Reynaton','Rohan Expressway','504 Walter Courts','Ecuador','Florida',16.3414,146.6664);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('10916-7313','North Jedidiah','Albert Light','5182 Kianna Lakes','Solomon Islands','New York',58.1346,-63.7537);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('67313-5783','South Audreyburgh','Cronin Place','932 Schuppe Gateway','South Africa','Alaska',66.9355,-6.5693);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('65665-4407','Eleanorehaven','Dewitt Plaza','951 Quigley Walk','Tanzania','Michigan',-81.5533,72.1459);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('72387','Port Teresa','Hoeger Brooks','8308 Von Fall','Slovenia','Virginia',-39.1764,145.6726);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('41450','Boylebury','Ethel Greens','8979 Haley Viaduct','Samoa','Connecticut',40.5743,19.3212);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('90948-7785','Lake Ignatiusfurt','Libby Ville','678 Charlie Hills','Cayman Islands','Maryland',69.6501,-135.0530);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('86123-6127','Connellyfort','Kaley Forges','881 Geovanny Oval','Montenegro','Iowa',9.3452,60.4661);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('51202-8336','Lake Eldorafurt','Keely Terrace','028 Harris Court','Cuba','Pennsylvania',-70.0312,-96.8839);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('30779-7304','Port Hollie','Elton Common','891 Justice Square','Monaco','Virginia',-38.7239,-86.7455);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('84505-2087','North Allen','Blick Land','05181 Georgianna Stream','France','Alaska',-44.5443,84.9624);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('09503','South Retha','Medhurst Islands','998 Westley Views','Netherlands Antilles','Vermont',-82.3950,13.0040);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('20577-0632','Lake Kamrenfurt','Jose Streets','58646 Krystina Plaza','Tanzania','Montana',17.3330,95.3696);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('34101','Rogahnport','Kub Meadow','62924 Feest Causeway','United States of America','Indiana',36.5224,-150.0976);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('57999','Port Kayliechester','Osbaldo Course','044 Alanis Walks','Belgium','New Hampshire',-33.9204,16.9497);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('66842','New Irvingfurt','Samir Mountain','3383 Hand Trail','Niger','Wisconsin',75.3428,21.1048);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('17403-7736','New Felixfort','Magnolia Run','92452 Odie Prairie','Morocco','Minnesota',-82.3867,-173.0930);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('90319-4586','Leschton','German Greens','9344 Kuhn Radial','Uzbekistan','New Jersey',61.8406,54.8425);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('45696','Milanhaven','Kunde Key','68597 Elvis Fields','Svalbard & Jan Mayen Islands','Oregon',-57.9244,-159.2623);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('36129-8744','East Amparo','Grady Terrace','267 Antonio View','Niger','Rhode Island',-47.7408,-144.5739);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('89993-7829','Ronaldoland','Brittany Crossing','41731 Spencer Cape','Greenland','Kansas',-48.5394,55.6970);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('65754-4609','East Alexandrea','Quigley Corners','43567 Moen Junctions','Peru','Montana',-24.3232,-176.9568);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('70889','Port Bernieceburgh','Wilfrid Park','8790 Buckridge Landing','United Arab Emirates','Rhode Island',18.9549,-21.3470);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('26643-0596','East Pearltown','Vickie Walks','78487 Antone Road','Djibouti','Alaska',-18.4022,-18.6555);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('43343','East Fredrick','Stanford Throughway','9021 Brekke Hollow','Afghanistan','Minnesota',83.4226,-41.4390);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('53485','Klingfurt','Lueilwitz Walk','691 Balistreri Underpass','Democratic People''s Republic of Korea','New York',39.1945,171.8436);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('89492-9071','West Amber','Faye Ranch','20422 Lilian Square','Belarus','Mississippi',21.4030,26.2832);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('15887-3904','North Shania','Hailee Field','786 Wiegand Brook','Honduras','Montana',-89.3388,-144.5025);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('17126-4658','Howellville','Estrella Locks','2240 Durgan Locks','Macedonia','Tennessee',-37.7588,-0.6410);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('72382-2979','New Rosachester','Hermann Drive','46637 Deion Springs','Tuvalu','North Carolina',26.5320,167.6350);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('48406-6290','South Katlynchester','Reuben Vista','72753 Bahringer Burgs','Kiribati','Maryland',-9.7372,-108.1512);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('74166-4314','North Connerberg','Hegmann Square','297 Gulgowski Locks','Zimbabwe','Arkansas',-62.8468,-112.6614);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('18092','New Rory','Ward Camp','8864 Schaefer Plains','Dominica','Florida',-76.4347,21.8644);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('68857-5811','Emmerichstad','Cummings Mountain','83473 Ahmed Field','Saudi Arabia','New Mexico',66.3132,159.6367);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('10686','Ralphfurt','Kunde Club','056 Madison Plaza','Papua New Guinea','North Dakota',77.7158,-101.9435);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('09971-5632','North Kileyborough','Syble Prairie','3251 Deckow Rapids','Iceland','Arkansas',57.5267,-2.2506);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('34807-6215','Padbergberg','Savanah Lodge','959 Nader Falls','Syrian Arab Republic','Michigan',53.8445,-78.8563);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('60524','Lake Jolie','Allan Springs','458 Bauch Rue','Finland','Connecticut',46.1819,6.0381);
INSERT INTO homes(zipcode,city,streetname,streetaddress,country,state,latitude,longitude) VALUES ('64119-2655','Kubstad','Mills Road','963 Mckayla Isle','Lesotho','Virginia',80.0131,-49.6314);
