export const Constants = {
  app: '#dataworld',
  title: 'DataWorld',
  version: 'V1.0.0',
  countries: [
    { value: 1, name: 'Argentina', namea2: 'ar' },
    { value: 2, name: 'Australia', namea2: 'au' },
    { value: 3, name: 'Austria', namea2: 'at' },
    { value: 4, name: 'Belgium', namea2: 'be' },
    { value: 5, name: 'Brazil', namea2: 'br' },
    { value: 6, name: 'Bulgaria', namea2: 'bg' },
    { value: 7, name: 'Canada', namea2: 'ca' },
    { value: 8, name: 'Chile', namea2: 'cl' },
    { value: 9, name: 'China', namea2: 'cn' },
    { value: 10, name: 'Croatia', namea2: 'hr' },
    { value: 11, name: 'Czech Republic', namea2: 'cz' },
    { value: 12, name: 'Denmark', namea2: 'dk' },
    { value: 13, name: 'Egypt', namea2: 'eg' },
    { value: 14, name: 'Finland', namea2: 'fi' },
    { value: 15, name: 'France', namea2: 'fr' },
    { value: 16, name: 'Germany', namea2: 'de' },
    { value: 17, name: 'Ghana', namea2: 'gh' },
    { value: 18, name: 'Greece', namea2: 'gr' },
    { value: 19, name: 'Hungary', namea2: 'hu' },
    { value: 20, name: 'India', namea2: 'in' },
    { value: 21, name: 'Indonesia', namea2: 'id' },
    { value: 22, name: 'Italy', namea2: 'it' },
    { value: 23, name: 'Japan', namea2: 'jp' },
    { value: 24, name: 'Mexico', namea2: 'mx' },
    { value: 25, name: 'Morocco', namea2: 'ma' },
    { value: 26, name: 'Netherlands', namea2: 'nl' },
    { value: 27, name: 'Nigeria', namea2: 'ng' },
    { value: 28, name: 'North Korea', namea2: 'kp' },
    { value: 29, name: 'Norway', namea2: 'no' },
    { value: 30, name: 'Pakistan', namea2: 'pk' },
    { value: 31, name: 'Peru', namea2: 'pe' },
    { value: 32, name: 'Philippines', namea2: 'ph' },
    { value: 33, name: 'Poland', namea2: 'pl' },
    { value: 34, name: 'Portugal', namea2: 'pt' },
    { value: 35, name: 'Romania', namea2: 'ro' },
    { value: 36, name: 'Russia', namea2: 'ru' },
    { value: 37, name: 'Senegal', namea2: 'sn' },
    { value: 38, name: 'Serbia', namea2: 'rs' },
    { value: 39, name: 'Slovakia', namea2: 'sk' },
    { value: 40, name: 'Slovenia', namea2: 'si' },
    { value: 41, name: 'South Africa', namea2: 'za' },
    { value: 42, name: 'Spain', namea2: 'es' },
    { value: 43, name: 'Sweden', namea2: 'se' },
    { value: 44, name: 'Switzerland', namea2: 'ch' },
    { value: 45, name: 'Tunisia', namea2: 'tn' },
    { value: 46, name: 'Turkey', namea2: 'tr' },
    { value: 47, name: 'UK', namea2: 'gb' },
    { value: 48, name: 'Ukraine', namea2: 'ua' },
    { value: 49, name: 'USA', namea2: 'us' }

    //     'México', 'Estados Unidos', 'Francia', 'Alemania', 'Italia', 'Reino Unido', 'Bélgica', 'Paises Bajos', 'Suecia', 'Suiza', 'Austria', 'Finlandia', 'Portugal',
    //     'Turquía', 'Rusia', 'Dinamarca', 'Cánada', 'India', 'Grecia', 'España', 'Egipto', 'Argentina', 'Hungría', 'Polonia', 'Rumania', 'República de Corea del Norte',
    //     'China', 'Brasil', 'República Checa', 'Noruega', 'Sudáfrica', 'Australia', 'Ucrania', 'Indonesia', 'Japon', 'Marruecos', 'Bulgaria', 'Chile', 'Croacia',
    //      'Serbia', 'Nigeria', 'Malasia', 'Pakistán', 'Eslovaquia', 'Perú', 'Túnez', 'Senegal', 'Eslovenia', 'Filipinas', 'Ghana'

    //     'Mexico', 'USA', 'France', 'Germany','Italy','UK','Belgium','Netherlands','Sweden','Switzerland','Austria','Finland','Portugal','Turkey','Russia','Denmark','Canada',
    //     'India','Greece','Spain','Egypt','Argentina','Hungary','Polonia','Poland',
    //   //'North Korea','China','Brazil',
    // 'Czech Republic','Norway','South Africa','Australia','Ukraine','Indonesia','Japan','Morocco','Bulgaria','Chile','Croatia','Serbia','Nigeria','Malasia',
    // 'Pakistan','Slovakia','Peru','Tunisia','Senegal','Slovenia','Philippines','Ghana'
  ],

  timeZones: [
    {
      value: 'mx',
      timeZones: [
        { name: 'Hora de verano de Central', utc: -5, code: 'CDT' },
        { name: 'Hora estándar Central', utc: -6, code: 'CST' },
        { name: 'Hora estándar de la montaña', utc: -7, code: 'MST' },
      ],
    },
    {
      value: 'us',
      timeZones: [
        { name: 'Hora estándar de Alaska', utc: -9, code: 'AKST' },
        { name: 'Hora estándar del Este', utc: -5, code: 'EST' },
        { name: 'Hora estándar de Hawaii', utc: -10, code: 'HST' },
        { name: 'Hora estándar de Pitcairn', utc: -8, code: 'PST' },
      ],
    },
    {
      value: 'fr',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'de',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'it',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'gb',
      timeZones: [{ name: 'Hora de Greenwich', utc: 0, code: 'GMT' }],
    },
    {
      value: 'be',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'nl',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'se',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'ch',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'at',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'fi',
      timeZones: [{ name: 'Hora de Europa del Este', utc: 2, code: 'EET' }],
    },
    {
      value: 'pt',
      timeZones: [
        { name: 'Hora de Europa Occidental', utc: 0, code: 'WET' },
        { name: 'Hora de las Azores', utc: -1, code: 'AZOT' },
      ],
    },
    {
      value: 'tr',
      timeZones: [{ name: 'Hora del Pavo', utc: 3, code: 'TRT' }],
    },
    {
      value: 'ru',
      timeZones: [
        { name: 'Hora de Anadyr', utc: 12, code: 'ANAT' },
        { name: 'Hora de Europa del Este', utc: 2, code: 'EET' },
        { name: 'Hora de Irkutsk', utc: 8, code: 'IRKT' },
        { name: 'Hora de Krasnoyarsk', utc: 7, code: 'KRAT' },
        { name: 'Hora estándar de Moscú', utc: 3, code: 'MSK' },
        { name: 'Hora de Novosibirsk', utc: 7, code: 'NOVT' },
        { name: 'Hora estándar de Omsk', utc: 6, code: 'OMST' },
        { name: 'Hora de Kamchatka', utc: 12, code: 'PETT' },
        { name: 'Hora de Sakhalin', utc: 11, code: 'SAKT' },
        { name: 'Hora de Samara', utc: 4, code: 'SAMT' },
        { name: 'Hora de Srednekolymsk', utc: 11, code: 'SRET' },
        { name: 'Hora de Vladivostok', utc: 10, code: 'VLAT' },
        { name: 'Hora de Yakutsk', utc: 9, code: 'YAKT' },
        { name: 'Hora de Ekaterimburgo', utc: 5, code: 'YEKT' },
      ],
    },
    {
      value: 'dk',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'ca',
      timeZones: [
        { name: 'Hora estándar de Alaska', utc: -9, code: 'AKST' },
        { name: 'Hora estándar del Atlántico', utc: -4, code: 'AST' },
        { name: 'Hora estándar Central', utc: -6, code: 'CST' },
        { name: 'Hora estándar del Este', utc: -5, code: 'EST' },
        { name: 'Hora estándar de la montaña', utc: -7, code: 'MST' },
        { name: 'Hora estándar de Terranova', utc: -3.3, code: 'NST' },
        { name: 'Hora estándar de Pitcairn', utc: -8, code: 'PST' },
      ],
    },
    {
      value: 'in',
      timeZones: [{ name: 'Hora estándar de India', utc: 5.3, code: 'IST' }],
    },
    {
      value: 'gr',
      timeZones: [{ name: 'Hora de Europa del Este', utc: 2, code: 'EET' }],
    },
    {
      value: 'es',
      timeZones: [
        { name: 'Hora Central Europea', utc: 1, code: 'CET' },
        { name: 'Hora de Europa Occidental', utc: 0, code: 'WET' },
      ],
    },
    {
      value: 'eg',
      timeZones: [{ name: 'Hora de Europa del Este', utc: 2, code: 'EET' }],
    },
    {
      value: 'ar',
      timeZones: [{ name: 'Hora de Argentina', utc: -3, code: 'ART' }],
    },
    {
      value: 'hu',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'pl',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'ro',
      timeZones: [{ name: 'Hora de Europa del Este', utc: 2, code: 'EET' }],
    },
    {
      value: 'kr',
      timeZones: [{ name: 'Hora estándar de Corea', utc: 9, code: 'KST' }],
    },
    {
      value: 'cn',
      timeZones: [
        { name: 'Hora de Xinjiang', utc: 6, code: 'XJT' },
        { name: 'Hora estándar de China', utc: 8, code: 'CST' },
      ],
    },
    {
      value: 'br',
      timeZones: [
        { name: 'Hora de Acre', utc: -5, code: 'ACT' },
        { name: 'Hora del Amazonas', utc: -4, code: 'AMT' },
        { name: 'Hora de Brasilia', utc: -3, code: 'BRT' },
      ],
    },
    {
      value: 'cz',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'no',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'za',
      timeZones: [{ name: 'Hora estándar de Sudáfrica', utc: 2, code: 'SAST' }],
    },
    {
      value: 'au',
      timeZones: [
        { name: 'Hora de Australia Central', utc: 9.3, code: 'ACST' },
        {
          name: 'Hora estándar del centro oeste de Australia',
          utc: 8.45,
          code: 'ACWST',
        },
        { name: 'Hora del Este de Australia', utc: 10, code: 'AEST' },
        { name: 'Hora estándar del Oeste de Australia', utc: 8, code: 'AWST' },
        { name: 'Hora estándar del Lord Howe', utc: 10.3, code: 'LHST' },
      ],
    },
    {
      value: 'ua',
      timeZones: [{ name: 'Hora de Europa del Este', utc: 2, code: 'EET' }],
    },
    {
      value: 'id',
      timeZones: [
        { name: 'Hora de Central Indonesia', utc: 8, code: 'CIT' },
        { name: 'Hora de Eastern Indonesia', utc: 9, code: 'EIT' },
        { name: 'Hora de Western Indonesia', utc: 7, code: 'WIT' },
      ],
    },
    {
      value: 'jp',
      timeZones: [{ name: 'Hora estándar de Japón', utc: 9, code: 'JST' }],
    },
    {
      value: 'ma',
      timeZones: [{ name: 'Hora de Europa Occidental', utc: 1, code: 'WET' }],
    },
    {
      value: 'bg',
      timeZones: [{ name: 'Hora de Europa del Este', utc: 2, code: 'EET' }],
    },
    {
      value: 'cl',
      timeZones: [
        { name: 'Hora de Chile', utc: -4, code: 'CLT' },
        { name: 'Hora estándar de Isla de Pascua', utc: -6, code: 'EAST' },
      ],
    },
    {
      value: 'hr',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'rs',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'ng',
      timeZones: [{ name: 'Hora de África Occidental', utc: 1, code: 'WAT' }],
    },
    {
      value: 'my',
      timeZones: [{ name: 'Hora de Malasia', utc: 8, code: 'MYT' }],
    },
    {
      value: 'pk',
      timeZones: [{ name: 'Hora estándar de Pakistán', utc: 5, code: 'PKT' }],
    },
    {
      value: 'sk',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'pe',
      timeZones: [{ name: 'Hora de Perú', utc: -5, code: 'PET' }],
    },
    {
      value: 'tn',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'sn',
      timeZones: [{ name: 'Hora de Greenwich', utc: 0, code: 'GMT' }],
    },
    {
      value: 'si',
      timeZones: [{ name: 'Hora Central Europea', utc: 1, code: 'CET' }],
    },
    {
      value: 'ph',
      timeZones: [{ name: 'Hora de Philippine', utc: 8, code: 'PHT' }],
    },
    {
      value: 'gh',
      timeZones: [{ name: 'Hora de Greenwich', utc: 0, code: 'GMT' }],
    },
  ],
};
