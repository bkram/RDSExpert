
import { RdsData } from './types';

// ODA AID Mapping
export const ODA_MAP: Record<string, string> = {
    "CD46": "TMC (Traffic Message Channel)",
    "4BD7": "Radiotext+",
    "0093": "DAB Cross-Referencing",
    "CD9E": "EWS (Emergency Warning System)",
    "C737": "UMC (Utility Message Channel)",
    "E1C1": "Action Code",
    "C4D4": "eEAS",
    "CD47": "TMC (Traffic Message Channel)",
    "48D8": "Radiotext+",
    "4400": "RDS-Light",
    "A112": "NL Alert System",
    "ABCF": "RF Power Monitoring",
    "E411": "Beacon Downlink",
    "E123": "APS Gateway",
    "C3C3": "Traffic Plus by NAVTEQ",
    "C3B0": "iTunes Tagging",
    "C3A1": "Personal Radio Service",
    "6A7A": "Warning Receiver",
    "6365": "RDS2",
    "5757": "Personal Weather Station",
    "7373": "Enhanced Early Warning System",
    "CB73": "CITIBUS 1",
    "4C59": "CITIBUS 2",
    "CC21": "CITIBUS 3",
    "1DC2": "CITIBUS 4",
    "4AA1": "RASANT",
    "A911": "Data FM Messaging",
    "FF7F": "RFT Station Logo",
    "FF80": "RFT Slideshow",
    "CD19": "TokenMe",
    "FF70": "Internet Connection",
    "FF81": "RFT Journaline",
    "BE22": "Push-Ad",
    "ABCE": "Fleximax by Worldcast Systems",
    "C563": "ID Logic",
    "E911": "EAS Open Protocol",
    "C350": "NRSC Title and Artist",
    "C549": "Smart Grid Broadcast Channel",
    "C6A7": "Veil Enabled Interactive Device",
    "1BDA": "ELECTRABEL-DSM",
    "0F87": "ELECTRABEL-DSM",
    "0E2C": "ELECTRABEL-DSM",
    "1D47": "ELECTRABEL-DSM",
    "4BA2": "ELECTRABEL-DSM",
    "E5D7": "ELECTRABEL-DSM",
    "0C24": "ELECTRABEL-DSM",
    "4AB7": "ELECTRABEL-DSM",
    "1CB1": "ELECTRABEL-DSM",
    "4D9A": "ELECTRABEL-DSM",
    "E319": "ELECTRABEL-DSM",
    "0E31": "ELECTRABEL-DSM",
    "CB97": "ELECTRABEL-DSM",
    "E440": "ELECTRABEL-DSM",
    "4D95": "ELECTRABEL-DSM",
    "1E8F": "ELECTRABEL-DSM",
    "0D8B": "ELECTRABEL-DSM",
    "E4A6": "ELECTRABEL-DSM",
    "1C5E": "ELECTRABEL-DSM",
    "0BCB": "Leisure and Practical Info for Drivers",
    "4D87": "RCS (Radio Commerce System)",
    "0D45": "TMC ISO 14819-1 (For testing use only)",
    "0CC1": "WiPla Broadcast Control Signal",
    "1C68": "ITIS In-Vehicle Database",
    "6552": "eRT (Enhanced RadioText)",
    "125F": "I-FM RDS for Fixed and Mobile Devices",
    "50DD": "Disaster Warning System",
    "6363": "Hybradio RDS-Net (For testing use only)",
    "4BD8": "Radiotext+ for eRT"
};

export const INITIAL_RDS_DATA: RdsData = {
  pi: "----",
  ps: "--------",
  longPs: "",
  rtA: "",
  rtB: "",
  textAbFlag: false,
  rtPlus: [],
  rtPlusItemRunning: false,
  rtPlusItemToggle: false,
  hasOda: false,
  odaApp: undefined,
  odaList: [],
  hasRtPlus: false,
  hasEon: false,
  hasTmc: false,
  pty: 0,
  ptyName: "",
  ptyn: "",
  af: [],
  afListHead: null,
  afBLists: {}, 
  afType: 'Unknown',
  tp: false,
  ta: false,
  ms: false, 
  stereo: false, 
  artificialHead: false,
  compressed: false,
  dynamicPty: false,
  ecc: "",
  lic: "",
  pin: "",
  localTime: "",
  utcTime: "",
  eonData: {},
  tmcServiceInfo: { ltn: 0, sid: 0, afi: false, mode: 0, providerName: "[Unavailable]" },
  tmcMessages: [],
  ber: 0,
  rssi: 0,
  snr: 0,
  groupCounts: {},
  groupTotal: 0,
  groupSequence: [],
  recentGroups: [],
  psHistory: [],
  rtHistory: []
};

