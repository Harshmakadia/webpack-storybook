import React from 'react';
const PHONE_NUMBER_FORMAT = '-...-...-....';

export const CONSTANTS = {
    THEME_COLOR: "#227fea",
    TITLE_FONT_COLOR: "#ffffff",
    TITLE: process.env.ORGANISATION_NAME,
    COUNTRIES_OBJECT: [{
        "name": "Afghanistan",
        "dialCode": "93",
        "iso2": "af",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Albania", "dialCode": "355", "iso2": "al", "areaCodes": 0, "priority": 0}, {
        "name": "Algeria",
        "dialCode": "213",
        "iso2": "dz",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Samoa (American)", "dialCode": "684", "iso2": "as", "areaCodes": 0, "priority": 0}, {
        "name": "Andorra",
        "dialCode": "376",
        "iso2": "ad",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Angola", "dialCode": "244", "iso2": "ao", "areaCodes": 0, "priority": 0}, {
        "name": "Anguilla",
        "dialCode": "1",
        "iso2": "ai",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "Antigua and Barbuda",
        "dialCode": "1",
        "iso2": "ag",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Argentina", "dialCode": "54", "iso2": "ar", "areaCodes": 0, "priority": 0}, {
        "name": "Armenia",
        "dialCode": "374",
        "iso2": "am",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Aruba", "dialCode": "297", "iso2": "aw", "areaCodes": 0, "priority": 0}, {
        "name": "Australia",
        "dialCode": "61",
        "iso2": "au",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Austria", "dialCode": "43", "iso2": "at", "areaCodes": 0, "priority": 0}, {
        "name": "Azerbaijan",
        "dialCode": "994",
        "iso2": "az",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Bahamas", "dialCode": "1", "iso2": "bs", "areaCodes": 0, "priority": 0}, {
        "name": "Bahrain",
        "dialCode": "973",
        "iso2": "bh",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Bangladesh", "dialCode": "880", "iso2": "bd", "areaCodes": 0, "priority": 0}, {
        "name": "Barbados",
        "dialCode": "1",
        "iso2": "bb",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Belarus", "dialCode": "375", "iso2": "by", "areaCodes": 0, "priority": 0}, {
        "name": "Belgium",
        "dialCode": "32",
        "iso2": "be",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Belize", "dialCode": "501", "iso2": "bz", "areaCodes": 0, "priority": 0}, {
        "name": "Benin",
        "dialCode": "229",
        "iso2": "bj",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Bermuda", "dialCode": "441", "iso2": "bm", "areaCodes": 0, "priority": 0}, {
        "name": "Bhutan",
        "dialCode": "975",
        "iso2": "bt",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Bolivia", "dialCode": "591", "iso2": "bo", "areaCodes": 0, "priority": 0}, {
        "name": "Bosnia",
        "dialCode": "387",
        "iso2": "ba",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Botswana", "dialCode": "267", "iso2": "bw", "areaCodes": 0, "priority": 0}, {
        "name": "Brazil",
        "dialCode": "55",
        "iso2": "br",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "Diego Garcia",
        "dialCode": "246",
        "iso2": "io",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "British Virgin Islands",
        "dialCode": "1284",
        "iso2": "vg",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Brunei", "dialCode": "673", "iso2": "bn", "areaCodes": 0, "priority": 0}, {
        "name": "Bulgaria",
        "dialCode": "359",
        "iso2": "bg",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Burkina Faso", "dialCode": "226", "iso2": "bf", "areaCodes": 0, "priority": 0}, {
        "name": "Burundi",
        "dialCode": "257",
        "iso2": "bi",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Cambodia", "dialCode": "855", "iso2": "kh", "areaCodes": 0, "priority": 0}, {
        "name": "Cameroon",
        "dialCode": "237",
        "iso2": "cm",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "Canada",
        "dialCode": "1",
        "iso2": "ca",
        "areaCodes": ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"],
        "priority": 1
    }, {
        "name": "Cape Verde Islands",
        "dialCode": "238",
        "iso2": "cv",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "Netherlands Antilles",
        "dialCode": "599",
        "iso2": "bq",
        "areaCodes": 0,
        "priority": 1
    }, {
        "name": "Cayman Islands",
        "dialCode": "345",
        "iso2": "ky",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "Central Africa Republic",
        "dialCode": "236",
        "iso2": "cf",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Chad", "dialCode": "235", "iso2": "td", "areaCodes": 0, "priority": 0}, {
        "name": "Chile",
        "dialCode": "56",
        "iso2": "cl",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "China", "dialCode": "86", "iso2": "cn", "areaCodes": 0, "priority": 0}, {
        "name": "Christmas Island",
        "dialCode": "61",
        "iso2": "cx",
        "areaCodes": 0,
        "priority": 2
    }, {"name": "Cocos", "dialCode": "61", "iso2": "cc", "areaCodes": 0, "priority": 1}, {
        "name": "Columbia",
        "dialCode": "57",
        "iso2": "co",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "Comoros Island",
        "dialCode": "269",
        "iso2": "km",
        "areaCodes": 0,
        "priority": 0
    }, {
        "name": "Democratic Republic of Congo (Zaire)",
        "dialCode": "243",
        "iso2": "cd",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Congo", "dialCode": "242", "iso2": "cg", "areaCodes": 0, "priority": 0}, {
        "name": "Cook Islands",
        "dialCode": "682",
        "iso2": "ck",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Costa Rica", "dialCode": "506", "iso2": "cr", "areaCodes": 0, "priority": 0}, {
        "name": "Ivory Coast",
        "dialCode": "225",
        "iso2": "ci",
        "areaCodes": 0,
        "priority": 0
    }, {"name": "Croatia", "dialCode": "385", "iso2": "hr", "areaCodes": 0, "priority": 0},
        {"name": "Curaçao", "dialCode": "599", "iso2": "cw", "areaCodes": 0, "priority": 0}, {
            "name": "Cyprus",
            "dialCode": "357",
            "iso2": "cy",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Czech Republic", "dialCode": "420", "iso2": "cz", "areaCodes": 0, "priority": 0}, {
            "name": "Denmark",
            "dialCode": "45",
            "iso2": "dk",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Djibouti",
            "dialCode": "253",
            "iso2": "dj",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Dominica Islands",
            "dialCode": "767",
            "iso2": "dm",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Dominican Republic",
            "dialCode": "809",
            "iso2": "do",
            "areaCodes": ["809", "829", "849"],
            "priority": 2
        }, {"name": "Ecuador", "dialCode": "593", "iso2": "ec", "areaCodes": 0, "priority": 0}, {
            "name": "Egypt",
            "dialCode": "20",
            "iso2": "eg",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "El Salvador",
            "dialCode": "503",
            "iso2": "sv",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Equatorial Guinea",
            "dialCode": "240",
            "iso2": "gq",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Eritrea", "dialCode": "291", "iso2": "er", "areaCodes": 0, "priority": 0}, {
            "name": "Estonia",
            "dialCode": "372",
            "iso2": "ee",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Ethiopia",
            "dialCode": "251",
            "iso2": "et",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Falkland Islands",
            "dialCode": "500",
            "iso2": "fk",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Faeroe Islands",
            "dialCode": "298",
            "iso2": "fo",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Fiji Islands", "dialCode": "679", "iso2": "fj", "areaCodes": 0, "priority": 0}, {
            "name": "Finland",
            "dialCode": "358",
            "iso2": "fi",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "France", "dialCode": "33", "iso2": "fr", "areaCodes": 0, "priority": 0}, {
            "name": "French Guiana",
            "dialCode": "594",
            "iso2": "gf",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "French Polynesia", "dialCode": "689", "iso2": "pf", "areaCodes": 0, "priority": 0}, {
            "name": "Gabon",
            "dialCode": "241",
            "iso2": "ga",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "The Gambia", "dialCode": "220", "iso2": "gm", "areaCodes": 0, "priority": 0}, {
            "name": "Georgia",
            "dialCode": "995",
            "iso2": "ge",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Germany", "dialCode": "49", "iso2": "de", "areaCodes": 0, "priority": 0}, {
            "name": "Ghana",
            "dialCode": "233",
            "iso2": "gh",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Gibraltar", "dialCode": "350", "iso2": "gi", "areaCodes": 0, "priority": 0}, {
            "name": "Greece",
            "dialCode": "30",
            "iso2": "gr",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Greenland", "dialCode": "299", "iso2": "gl", "areaCodes": 0, "priority": 0}, {
            "name": "Grenada",
            "dialCode": "473",
            "iso2": "gd",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Guadeloupe", "dialCode": "590", "iso2": "gp", "areaCodes": 0, "priority": 0}, {
            "name": "Guam",
            "dialCode": "671",
            "iso2": "gu",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Guatemala", "dialCode": "502", "iso2": "gt", "areaCodes": 0, "priority": 0}, {
            "name": "Guernsey",
            "dialCode": "44",
            "iso2": "gg",
            "areaCodes": 0,
            "priority": 1
        }, {
            "name": "Guinea Republic",
            "dialCode": "224",
            "iso2": "gn",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Guinea Bissau", "dialCode": "245", "iso2": "gw", "areaCodes": 0, "priority": 0}, {
            "name": "Guyana",
            "dialCode": "592",
            "iso2": "gy",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Haiti", "dialCode": "509", "iso2": "ht", "areaCodes": 0, "priority": 0}, {
            "name": "Honduras",
            "dialCode": "504",
            "iso2": "hn",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Hong Kong", "dialCode": "852", "iso2": "hk", "areaCodes": 0, "priority": 0}, {
            "name": "Hungary",
            "dialCode": "36",
            "iso2": "hu",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Iceland", "dialCode": "354", "iso2": "is", "areaCodes": 0, "priority": 0}, {
            "name": "India",
            "dialCode": "91",
            "iso2": "in",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Indonesia", "dialCode": "62", "iso2": "id", "areaCodes": 0, "priority": 0},
        {"name": "Iraq", "dialCode": "964", "iso2": "iq", "areaCodes": 0, "priority": 0}, {
            "name": "Ireland",
            "dialCode": "353",
            "iso2": "ie",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Isle of Man", "dialCode": "44", "iso2": "im", "areaCodes": 0, "priority": 2}, {
            "name": "Israel",
            "dialCode": "972",
            "iso2": "il",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Italy", "dialCode": "39", "iso2": "it", "areaCodes": 0, "priority": 0}, {
            "name": "Jamaica",
            "dialCode": "876",
            "iso2": "jm",
            "areaCodes": ["876", "658"],
            "priority": 4
        }, {"name": "Japan", "dialCode": "81", "iso2": "jp", "areaCodes": 0, "priority": 0}, {
            "name": "Jersey",
            "dialCode": "44",
            "iso2": "je",
            "areaCodes": 0,
            "priority": 3
        }, {"name": "Jordan", "dialCode": "962", "iso2": "jo", "areaCodes": 0, "priority": 0}, {
            "name": "Kazakhstan",
            "dialCode": "7",
            "iso2": "kz",
            "areaCodes": 0,
            "priority": 1
        }, {"name": "Kenya", "dialCode": "254", "iso2": "ke", "areaCodes": 0, "priority": 0}, {
            "name": "Kiribati",
            "dialCode": "686",
            "iso2": "ki",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Kosovo", "dialCode": "383", "iso2": "xk", "areaCodes": 0, "priority": 0}, {
            "name": "Kuwait",
            "dialCode": "965",
            "iso2": "kw",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Kyrgyzstan", "dialCode": "996", "iso2": "kg", "areaCodes": 0, "priority": 0}, {
            "name": "Laos",
            "dialCode": "856",
            "iso2": "la",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "latvia", "dialCode": "371", "iso2": "lv", "areaCodes": 0, "priority": 0}, {
            "name": "Lebanon",
            "dialCode": "961",
            "iso2": "lb",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Lesotho", "dialCode": "266", "iso2": "ls", "areaCodes": 0, "priority": 0}, {
            "name": "Liberia",
            "dialCode": "231",
            "iso2": "lr",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Libya", "dialCode": "218", "iso2": "ly", "areaCodes": 0, "priority": 0}, {
            "name": "Liechtenstein",
            "dialCode": "423",
            "iso2": "li",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Lithuania", "dialCode": "370", "iso2": "lt", "areaCodes": 0, "priority": 0}, {
            "name": "Luxembourg",
            "dialCode": "352",
            "iso2": "lu",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Macau", "dialCode": "853", "iso2": "mo", "areaCodes": 0, "priority": 0}, {
            "name": "Macedonia (Fyrom)",
            "dialCode": "389",
            "iso2": "mk",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Madagascar", "dialCode": "261", "iso2": "mg", "areaCodes": 0, "priority": 0}, {
            "name": "Malawi",
            "dialCode": "265",
            "iso2": "mw",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Malaysia",
            "dialCode": "60",
            "iso2": "my",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Maldives Republic", "dialCode": "960", "iso2": "mv", "areaCodes": 0, "priority": 0}, {
            "name": "Mali",
            "dialCode": "223",
            "iso2": "ml",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Malta", "dialCode": "356", "iso2": "mt", "areaCodes": 0, "priority": 0}, {
            "name": "Marshall Islands",
            "dialCode": "692",
            "iso2": "mh",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Martinique", "dialCode": "596", "iso2": "mq", "areaCodes": 0, "priority": 0}, {
            "name": "Mauritania",
            "dialCode": "222",
            "iso2": "mr",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Mauritius",
            "dialCode": "230",
            "iso2": "mu",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Mayotte Islands", "dialCode": "262", "iso2": "yt", "areaCodes": 0, "priority": 1}, {
            "name": "Mexico",
            "dialCode": "52",
            "iso2": "mx",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Micronesia", "dialCode": "691", "iso2": "fm", "areaCodes": 0, "priority": 0}, {
            "name": "Moldova",
            "dialCode": "373",
            "iso2": "md",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Monaco", "dialCode": "377", "iso2": "mc", "areaCodes": 0, "priority": 0}, {
            "name": "Mongolia",
            "dialCode": "976",
            "iso2": "mn",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Montenegro", "dialCode": "382", "iso2": "me", "areaCodes": 0, "priority": 0}, {
            "name": "Montserrat",
            "dialCode": "664",
            "iso2": "ms",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Morocco", "dialCode": "212", "iso2": "ma", "areaCodes": 0, "priority": 0}, {
            "name": "Mozambique",
            "dialCode": "258",
            "iso2": "mz",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Myanmar (Burma)", "dialCode": "95", "iso2": "mm", "areaCodes": 0, "priority": 0}, {
            "name": "Namibia",
            "dialCode": "264",
            "iso2": "na",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Nauru", "dialCode": "674", "iso2": "nr", "areaCodes": 0, "priority": 0}, {
            "name": "Nepal",
            "dialCode": "977",
            "iso2": "np",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Netherlands", "dialCode": "31", "iso2": "nl", "areaCodes": 0, "priority": 0}, {
            "name": "New Caledonia",
            "dialCode": "687",
            "iso2": "nc",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "New Zealand", "dialCode": "64", "iso2": "nz", "areaCodes": 0, "priority": 0}, {
            "name": "Nicaragua",
            "dialCode": "505",
            "iso2": "ni",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Niger", "dialCode": "227", "iso2": "ne", "areaCodes": 0, "priority": 0}, {
            "name": "Nigeria",
            "dialCode": "234",
            "iso2": "ng",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Niue Island",
            "dialCode": "683",
            "iso2": "nu",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Norfolk Island",
            "dialCode": "672",
            "iso2": "nf",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Mariana Islands", "dialCode": "670", "iso2": "mp", "areaCodes": 0, "priority": 0}, {
            "name": "Norway",
            "dialCode": "47",
            "iso2": "no",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Oman", "dialCode": "968", "iso2": "om", "areaCodes": 0, "priority": 0}, {
            "name": "Pakistan",
            "dialCode": "92",
            "iso2": "pk",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Palau", "dialCode": "680", "iso2": "pw", "areaCodes": 0, "priority": 0}, {
            "name": "Palestine",
            "dialCode": "970",
            "iso2": "ps",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Panama", "dialCode": "507", "iso2": "pa", "areaCodes": 0, "priority": 0}, {
            "name": "Papua New Guinea",
            "dialCode": "675",
            "iso2": "pg",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Paraguay", "dialCode": "595", "iso2": "py", "areaCodes": 0, "priority": 0}, {
            "name": "Peru",
            "dialCode": "51",
            "iso2": "pe",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Philippines", "dialCode": "63", "iso2": "ph", "areaCodes": 0, "priority": 0}, {
            "name": "Poland",
            "dialCode": "48",
            "iso2": "pl",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Portugal", "dialCode": "351", "iso2": "pt", "areaCodes": 0, "priority": 0}, {
            "name": "Puerto Rico",
            "dialCode": "787",
            "iso2": "pr",
            "areaCodes": ["787", "939"],
            "priority": 3
        }, {"name": "Qatar", "dialCode": "974", "iso2": "qa", "areaCodes": 0, "priority": 0}, {
            "name": "Reunion Island",
            "dialCode": "262",
            "iso2": "re",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Romania", "dialCode": "40", "iso2": "ro", "areaCodes": 0, "priority": 0}, {
            "name": "Russia",
            "dialCode": "7",
            "iso2": "ru",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Rwanda", "dialCode": "250", "iso2": "rw", "areaCodes": 0, "priority": 0}, {
            "name": "Saint Barthélemy",
            "dialCode": "590",
            "iso2": "bl",
            "areaCodes": 0,
            "priority": 1
        }, {
            "name": "St Helena",
            "dialCode": "290",
            "iso2": "sh",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "St Kitts & Nevia",
            "dialCode": "869",
            "iso2": "kn",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "St Lucia", "dialCode": "758", "iso2": "lc", "areaCodes": 0, "priority": 0}, {
            "name": "Saint Martin",
            "dialCode": "590",
            "iso2": "mf",
            "areaCodes": 0,
            "priority": 2
        }, {
            "name": "Saint Pierre and Miquelon",
            "dialCode": "508",
            "iso2": "pm",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Saint Vincent and the Grenadines",
            "dialCode": "1784",
            "iso2": "vc",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Samoa (Western)",
            "dialCode": "685",
            "iso2": "ws",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "San Marino",
            "dialCode": "378",
            "iso2": "sm",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Sao Tome & Principe",
            "dialCode": "239",
            "iso2": "st",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Saudi Arabia", "dialCode": "966", "iso2": "sa", "areaCodes": 0, "priority": 0}, {
            "name": "Senegal",
            "dialCode": "221",
            "iso2": "sn",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Serbia", "dialCode": "381", "iso2": "rs", "areaCodes": 0, "priority": 0}, {
            "name": "Seychelles",
            "dialCode": "248",
            "iso2": "sc",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Sierra Leone", "dialCode": "232", "iso2": "sl", "areaCodes": 0, "priority": 0}, {
            "name": "Singapore",
            "dialCode": "65",
            "iso2": "sg",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Sint Maarten",
            "dialCode": "1721",
            "iso2": "sx",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Slovak Republic", "dialCode": "421", "iso2": "sk", "areaCodes": 0, "priority": 0}, {
            "name": "Slovenia",
            "dialCode": "386",
            "iso2": "si",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Solomon Islands", "dialCode": "677", "iso2": "sb", "areaCodes": 0, "priority": 0}, {
            "name": "Somalia",
            "dialCode": "252",
            "iso2": "so",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "South Africa", "dialCode": "27", "iso2": "za", "areaCodes": 0, "priority": 0}, {
            "name": "Korea, South",
            "dialCode": "82",
            "iso2": "kr",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "South Sudan", "dialCode": "211", "iso2": "ss", "areaCodes": 0, "priority": 0}, {
            "name": "Spain",
            "dialCode": "34",
            "iso2": "es",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Sri Lanka", "dialCode": "94", "iso2": "lk", "areaCodes": 0, "priority": 0}, {
            "name": "Sudan",
            "dialCode": "249",
            "iso2": "sd",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Surinam",
            "dialCode": "597",
            "iso2": "sr",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Svalbard and Jan Mayen",
            "dialCode": "47",
            "iso2": "sj",
            "areaCodes": 0,
            "priority": 1
        }, {"name": "Swaziland", "dialCode": "268", "iso2": "sz", "areaCodes": 0, "priority": 0}, {
            "name": "Sweden",
            "dialCode": "46",
            "iso2": "se",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Switzerland", "dialCode": "41", "iso2": "ch", "areaCodes": 0, "priority": 0},
        {"name": "Taiwan", "dialCode": "886", "iso2": "tw", "areaCodes": 0, "priority": 0}, {
            "name": "Tajikistan",
            "dialCode": "992",
            "iso2": "tj",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Tanzania", "dialCode": "255", "iso2": "tz", "areaCodes": 0, "priority": 0}, {
            "name": "Thailand",
            "dialCode": "66",
            "iso2": "th",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Timor-Leste", "dialCode": "670", "iso2": "tl", "areaCodes": 0, "priority": 0}, {
            "name": "Togo",
            "dialCode": "228",
            "iso2": "tg",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Tokelau", "dialCode": "690", "iso2": "tk", "areaCodes": 0, "priority": 0}, {
            "name": "Tonga",
            "dialCode": "676",
            "iso2": "to",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Trinidad & Tobago",
            "dialCode": "868",
            "iso2": "tt",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Tunisia", "dialCode": "216", "iso2": "tn", "areaCodes": 0, "priority": 0}, {
            "name": "Turkey",
            "dialCode": "90",
            "iso2": "tr",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Turkmenistan",
            "dialCode": "993",
            "iso2": "tm",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Turks & Caicos Islands",
            "dialCode": "649",
            "iso2": "tc",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Tuvalu",
            "dialCode": "688",
            "iso2": "tv",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "U.S. Virgin Islands",
            "dialCode": "1340",
            "iso2": "vi",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Uganda", "dialCode": "256", "iso2": "ug", "areaCodes": 0, "priority": 0}, {
            "name": "Ukraine",
            "dialCode": "380",
            "iso2": "ua",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "United Arab Emirates",
            "dialCode": "971",
            "iso2": "ae",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "United Kingdom", "dialCode": "44", "iso2": "gb", "areaCodes": 0, "priority": 0}, {
            "name": "US",
            "dialCode": "1",
            "iso2": "us",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Uruguay", "dialCode": "598", "iso2": "uy", "areaCodes": 0, "priority": 0}, {
            "name": "Uzbekistan",
            "dialCode": "998",
            "iso2": "uz",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Vanuatu", "dialCode": "678", "iso2": "vu", "areaCodes": 0, "priority": 0}, {
            "name": "Vatican City",
            "dialCode": "39",
            "iso2": "va",
            "areaCodes": 0,
            "priority": 1
        }, {"name": "Venezuela", "dialCode": "58", "iso2": "ve", "areaCodes": 0, "priority": 0}, {
            "name": "Vietnam",
            "dialCode": "84",
            "iso2": "vn",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Wallis & Futuna Islands",
            "dialCode": "681",
            "iso2": "wf",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Western Sahara",
            "dialCode": "212",
            "iso2": "eh",
            "areaCodes": 0,
            "priority": 1
        }, {
            "name": "Yemen Arab Republic",
            "dialCode": "967",
            "iso2": "ye",
            "areaCodes": 0,
            "priority": 0
        }, {"name": "Zambia", "dialCode": "260", "iso2": "zm", "areaCodes": 0, "priority": 0}, {
            "name": "Zimbabwe",
            "dialCode": "263",
            "iso2": "zw",
            "areaCodes": 0,
            "priority": 0
        }, {
            "name": "Åland Islands",
            "dialCode": "358",
            "iso2": "ax",
            "areaCodes": 0,
            "priority": 1
        }, {"name": "Ascension Island", "dialCode": "247", "iso2": "ac", "areaCodes": 0, "priority": 1}],
    BOT_NAME: process.env.ORGANISATION_NAME,
    BOT_MODES: {
        "BOT": {
            "name": "SEQUENTIAL FLOW",
            "description": "Rule based approach that works in a pre-defined manner (not smart)"
        },
        "LIVE_CHAT": {"name": "HUMAN ONLY", "description": "Live chat between agents and customers. No chatbot."},
        "ASSISTIVE": {"name": "ASSISTIVE", "description": "Chatbot suggests answers to Agents"},
        "AUTO_REPLY": {
            "name": "AUTO REPLY",
            "description": "AI based Chatbot that responds by understanding user intent"
        }
    },
    MESSENGER_HINT: "Send a reply",
    DUMMY_USER: "hello@marutitech.com",
    MESSAGES_DATA: {
        "ok": true,
        "columns": ["date", "Message Count"],
        "subtitle": {"text": "Total Messages"},
        "series": [{
            "data": [["2018-09-01", "104"], ["2018-09-02", "120"], ["2018-09-03", "214"], ["2018-09-04", "332"], ["2018-09-05", "442"], ["2018-09-06", "246"], ["2018-09-07", "310"], ["2018-09-08", "146"], ["2018-09-09", "104"], ["2018-09-10", "510"], ["2018-09-11", "450"], ["2018-09-12", "432"], ["2018-09-13", "296"], ["2018-09-14", "438"], ["2018-09-15", "138"], ["2018-09-16", "226"], ["2018-09-17", "386"], ["2018-09-18", "280"], ["2018-09-19", "420"], ["2018-09-20", "512"], ["2018-09-21", "268"], ["2018-09-22", "200"], ["2018-09-23", "104"], ["2018-09-24", "376"], ["2018-09-25", "420"], ["2018-09-26", "378"], ["2018-09-27", "404"], ["2018-09-28", "272"], ["2018-09-29", "200"], ["2018-09-30", "270"], ["2018-10-01", "292"], ["2018-10-02", "324"], ["2018-10-03", "374"], ["2018-10-04", "370"], ["2018-10-05", "570"], ["2018-10-06", "160"], ["2018-10-07", "176"], ["2018-10-08", "346"], ["2018-10-09", "298"], ["2018-10-10", "478"], ["2018-10-11", "500"], ["2018-10-12", "358"], ["2018-10-13", "228"], ["2018-10-14", "116"], ["2018-10-15", "424"], ["2018-10-16", "308"], ["2018-10-17", "330"], ["2018-10-18", "372"], ["2018-10-19", "284"], ["2018-10-20", "210"], ["2018-10-21", "126"]],
            "name": "Total Messages"
        }],
        "summary": [{
            "past_value": "13151",
            "current_value": "15642",
            "percentage": "18.94%",
            "name": "Message Count",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }],
        "title": {"text": "Total Messages"}
    },
    CONVERSATIONS_DATA: {
        "ok": true,
        "columns": ["date", "Total Conversations", "New Users' Conversations", "Returning Users' Conversations"],
        "subtitle": {"text": "Total Conversations"},
        "series": [{
            "data": [["2018-09-01", "21", "21", "0"], ["2018-09-02", "20", "20", "0"], ["2018-09-03", "51", "51", "0"], ["2018-09-04", "70", "70", "0"], ["2018-09-05", "89", "89", "0"], ["2018-09-06", "80", "80", "0"], ["2018-09-07", "68", "68", "0"], ["2018-09-08", "40", "40", "0"], ["2018-09-09", "21", "21", "0"], ["2018-09-10", "128", "128", "0"], ["2018-09-11", "193", "193", "0"], ["2018-09-12", "136", "136", "0"], ["2018-09-13", "95", "95", "0"], ["2018-09-14", "107", "107", "0"], ["2018-09-15", "47", "47", "0"], ["2018-09-16", "52", "52", "0"], ["2018-09-17", "95", "95", "0"], ["2018-09-18", "88", "88", "0"], ["2018-09-19", "97", "97", "0"], ["2018-09-20", "125", "125", "0"], ["2018-09-21", "72", "72", "0"], ["2018-09-22", "56", "56", "0"], ["2018-09-23", "43", "43", "0"], ["2018-09-24", "100", "100", "0"], ["2018-09-25", "103", "103", "0"], ["2018-09-26", "101", "101", "0"], ["2018-09-27", "116", "116", "0"], ["2018-09-28", "85", "85", "0"], ["2018-09-29", "51", "51", "0"], ["2018-09-30", "63", "63", "0"], ["2018-10-01", "90", "90", "0"], ["2018-10-02", "70", "70", "0"], ["2018-10-03", "90", "90", "0"], ["2018-10-04", "109", "109", "0"], ["2018-10-05", "107", "107", "0"], ["2018-10-06", "36", "36", "0"], ["2018-10-07", "44", "44", "0"], ["2018-10-08", "105", "105", "0"], ["2018-10-09", "97", "97", "0"], ["2018-10-10", "112", "112", "0"], ["2018-10-11", "133", "133", "0"], ["2018-10-12", "83", "83", "0"], ["2018-10-13", "48", "48", "0"], ["2018-10-14", "37", "37", "0"], ["2018-10-15", "107", "107", "0"], ["2018-10-16", "104", "104", "0"], ["2018-10-17", "87", "87", "0"], ["2018-10-18", "93", "93", "0"], ["2018-10-19", "71", "71", "0"], ["2018-10-20", "56", "56", "0"], ["2018-10-21", "363", "363", "0"]],
            "name": "Total Conversations"
        }],
        "summary": [{
            "past_value": "3129",
            "current_value": "4455",
            "percentage": "42.38%",
            "name": "Total Conversations",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }, {
            "past_value": "3129",
            "current_value": "4455",
            "percentage": "42.38%",
            "name": "New Users' Conversations",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }, {
            "past_value": "0",
            "current_value": "0",
            "percentage": "-",
            "name": "Returning Users' Conversations",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }],
        "title": {"text": "Total Conversations"}
    },
    USERS_DATA: {
        "ok": true,
        "columns": ["date", "Total Users", "New Users", "Returning Users"],
        "subtitle": {"text": "Total Users"},
        "series": [{
            "data": [["2018-09-01", "21", "21", "0"], ["2018-09-02", "20", "20", "0"], ["2018-09-03", "51", "51", "0"], ["2018-09-04", "70", "70", "0"], ["2018-09-05", "89", "89", "0"], ["2018-09-06", "80", "80", "0"], ["2018-09-07", "68", "68", "0"], ["2018-09-08", "40", "40", "0"], ["2018-09-09", "21", "21", "0"], ["2018-09-10", "128", "128", "0"], ["2018-09-11", "193", "193", "0"], ["2018-09-12", "136", "136", "0"], ["2018-09-13", "95", "95", "0"], ["2018-09-14", "107", "107", "0"], ["2018-09-15", "47", "47", "0"], ["2018-09-16", "52", "52", "0"], ["2018-09-17", "95", "95", "0"], ["2018-09-18", "88", "88", "0"], ["2018-09-19", "97", "97", "0"], ["2018-09-20", "125", "125", "0"], ["2018-09-21", "72", "72", "0"], ["2018-09-22", "56", "56", "0"], ["2018-09-23", "43", "43", "0"], ["2018-09-24", "100", "100", "0"], ["2018-09-25", "103", "103", "0"], ["2018-09-26", "101", "101", "0"], ["2018-09-27", "116", "116", "0"], ["2018-09-28", "85", "85", "0"], ["2018-09-29", "51", "51", "0"], ["2018-09-30", "63", "63", "0"], ["2018-10-01", "90", "90", "0"], ["2018-10-02", "70", "70", "0"], ["2018-10-03", "90", "90", "0"], ["2018-10-04", "109", "109", "0"], ["2018-10-05", "107", "107", "0"], ["2018-10-06", "36", "36", "0"], ["2018-10-07", "44", "44", "0"], ["2018-10-08", "105", "105", "0"], ["2018-10-09", "97", "97", "0"], ["2018-10-10", "112", "112", "0"], ["2018-10-11", "133", "133", "0"], ["2018-10-12", "83", "83", "0"], ["2018-10-13", "48", "48", "0"], ["2018-10-14", "37", "37", "0"], ["2018-10-15", "107", "107", "0"], ["2018-10-16", "104", "104", "0"], ["2018-10-17", "87", "87", "0"], ["2018-10-18", "93", "93", "0"], ["2018-10-19", "71", "71", "0"], ["2018-10-20", "56", "56", "0"], ["2018-10-21", "363", "363", "0"]],
            "name": "Total Users"
        }],
        "summary": [{
            "past_value": "3129",
            "current_value": "4455",
            "percentage": "42.38%",
            "name": "Total Users",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }, {
            "past_value": "3129",
            "current_value": "4455",
            "percentage": "42.38%",
            "name": "New Users",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }, {
            "past_value": "0",
            "current_value": "0",
            "percentage": "-",
            "name": "Returning Users",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }],
        "title": {"text": "Total Users"}
    },
    CONVERSATION_STEPS_DATA: {
        "ok": true,
        "columns": ["date", "Conversation Steps", "Users"],
        "subtitle": {"text": "Avg Conv Steps / User"},
        "series": [{
            "data": [["2018-09-01", "2.48", "21"], ["2018-09-02", "3.00", "20"], ["2018-09-03", "2.10", "51"], ["2018-09-04", "2.37", "70"], ["2018-09-05", "2.48", "89"], ["2018-09-06", "1.54", "80"], ["2018-09-07", "2.28", "68"], ["2018-09-08", "1.82", "40"], ["2018-09-09", "2.48", "21"], ["2018-09-10", "1.99", "128"], ["2018-09-11", "1.20", "193"], ["2018-09-12", "1.54", "136"], ["2018-09-13", "1.56", "95"], ["2018-09-14", "2.05", "107"], ["2018-09-15", "1.47", "47"], ["2018-09-16", "2.17", "52"], ["2018-09-17", "2.03", "95"], ["2018-09-18", "1.59", "88"], ["2018-09-19", "2.16", "97"], ["2018-09-20", "2.05", "125"], ["2018-09-21", "1.86", "72"], ["2018-09-22", "1.79", "56"], ["2018-09-23", "1.21", "43"], ["2018-09-24", "1.88", "100"], ["2018-09-25", "2.04", "103"], ["2018-09-26", "1.87", "101"], ["2018-09-27", "1.74", "116"], ["2018-09-28", "1.60", "85"], ["2018-09-29", "2.06", "51"], ["2018-09-30", "2.10", "63"], ["2018-10-01", "1.60", "90"], ["2018-10-02", "2.31", "70"], ["2018-10-03", "2.08", "90"], ["2018-10-04", "1.77", "109"], ["2018-10-05", "2.62", "107"], ["2018-10-06", "2.28", "36"], ["2018-10-07", "1.89", "44"], ["2018-10-08", "1.65", "105"], ["2018-10-09", "1.54", "97"], ["2018-10-10", "2.13", "112"], ["2018-10-11", "1.90", "133"], ["2018-10-12", "2.12", "83"], ["2018-10-13", "2.38", "48"], ["2018-10-14", "1.57", "37"], ["2018-10-15", "1.98", "107"], ["2018-10-16", "1.48", "104"], ["2018-10-17", "1.92", "87"], ["2018-10-18", "1.98", "93"], ["2018-10-19", "2.00", "71"], ["2018-10-20", "1.88", "56"], ["2018-10-21", "0.17", "363"]],
            "name": "Avg Conv Steps / User"
        }],
        "summary": [{
            "past_value": "2.16",
            "current_value": "1.92",
            "percentage": "-11.11%",
            "name": "Avg Conv Steps / User",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }],
        "title": {"text": "Avg Conv Steps / User"}
    },
    SESSION_LENGTH_DATA: {
        "ok": true,
        "columns": ["date", "Avg Session Length (Min.)"],
        "subtitle": {"text": "Avg Session Length"},
        "series": [{
            "data": [["2018-09-01", "1.38"], ["2018-09-02", "1.35"], ["2018-09-03", "1.10"], ["2018-09-04", "1.53"], ["2018-09-05", "1.82"], ["2018-09-06", "1.27"], ["2018-09-07", "2.87"], ["2018-09-08", "0.75"], ["2018-09-09", "1.05"], ["2018-09-10", "2.94"], ["2018-09-11", "1.40"], ["2018-09-12", "0.82"], ["2018-09-13", "1.01"], ["2018-09-14", "1.72"], ["2018-09-15", "0.68"], ["2018-09-16", "3.90"], ["2018-09-17", "2.94"], ["2018-09-18", "3.32"], ["2018-09-19", "1.30"], ["2018-09-20", "0.87"], ["2018-09-21", "0.72"], ["2018-09-22", "1.95"], ["2018-09-23", "0.58"], ["2018-09-24", "1.71"], ["2018-09-25", "3.04"], ["2018-09-26", "2.90"], ["2018-09-27", "5.44"], ["2018-09-28", "2.29"], ["2018-09-29", "14.04"], ["2018-09-30", "3.30"], ["2018-10-01", "0.73"], ["2018-10-02", "2.21"], ["2018-10-03", "1.09"], ["2018-10-04", "25.42"], ["2018-10-05", "3.80"], ["2018-10-06", "67.61"], ["2018-10-07", "1.05"], ["2018-10-08", "2.12"], ["2018-10-09", "0.47"], ["2018-10-10", "1.60"], ["2018-10-11", "12.49"], ["2018-10-12", "0.94"], ["2018-10-13", "0.96"], ["2018-10-14", "0.92"], ["2018-10-15", "1.53"], ["2018-10-16", "1.13"], ["2018-10-17", "17.08"], ["2018-10-18", "2.16"], ["2018-10-19", "5.65"], ["2018-10-20", "4.18"], ["2018-10-21", "0.10"]],
            "name": "Avg Session Length"
        }],
        "summary": [{
            "past_value": "3.97",
            "current_value": "3.68",
            "percentage": "-7.30%",
            "name": "Avg Session Length",
            "past_date_range": "2018-07-12 to 2018-08-31"
        }],
        "title": {"text": "Avg Session Length"}
    },
    COUNTRY_DATA: {
        "ok": true,
        "columns": ["users", "CountryName"],
        "subtitle": {"text": "Top Countries"},
        "series": [{
            "data": [["2535", "India"], ["481", "United States"], ["102", "United Kingdom"], ["78", "Germany"], ["75", "Australia"], ["68", "Singapore"], ["62", "Canada"], ["54", "Malaysia"], ["53", "Ukraine"], ["48", "Netherlands"], ["40", "France"], ["38", "Philippines"], ["36", "Pakistan"], ["36", "Spain"], ["34", "Hong Kong"], ["30", "Brazil"], ["28", "Nigeria"], ["26", "South Africa"], ["25", "Sweden"], ["23", "Thailand"], ["23", "Sri Lanka"], ["22", "Italy"], ["19", "Viet Nam"], ["18", "Switzerland"], ["17", "Greece"], ["17", "Saudi Arabia"], ["17", "Korea, Republic of"], ["16", "Egypt"], ["16", "United Arab Emirates"], ["14", "Japan"], ["13", "Indonesia"], ["13", "Romania"], ["12", "Bangladesh"], ["12", "Israel"], ["12", "New Zealand"], ["12", "Turkey"], ["11", "Morocco"], ["11", "Portugal"], ["10", "Kenya"], ["10", "Norway"], ["10", "Belgium"], ["9", "Croatia"], ["9", "Poland"], ["8", "Cambodia"], ["8", "Ireland"], ["7", "Myanmar"], ["7", "Colombia"], ["7", "Zimbabwe"], ["7", "Denmark"], ["7", "Tunisia"], ["6", "Czech Republic"], ["5", "Nepal"], ["5", "Mexico"], ["5", "Taiwan, Province of China"], ["5", "Russian Federation"], ["5", "Hungary"], ["5", "Austria"], ["5", "Peru"], ["5", "Argentina"], ["5", "Serbia"], ["4", "Syrian Arab Republic"], ["4", "Armenia"], ["4", "Oman"], ["4", "Finland"], ["4", "Senegal"], ["4", "China"], ["4", "Slovenia"], ["3", "Cameroon"], ["3", "Ghana"], ["3", "Tanzania, United Republic of"], ["3", "Uganda"], ["3", "Namibia"], ["3", "Mauritius"], ["3", "Malta"], ["3", "Lebanon"], ["3", "Bahrain"], ["3", "Macedonia, The Former Yugoslav Republic of"], ["3", "Kyrgyzstan"], ["2", "Bolivia, Plurinational State of"], ["2", "Kuwait"], ["2", "Uzbekistan"], ["2", "Luxembourg"], ["2", "Georgia"], ["2", "Qatar"], ["2", "Jordan"], ["2", "Guatemala"], ["2", "Honduras"], ["2", "Kazakhstan"], ["2", "Chile"], ["1", "Algeria"], ["1", "Bhutan"], ["1", "Azerbaijan"], ["1", "Guinea"], ["1", "Grenada"], ["1", "Estonia"], ["1", "Trinidad and Tobago"], ["1", "Cyprus"], ["1", "Panama"], ["1", "Brunei Darussalam"], ["1", "Jamaica"], ["1", "Latvia"], ["1", "Albania"], ["1", "Ethiopia"], ["1", "Fiji"], ["1", "Slovakia"], ["1", "Guernsey"], ["1", "Eswatini"], ["1", "Lesotho"], ["1", "Lithuania"], ["1", "Belarus"], ["1", "South Sudan"], ["1", "Moldova, Republic of"], ["1", "Puerto Rico"]],
            "name": "Top Countries"
        }],
        "summary": [],
        "title": {"text": "Top Countries"}
    },
    URL_DATA: {
        "ok": true,
        "columns": ["url", "UrlCount"],
        "subtitle": {"text": "Top URLs"},
        "series": [{
            "data": [["https://www.marutitech.com/14-powerful-chatbot-platforms/", "953"], ["https://www.marutitech.com/chatbots-work-guide-chatbot-architecture/", "366"], ["https://www.marutitech.com/", "316"], ["https://www.marutitech.com/make-intelligent-chatbot/", "281"], ["https://www.marutitech.com/complete-guide-chatbots/", "269"], ["https://www.marutitech.com/design-chatbot-conversation/", "240"], ["https://www.marutitech.com/ways-ai-transforming-finance/", "141"], ["https://www.marutitech.com/benefits-chatbot/", "129"], ["https://www.marutitech.com/complete-guide-bot-frameworks/", "92"], ["https://www.marutitech.com/problems-solved-machine-learning/", "84"], ["https://www.marutitech.com/machine-learning-fraud-detection/", "82"], ["https://www.marutitech.com/about-us/careers/", "76"], ["https://www.marutitech.com/recommendation-engine-benefits/", "76"], ["https://www.marutitech.com/7-reasons-why-business-needs-chatbot/", "74"], ["https://www.marutitech.com/blog/", "73"], ["https://www.marutitech.com/bot-development/", "65"], ["https://www.marutitech.com/artificial-intelligence-for-customer-service-2/", "60"], ["https://www.marutitech.com/chatbot-development/", "57"], ["https://www.marutitech.com/top-8-deep-learning-frameworks/", "56"], ["https://www.marutitech.com/7-trends-of-mobile-application-development/", "54"], ["https://www.marutitech.com/working-image-recognition/", "48"], ["https://www.marutitech.com/traits-good-chatbot/", "43"], ["https://www.marutitech.com/ebooks/guide-design-chatbot-conversation/", "41"], ["https://www.marutitech.com/artificial-intelligence-in-hospitality/", "38"], ["https://www.marutitech.com/about-us/", "35"], ["https://www.marutitech.com/elasticsearch-can-helpful-business/", "31"], ["https://www.marutitech.com/contact-us/", "30"], ["https://www.marutitech.com/hotel-industry-ai-awesome-user-experience/", "26"], ["https://www.marutitech.com/5-challenges-in-web-application-development/", "22"], ["https://www.marutitech.com/heres-need-know-chatbots/", "21"], ["https://www.marutitech.com/artificial-intelligence-in-testing/", "20"], ["https://www.marutitech.com/cognitive-computing-features-scope-limitations/", "19"], ["https://www.marutitech.com/conversational-interfaces-will-replace-web-forms/", "17"], ["https://www.marutitech.com/artificial-intelligence-and-machine-learning/", "16"], ["https://www.marutitech.com/category/bots-and-chatbots/", "16"], ["https://www.marutitech.com/blockchain-benefits/", "16"], ["https://www.marutitech.com/chatbots-in-real-estate/", "16"], ["https://www.marutitech.com/chatbots-personal-finance-assistant/", "15"], ["https://www.marutitech.com/chatbots-and-service-industry/", "14"], ["https://www.marutitech.com/back-end-technology/", "14"], ["https://www.marutitech.com/serverless-architecture-business-computing/", "13"], ["https://www.marutitech.com/chatbots-as-your-doctors/", "13"], ["https://www.marutitech.com/artificial-intelligence-in-insurance/", "11"], ["https://www.marutitech.com/chatbots-as-your-fashion-adviser/", "10"], ["https://www.marutitech.com/salesforce-services/", "10"], ["https://www.marutitech.com/chatbots-in-hospitality-and-travel-industries/", "10"], ["https://www.marutitech.com/white-paper/successful-bot-strategy-business/", "9"], ["https://www.marutitech.com/blockchain-technology-implications-financial-platform/", "9"], ["https://www.marutitech.com/machine-learning-predictive-analytics/", "9"], ["https://www.marutitech.com/big-data-analytics-will-play-important-role-businesses/", "9"], ["https://www.marutitech.com/artificial-intelligence-in-b2b-sales-and-marketing/", "9"], ["https://www.marutitech.com/casestudy/chatbot-solution-artificial-intelligence/", "9"], ["https://www.marutitech.com/how-can-artificial-intelligence-help-fintech-companies/", "9"], ["https://www.marutitech.com/big-data-analysis-structured-unstructured-data/", "8"], ["https://www.marutitech.com/conversational-ui-business-communication/", "8"], ["https://www.marutitech.com/8-best-practices-bot-development/", "8"], ["https://www.marutitech.com/category/software-development-practices/", "8"], ["https://www.marutitech.com/jobs/senior-backend-developer/", "8"], ["https://www.marutitech.com/it-strategy-and-technology-consulting/", "7"], ["https://www.marutitech.com/chatbots-transforming-wall-street-main-street-banks/", "7"], ["https://www.marutitech.com/ideal-bot-conversation/", "7"], ["https://www.marutitech.com/how-is-natural-language-processing-applied-in-business/", "7"], ["https://www.marutitech.com/casestudy/", "7"], ["https://www.marutitech.com/all-you-need-know-cloud-based-call-centres/", "7"], ["https://www.marutitech.com/big-data-and-analytics/", "7"], ["https://www.marutitech.com/businesses-reinforcement-learning/", "7"], ["https://www.marutitech.com/web-and-mobile-development/", "6"], ["https://www.marutitech.com/elasticsearch-big-data-analytics/", "6"], ["https://www.marutitech.com/free-consultation-page/", "6"], ["https://www.marutitech.com/artificial-intelligence-fake-news/", "5"], ["https://www.marutitech.com/advantages-of-natural-language-generation/", "5"], ["https://www.marutitech.com/why-stripe-market-leader-in-payment-gateways/", "5"], ["https://www.marutitech.com/devops-tools-continuous-integration/", "5"], ["https://www.marutitech.com/jobs/senior-front-end-developer/", "5"], ["https://www.marutitech.com/category/analytics-and-business-intelligence/", "5"], ["https://www.marutitech.com/videos/", "5"], ["https://www.marutitech.com/best-prototyping-tools/", "4"], ["https://www.marutitech.com/ebooks/", "4"], ["file:///C:/My%20Web%20Sites/bott/www.marutitech.com/machine-learning-finance/index.html", "4"], ["https://www.marutitech.com/ai-in-the-insurance-industry/", "4"], ["https://www.marutitech.com/jobs/bi-developer/", "4"], ["https://www.marutitech.com/12-reasons-voice-first-important-part-business-strategy/", "4"], ["https://www.marutitech.com/5-essential-devops-tools/", "4"], ["https://www.marutitech.com/ebooks/artificial-intelligence-in-hotels/", "4"], ["https://www.marutitech.com/robotic-process-automation-vs-traditional-automation/", "4"], ["https://www.marutitech.com/banking-need-digital-voice-assistant/", "3"], ["https://www.marutitech.com/category/salesforce/", "3"], ["https://www.marutitech.com/can-chatbots-business-negotiations-better-human-employees/", "3"], ["https://www.marutitech.com/rpa-in-supply-chain/", "3"], ["None", "3"], ["https://www.marutitech.com/fintech-changing-financial-services-innovative-disruptive/", "3"], ["https://www.marutitech.com/artificial-intelligence-in-healthcare/", "3"], ["https://www.marutitech.com/nosql-big-data/", "3"], ["https://www.marutitech.com/mistakes-in-salesforce-development/", "3"], ["https://www.marutitech.com/strategies-mobile-app-development/", "3"], ["https://www.marutitech.com/what-nlp-reasons-everyone-retail-use-it/", "3"], ["https://www.marutitech.com/python-data-science/", "3"], ["https://www.marutitech.com/chatbots-approaching-edge-call-centers/", "3"], ["https://www.marutitech.com/artificial-intelligence-in-hotels/", "3"], ["https://www.marutitech.com/product-development-collaboration-tools/", "3"], ["https://www.marutitech.com/category/blockchain/", "3"], ["https://www.marutitech.com/category/artificial-intelligence/", "3"], ["https://www.marutitech.com/nlp-based-chatbot/", "2"], ["https://www.marutitech.com/how-salesforce-can-make-your-startup-lean/", "2"], ["https://www.marutitech.com/data-science-useful-businesses/", "2"], ["https://www.marutitech.com/casestudy/task-distribution-system/", "2"], ["https://www.marutitech.com/challenges-machine-learning/", "2"], ["https://www.marutitech.com/bot-development", "2"], ["https://www.marutitech.com/why-can-chatbots-replace-mobile-apps-immediately/", "2"], ["https://www.marutitech.com/chatbots-good-opportunity-small-businesses/", "2"], ["https://www.marutitech.com/category/mobile-web-app/", "2"], ["https://www.marutitech.com/what-chatbots-can-do-for-e-commerce-industry/", "2"], ["https://www.marutitech.com/customer-delight-cloud-contact-centres/", "2"], ["https://www.marutitech.com/ai-blockchain-and-iot-in-claims-management-process/", "2"], ["https://www.marutitech.com/casestudy/business-process-automation-bot-solution/", "2"], ["https://www.marutitech.com/big-data-analytics-need-business/", "1"], ["file:///C:/My%20Web%20Sites/bott/www.marutitech.com/business-chatbot.html", "1"], ["https://www.marutitech.com/progressive-web-app/", "1"], ["https://www.marutitech.com/ebooks/artificial-intelligence-revolutionize-industries/", "1"], ["https://www.marutitech.com/category/user-experience/", "1"], ["https://www.marutitech.com/5-reasons-why-cloud-can-transform-your-business/", "1"], ["https://www.marutitech.com/blockchain-uses/", "1"], ["https://www.marutitech.com/problems-solved-machine-learning/?utm_content=bufferfc7c2&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer", "1"], ["https://www.marutitech.com/responsive-web-design-key-element-of-web-strategy/", "1"], ["https://www.marutitech.com/casestudy/revenue-forecast-system/", "1"], ["https://www.marutitech.com/design-principles-user-experience/", "1"], ["file:///C:/Work/Daily%20Status/Oct%202018/10-Oct/sample/sample.html", "1"], ["file:///C:/Work/Daily%20Status/Oct%202018/10-Oct/sample.html", "1"], ["https://www.marutitech.com/agile-retrospective/", "1"], ["https://www.marutitech.com/trends-fintech-industry/", "1"], ["https://www.marutitech.com/machine-learning-finance/", "1"], ["https://www.marutitech.com/news-made-personal-with-chatbots/", "1"], ["file:///C:/Users/Mirco/Zotero/storage/ATPYM76E/chatbots-work-guide-chatbot-architecture.html", "1"], ["https://www.marutitech.com/python-data-science/?utm_content=buffer89714&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer", "1"], ["https://www.marutitech.com/crm-and-cloud-telephony-integration/", "1"], ["file:///H:/5%20Ways%20AI%20is%20Transforming%20the%20Finance%20Industry%20-%20Maruti%20Techlabs_files/saved_resource.html", "1"]],
            "name": "Top URLs"
        }],
        "summary": [],
        "title": {"text": "Top URLs"}
    },
    GOALS_DATA: {
        "ok": true,
        "columns": ["goal_label", "goal_count", "goal_percentage"],
        "subtitle": {"text": "Top Goals"},
        "series": [{"data": [], "name": "Top Goals"}],
        "summary": [],
        "title": {"text": "Top Goals"}
    },
    INTENT_DATA: {
        "ok": true,
        "columns": ["intent_name", "IntentCount"],
        "subtitle": {"text": "Top Intents"},
        "series": [{"data": [], "name": "Top Intents"}],
        "summary": [],
        "title": {"text": "Top Intents"}
    },
    COLORS: {
        A: "#47c8d0",
        B: "#4646a5",
        C: "#dc884c",
        D: "#547d7d",
        E: "#614051",
        F: "#47bb478c",
        G: "#989898",
        H: "#ea78b1",
        I: "#a15cd4",
        J: "#00A86B",
        K: "#c5bb5b",
        L: "#f08080",
        M: "#b76e6e",
        N: "#4d4d82",
        O: "#808000",
        P: "#cd853f",
        Q: "#b9af93",
        R: "#f36464",
        S: "#63c3ea",
        T: "#008080",
        U: " #120a8f8c",
        V: "#ee82ee",
        W: "#eac783",
        X: "#b1b011",
        Y: "#a5ce52",
        Z: "#506022"
    },
    CONVERSATIONS_LIST_PAGE_SIZE: 25,
    focusedColor: '#0617DC',
    releasedColor: '#D9D9D9',
    errorColor: '#dc3a47',
    releasedBorderWidth: '1px',
    focusedBorderWidth: '2px',
    hoverColor: '#0513A8',
    MENU_ITEMS: [
        {
            "header": "1. CHOOSE",
            "route": "choose-template",
            "component": "Choose",
            "key": "choose-template",
            "title": "Choose",
            "paragraphs": [
                "Our artfully designed bot templates are quick, responsive and ready-to-use.",
                "We have created modern, engaging templates with a natural conversational fluidity, to ensure a human-like interactive experience for your users.",
                "Take your pick and kick-start your way to making your very own bot come alive."
            ],
            "footer_button_label": "Next Step"
        },
        {
            "header": "2. PERSONALISE",
            "route": "personalise",
            "component": "Adapt",
            "key": "adapt",
            "title": "Personalise",
            "paragraphs": [
                "This is where it gets real.",
                "Customise the appearance of the bot to your liking and see it take shape in a matter of seconds.",
                "Play around with differents looks, select your colour and alignment preferences, and move on to the next step."
            ],
            "footer_button_label": "Next Step"
        },
        {
            "header": "3. INTERACT",
            "route": "experience",
            "component": "Experience",
            "title": "Experience",
            "key": "experience",
            "paragraphs": [],
            "footer_button_label": "Get a free trial"
        },
        {
            "header": "",
            "route": "request-demo",
            "component": "RequestDemo",
            "title": "Free Trial",
            "key": "request-demo",
            "paragraphs": [],
            "quotes": [
                {
                    "message": "By 2019, natural-language generation and artificial intelligence will be a standard feature of 90% of modern BI platforms.",
                    "author": "- Gartner"
                },
                {
                    "message": "The shift is inevitable: Businesses must go where their customers are. With proper forethought and consideration, bots present a new, unpolluted opportunity to build lasting relationships with people.",
                    "author": "- Wired"
                },
                {
                    "message": "People-to-people conversations, people-to-digital assistants, people-to-bots … that’s the world you’re going to get to see in the years to come.",
                    "author": "- Satya Nadella, CEO, Microsoft"
                },
                {
                    "message": "By 2020, customers will manage 85% of their relationship with the enterprise without interacting with a human.",
                    "author": "- Gartner"
                }
            ],
            "footer_button_label": ""
        }
    ],
    // WT_LOGO_ALT_TEXT: process.env.ORGANISATION_NAME.toUpperCase(),
    WT_LOGO: process.env.CDN_ADDRESS + '/static/img/Wt_logo.png',
    FONT_FAMILY_NAME: '"Rubik", sans-serif',
    INVALID_FIRST_NAME_MESSAGE: "Please enter a valid First Name",
    INVALID_LAST_NAME_MESSAGE: "Please enter a valid Last Name",
    INVALID_EMAIL_MESSAGE: "Please enter a valid Email Address",
    INVALID_PHONE_MESSAGE: "Please enter a valid Phone Number",
    INVALID_DOMAIN_DESCRIPTION_MESSAGE: "Please enter a valid Domain Description",
    INVALID_COMPANY_NAME: "Please enter a valid companyName name",
    TEMPLATES_API_V2: '/v2/bot-templates',
    CONTACT_API_V1: '/v1/contact-query',
    ARROW_DOWN_SVG: '/static/img/arrow_down.svg',
    INFO_SVG: '/static/img/info.svg',
    WT_ICON: process.env.CDN_ADDRESS + '/static/img/favicon32.png',
    REQUEST_DEMO_BG_SVG: '/static/img/request-demo.svg',
    BOT_COLORS: {
        '#F44336': '#FFFFFF',
        '#E91E63': '#FFFFFF',
        '#9C27B0': '#FFFFFF',
        '#673AB7': '#FFFFFF',
        '#3F51B5': '#FFFFFF',
        '#2196F3': '#FFFFFF',
        '#03A9F4': '#FFFFFF',

        '#00BCD4': '#FFFFFF',
        '#009688': '#FFFFFF',
        '#4CAF50': '#FFFFFF',
        '#8BC34A': '#FFFFFF',
        '#CDDC39': '#FFFFFF',
        '#FFEB3B': 'rgba(0, 0, 0, 0.6)',
        '#FFC107': '#FFFFFF',

        '#FF9800': '#FFFFFF',
        '#FF5722': '#FFFFFF',
        '#795548': '#FFFFFF',
        '#607D8B': '#FFFFFF',
        '#9E9E9E': '#FFFFFF',
        '#000000': '#FFFFFF'
    },

    DEFAULT_BOT_COLOR: '#F44336',
    DONE_ICON: '/static/img/onboarding-flow/done_dark_24px.svg',
    GET_TEMPLATE_CONVERSATION: '/v2/template-conversation',
    GET_SITE_IMAGES: '/v2/get-site-images',
    VISITOR_TRACKING_API: '/v2/visitor-tracking',
    BOT_MESSAGE_LIGHT_COLOR: '#f1f1f1',
    BOT_MESSAGE_DARK_COLOR: '#a2a2a2',
    SERVER_DOWN_ERROR_MESSAGE: process.env.ORGANISATION_NAME + ' service is down. Please try again after some time!',
    SERVICE_NOT_REACHABLE_ERROR_MESSAGE: 'Not able to connect with '+ process.env.ORGANISATION_NAME +' system. Please try again after some time!',
    UNAUTHORIZED_CONVERSATION_ACCESS: 'Unauthorised access to view conversations of this bot.',
    ORGANISATION_SERVICE_DOWN: 'Sorry! '+ process.env.ORGANISATION_NAME +' service is currently down. Please check back in sometime.',
    SKIP_TRIGGERS: ['delay', 'scroll'],
    LOGICAL_OPERATORS: {
        'AND': "&&",
        'OR': "||"
    },
    IP_API_URL: '/v1/user-ip-details',
    PHONE_MASK: {
        'af': '+..' + PHONE_NUMBER_FORMAT,
        'al': '+...' + PHONE_NUMBER_FORMAT,
        'dz': '+...' + PHONE_NUMBER_FORMAT,
        'as': '+....' + PHONE_NUMBER_FORMAT,
        'ad': '+...' + PHONE_NUMBER_FORMAT,
        'ao': '+...' + PHONE_NUMBER_FORMAT,
        'ai': '+....' + PHONE_NUMBER_FORMAT,
        'ag': '+....' + PHONE_NUMBER_FORMAT,
        'ar': '+..' + PHONE_NUMBER_FORMAT,
        'am': '+...' + PHONE_NUMBER_FORMAT,
        'aw': '+...' + PHONE_NUMBER_FORMAT,
        'au': '+..' + PHONE_NUMBER_FORMAT,
        'at': '+..' + PHONE_NUMBER_FORMAT,
        'az': '+...' + PHONE_NUMBER_FORMAT,
        'bs': '+....' + PHONE_NUMBER_FORMAT,
        'bh': '+...' + PHONE_NUMBER_FORMAT,
        'bd': '+...' + PHONE_NUMBER_FORMAT,
        'bb': '+....' + PHONE_NUMBER_FORMAT,
        'by': '+...' + PHONE_NUMBER_FORMAT,
        'be': '+..' + PHONE_NUMBER_FORMAT,
        'bz': '+...' + PHONE_NUMBER_FORMAT,
        'bj': '+...' + PHONE_NUMBER_FORMAT,
        'bm': '+....' + PHONE_NUMBER_FORMAT,
        'bt': '+...' + PHONE_NUMBER_FORMAT,
        'bo': '+...' + PHONE_NUMBER_FORMAT,
        'ba': '+...' + PHONE_NUMBER_FORMAT,
        'bw': '+...' + PHONE_NUMBER_FORMAT,
        'br': '+..' + PHONE_NUMBER_FORMAT,
        'io': '+...' + PHONE_NUMBER_FORMAT,
        'vg': '+....' + PHONE_NUMBER_FORMAT,
        'bn': '+...' + PHONE_NUMBER_FORMAT,
        'bg': '+...' + PHONE_NUMBER_FORMAT,
        'bf': '+...' + PHONE_NUMBER_FORMAT,
        'bi': '+...' + PHONE_NUMBER_FORMAT,
        'kh': '+...' + PHONE_NUMBER_FORMAT,
        'cm': '+...' + PHONE_NUMBER_FORMAT,
        'ca': '+.' + PHONE_NUMBER_FORMAT,
        'cv': '+...' + PHONE_NUMBER_FORMAT,
        'bq': '+...' + PHONE_NUMBER_FORMAT,
        'ky': '+....' + PHONE_NUMBER_FORMAT,
        'cf': '+...' + PHONE_NUMBER_FORMAT,
        'td': '+...' + PHONE_NUMBER_FORMAT,
        'cl': '+..' + PHONE_NUMBER_FORMAT,
        'cn': '+..' + PHONE_NUMBER_FORMAT,
        'co': '+..' + PHONE_NUMBER_FORMAT,
        'km': '+...' + PHONE_NUMBER_FORMAT,
        'cd': '+...' + PHONE_NUMBER_FORMAT,
        'cg': '+...' + PHONE_NUMBER_FORMAT,
        'ck': '+...' + PHONE_NUMBER_FORMAT,
        'cr': '+...' + PHONE_NUMBER_FORMAT,
        'ci': '+...' + PHONE_NUMBER_FORMAT,
        'hr': '+...' + PHONE_NUMBER_FORMAT,
        'cu': '+..' + PHONE_NUMBER_FORMAT,
        'cw': '+...' + PHONE_NUMBER_FORMAT,
        'cy': '+...' + PHONE_NUMBER_FORMAT,
        'cz': '+...' + PHONE_NUMBER_FORMAT,
        'dk': '+..' + PHONE_NUMBER_FORMAT,
        'dj': '+...' + PHONE_NUMBER_FORMAT,
        'dm': '+....' + PHONE_NUMBER_FORMAT,
        'do': '+.' + PHONE_NUMBER_FORMAT,
        'ec': '+...' + PHONE_NUMBER_FORMAT,
        'eg': '+..' + PHONE_NUMBER_FORMAT,
        'sv': '+...' + PHONE_NUMBER_FORMAT,
        'gq': '+...' + PHONE_NUMBER_FORMAT,
        'er': '+...' + PHONE_NUMBER_FORMAT,
        'ee': '+...' + PHONE_NUMBER_FORMAT,
        'et': '+...' + PHONE_NUMBER_FORMAT,
        'fk': '+...' + PHONE_NUMBER_FORMAT,
        'fo': '+...' + PHONE_NUMBER_FORMAT,
        'fj': '+...' + PHONE_NUMBER_FORMAT,
        'fi': '+...' + PHONE_NUMBER_FORMAT,
        'fr': '+..' + PHONE_NUMBER_FORMAT,
        'gf': '+...' + PHONE_NUMBER_FORMAT,
        'pf': '+...' + PHONE_NUMBER_FORMAT,
        'ga': '+...' + PHONE_NUMBER_FORMAT,
        'gm': '+...' + PHONE_NUMBER_FORMAT,
        'ge': '+...' + PHONE_NUMBER_FORMAT,
        'de': '+..' + PHONE_NUMBER_FORMAT,
        'gh': '+...' + PHONE_NUMBER_FORMAT,
        'gi': '+...' + PHONE_NUMBER_FORMAT,
        'gr': '+..' + PHONE_NUMBER_FORMAT,
        'gl': '+...' + PHONE_NUMBER_FORMAT,
        'gd': '+....' + PHONE_NUMBER_FORMAT,
        'gp': '+...' + PHONE_NUMBER_FORMAT,
        'gu': '+....' + PHONE_NUMBER_FORMAT,
        'gt': '+...' + PHONE_NUMBER_FORMAT,
        'gn': '+...' + PHONE_NUMBER_FORMAT,
        'gw': '+...' + PHONE_NUMBER_FORMAT,
        'gy': '+...' + PHONE_NUMBER_FORMAT,
        'ht': '+...' + PHONE_NUMBER_FORMAT,
        'hn': '+...' + PHONE_NUMBER_FORMAT,
        'hk': '+...' + PHONE_NUMBER_FORMAT,
        'hu': '+..' + PHONE_NUMBER_FORMAT,
        'is': '+...' + PHONE_NUMBER_FORMAT,
        'in': '+..' + PHONE_NUMBER_FORMAT,
        'id': '+..' + PHONE_NUMBER_FORMAT,
        'ir': '+..' + PHONE_NUMBER_FORMAT,
        'iq': '+...' + PHONE_NUMBER_FORMAT,
        'ie': '+...' + PHONE_NUMBER_FORMAT,
        'il': '+...' + PHONE_NUMBER_FORMAT,
        'it': '+..' + PHONE_NUMBER_FORMAT,
        'jm': '+....' + PHONE_NUMBER_FORMAT,
        'jp': '+..' + PHONE_NUMBER_FORMAT,
        'jo': '+...' + PHONE_NUMBER_FORMAT,
        'kz': '+.' + PHONE_NUMBER_FORMAT,
        'ke': '+...' + PHONE_NUMBER_FORMAT,
        'ki': '+...' + PHONE_NUMBER_FORMAT,
        'kw': '+...' + PHONE_NUMBER_FORMAT,
        'kg': '+...' + PHONE_NUMBER_FORMAT,
        'la': '+...' + PHONE_NUMBER_FORMAT,
        'lv': '+...' + PHONE_NUMBER_FORMAT,
        'lb': '+...' + PHONE_NUMBER_FORMAT,
        'ls': '+...' + PHONE_NUMBER_FORMAT,
        'lr': '+...' + PHONE_NUMBER_FORMAT,
        'ly': '+...' + PHONE_NUMBER_FORMAT,
        'li': '+...' + PHONE_NUMBER_FORMAT,
        'lt': '+...' + PHONE_NUMBER_FORMAT,
        'lu': '+...' + PHONE_NUMBER_FORMAT,
        'mo': '+...' + PHONE_NUMBER_FORMAT,
        'mk': '+...' + PHONE_NUMBER_FORMAT,
        'mg': '+...' + PHONE_NUMBER_FORMAT,
        'mw': '+...' + PHONE_NUMBER_FORMAT,
        'my': '+..' + PHONE_NUMBER_FORMAT,
        'mv': '+...' + PHONE_NUMBER_FORMAT,
        'ml': '+...' + PHONE_NUMBER_FORMAT,
        'mt': '+...' + PHONE_NUMBER_FORMAT,
        'mh': '+...' + PHONE_NUMBER_FORMAT,
        'mq': '+...' + PHONE_NUMBER_FORMAT,
        'mr': '+...' + PHONE_NUMBER_FORMAT,
        'mu': '+...' + PHONE_NUMBER_FORMAT,
        'mx': '+..' + PHONE_NUMBER_FORMAT,
        'fm': '+...' + PHONE_NUMBER_FORMAT,
        'md': '+...' + PHONE_NUMBER_FORMAT,
        'mc': '+...' + PHONE_NUMBER_FORMAT,
        'mn': '+...' + PHONE_NUMBER_FORMAT,
        'me': '+...' + PHONE_NUMBER_FORMAT,
        'ms': '+....' + PHONE_NUMBER_FORMAT,
        'ma': '+...' + PHONE_NUMBER_FORMAT,
        'mz': '+...' + PHONE_NUMBER_FORMAT,
        'mm': '+..' + PHONE_NUMBER_FORMAT,
        'na': '+...' + PHONE_NUMBER_FORMAT,
        'nr': '+...' + PHONE_NUMBER_FORMAT,
        'np': '+...' + PHONE_NUMBER_FORMAT,
        'nl': '+..' + PHONE_NUMBER_FORMAT,
        'nc': '+...' + PHONE_NUMBER_FORMAT,
        'nz': '+..' + PHONE_NUMBER_FORMAT,
        'ni': '+...' + PHONE_NUMBER_FORMAT,
        'ne': '+...' + PHONE_NUMBER_FORMAT,
        'ng': '+...' + PHONE_NUMBER_FORMAT,
        'nu': '+...' + PHONE_NUMBER_FORMAT,
        'nf': '+...' + PHONE_NUMBER_FORMAT,
        'kp': '+...' + PHONE_NUMBER_FORMAT,
        'mp': '+....' + PHONE_NUMBER_FORMAT,
        'no': '+..' + PHONE_NUMBER_FORMAT,
        'om': '+...' + PHONE_NUMBER_FORMAT,
        'pk': '+..' + PHONE_NUMBER_FORMAT,
        'pw': '+...' + PHONE_NUMBER_FORMAT,
        'ps': '+...' + PHONE_NUMBER_FORMAT,
        'pa': '+...' + PHONE_NUMBER_FORMAT,
        'pg': '+...' + PHONE_NUMBER_FORMAT,
        'py': '+...' + PHONE_NUMBER_FORMAT,
        'pe': '+..' + PHONE_NUMBER_FORMAT,
        'ph': '+..' + PHONE_NUMBER_FORMAT,
        'pl': '+..' + PHONE_NUMBER_FORMAT,
        'pt': '+...' + PHONE_NUMBER_FORMAT,
        'pr': '+.' + PHONE_NUMBER_FORMAT,
        'qa': '+...' + PHONE_NUMBER_FORMAT,
        're': '+...' + PHONE_NUMBER_FORMAT,
        'ro': '+..' + PHONE_NUMBER_FORMAT,
        'ru': '+.' + PHONE_NUMBER_FORMAT,
        'rw': '+...' + PHONE_NUMBER_FORMAT,
        'bl': '+...' + PHONE_NUMBER_FORMAT,
        'sh': '+...' + PHONE_NUMBER_FORMAT,
        'kn': '+....' + PHONE_NUMBER_FORMAT,
        'lc': '+....' + PHONE_NUMBER_FORMAT,
        'mf': '+...' + PHONE_NUMBER_FORMAT,
        'pm': '+...' + PHONE_NUMBER_FORMAT,
        'vc': '+....' + PHONE_NUMBER_FORMAT,
        'ws': '+...' + PHONE_NUMBER_FORMAT,
        'sm': '+...' + PHONE_NUMBER_FORMAT,
        'st': '+...' + PHONE_NUMBER_FORMAT,
        'sa': '+...' + PHONE_NUMBER_FORMAT,
        'sn': '+...' + PHONE_NUMBER_FORMAT,
        'rs': '+...' + PHONE_NUMBER_FORMAT,
        'sc': '+...' + PHONE_NUMBER_FORMAT,
        'sl': '+...' + PHONE_NUMBER_FORMAT,
        'sg': '+..' + PHONE_NUMBER_FORMAT,
        'sx': '+....' + PHONE_NUMBER_FORMAT,
        'sk': '+...' + PHONE_NUMBER_FORMAT,
        'si': '+...' + PHONE_NUMBER_FORMAT,
        'sb': '+...' + PHONE_NUMBER_FORMAT,
        'so': '+...' + PHONE_NUMBER_FORMAT,
        'za': '+..' + PHONE_NUMBER_FORMAT,
        'kr': '+..' + PHONE_NUMBER_FORMAT,
        'ss': '+...' + PHONE_NUMBER_FORMAT,
        'es': '+..' + PHONE_NUMBER_FORMAT,
        'lk': '+..' + PHONE_NUMBER_FORMAT,
        'sd': '+...' + PHONE_NUMBER_FORMAT,
        'sr': '+...' + PHONE_NUMBER_FORMAT,
        'sz': '+...' + PHONE_NUMBER_FORMAT,
        'se': '+..' + PHONE_NUMBER_FORMAT,
        'ch': '+..' + PHONE_NUMBER_FORMAT,
        'sy': '+...' + PHONE_NUMBER_FORMAT,
        'tw': '+...' + PHONE_NUMBER_FORMAT,
        'tj': '+...' + PHONE_NUMBER_FORMAT,
        'tz': '+...' + PHONE_NUMBER_FORMAT,
        'th': '+..' + PHONE_NUMBER_FORMAT,
        'tl': '+...' + PHONE_NUMBER_FORMAT,
        'tg': '+...' + PHONE_NUMBER_FORMAT,
        'tk': '+...' + PHONE_NUMBER_FORMAT,
        'to': '+...' + PHONE_NUMBER_FORMAT,
        'tt': '+....' + PHONE_NUMBER_FORMAT,
        'tn': '+...' + PHONE_NUMBER_FORMAT,
        'tr': '+..' + PHONE_NUMBER_FORMAT,
        'tm': '+...' + PHONE_NUMBER_FORMAT,
        'tc': '+....' + PHONE_NUMBER_FORMAT,
        'tv': '+...' + PHONE_NUMBER_FORMAT,
        'vi': '+....' + PHONE_NUMBER_FORMAT,
        'ug': '+...' + PHONE_NUMBER_FORMAT,
        'ua': '+...' + PHONE_NUMBER_FORMAT,
        'ae': '+...' + PHONE_NUMBER_FORMAT,
        'gb': '+..' + PHONE_NUMBER_FORMAT,
        'us': '+.' + PHONE_NUMBER_FORMAT,
        'uy': '+...' + PHONE_NUMBER_FORMAT,
        'uz': '+...' + PHONE_NUMBER_FORMAT,
        'vu': '+...' + PHONE_NUMBER_FORMAT,
        'va': '+..' + PHONE_NUMBER_FORMAT,
        've': '+..' + PHONE_NUMBER_FORMAT,
        'vn': '+..' + PHONE_NUMBER_FORMAT,
        'wf': '+...' + PHONE_NUMBER_FORMAT,
        'ye': '+...' + PHONE_NUMBER_FORMAT,
        'zm': '+...' + PHONE_NUMBER_FORMAT,
        'zw': '+...' + PHONE_NUMBER_FORMAT
    },
    CONVERSATION_CONSTANT: {
        IFRAME_CONTENT: 'EMBEDDABLE',
        IMAGE_FILE: 'IMAGE',
        CAROUSEL_CONTENT: 'CAROUSEL',
        VIDEO_FILE: 'VIDEO',
        AUDIO_FILE: 'AUDIO',
        CODE_SNIPPET: 'CODE SNIPPET'
    },
    REGEX_PATTERNS: {
        IMAGE_TAG: /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/gim,
        IFRAME_TAG: /<iframe\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/gim,
        VIDEO_TAG: /<video\s[^>].?controls|<\/video>/gim,
        AUDIO_TAG: /<audio\s[^>].?controls|<\/audio>/gim,
        IFRAME_SRC: /src="([^"]+)"/gim,
        SOURCE_YOUTUBE: /\byoutube/gim,
        HTML_TAGS: /(<([^>]+)>)/ig
    },

    FLOW_BUILDER_CONFIGURATION_OBJECT: [
        {
            "type": "informative",
            "display": "Informative",
            "icon": "icon-informative",
            "color": "#0b69ff",
            "config": {
                "type": "text",
                "text": ""
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        },
        {
            "type": "input",
            "display": "Input",
            "icon": "icon-text",
            "color": "#00b734",
            "config_options": {
                "type": "normal",
                "text": "",
                "title": "Input",
                "parameter": "",
                "success_message": "",
                "failure_message": "",
                "fallback_message": ""
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": {
                    "success_message": "",
                    "failure_message": ""
                }
            }
        },
        {
            "type": "buttons",
            "display": "Buttons",
            "icon": "icon-buttons",
            "color": "#3076A8",
            "config_options": {
                "action": "branch",
                "text": "Button",
                "title": "Buttons"
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        },
        {
            "type": "inputBranch",
            "display": "Options",
            "icon": "icon-block",
            "color": "#3076A8",
            "config_options": {
                "type": "normal",
                "text": "",
                "title": "Options",
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        },
         {
            "type": "cardview",
            "display": "Carousel",
            "icon": "icon-e-Shape-11",
            "color": "#2d9221",
            "config_options": {
                "type": "normal",
                "text": "",
                "content":"",
                "title": "Carousel",
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        },
        {
            "type": "end",
            "display": "End",
            "icon": "icon-end",
            "color": "#ff042d",
            "config": {
                "type": "text",
                "text": ""
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        }
    ],
    FLOW_BUILDER_CONFIGURATION_OBJECT_V1: [
        {
            "type": "informative",
            "display": "Informative",
            "icon": "icon-informative",
            "color": "#0b69ff",
            "config_options": {
                "type": "image",
                "text": "/static/img/flow-builder/img_placeholder.png",
                "title": "Informative"
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        },
        {
            "type": "input",
            "display": "Input",
            "icon": "icon-text",
            "color": "#00b734",
            "config_options": {
                "type": "normal",
                "text": "",
                "title": "Input",
                "parameter": "",
                "success_message": "",
                "failure_message": "",
                "fallback_message": ""
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": {
                    "success_message": "",
                    "failure_message": ""
                }
            }
        },
        {
            "type": "options",
            "display": "Options",
            "icon": "icon-block",
            "color": "#3076A8",
            "config_options": {
                "action": "jump_to",
                "text": "Button",
                "title": "Options",
                "url": null
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        },
        {
            "type": "end",
            "display": "End",
            "icon": "icon-end",
            "color": "#ff042d",
            "config_options": {
                "type": "text",
                "text": "",
                "title": "End"
            },
            "flow": {
                "dialog": "",
                "dialog_type": "",
                "parameter": "",
                "label": "",
                "fallback_answer": "",
                "callback": null
            }
        }
    ],
    FLOW_BUILDER_START_DIALOG_EXTRAS: {
        "config": {
            "type": "start",
            "title": "Start"
        },
        "flow": {
            "dialog_type": "start",
            "dialog": "Start",
            "parameter": "",
            "label": "",
            "fallback_answer": "",
            "callback": null
        }
    },
    INPUT_TYPE_LIST_V1: [
        {"id": 'normal', "value": 'Normal'},
        {"id": 'name', "value": 'Name'},
        {"id": 'email', "value": 'Email'},
        {"id": 'phone', "value": 'Phone'}
    ],
    INPUT_TYPE_LIST: [
        {"value": 'text', "label": 'text'},
        {"value": 'name', "label": 'name'},
        {"value": 'email', "label": 'email'},
        {"value": 'phone', "label": 'phone'},
        {"value": 'numeric', "label": 'numeric'}
    ],
    FLOW_BUILDER_DROPDOWN_OBJECT: {
        "placeholder": "Place Holder",
        "options": [
            {"id": 'normal', "value": 'Normal'},
            {"id": 'name', "value": 'Name'},
            {"id": 'email', "value": 'Email'},
            {"id": 'phone', "value": 'Phone'}
        ]
    },
    INPUT_REQUEST_AGAIN_LIST:[
        {"value": '1', "label": '1 Time'},
        {"value": '2', "label": '2 Time'},
        {"value": '3', "label": '3 Time'},
        {"value": '4', "label": '4 Time'},
        {"value": '5', "label": '5 Time'}
    ],
    OPTIONS_TYPE_LIST: [
        {"id": 'jump_to', "value": 'Jump to', "icon": "icon-jump_to"},
        {"id": 'url', "value": 'URL', "icon": "icon-url_link"}
    ],
    FLOW_BUILDER_ZOOM_FACTOR: 10,
    FLOW_BUILDER_MAX_SCALE: 150,
    FLOW_BUILDER_MIN_SCALE: 30,

    FLOW_BUILDER_EXIT_PROMPT: "You have unsaved changes, are you sure you want to quit?",
    FLOW_BUILDER_INVALID_IMAGE_URL: "Please enter a valid image URL",
    FLOW_BUILDER_INVALID_PARAMETER: "Please enter a valid Parameter",
    INVALID_FLOW_ERROR_MESSAGE: "Please connect all the nodes in order to deploy the bot.",
    FLOW_BUILDER_RADIO_SAME_TAB_MESSAGE: "link will be open in same tab",
    FLOW_BUILDER_RADIO_NEW_TAB_MESSAGE: "link will be open in new tab",
    FLOW_BUILDER_EMPTY_DIALOG_MSG: "This field cannot be empty",
    FLOW_BUILDER_BUTTON_TITLE_DUPLICATE_MSG: "This field needs to be distinct",
    FLOW_BUILDER_BUTTON_URL_EMPTY_MSG: "This field cannot be empty",
    FLOW_BUILDER_BUTTON_URL_INVALID_MSG: "Please enter a valid URL",
    FLOW_BUILDER_DUPLICATE_PARAM_MSG: "This parameter is already in use. Using it will overwrite the value stored in it.",

    FLOW_BUILDER_BUTTON_FONT_BOOK: '"CircularStd-Book", sans-serif',
    FLOW_BUILDER_BUTTON_FONT_BOLD: '"CircularStd-Bold", sans-serif',
    FLOW_BUILDER_BUTTON_FONT_MEDIUM: '"CircularStd-Medium", sans-serif',

    FLOW_BUILDER_PLACEHOLDER_IMAGE: "/static/img/flow-builder/img_placeholder.png",
    FLOW_BUILDER_NODE_TRASH_ICON_IMAGE: "/static/img/flow-builder/trash.svg",
    FLOW_BUILDER_LINK_TRASH_ICON_IMAGE: "/static/img/new-flow-builder/delete_grey.svg",
    FLOW_BUILDER_LINK_TRASH_ICON_HOVER_IMAGE: "/static/img/new-flow-builder/delete_red.svg",
    FLOW_BUILDER_WHITE_TRASH_ICON_IMAGE: "/static/img/new-flow-builder/delete_white.svg",
    FLOW_BUILDER_ERROR_ICON_IMAGE: "/static/img/flow-builder/error_icon.svg",
    FLOW_BUILDER_SELECTED_OPTION_ICON: "/static/img/new-flow-builder/tick_blue.svg",
    FLOW_BUILDER_SEARCH_ICON: "/static/img/new-flow-builder/search_blue.svg",
    FLOW_BUILDER_DROP_DOWN_GREY_ICON: "/static/img/new-flow-builder/drop_grey.svg",
    FLOW_BUILDER_DROP_DOWN_BLACK_ICON: "/static/img/new-flow-builder/drop_black.svg",
    FLOW_BUILDER_RIGHT_DIRECTIONAL_ARROW_ICON: "/static/img/new-flow-builder/Right.svg",
    FLOW_BUILDER_PLUS_ICON: "/static/img/new-flow-builder/Plus.svg",
    FLOW_BUILDER_PLUS_ICON_HOVER: "/static/img/new-flow-builder/Plus_hover.svg",
    FLOW_BUILDER_MINUS_ICON: "/static/img/new-flow-builder/Minus.svg",
    FLOW_BUILDER_MINUS_ICON_HOVER: "/static/img/new-flow-builder/Minus_hover.svg",
    FLOW_BUILDER_ATTACHMENT_ICON: "/static/img/new-flow-builder/attachment.svg",
    FLOW_BUILDER_RED_CROSS: "/static/img/new-flow-builder/cross_red.svg",
    FLOW_BUILDER_GREY_CROSS: "/static/img/new-flow-builder/cross_grey.svg",
    FLOW_BUILDER_ERR_ICON:"/static/img/new-flow-builder/red_warn.svg",


    FLOW_BUILDER_NORMAL_BACKGROUND_COLOR: "#fff",
    FLOW_BUILDER_DISABLED_BACKGROUND_COLOR: "#e8e9ef",
    FLOW_BUILDER_DISABLED_FONT_COLOR: "#b1b8bb",
    FLOW_BUILDER_SELECTED_BLUE_COLOR: process.env.THEME_COLOR,
    FLOW_BUILDER_HOVER_BACKGROUND_COLOR: "#166ffe",
    HOVER_LIGHT_BLUE_COLOR:"#bedbfc",
    FLOW_BUILDER_DROPDOWN_LABEL_COLOR: "#828d93",
    TEXT_COLOR: process.env.THEME_TEXT_COLOR,
    BLACK_TEXT_COLOR:"#000000",
    GRAY_TEXT_COLOR: "#637178",
    CHECKBOX_DEFAULT_COLOR: '#AFB2B3',
    TABLE_ROW_HOVER_COLOR: "#F0F0F0",
    PAGINATION_HOVER_COLOR:'#F5F6FA',
    ERROR_COLOR:'#ff0000',
    WARN_COLOR:"#F1B000",
    NO_DATA_FOUND_IMAGE:"/static/img/new-design-assest/no_data.svg",

    EMAIL_VALIDATION_MESSAGE: "Valid email is required",
    PASSWORD_VALIDATION_MESSAGE: "Password more than 6 characters is required.",
    ACCOUNT_RECOVERY_LINK_MESSAGE: "We have sent you an email with a link to reset your password",
    CONFIRM_PASSWORD_VALIDATION_MESSAGE: "Password and re-password must match.",
    LOGIN_PAGE_TITLE: process.env.ORGANISATION_NAME + " - Login",
    FORGOT_PASSWORD_PAGE_TITLE: process.env.ORGANISATION_NAME + " - Forgot Password",
    RESET_PASSWORD_PAGE_TITLE: process.env.ORGANISATION_NAME + " - Reset Password",
    TEXT_LOGO: process.env.CDN_ADDRESS + "/static/img/login/text-logo.svg",
    LOGO: process.env.CDN_ADDRESS + "/static/img/navigation-panel/logo.svg",
    LOGO_ONLINE: process.env.CDN_ADDRESS + "/static/img/new-design/bot-online-logo.png",
    RESET_PASSWORD_MESSAGE_LOGIN_SCREEN: "You have successfully changed password please login with new password",
    SANCTIONED_COUNTRIES: ["ir", "cu", "kp", "sy"],
    NOTIFICATION_SOUND_LIST: [
        {
            "id": "0",
            "value": "Hollow",
            "name": "Hollow",
            "text": "Hollow",
            "subText": ""
        },
        {
            "id": "1",
            "value": "ZapSplat",
            "name": "ZapSplat",
            "text": "ZapSplat",
            "subText": ""
        },
        {
            "id": "2",
            "value": "Bell",
            "name": "Bell",
            "text": "Bell",
            "subText": ""
        }
    ],
    LEFT_PANEL_MENU_ITEMS: {
        "header": "Settings",
        "items": [
            {
                "route": "/app/bot_id/settings/notifications",
                "title": "Notifications & Sound",
                "icon": ""
            },
            {
                "route": "/app/bot_id/settings/human-handover",
                "title": "Human Handover",
                "icon": ""
            },
            {
                "route": "/account-settings",
                "title": "Account",
                "icon": ""
            }
        ]
    },
    HUMAN_HANDOVER_DAYS:
        [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
    DEMO_FORM_HEADER_TEXT: "Try "+ process.env.ORGANISATION_NAME +", FREE!",
    DEMO_FORM_SUB_HEADER_TEXT: "Our team will get in touch with you to set up your personalized FREE trial of "+ process.env.ORGANISATION_NAME +".",
    QUOTE: {
        "message": "265 billion customer requests are recorded per year and businesses spend nearly $1.3 trillion to address them. Using chatbots could help save up to 30% of this cost.",
        "author": "- IBM"
    },
    FORM_SUBMIT_BUTTON_LABEL: 'Get Started',
    FORM_LOGO: "/static/img/demo-form/from_logo.svg",
    FORM_THANK_YOU_IMG: "/static/img/demo-form/right.svg",
    SUCCESS_FORM_TITLE: "THANK YOU!",
    SUCCESS_FORM_SUB_TITLE_1: "We'll be in touch to set up",
    SUCCESS_FORM_SUB_TITLE_2: "your FREE trial shortly.",
    FREE_TRAIL_BTN_TEXT: "Start your free trial NOW",
    FREE_TRAIL_HEADER_TEXT: "HOLD ON! Try out our personalized done-for-you service for FREE before deciding!",
    FREE_TRIAL_FOOTER_TEXT: "Maybe later",
    FREE_TRIAL_POPUP_TIME_DURATION: 30000,
    POPUP_LOGO: process.env.CDN_ADDRESS + "/static/img/demo-form/popup_logo.png",
    ON_BOARDING_FLOW_INDEX_ROUTE_MAPPING:
        {
            "A": ["choose-template", "personalise", "experience", "request-demo", "thank-you"],
            "B": ["choose", "customize", "converse", "free-trial", "thanks"]
        },
    ENABLE_NOTIFICATION_DESCRIPTION: "You will need to configure your browser settings to allow notifications from " + process.env.SERVER_ADDRESS,
    DISALLOWED_NOTIFICATION_ALERT_MESSAGE: "You've disallowed notifications in your browser. You'll need to open your browser preferences to change that.",
    IS_HUMAN_HANDOVER_TRIGGER_CHECKBOX: "When a human handover is triggered",
    IS_NEW_MESSAGE_CHECKBOX: "When a new message from a existing chat is received",
    PLAY_SOUND_FOR_NOTIFICATION: "When I receive notification play sound",
    FILE_SIZE_LIMIT_EXCEEDED: "This File is too large to upload.",
    ENABLE_HUMAN_HANDOVER_DESCRIPTION: "This will allow visitors to speak with available human agents",
    OPERATIONAL_HOURS_DESCRIPTION: "Human Handover will be effective for the selected days and time ranges",
    SLIDER_DEFAULT_VALUE: {"start": "00:00:00", "end": "00:00:00"},
    POPUP_CLOSE_LOGO: "/static/img/new-design-assest/cross.svg",
    EXPORT_DATE_POPUP_CONTENT: [
        {
            "id": "0",
            "value": "selected",
            "name": "selected",
            "text": "Export leads with currently displayed columns",
            "subText": ""
        },
        {
            "id": "1",
            "value": "all",
            "name": "all",
            "text": "Export leads with all columns",
            "subText": ""
        }
    ],
    IGNORED_COLUMNS: ['thread_id', 'thread_key'],
    CONTACT_DATA_EXPORT_SUCCESS_MESSAGE: 'You will receive an email with a link to download the CSV.',
    FLOW_BUILDER_GREEN_CROSS: "/static/img/new-flow-builder/cross_green.svg",
    ACCEPTED_FIELDS:['input (email)', 'input (phone)', 'custom_phone_input'],
    DATE_PICKER_INPUT_BOX_ARROW:"/static/img/dateArrow.svg",
    DATE_PICKER_INPUT_BOX_DOWN_ARROW:"/static/img/downArrow.svg",
    DATE_PICKER_NEXT_DATE_ARROW:"/static/img/rightdate.svg",
    DATE_PICKER_PREV_DATE_ARROW:"/static/img/leftdate.svg",
    NEW_CHAT_ASSIGNED_NOTIFICATION:'New chat assigned to you',
    TRANSFERRED_CHAT_NOTIFICATION:'Chat transferred to you',
    NEW_CHAT_NOTIFICATION:'New chat from ',
    NAVIGATION_PANEL: {
        "menu": [
            {
                "item_id":1,
                "url": "icon-dashboard",
                "selected_url": "/static/img/navigation-panel/analytics_s.svg",
                "title": "Analytics",
                "route": "/analytics",
                "isAccessibleToAgent": false,
                "isActive": true
            },
            {
                "item_id":2,
                "url": "icon-messages",
                "selected_url": "/static/img/navigation-panel/liveChat_s.svg",
                "title": "Live Chat",
                "route": "/app/bot_id/live-chat",
                "isAccessibleToAgent": true,
                "isActive": false
            },
            {
                "item_id":3,
                "url": "icon-knowledge",
                "selected_url": "/static/img/navigation-panel/faq_s.svg",
                "title": "FAQ",
                "route": "/app/bot_id/faq-configuration",
                "isAccessibleToAgent": false,
                "isActive": false
            },
            {
                "item_id":4,
                "url": "icon-flows",
                "selected_url": "/static/img/navigation-panel/flowBuilder_s.svg",
                "title": "Flow Builder",
                "route": "/app/bot_id/flow-builder",
                "isAccessibleToAgent": false,
                "isActive": false
            },
            {
                "item_id":5,
                "url": "icon-icons",
                "selected_url": "/static/img/navigation-panel/contacts_s.svg",
                "title": "Contacts",
                "route": "/app/bot_id/contacts-list",
                "isAccessibleToAgent": true,
                "isActive": false
            },
        ]
    },
    ALLOWED_PATHS: ['/app/bot_id/live-chat', '/app/bot_id/contacts-list', '/app/bot_id/settings/notifications'],
    ENABLE_AUTO_ASSIGN_CHAT_INFORMATION:'Enable auto-assigning of chats to available agents in a round robin manner',
    ENABLE_AUTO_ASSIGN_CHAT_DESCRIPTION:'You may want to do this if you want human handover chats to automatically be assigned to an available agent in a round robin manner.',
    HUMAN_HANDOVER_SAVE_SUCCESS_MSG:'Human Handover preferences have been updated',
    CONTACTS_COLUMN_BUTTON_ICON:"/static/img/new-design-assest/columnBtn.svg",

    //flow-builder-img
    FLOW_BUILDER_DEFAULT_FILE_IMG: "/static/img/bot-builder/file.svg",
    DOC_ICON:"/static/img/bot-builder/doc.svg",
    DOCX_ICON:"/static/img/bot-builder/docx.svg",
    PDF_ICON:"/static/img/bot-builder/pdf.svg",
    PPT_ICON:"/static/img/bot-builder/ppt.svg",
    XLS_ICON:"/static/img/bot-builder/xls.svg",
    XLSX_ICON:"/static/img/bot-builder/xlsx.svg",
    CSV_ICON:"/static/img/bot-builder/csv.svg",
    BUTTON_PLUS_ICON:"icon-plus-2",
    FLOW_HEADER_DELETE_ICON:"icon-delete",
    FLOW_PANEL_CLOSE_ICON:"icon-cross",
    RE_ARRANGE_ICON:"/static/img/bot-builder/arrange.svg",
    MESSAGE_DELETE_ICON: "/static/img/bot-builder/delete_message.svg",
    BRANCH_RETURN_ICON: "icon-return",
    FLOW_BUILDER_WARING_ICON:"/static/img/bot-builder/warning.svg",
    FLOW_BUILDER_CAROUSEL_IMG_PLACEHOLDER:"/static/img/bot-builder/image.svg",
    FLOW_BUILDER_CAROUSEL_FORWARD_ARROW:"/static/img/bot-builder/forward.svg",
    CAROUSEL_FORWARD_ARROW:"/static/img/bot-builder/forwardArrow.svg",

    //flow-builder-copy-text
    MESSAGE_SUBTITLE:"Send message will only send messages to the user and not require a response back",
    INPUT_SUBTITLE:"Collect input asks a question to a user which requires an answer",
    VARIABLE_SUB_TEXT:"You can give the input received a name that can be referenced to later. No special characters or spaces allowed.",
    INPUT_DROPDOWN_LABEL:"Input validation",
    INPUT_SUCCESS_LABEL:"Success message",
    INPUT_FAILURE_LABEL:"Failure message",
    INPUT_FALLBACK_LABEL:"Error message",
    INPUT_REQUEST_AGAIN_LABEL:"Request again",
    INPUT_VARIABLE_ERROR_TEXT:"Please enter a distinct variable.",
    INPUT_BRANCH_SUBTITLE:"Options allow the conversation flow to be branched into various paths based on user input",
    INPUT_BRANCH_LIST_TITLE: "Input options",
    INPUT_BRANCH_OPTION_PLACEHOLDER:"Enter the name for the option",
    INPUT_BRANCH_PREVIOUS_MENU_PLACEHOLDER:"Return to previous",
    INPUT_BRANCH_EMPTY_WARNING:"This field cannot be empty",
    INPUT_BRANCH_DUPLICATE_WARNING:"This field name is already in use",
    SAVE_SUCCESS_MSG:"Bot has been deployed successfully",
    SAVE_FAILURE_MSG:"Please fix the errors highlighted below to deploy the bot",
    MAX_IMAGE_SIZE_ERROR:"File size exceeded the limit! Please upload a file below 5mb",
    INVALID_FILE_UPLOAD_TYPE_ERROR:"Invalid file type! Please upload a JPG, JPEG or PNG",
    DEPLOY_BUTTON_DISABLED_TOOLTIP:["Please fix the errors highlighted below", <br />, "to deploy the bot"],
    BUTTONS_SUBTITLE:"Buttons allow the conversation flow to be branched into various paths based on user input",
    URL_BUTTON_HELPER_TEXT:"Click on the URL icon to add the URL",
    BRANCH_BUTTON_HELPER_TEXT:"Add new blocks from the port to configure it",
    EMPTY_URL_MSG:"The URL field cannot be empty",
    DISPLAY_AGENT_JOIN_CONVERSATION : " has joined this conversation",
    FLOW_BUILDER_EMPTY_ACTION_MSG:" Please select an action",
    FLOW_BUILDER_INVALID_URL_MSG:"Please enter a valid URL",
    CAROUSEL_SUBTITLE:"Carousels are a set of cards which display items with CTAs to each card",
    MESSAGE_TEXT_EDITOR_PLACEHOLDER:"Hi, how may I help you?",
    INPUT_TEXT_EDITOR_PLACEHOLDER:"For eg. Can you help me with your name?",
    CAROUSEL_TEXT_EDITOR_PLACEHOLDER:"Enter description (optional)",
    BUTTONS_TEXT_EDITOR_PLACEHOLDER:"What kind of properties are you looking for?",

    //flow-builder-other
    ACCEPTED_FILE_TYPES:'"image/jpeg, .jpg, image/png, .csv, text/csv, .doc, application/msword,.xls , application/vnd.ms-excel, .ppt, application/vnd.ms-powerpoint, application/pdf, .docx, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"',
    SUPPORTED_FILE_TYPES:["image/jpeg", "image/png", "image/jpg", "text/csv", "application/msword", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/pdf",
                                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
};

