use gcudictionary;
db.dropDatabase();

db.words.insertOne(
    {
        "word": "consistent",
        "phonetic": "/kənˈsɪstənt/",
        "phonetics": [
            {
                "text": "/kənˈsɪstənt/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/consistent-au.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=75729609",
                "license": {
                    "name": "BY-SA 4.0",
                    "url": "https://creativecommons.org/licenses/by-sa/4.0"
                }
            },
            {
                "text": "/kənˈsɪstənt/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/consistent-us.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=2650791",
                "license": {
                    "name": "BY-SA 3.0",
                    "url": "https://creativecommons.org/licenses/by-sa/3.0"
                }
            }
        ],
        "meanings": [
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "(in the plural) Objects or facts that are coexistent, or in agreement with one another.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "A kind of penitent who was allowed to assist at prayers, but was not permitted to receive the holy sacraments.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                "synonyms": [],
                "antonyms": []
            },
            {
                "partOfSpeech": "adjective",
                "definitions": [
                    {
                        "definition": "Of a regularly occurring, dependable nature.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "He is very consistent in his political choices: economy good or bad, he always votes Labour!"
                    },
                    {
                        "definition": "Compatible, accordant.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "Of a set of statements: such that no contradiction logically follows from them.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                "synonyms": [],
                "antonyms": [
                    "contradictory",
                    "incompatible",
                    "inconsistent"
                ]
            }
        ],
        "license": {
            "name": "CC BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
            "https://en.wiktionary.org/wiki/consistent"
        ]
    })