// ECC + PI First Char -> Country Mapping
export const ECC_COUNTRY_MAP: Record<string, Record<string, string>> = {
  "E0": {
    "9": "Albania", "3": "Andorra", "A": "Austria", "8": "Azores / Palestine", "6": "Belgium",
    "E": "Canary Islands", "D": "Germany", "1": "Germany", "B": "Hungary", "5": "Italy",
    "C": "Malta", "7": "Russia", "F": "Egypt", "2": "Algeria", "4": "Israel"
  },
  "E1": {
    "8": "Bulgaria", "2": "Cyprus", "9": "Denmark / Faroe Islands", "F": "France",
    "A": "Gibraltar", "1": "Greece", "7": "Luxembourg", "E": "Romania", "3": "San Marino",
    "4": "Switzerland", "C": "United Kingdom", "D": "Libya", "B": "Iraq", "5": "Jordan"
  },
  "E2": {
    "2": "Czech Republic", "A": "Iceland", "9": "Liechtenstein", "C": "Lithuania", "8": "Madeira",
    "B": "Monaco", "F": "Norway", "3": "Poland", "D": "Serbia", "5": "Slovakia",
    "E": "Spain", "4": "Vatican", "1": "Morocco", "7": "Tunisia", "6": "Syria"
  },
  "E3": {
    "F": "Belarus", "C": "Croatia", "2": "Ireland", "9": "Latvia", "1": "Montenegro",
    "8": "Netherlands", "E": "Sweden", "3": "Turkey", "B": "Azerbaijan", "D": "Kazakhstan",
    "A": "Lebanon", "5": "Tajikistan"
  },
  "E4": {
    "F": "Bosnia-Herzegovina", "2": "Estonia", "7": "Kosovo", "1": "Moldova",
    "3": "North Macedonia / Kyrgyzstan", "8": "Portugal", "9": "Slovenia", "6": "Ukraine",
    "A": "Armenia", "C": "Georgia", "E": "Turkmenistan", "B": "Uzbekistan"
  },
  "D0": {
    "6": "Angola", "E": "Benin", "B": "Burkina Faso", "1": "Cameroon", "2": "Central African Republic",
    "3": "Djibouti", "7": "Equatorial Guinea", "8": "Gabon", "9": "Guinea", "4": "Madagascar",
    "F": "Malawi", "5": "Mali", "C": "Republic of the Congo", "A": "South Africa", "D": "Togo"
  },
  "D1": {
    "A": "Ascension Island", "B": "Botswana", "9": "Burundi", "6": "Cape Verde", "C": "Comoros",
    "E": "Ethiopia", "8": "Gambia", "3": "Ghana", "2": "Liberia", "4": "Mauritania",
    "F": "Nigeria", "1": "Namibia", "5": "Sao Tome and Principe", "7": "Senegal", "D": "Tanzania"
  },
  "D2": {
    "9": "Chad", "B": "Democratic Republic of the Congo", "5": "Eswatini", "A": "Guinea-Bissau",
    "C": "Ivory Coast", "6": "Kenya", "3": "Mozambique", "8": "Niger", "1": "Sierra Leone",
    "4": "Uganda", "E": "Zambia", "D": "Zanzibar", "2": "Zimbabwe"
  },
  "D3": {
    "6": "Lesotho", "A": "Mauritius", "5": "Rwanda", "8": "Seychelles", "C": "Sudan",
    "3": "Western Sahara"
  },
  "A2": {
    "1": "Anguilla", "2": "Antigua and Barbuda", "A": "Argentina", "F": "Bahamas", "5": "Barbados",
    "6": "Belize", "C": "Bermuda", "B": "Brazil", "7": "Cayman Islands", "8": "Costa Rica",
    "9": "Cuba", "3": "Ecuador", "4": "Falkland Islands", "E": "Guadeloupe", "D": "Netherlands Antilles"
  },
  "A4": {
    "3": "Aruba", "C": "El Salvador", "1": "Guatemala", "D": "Haiti", "2": "Honduras",
    "F": "Mexico", "5": "Montserrat", "7": "Peru", "A": "Saint Kitts and Nevis", "B": "Saint Lucia",
    "8": "Suriname", "6": "Trinidad and Tobago", "9": "Uruguay", "E": "Venezuela"
  },
  "A3": {
    "1": "Bolivia", "C": "Chile", "2": "Colombia", "A": "Dominica", "B": "Dominican Republic",
    "D": "Grenada", "F": "Guyana", "3": "Jamaica", "4": "Martinique", "7": "Nicaragua",
    "9": "Panama", "6": "Paraguay", "8": "Puerto Rico", "E": "Turks and Caicos Islands"
  },
  "A1": {
    "C": "Canada", "F": "Greenland"
  },
  "A5": {
    "C": "Saint Vincent and the Grenadines", "F": "Virgin Islands"
  },
  "A6": {
    "F": "Saint Pierre and Miquelon"
  },
  "A0": {
    "1": "United States of America", "2": "United States of America", "3": "United States of America",
    "4": "United States of America", "5": "United States of America", "6": "United States of America",
    "7": "United States of America", "8": "United States of America", "9": "United States of America",
    "A": "United States of America", "B": "United States of America", "D": "United States of America",
    "E": "United States of America"
  },
  "F0": {
    "A": "Afghanistan", "1": "Australia", "2": "Australia", "3": "Australia", "4": "Australia",
    "5": "Australia", "6": "Australia", "7": "Australia", "8": "Australia", "E": "Bahrain",
    "C": "China", "F": "Malaysia", "B": "Myanmar", "D": "North Korea", "9": "Saudi Arabia"
  },
  "F1": {
    "3": "Bangladesh", "2": "Bhutan", "B": "Brunei", "5": "Fiji", "F": "Hong Kong",
    "8": "Iran", "1": "Kiribati", "7": "Nauru", "9": "New Zealand", "6": "Oman",
    "4": "Pakistan", "A": "Solomon Islands", "E": "South Korea", "C": "Sri Lanka", "D": "Taiwan"
  },
  "F2": {
    "3": "Cambodia", "5": "India", "C": "Indonesia", "9": "Japan", "1": "Kuwait",
    "6": "Macau", "B": "Maldives", "E": "Nepal", "8": "Philippines", "2": "Qatar",
    "4": "Samoa", "A": "Singapore", "D": "United Arab Emirates", "7": "Vietnam", "F": "Vanuatu"
  },
  "F3": {
    "1": "Laos", "E": "Micronesia", "F": "Mongolia", "9": "Papua New Guinea", "2": "Thailand",
    "3": "Tonga", "B": "Yemen"
  }
};

