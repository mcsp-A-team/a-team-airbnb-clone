DROP TABLE IF EXISTS homes;

CREATE TABLE homes
  (
     id            SERIAL PRIMARY KEY,
     zipcode       VARCHAR(10) NOT NULL,
     city          VARCHAR(20) NOT NULL,
     streetaddress VARCHAR(24) NOT NULL,
     country       VARCHAR(44) NOT NULL,
     state         VARCHAR(14) NOT NULL,
     home_type     VARCHAR(13) NOT NULL,
     prop_type     VARCHAR(13) NOT NULL,
     latitude      NUMERIC(8, 4) NOT NULL,
     longitude     NUMERIC(9, 4) NOT NULL
  );

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('92278',
             'Immanuelmouth',
             '2994 Ena Bypass',
             'Turkmenistan',
             'California',
             'House',
             'Beach',
             84.2079,
             39.6533);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('87892-0445',
             'Eichmannland',
             '21724 Shanahan Pike',
             'Martinique',
             'Michigan',
             'Apartment',
             'Lakefront',
             -13.7719,
             -47.7614);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('16308',
             'Gleasonshire',
             '86806 Anne Locks',
             'Estonia',
             'Minnesota',
             'Hotel',
             'Cabins',
             23.3587,
             96.1859);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('95779-2677',
             'Roscoeburgh',
             '15296 Marcelo Vista',
             'Cuba',
             'Rhode Island',
             'Guesthouse',
             'Lakefront',
             86.5527,
             144.5485);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('99668-8991',
             'Harriston',
             '4457 Mathilde Walks',
             'Denmark',
             'New York',
             'Guesthouse',
             'Lakefront',
             -10.6321,
             104.7373);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('91726',
             'Gorczanybury',
             '032 Lauren Spurs',
             'India',
             'Montana',
             'Guesthouse',
             'Lakefront',
             60.8857,
             -56.5446);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('73514-0093',
             'East Trentonstad',
             '40084 Jannie Turnpike',
             'Papua New Guinea',
             'Wyoming',
             'Guesthouse',
             'Lakefront',
             40.7922,
             70.8425);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('54607-5669',
             'East Vance',
             '99507 Hodkiewicz Ports',
             'Bermuda',
             'Connecticut',
             'Hotel',
             'Cabins',
             -19.9753,
             -160.8617);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('32772-5607',
             'Nonabury',
             '96882 Hammes Mall',
             'Ireland',
             'Nebraska',
             'Apartment',
             'Lakefront',
             79.0657,
             41.1975);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('96409-1487',
             'Arnoldshire',
             '85739 Raynor Trail',
             'Equatorial Guinea',
             'Nebraska',
             'Apartment',
             'Lakefront',
             -10.5629,
             -148.0708);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('91501-1856',
             'Alexiston',
             '55567 Norbert Cape',
             'Virgin Islands, U.S.',
             'West Virginia',
             'Guesthouse',
             'Lakefront',
             80.7396,
             150.3717);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('16679-4159',
             'Lake Carleyland',
             '1951 Yost Loop',
             'Comoros',
             'Nevada',
             'House',
             'Beach',
             43.6102,
             127.3365);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('96737-4275',
             'East Alvenamouth',
             '68723 Brian Mall',
             'Benin',
             'South Carolina',
             'Guesthouse',
             'Lakefront',
             -81.8479,
             160.9156);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('54712-4123',
             'Port Estebanland',
             '994 Ritchie Common',
             'Bahamas',
             'Ohio',
             'Apartment',
             'Lakefront',
             80.9024,
             164.5265);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('80857',
             'Lake Logan',
             '4051 Ziemann Hollow',
             'Kenya',
             'Missouri',
             'Hotel',
             'Cabins',
             37.6003,
             53.7437);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('04782',
             'Bradfordmouth',
             '53149 Pearline Pass',
             'Timor-Leste',
             'Kansas',
             'Guesthouse',
             'Lakefront',
             -2.1721,
             143.9441);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('97796-5751',
             'Lindabury',
             '79287 Ullrich Meadow',
             'New Zealand',
             'Iowa',
             'House',
             'Beach',
             49.5300,
             133.0835);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('25817-5264',
             'Malloryland',
             '25539 Danial Brook',
             'Dominican Republic',
             'Nevada',
             'House',
             'Beach',
             61.2457,
             68.2383);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('37938',
             'South Jorge',
             '2626 Schmeler Trafficway',
             'United States of America',
             'New Hampshire',
             'Apartment',
             'Lakefront',
             32.6730,
             110.7211);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('75001',
             'Nelsside',
             '70405 Jessy Vista',
             'Aruba',
             'North Dakota',
             'House',
             'Beach',
             25.8453,
             -146.5773);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('88756',
             'Lake Ewellshire',
             '3756 Linda Place',
             'Gibraltar',
             'Washington',
             'House',
             'Beach',
             8.5280,
             80.0779);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('53824-8525',
             'New Julianaborough',
             '9551 Gracie Crest',
             'Israel',
             'Alaska',
             'Hotel',
             'Cabins',
             -25.2686,
             135.8450);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('83112-8334',
             'Winfieldfort',
             '422 Schimmel Flats',
             'Nigeria',
             'Oklahoma',
             'Apartment',
             'Lakefront',
             83.6856,
             4.7856);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('28059',
             'Lake Rylee',
             '040 Jacquelyn Mountain',
             'Isle of Man',
             'New York',
             'Hotel',
             'Cabins',
             88.2999,
             -94.7640);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('13127',
             'Alexaville',
             '938 Aurelia Ports',
             'French Southern Territories',
             'Nevada',
             'Guesthouse',
             'Lakefront',
             -50.8810,
             -167.0096);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('94854',
             'Lake Dejuan',
             '70205 Charlotte Plaza',
             'Palau',
             'New Mexico',
             'Apartment',
             'Lakefront',
             42.6573,
             8.2272);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('64052',
             'Angelafurt',
             '19319 Barrett Loaf',
             'Taiwan',
             'Oklahoma',
             'Apartment',
             'Lakefront',
             62.2621,
             19.5132);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('94086-7883',
             'Sebastianhaven',
             '592 Gutmann Walks',
             'Croatia',
             'North Dakota',
             'Guesthouse',
             'Lakefront',
             54.5956,
             -67.2644);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('30826',
             'West Mathildemouth',
             '6764 Sammie Port',
             'Ukraine',
             'Hawaii',
             'House',
             'Beach',
             -81.2906,
             1.9220);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('05338-1409',
             'Lake Jomouth',
             '06563 Bins Unions',
             'Finland',
             'Kentucky',
             'House',
             'Beach',
             23.1572,
             -40.4586);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('05038-6300',
             'North Jettfurt',
             '73347 Larson Loop',
             'Dominican Republic',
             'Indiana',
             'House',
             'Beach',
             44.8176,
             78.1551);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('63874-4091',
             'Port Muhammadmouth',
             '183 McClure Harbor',
             'Swaziland',
             'Maryland',
             'House',
             'Beach',
             41.6815,
             -123.7375);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('78013-1923',
             'Joesphside',
             '9287 Klein Inlet',
             'Qatar',
             'Michigan',
             'Guesthouse',
             'Lakefront',
             61.1403,
             103.0676);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('28539',
             'Lake Greggshire',
             '9295 Hamill Vista',
             'Palau',
             'Alaska',
             'Apartment',
             'Lakefront',
             -49.0086,
             -97.7595);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('21875',
             'Kyleestad',
             '9247 Litzy Station',
             'Bahamas',
             'Massachusetts',
             'Guesthouse',
             'Lakefront',
             15.7895,
             -104.4446);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('08140-0855',
             'Bradtkefort',
             '45991 Sporer Cape',
             'Hungary',
             'Ohio',
             'Apartment',
             'Lakefront',
             63.4632,
             70.9661);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('20764-5086',
             'North Isidroborough',
             '5634 Simonis Valley',
             'Lesotho',
             'Michigan',
             'House',
             'Beach',
             -62.5486,
             153.2073);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('15835-5082',
             'North Terrillmouth',
             '064 Octavia Route',
             'New Caledonia',
             'Arkansas',
             'Hotel',
             'Cabins',
             -58.1306,
             -62.9915);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('16938-7525',
             'Xandertown',
             '691 Thalia Forge',
             'Nicaragua',
             'New Mexico',
             'Hotel',
             'Cabins',
             52.6636,
             159.6657);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('78862',
             'Quigleyfort',
             '41292 Fleta Row',
             'Bosnia and Herzegovina',
             'Mississippi',
             'Hotel',
             'Cabins',
             24.9454,
             159.4781);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('62795-5155',
             'Nathanialfort',
             '173 Elissa Mountain',
             'Burkina Faso',
             'Idaho',
             'Hotel',
             'Cabins',
             -24.5248,
             57.1710);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('65125',
             'Taniatown',
             '9181 Zoila Isle',
             'Zimbabwe',
             'Georgia',
             'House',
             'Beach',
             21.7367,
             81.6649);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('11044-8945',
             'Makennahaven',
             '9219 Schoen Rue',
             'Anguilla',
             'New Mexico',
             'Apartment',
             'Lakefront',
             26.4901,
             85.6876);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('49819-7170',
             'Dionview',
             '6254 Schaefer Avenue',
             'Romania',
             'Utah',
             'Apartment',
             'Lakefront',
             -56.9884,
             -160.5796);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('67543-4951',
             'New Ashton',
             '6271 Lenora Neck',
             'Switzerland',
             'Idaho',
             'Guesthouse',
             'Lakefront',
             32.6435,
             -67.1789);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('37297',
             'Josueton',
             '31568 Legros Road',
             'Liberia',
             'Texas',
             'Hotel',
             'Cabins',
             73.6022,
             8.3887);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('13883',
             'Lake Gene',
             '03845 Aniyah Ferry',
             'Mozambique',
             'Tennessee',
             'House',
             'Beach',
             -28.5345,
             -93.9971);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('35679',
             'North Yasmine',
             '892 Vidal Trace',
             'Timor-Leste',
             'Texas',
             'Hotel',
             'Cabins',
             -25.5134,
             159.8580);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('85405-6211',
             'Samarafort',
             '63684 Nicolette Coves',
             'Japan',
             'Wyoming',
             'Guesthouse',
             'Lakefront',
             56.0454,
             104.6880);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('29918-0565',
             'North Shaniyachester',
             '4868 Augustine Shore',
             'Congo',
             'Montana',
             'Hotel',
             'Cabins',
             66.8415,
             151.5783);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('80285-6309',
             'Volkmanville',
             '929 Caterina Unions',
             'Namibia',
             'Missouri',
             'Hotel',
             'Cabins',
             73.6764,
             11.3716);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('55681',
             'East Layla',
             '958 Stroman Locks',
             'Tajikistan',
             'Arkansas',
             'Hotel',
             'Cabins',
             38.8234,
             -48.0583);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('07588',
             'O''Reillymouth',
             '6982 Gulgowski Spring',
             'Falkland Islands (Malvinas)',
             'Mississippi',
             'Hotel',
             'Cabins',
             -46.1180,
             -11.5008);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('34885-4823',
             'West Esteban',
             '9227 Wilderman Well',
             'Puerto Rico',
             'Michigan',
             'Apartment',
             'Lakefront',
             88.2952,
             149.0326);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('81555',
             'New Cielotown',
             '6078 Bailey Radial',
             'Bolivia',
             'South Dakota',
             'Apartment',
             'Lakefront',
             -36.2639,
             46.7613);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('83278-4197',
             'Janeburgh',
             '8604 Osinski Forks',
             'Palestinian Territory',
             'Michigan',
             'House',
             'Beach',
             -81.5974,
             -77.7489);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('44542-8308',
             'Port Bernieceborough',
             '2121 Delta Prairie',
             'American Samoa',
             'Idaho',
             'House',
             'Beach',
             75.0219,
             -87.0169);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('84057-2659',
             'Faustoburgh',
             '3066 Hackett Brooks',
             'Vietnam',
             'Illinois',
             'Guesthouse',
             'Lakefront',
             0.9090,
             -51.4408);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('98135',
             'Kenyattaborough',
             '61208 Alexandro Spring',
             'Kuwait',
             'California',
             'House',
             'Beach',
             -38.5089,
             -42.3912);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('19628',
             'West Jarrodland',
             '303 Nicolas Gardens',
             'Fiji',
             'Connecticut',
             'House',
             'Beach',
             -62.5208,
             107.5465);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('68377-8040',
             'West Jovanyport',
             '317 Blanche Locks',
             'Estonia',
             'Louisiana',
             'Guesthouse',
             'Lakefront',
             84.7040,
             150.4574);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('92088-0786',
             'Langoshbury',
             '12168 Granville Ramp',
             'Kyrgyz Republic',
             'Massachusetts',
             'Hotel',
             'Cabins',
             61.5688,
             -72.0409);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('12806-0138',
             'Enolaberg',
             '0525 Lueilwitz Ranch',
             'Canada',
             'Idaho',
             'Guesthouse',
             'Lakefront',
             -85.7337,
             -107.5779);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('73368-1400',
             'New Eugenia',
             '3070 Towne Bypass',
             'San Marino',
             'Colorado',
             'Guesthouse',
             'Lakefront',
             -3.1219,
             -16.8061);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('99334-9944',
             'Judgeland',
             '3489 Ledner Mill',
             'Madagascar',
             'Arizona',
             'Guesthouse',
             'Lakefront',
             -86.3643,
             -132.9414);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('65449-7875',
             'West Davion',
             '5625 Erik Fields',
             'Ghana',
             'Wisconsin',
             'Apartment',
             'Lakefront',
             -42.2805,
             -125.7342);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('69906-7374',
             'North Chaimbury',
             '25519 Ervin Dale',
             'Honduras',
             'Ohio',
             'Hotel',
             'Cabins',
             -82.5906,
             -136.3883);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('58719-2206',
             'West Wiltonberg',
             '055 Satterfield Points',
             'Aruba',
             'Wyoming',
             'Guesthouse',
             'Lakefront',
             7.6681,
             -89.6395);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('61334',
             'Lucindaville',
             '580 Dietrich Brook',
             'Zimbabwe',
             'Idaho',
             'Guesthouse',
             'Lakefront',
             -38.8617,
             -91.7726);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('51578',
             'Gleasonburgh',
             '603 Parker Islands',
             'Algeria',
             'California',
             'Guesthouse',
             'Lakefront',
             0.2763,
             -121.2279);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('00023-5717',
             'New Burdette',
             '82473 Kiehn Shores',
             'Monaco',
             'Wyoming',
             'Hotel',
             'Cabins',
             73.6460,
             -83.0986);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('30924-7041',
             'South Katherine',
             '7433 Borer Union',
             'Mauritania',
             'Arizona',
             'House',
             'Beach',
             76.0287,
             -45.3325);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('73472',
             'D''Amoreberg',
             '231 Hansen Mountain',
             'Moldova',
             'Arizona',
             'Hotel',
             'Cabins',
             -18.3762,
             -30.8722);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('86188',
             'Murrayport',
             '8336 Viviane Ranch',
             'Israel',
             'Alabama',
             'Apartment',
             'Lakefront',
             53.0213,
             151.9814);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('93322-1756',
             'North Meghan',
             '6675 Conor Ports',
             'Cyprus',
             'Utah',
             'Guesthouse',
             'Lakefront',
             -16.1149,
             -149.5727);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('75712-5303',
             'North Sadyeberg',
             '5362 Serenity Green',
             'Taiwan',
             'Oregon',
             'Apartment',
             'Lakefront',
             58.6516,
             -58.2721);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('76906',
             'New Jeramymouth',
             '95463 Candido Pass',
             'Swaziland',
             'Florida',
             'House',
             'Beach',
             -18.4476,
             4.9252);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('78411',
             'Johnstonmouth',
             '5711 Bogan Land',
             'Austria',
             'North Carolina',
             'Apartment',
             'Lakefront',
             26.8866,
             -0.4729);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('19537',
             'Domenickstad',
             '392 Kirlin Fall',
             'Saudi Arabia',
             'New Hampshire',
             'Guesthouse',
             'Lakefront',
             50.7327,
             99.9188);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('68722-1511',
             'Feiltown',
             '262 Berenice Inlet',
             'Guernsey',
             'North Dakota',
             'Guesthouse',
             'Lakefront',
             78.9769,
             -67.7023);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('81003-3227',
             'East Andreaneville',
             '7995 Sanford Wall',
             'Liberia',
             'Washington',
             'House',
             'Beach',
             75.7477,
             22.9991);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('91136-4944',
             'Littletown',
             '58222 Cathrine Bypass',
             'Marshall Islands',
             'Florida',
             'Guesthouse',
             'Lakefront',
             -74.5076,
             -4.6606);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('89787',
             'Feestland',
             '4508 Gleichner Place',
             'Panama',
             'Massachusetts',
             'Guesthouse',
             'Lakefront',
             42.5778,
             -105.3403);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('77854',
             'Cameronshire',
             '60526 Gleichner Freeway',
             'Belarus',
             'Mississippi',
             'Hotel',
             'Cabins',
             -50.4665,
             150.8429);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('36667',
             'Collierchester',
             '747 Devin Plain',
             'Afghanistan',
             'Iowa',
             'Hotel',
             'Cabins',
             30.6775,
             35.8551);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('12913-8454',
             'Malliemouth',
             '5239 Dorcas Alley',
             'Turkey',
             'Indiana',
             'Apartment',
             'Lakefront',
             68.4558,
             -133.3906);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('80796',
             'East Marcburgh',
             '5943 Von Harbors',
             'South Georgia and the South Sandwich Islands',
             'Vermont',
             'Guesthouse',
             'Lakefront',
             -45.7618,
             148.5116);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('97018-4433',
             'Johnstontown',
             '4452 Kessler Plaza',
             'Bosnia and Herzegovina',
             'Vermont',
             'House',
             'Beach',
             81.5569,
             129.5898);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('19759',
             'Schaeferhaven',
             '9579 Rachelle Lodge',
             'Cambodia',
             'New Mexico',
             'House',
             'Beach',
             -70.3765,
             39.1771);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('26573',
             'Glentown',
             '17822 Janiya Shoal',
             'Cameroon',
             'Nebraska',
             'House',
             'Beach',
             35.3657,
             -141.0707);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('51913',
             'Kesslerton',
             '8692 Kozey Stream',
             'Cameroon',
             'Nebraska',
             'Guesthouse',
             'Lakefront',
             79.8064,
             52.7200);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('41067',
             'New Shanashire',
             '0917 Devyn Circle',
             'Morocco',
             'Wyoming',
             'House',
             'Beach',
             70.5278,
             -154.7975);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('16344',
             'Port Lowellmouth',
             '48753 Merlin Lakes',
             'Algeria',
             'Delaware',
             'Guesthouse',
             'Lakefront',
             66.2527,
             -93.8132);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('91598-7134',
             'Ritchieberg',
             '2330 Sawayn Estates',
             'Trinidad and Tobago',
             'Alabama',
             'Hotel',
             'Cabins',
             -70.4041,
             -64.6562);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('93231-5399',
             'Georgianamouth',
             '0064 Myrtle Club',
             'Djibouti',
             'Florida',
             'House',
             'Beach',
             43.0139,
             -172.9467);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('05000-4718',
             'Leuschkehaven',
             '862 Bashirian Expressway',
             'Kenya',
             'Vermont',
             'Guesthouse',
             'Lakefront',
             -27.1782,
             112.8813);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('44023-1618',
             'Loyalside',
             '9721 Beer Glen',
             'Timor-Leste',
             'Illinois',
             'Hotel',
             'Cabins',
             3.6420,
             141.8265);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('27757-6589',
             'Walkermouth',
             '40110 Matt Rapids',
             'Netherlands',
             'Delaware',
             'Guesthouse',
             'Lakefront',
             -43.4323,
             26.4128);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('46584-0409',
             'Lake Forresthaven',
             '948 Eloy Mountains',
             'Monaco',
             'Tennessee',
             'House',
             'Beach',
             42.8625,
             -117.6423);

INSERT INTO homes
            (zipcode,
             city,
             streetaddress,
             country,
             state,
             home_type,
             prop_type,
             latitude,
             longitude)
VALUES      ('83075-0635',
             'Kertzmannfort',
             '225 Clemens Port',
             'Dominican Republic',
             'Oregon',
             'Hotel',
             'Cabins',
             -1.1029,
             -118.2041); 
