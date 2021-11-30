const lenguajeValue: any = localStorage.getItem('language');
const valueLen = lenguajeValue === null || lenguajeValue === '' || lenguajeValue === undefined ? 'es' : lenguajeValue;

export const Constants = {
  app: '#dataworld',
  title: 'DataWorld',
  version: 'V1.0.0',

  header: {
    home: valueLen === 'es'? 'Inicio' : 'Home',
    weather: valueLen === 'es'? 'Clima' : 'Weather',
    health: valueLen === 'es'? 'Salud' : 'Health',
    news: valueLen === 'es'? 'Noticias' : 'News',
    us: valueLen === 'es'? 'Nosotros' : 'Us',
    login: valueLen === 'es'? 'Inicio de Sesión' : 'Login',
    menu: {
      profile: valueLen === 'es'? 'Perfil' : 'Profile',
      logout: valueLen === 'es'? 'Cerrar Sesión' : 'Logout',
    }
  },
  footer: {
    rights: valueLen === 'es' ? 'Derechos Reservados' : 'All rights reserved',
    socialMedia: valueLen === 'es' ? 'Visita nuestras redes sociales' : 'Visit our social media',
  },
  dashboard: {
    fewHours: valueLen === 'es' ? 'En las próximas horas' : 'In the next hours',
    nextDays: valueLen === 'es' ? 'En los próximos días' : 'In the coming days',
    infoCovid: valueLen === 'es' ? 'Información de Covid en ' : 'Covid information at ',
    todayCases: valueLen === 'es' ? 'Casos de hoy ' : 'Cases today',
    activeCases: valueLen === 'es' ? 'Casos activos' : 'Active cases',
    deathsToday: valueLen === 'es' ? 'Defunciones de hoy' : 'Deaths today',
    newsToday: valueLen === 'es' ? 'Noticias del día de hoy' : 'News today',
    source: valueLen === 'es'? 'Fuente' : 'Source',
  },
  weather: {
    fewHours: valueLen === 'es'? 'En las próximas horas' : 'In the next hours',
    nextDays: valueLen === 'es' ? 'En los próximos días' : 'In the coming days',
    tempMin: valueLen === 'es'? 'Temperatura mínima' : 'Minimum temperature',
    tempMax: valueLen === 'es'? 'Temperatura máxima' : 'Maximum temperature',
    windSpeed: valueLen === 'es'? 'Velocidad del viento' : 'Wind speed',
    addCondi: valueLen === 'es'? 'Condiciones adicionales' : 'Additional conditions',
    days: {
      Lunes: valueLen === 'es'? 'Lunes' : 'Monday',
      Martes: valueLen === 'es'? 'Martes' : 'Tuesday',
      Miercoles: valueLen === 'es'? 'Miércoles' : 'Wednesday',
      Jueves: valueLen === 'es'? 'Jueves' : 'Thursday',
      Viernes: valueLen === 'es'? 'Viernes' : 'Friday',
      Sabado: valueLen === 'es'? 'Sabado' : 'Saturday',
      Domingo: valueLen === 'es'? 'Domingo' : 'Sunday',
    },
    subAddCondi: {
      temp_min: valueLen === 'es'? 'Temperatura mínima' : 'Minimum temperature',
      temp_max: valueLen === 'es'? 'Temperatura máxima' : 'Maximum temperature',
      speed: valueLen === 'es'? 'Velocidad del viento' : 'Wind speed',
      pressure: valueLen === 'es'? 'Presión' : 'Pressure',
      humidity: valueLen === 'es'? 'Humedad' : 'Humidity',
      sea_level: valueLen === 'es'? 'Presión a nivel del mar' : 'Sea level pressure',
      grnd_level: valueLen === 'es'? 'Presión a nivel del suelo' : 'Pressure at ground level',
      visibility: valueLen === 'es'? 'Visibilidad' : 'Visibility',
      deg: valueLen === 'es'? 'Dirección del viento' : 'Wind direction',
      gust: valueLen === 'es'? 'Ráfaga de viento' : 'Wind gust',
      all: valueLen === 'es'? 'Nubosidad' : 'Cloudiness',
      rain1h: valueLen === 'es'? 'Rain volume (Last 1 hr)' : 'Volumen de lluvia (Últ. 1 hr)',
      rain1h3h: valueLen === 'es'? 'Rain volume (Last 3 hr)' : 'Volumen de lluvia (Últ. 3 hr)',
      snow1h: valueLen === 'es'? 'Volumen de nieve (Últ. 1 hr)' : 'Snow volume (Last 1 hr)',
      snow1h3h: valueLen === 'es'? 'Volumen de nieve (Últ. 3 hr)' : 'Snow volume (Last 3 hr)',
    }
  },
  covid: {
    info: valueLen === 'es'? 'Información general de seguimiento de' : 'General tracking information for',
    thToday: valueLen === 'es'? 'Casos de hoy' : 'Cases of today',
    activeCases: valueLen === 'es'? 'Casos activos' : 'Active cases',
    deathToday: valueLen === 'es'? 'Defunciones de hoy' : 'Deaths today',
    totalCases: valueLen === 'es'? 'Casos totales' : 'Total cases',
    recovered: valueLen === 'es'? 'Recuperados' : 'Recovered',
    totalDeaths: valueLen === 'es'? 'Defunciones totales' : 'Total deaths',
    totalTests: valueLen === 'es'? 'Pruebas totales' : 'Total tests',

  },
  news: {
    health: valueLen === 'es'? 'Salud' : 'Health',
    tecnology: valueLen === 'es'? 'Tecnología' : 'Technology',
    science: valueLen === 'es'? 'Ciencia' : 'Science',
    top: valueLen === 'es'? 'Ir arriba' : 'Top of page',
    source: valueLen === 'es'? 'Fuente' : 'Source',
  },
  profile: {
    profile: valueLen === 'es'? 'Perfil' : 'Profile',
    edit: valueLen === 'es'? 'Edita la información de tu perfil' : 'Edit your profile information',
    name: valueLen === 'es'? 'Nombre' : 'Name',
    email: valueLen === 'es'? 'Correo electrónico' : 'E-mail',
    country: valueLen === 'es'? 'País' : 'Country',
    timeZone: valueLen === 'es'? 'Zona horaria' : 'Time Zone',
    language: valueLen === 'es'? 'Idioma' : 'Language',
    obName: valueLen === 'es'? 'El nombre es obligatorio' : 'The name is required',
    obEmail: valueLen === 'es'? 'El email es obligatorio y tiene que ser valido' : 'The email address is required and must be valid',
    obCountry: valueLen === 'es'? 'El nombre es obligatorio' : 'The name is required',
    obTimeZone: valueLen === 'es'? 'El nombre es obligatorio' : 'The name is required',
    obLang: valueLen === 'es'? 'El nombre es obligatorio' : 'The name is required',
    save: valueLen === 'es'? 'Guardar cambios' : 'Save changes',
    someError: valueLen === 'es'? 'Ocurrió algún error' : 'An error has occurred',
    success: valueLen === 'es'? 'Éxito' : 'Success',
    infoSucc: valueLen === 'es'? 'Información actualizada correctamente' : 'Correctly updated information',

  },
  countries: [
    { name: valueLen === 'es'? 'Argentina' : 'Argentina', value: 1,  code: 'Argentina', namea2: 'ar', capital: 'Buenos Aires', lat: -34.61315, lon:  -58.37723},
    { name: valueLen === 'es'? 'Australia' : 'Australia', value: 2,  code: 'Australia', namea2: 'au', capital: 'Canberra', lat: -35.28346 , lon: 149.12807},
    { name: valueLen === 'es'? 'Austria' : 'Austria', value: 3,  code: 'Austria', namea2: 'at', capital: 'Vienna', lat: 48.20849, lon: 16.37208},
    { name: valueLen === 'es'? 'Bélgica' : 'Belgium', value: 4,  code: 'Belgium', namea2: 'be', capital: '	Bruselas', lat: 50.85045, lon: 4.34878},
    { name: valueLen === 'es'? 'Argentina' : 'Brazil', value: 5,  code: 'Brazil', namea2: 'br', capital: 'Brasilia', lat: -15.77972, lon: -47.92972},
    { name: valueLen === 'es'? 'Bulgaria' : 'Bulgaria', value: 6,  code: 'Bulgaria', namea2: 'bg', capital: 'Sofía', lat: 42.69751, lon: 23.32415 },
    { name: valueLen === 'es'? 'Cánada' : 'Canada', value: 7,  code: 'Canada', namea2: 'ca', capital: 'Ottawa', lat: 45.41117, lon: -75.69812},
    { name: valueLen === 'es'? 'Chile' : 'Chile', value: 8,  code: 'Chile', namea2: 'cl', capital: 'Santiago de Chile', lat: -33.45694, lon: -70.64827},
    { name: valueLen === 'es'? 'China' : 'China', value: 9,  code: 'China', namea2: 'cn', capital: 'Beijin', lat: 39.9075, lon: 116.39723},
    { name: valueLen === 'es'? 'Croacia' : 'Croatia', value: 10, code: 'Croatia', namea2: 'hr', capital: 'Zagreb', lat: 45.81444, lon: 15.97798 },
    { name: valueLen === 'es'? 'Corea del Sur' : 'South Korea', value: 11, code: 'S. Korea', namea2: 'kr', capital: 'Seul', lat: 37.566535, lon: 126.9779692 },
    { name: valueLen === 'es'? 'Dinamarca' : 'Denmark', value: 12, code: 'Denmark', namea2: 'dk', capital: 'Copenhague', lat: 55.67594, lon: 12.56553 },
    { name: valueLen === 'es'? 'Egipto' : 'Egypt', value: 13, code: 'Egypt', namea2: 'eg', capital: 'El Cairo', lat: 30.06263 , lon: 31.24967},
    { name: valueLen === 'es'? 'Finlandia' : 'Finland', value: 14, code: 'Finland', namea2: 'fi', capital: 'Helsinki', lat: 60.16952, lon: 24.93545 },
    { name: valueLen === 'es'? 'Francia' : 'France', value: 15, code: 'France', namea2: 'fr', capital: 'Paris', lat: 48.85341, lon: 2.3488},
    { name: valueLen === 'es'? 'Alemania' : 'Germany', value: 16, code: 'Germany', namea2: 'de', capital: 'Berlín', lat: 52.52437, lon: 13.41053},
    { name: valueLen === 'es'? 'Armenia' : 'Armenia', value: 17, code: 'Armenia', namea2: 'am', capital: 'Erevan', lat: 40.1804, lon: 44.5145 },
    { name: valueLen === 'es'? 'Grecia' : 'Greece', value: 18, code: 'Greece', namea2: 'gr', capital: 'Atenas', lat: 37.98376, lon: 23.72784}, 
    { name: valueLen === 'es'? 'Hungría' : 'Hungary', value: 19, code: 'Hungary', namea2: 'hu', capital: 'Budapest', lat: 47.49835 , lon: 19.04045 },
    { name: valueLen === 'es'? 'India' : 'India', value: 20, code: 'India', namea2: 'in', capital: 'Nueva Delhi', lat: 28.65195, lon: 77.23149},
    { name: valueLen === 'es'? 'Indonesia' : 'Indonesia', value: 21, code: 'Indonesia', namea2: 'id', capital: 'Yakarta', lat: -6.21462, lon: 106.84513 },
    { name: valueLen === 'es'? 'Italia' : 'Italia', value: 22, code: 'Italia', namea2: 'it', capital: 'Roma', lat: 41.89193, lon: 12.51133},
    { name: valueLen === 'es'? 'Japon' : 'Japan', value: 23, code: 'Japan', namea2: 'jp', capital: 'Tokio', lat: 35.6895, lon: 139.69171},
    { name: valueLen === 'es'? 'Malasia' : 'Malaysia', value: 24, code: 'Malaysia', namea2: 'my', capital: 'Kuala Lumpur', lat: 3.1412, lon: 101.68653 },
    { name: valueLen === 'es'? 'México' : 'Mexico', value: 25, code: 'Mexico', namea2: 'mx', capital: 'Ciudad de Mexico', lat: 19.42847, lon:-99.12766 },
    { name: valueLen === 'es'? 'Marruecos' : 'Morocco', value: 26, code: 'Morocco', namea2: 'ma', capital: 'Rabat', lat: 34.01325, lon: -6.83255},
    { name: valueLen === 'es'? 'Paises Bajos' : 'Netherlands', value: 27, code: 'Netherlands', namea2: 'nl', capital: 'Ámsterdam', lat: 52.37403, lon: 4.88969 },
    { name: valueLen === 'es'? 'Nigeria' : 'Nigeria', value: 28, code: 'Nigeria', namea2: 'ng', capital: 'Abuya', lat: 9.05785, lon: 7.49508},
    { name: valueLen === 'es'? 'Uruguay' : 'Uruguay', value: 29, code: 'Uruguay', namea2: 'uy', capital: 'Montevideo', lat: -34.9011127, lon: -56.1645314},
    { name: valueLen === 'es'? 'Noruega' : 'Norway', value: 30, code: 'Norway', namea2: 'no', capital: 'Oslo', lat: 59.91273, lon: 10.74609 },
    { name: valueLen === 'es'? 'Pakistán' : 'Pakistan', value: 31, code: 'Pakistan', namea2: 'pk', capital: 'Islamabad', lat: 33.72148, lon: 73.04329 },
    { name: valueLen === 'es'? 'Perú' : 'Peru', value: 32, code: 'Peru', namea2: 'pe', capital: 'Lima', lat: -12.04318, lon: -77.02824 },
    { name: valueLen === 'es'? 'Filipinas' : 'Philippines', value: 33, code: 'Philippines', namea2: 'ph', capital: 'Manila', lat: 14.6042, lon: 120.9822},
    { name: valueLen === 'es'? 'Polonia' : 'Poland', value: 34, code: 'Poland', namea2: 'pl', capital: 'Varsovia', lat: 52.22977, lon: 21.01178},
    { name: valueLen === 'es'? 'Portugal' : 'Portugal', value: 35, code: 'Portugal', namea2: 'pt', capital: 'Lisboa', lat: 38.71667, lon: -9.13333},
    { name: valueLen === 'es'? 'Rumania' : 'Romania', value: 36, code: 'Romania', namea2: 'ro', capital: 'Bucarest', lat: 44.43225, lon: 26.10626},
    { name: valueLen === 'es'? 'Rusia' : 'Russia', value: 37, code: 'Russia', namea2: 'ru', capital: 'Moscú', lat: 55.75222, lon: 37.61556},
    { name: valueLen === 'es'? 'Senegal' : 'Senegal', value: 38, code: 'Senegal', namea2: 'sn', capital: 'Dakar', lat: 14.6937, lon: -17.44406},
    { name: valueLen === 'es'? 'Serbia' : 'Serbia', value: 39, code: 'Serbia', namea2: 'rs', capital: 'Belgrado', lat: 44.80401, lon: 20.46513},
    { name: valueLen === 'es'? 'Eslovaquia' : 'Slovakia', value: 40, code: 'Slovakia', namea2: 'sk', capital: 'Bratislava', lat: 48.14816, lon: 17.10674},
    { name: valueLen === 'es'? 'Eslovenia' : 'Slovenia', value: 41, code: 'Slovenia', namea2: 'si', capital: 'Liubliana', lat: 46.05108, lon: 14.50513},
    { name: valueLen === 'es'? 'Sudáfrica' : 'South', value: 42, code: 'South Africa', namea2: 'za', capital: 'Pretoria', lat: -25.74486, lon: 28.18783},
    { name: valueLen === 'es'? 'España' : 'Spain', value: 43, code: 'Spain', namea2: 'es', capital: 'Madrid', lat: 40.4165, lon:  -3.70256},
    { name: valueLen === 'es'? 'Suecia' : 'Suecia', value: 44, code: 'Sweden', namea2: 'se', capital: 'Estocolmo', lat: 59.32938, lon: 18.06871},
    { name: valueLen === 'es'? 'Suiza' : 'Suiza', value: 45, code: 'Switzerland', namea2: 'ch', capital: 'Berna', lat: 46.94809, lon: 7.44744},
    { name: valueLen === 'es'? 'Túnez' : 'Tunisia', value: 46, code: 'Tunisia', namea2: 'tn', capital: 'Túnez', lat: 36.81897, lon: 10.16579},
    { name: valueLen === 'es'? 'Turquía' : 'Turkey', value: 47, code: 'Turkey', namea2: 'tr', capital: 'Ankara', lat: 39.91987, lon: 32.85427},
    { name: valueLen === 'es'? 'Reino Unido' : 'United Kingdom', value: 48, code: 'UK', namea2: 'gb', capital: 'Londres', lat: 51.50853, lon: -0.12574},
    { name: valueLen === 'es'? 'Ucrania' : 'Ukraine', value: 49, code: 'Ukraine', namea2: 'ua', capital: 'Kiev', lat: 50.45466, lon: 30.5238},
    { name: valueLen === 'es'? 'Estados Unidos' : 'United States', value: 50, code: 'USA', namea2: 'us', capital: 'Washington D. C.', lat: 38.89511, lon: -77.03637}

        // 'México', 'Estados Unidos', 'Francia', 'Alemania', 'Italia', 
        // 'Reino Unido', 'Bélgica', 'Paises Bajos', 'Suecia', 'Suiza', 
        // 'Austria', 'Finlandia', 'Portugal', 'Turquía', 'Rusia', 
        // 'Dinamarca', 'Cánada', 'India', 'Grecia', 'España', 
        // 'Egipto', 'Argentina', 'Hungría', 'Polonia', 'Rumania', 
        // 'Uruguay','China', 'Brasil', 'Armenia' , 'Noruega', 
        // 'Sudáfrica', 'Australia', 'Ucrania', 'Indonesia', 'Japon', 
        // 'Marruecos', 'Bulgaria', 'Chile', 'Croacia','Serbia', 
        // 'Nigeria', 'Malasia', 'Pakistán', 'Eslovaquia', 'Perú', 
        // 'Túnez', 'Senegal', 'Eslovenia', 'Filipinas', 'S. Korea',
        // 'Uruguay', 'Armenia', 'S. Korea'

        
        // 'Mexico', 'USA', 'France', 'Germany','Italy',
        // 'UK','Belgium','Netherlands','Sweden','Switzerland',
        // 'Austria','Finland','Portugal','Turkey','Russia',
        // 'Denmark','Canada','India','Greece','Spain',
        // 'Egypt','Argentina','Hungary','Poland', 'Romania',
        // 'China','Brazil', 'Uruguay' ,'Norway', 'S. Korea',
        // 'South Africa','Australia','Ukraine','Indonesia','Japan',
        // 'Morocco','Bulgaria','Chile','Croatia','Serbia',
        // 'Nigeria','Malaysia', 'Pakistan','Slovakia','Peru',
        // 'Tunisia','Senegal','Slovenia','Philippines', 'Armenia',
  ],

  timeZones: [
    {
      value: 'mx',
      timeZones: [
        { name: 'Hora estándar del Este', utc: -5, code: 'EST' },
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
  languages: [
    { value: 1, label: 'Español', code: 'es'},
    { value: 2, label: 'Ingles', code: 'en'}
  ]
};