// LIC -> Language Mapping
export const LIC_LANGUAGE_MAP: Record<string, string> = {
    "01": "Albanian", "02": "Breton", "03": "Catalan", "04": "Croatian",
    "05": "Welsh", "06": "Czech", "07": "Danish", "08": "German", "09": "English",
    "0A": "Spanish", "0B": "Esperanto", "0C": "Estonian", "0D": "Basque", "0E": "Faroese",
    "0F": "French", "10": "Frisian", "11": "Irish", "12": "Gaelic", "13": "Galician",
    "14": "Icelandic", "15": "Italian", "16": "Sami", "17": "Latin", "18": "Latvian",
    "19": "Luxembourgian", "1A": "Lithuanian", "1B": "Hungarian", "1C": "Maltese", "1D": "Dutch",
    "1E": "Norwegian", "1F": "Occitan", "20": "Polish", "21": "Portuguese", "22": "Romanian",
    "23": "Romansh", "24": "Serbian", "25": "Slovak", "26": "Slovenian", "27": "Finnish",
    "28": "Swedish", "29": "Turkish", "2A": "Flemish", "2B": "Walloon",
    "7F": "Amharic", "7E": "Arabic", "7D": "Armenian", "7C": "Assamese", "7B": "Azerbaijani",
    "7A": "Bambara", "79": "Belarusian", "78": "Bengali", "77": "Bulgarian", "76": "Burmese",
    "75": "Chinese", "74": "Chuvash", "73": "Dari", "72": "Fulani", "71": "Georgian", "70": "Greek",
    "6F": "Gujarati", "6E": "Gorani", "6D": "Hausa", "6C": "Hebrew", "6B": "Hindi", "6A": "Indonesian",
    "69": "Japanese", "68": "Kannada", "67": "Kazakh", "66": "Khmer", "65": "Korean", "64": "Laotian",
    "63": "Macedonian", "62": "Malagasy", "61": "Malaysian", "60": "Moldovan", "5F": "Marathi",
    "5E": "Ndebele", "5D": "Nepali", "5C": "Oriya", "5B": "Papiamento", "5A": "Persian", "59": "Punjabi",
    "58": "Pushtu", "57": "Quechua", "56": "Russian", "55": "Rusyn", "54": "Serbo-Croat", "53": "Shona",
    "52": "Sinhalese", "51": "Somali", "50": "Sranan Tongo", "4F": "Swahili", "4E": "Tadzhik",
    "4D": "Tamil", "4C": "Tatar", "4B": "Telugu", "4A": "Thai", "49": "Ukrainian", "48": "Urdu",
    "47": "Uzbek", "46": "Vietnamese", "45": "Zulu"
};
