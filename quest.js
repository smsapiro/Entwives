function quest(playerName) {
    var questTree = {
        text: "You find Treebeard, wisest of the Ents. \"Well hello there " + playerName + " my fellow Ent! What’s that you say, you are going away to search for the Entwives!? Young and brave you are my friend, and quite an adventure that will be. I’ll help you how I may, but the Entwives have not been seen for many ages. Oh how I miss them so. To where shall you first set off?\"",
        background: "images/fangornbg.png",
        img: "images/treebeard.png",
        options: [{
                text: "North",
                outcome: function () {
                    return {
                        text: "You enter the woods of Lothlórien. It’s beautiful here, and the trees are unlike any you’ve seen in Fangorn Forest. Still, it feels somehow ... foreboding. " +
                            "Suddenly you become aware of a company of Elves surrounding you, arrows notched on their bows and sharp swords at their sides. Your skin is strong, but you’ll be no match against them. You surrender and are taken captive. " +
                            "Later, one of the elves approaches you alone. \"You’re an Ent, aren’t you?\" he asks. \"I think I know what you’re looking for. I can help.\"",
                        background: "",
                        img: "",
                        options: [{
                            text: "Trust the Elf",
                            outcome: function () {
                                return {
                                    text: ""
                                }
                            }
                        }]
                    }
                }
            },
            {
                text: "East",
                outcome: null
            },
            {
                text: "South",
                outcome: null
            },
            {
                text: "West",
                outcome: function () {
                    return {
                        text: "You find yourself in a woods reminiscent of your home in Fangorn, yet it’s slightly darker and quieter. It’s the Old Forest. Out of the corner of your eye, you notice a rustling in the thicket.",
                        background: "images/fangornbg.png",
                        img: "",
                        options: [{
                            text: "Next",
                            outcome: function () {
                                return {
                                    text: "A small creature - short and with large bare feet - emerges from behind a bush. In her one hand is a large basket filled to the brim with mushrooms and in her other a pipe. " +
                                        "A Hobbit! Just like in the song! She looks surprised to see you. “Well I’ve never seen an Ent, and by the looks of it you’ve never seen a Hobbit. I know a story from the olden days that starts this way, and it ends with friendship! Say, how about I tell you the story and we become friends?\"",
                                    background: "images/fangornbg.png",
                                    img: "images/friendlyhobbit.png",
                                    options: [{
                                            text: "Befriend the Hobbit",
                                            outcome: function () {
                                                return {
                                                    text: "\"Well lovely!\" exclaimed the Hobbit. \"Now come along with me to The Shire. I’ll make you a hearty mushroom stew and tell you all about how the brave and valiant Hobbits of Old discovered the Ents and led them to victory against great evil.\" " +
                                                        " ... You find that you are the center of attention in The Shire. Many stories and many meals later, your roots have grown thick and weary, grounded forever. You become Ent of The Shire, and your quest ends there.",
                                                    background: "images/fangornbg.png",
                                                    img: "images/friendlyhobbit.png",
                                                    options: []
                                                }
                                            }
                                        },
                                        {
                                            text: "Politely decline and continue on",
                                            outcome: function () {
                                                return {
                                                    text: "\"Well it is a shame, but I do understand. Feel free to visit the Shire if you ever wander back around these parts!\" The Hobbit hops away joyfully.",
                                                    background: "images/fangornbg.png",
                                                    img: "images/hobbitgirl.png",
                                                    options: [{
                                                        text: "Next",
                                                        outcome: function () {
                                                            return {
                                                                text: "You continue your search through the forest, feeling a faint air of familiarity. Suddenly, you notice a melody echoing through the forest.",
                                                                background: "images/fangornbg.png",
                                                                img: "",
                                                                options: [{
                                                                        text: "Follow the melody",
                                                                        outcome: function () {
                                                                            return {
                                                                                text: "You cautiously follow along until you find the source of the song. It’s a short man in a blue coat, bright yellow boots, and a hat with a feather.**Hey dol! merry dol! ring a dong dillo!*Ring a dong! hop along! Fal lal the willow!*Tom Bom, jolly Tom, Tom Bombadillo!**He finally notices you watching him.",
                                                                                background: "images/fangornbg.png",
                                                                                img: "",
                                                                                options: [{
                                                                                    text: "Next",
                                                                                    outcome: function () {
                                                                                        return {
                                                                                            text: "\"Well hello there! I am Tom Bombadil, and you are an Ent! Oh how wonderful!\" " +
                                                                                                "**Tom Bombadil I sing*Is older than any living thing*Yet here stands an ageless Ent*I wonder what The Creator meant.**" +
                                                                                                "\"But never mind silly riddles! They’ve never done the world much good anyway. Tell me what’s your name and why are you here?\"",
                                                                                            background: "images/fangornbg.png",
                                                                                            img: "images/bombadil.png",
                                                                                            options: [{
                                                                                                text: "Next",
                                                                                                outcome: function () {
                                                                                                    return {
                                                                                                        text: "\"Oh my oh my what a noble quest! And how well you’ve done to find me here! I know it must not have been easy, but rejoice! For I have the answer you seek!\" ",
                                                                                                        background: "images/fangornbg.png",
                                                                                                        img: "images/bombadil.png",
                                                                                                        options: []
                                                                                                    }
                                                                                                }
                                                                                            }]
                                                                                        }
                                                                                    }
                                                                                }]
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        text: "Avoid the melody and continue on",
                                                                        outcome: function () {
                                                                            return {
                                                                                text: "A fox crosses your path and looks you in the eyes. You ponder the existence of the fox, but arrive at the conclusion that it is meaningless. Then you wonder whether this is the greater metaphor: perhaps life is meaningless? " +
                                                                                    "You dislike that possibility, so maybe the fox does have meaning after all. You continue pondering this philosophical dilemma. Forever. To be continued ...",
                                                                                background: "images/fangornbg.png",
                                                                                img: "images/carfax.png",
                                                                                options: []
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }]
                    }
                }
            },
        ]
    };
    return questTree;
}