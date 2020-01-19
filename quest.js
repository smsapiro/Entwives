function quest(playerName) {
    var questTree = {
        text: "You find Treebeard, wisest of the Ents. \"Well hello there " + playerName + " my fellow Ent! What’s that you say, you are going away to search for the Entwives!? Young and brave you are my friend, and quite an adventure that will be. I’ll help you how I may, but the Entwives have not been seen for many ages. Oh how I miss them so. To where shall you first set off?\"",
        background: "images/fangornbg.png",
        img: "images/treebeard.png",
        options: [{
                text: "North",
                outcome: function () {
                    return {
                        text: "You enter the woods of Lothlórien. It’s beautiful here, and the trees are unlike any you’ve seen in Fangorn Forest. Still, it feels somehow ... foreboding.",
                        background: "images/lorien.png",
                        img: "",
                        options: [{
                            text: "Next",
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
                outcome: function () {
                    return {
                        text: "You set out into the rising sun, through the expansive desert known as the Brown Lands. The sun beats hot and dry on your mossy shoulders. You allow yourself to lapse into a semi-conscious state as you wander steadfastly through the wasteland.",
                        background: "images/brownlands.png",
                        img: "",
                        options: [{
                            text: "Next",
                            outcome: function () {
                                var chances = [{
                                        text: "You are jolted back to awareness by the jeering cries of Orcs. \"What’s this!\" one shouts. \"One of them tree demons?! This time he’s all alone, not got the whole forest on his side!\" You grab one of the Orcs, pick him up and throw him far away, but as you turn toward the second one he swings his axe into your abdomen. You cry out in pain and collapse to the ground.",
                                        background: "images/brownlands.png",
                                        img: "images/orcs.png",
                                        options: []
                                    },
                                    {
                                        text: "The sun is now behind you, and you can see in the dimming light a tower standing in front of you. Not knowing where else to go, you walk through the doors. It appears deserted. You come into a room filled with curiosities: it seems to be some sort of trophy room. Most of the trophies are insignificant to you, but in a corner lies a peculiar object that seems to be calling to you. You’re not sure why, but you know that it’s important.",
                                        background: "images/darktower.png",
                                        img: "",
                                        options: [{
                                            text: "Take object",
                                            outcome: function () {
                                                return {
                                                    text: "You pick it up and carry it out of the tower.",
                                                    background: "images/darktower.png",
                                                    img: "images/seed.png",
                                                    options: []
                                                }
                                            }
                                        }],
                                    }
                                ]

                                return chances[Math.floor(Math.random() * chances.length)];
                            }
                        }]
                    }
                }
            },
            {
                text: "South",
                outcome: function () {
                    return {
                        text: "The fields seem to stretch on forever. You prefer the comfort of tree canopies above your head, but these meadows are actually kind of nice. You can hear hoofbeats in the distance, but that’s only to be expected. Except these hoofbeats are getting awfully close.",
                        background: "images/rohan.png",
                        img: "",
                        options: [{
                            text: "Next",
                            outcome: function () {
                                return {
                                    text: "A rider on a golden horse approaches you, brandishing his spear! \"An Ent looking for the Entwives you say?” The man glares at you for a moment. “I have not seen them, but I can bring you to an object that may show you what you seek.\"",
                                    background: "images/rohan.png",
                                    img: "images/rohirrim.png",
                                    options: [{
                                            text: "Trust",
                                            outcome: function () {
                                                return {
                                                    text: "The man leads you for many miles. His horse’s pace is just a bit too fast for your comfortable walking speed, but too slow for you to run.",
                                                    background: "images/rohan.png",
                                                    img: "images/rohirrim.png",
                                                    options: [{
                                                        text: "Next",
                                                        outcome: function () {
                                                            return {
                                                                text: "At last, you arrive at a tall white tower. “Within this tower is a palantír,” he says. “Look into it and you may see what has become of your Entwives.\"",
                                                                background: "images/whitetower.png",
                                                                img: "images/rohirrim.png",
                                                                options: [{
                                                                    text: "Look",
                                                                    outcome: function () {
                                                                        return {
                                                                            text: "You enter the tower and find what appears to be a large glass ball.",
                                                                            background: "images/whitetower.png",
                                                                            img: "images/palantir.png",
                                                                            options: [{
                                                                                text: "Touch",
                                                                                outcome: function () {
                                                                                    return {
                                                                                        text: "The palantir begins to glow and swirl in colors.",
                                                                                        background: "images/whitetower.png",
                                                                                        img: "images/palantirglow.png",
                                                                                        options: []
                                                                                    }
                                                                                }
                                                                            }]
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
                                            text: "Don't Trust",
                                            outcome: function () {
                                                return {
                                                    text: "The man is enraged at your refusal and attempts to stab you with his spear. It bounces right off. Before you can strike back, he spins his horse around and gallops away.",
                                                    background: "images/rohan.png",
                                                    img: "images/rohirrim.png",
                                                    options: [{
                                                        text: "Next",
                                                        outcome: function () {
                                                            return {
                                                                text: "You sigh and continue walking alone. Suddenly, you spy a sudden flash of orange.",
                                                                background: "images/rohan.png",
                                                                img: "",
                                                                options: [{
                                                                    text: "Next",
                                                                    outcome: function () {
                                                                        return {
                                                                            text: "A fox! \"Entwives, eh?\" says the fox. \"Of course I’ve seen them. They’re right back in the big old forest you came from.\"",
                                                                            background: "images/rohan.png",
                                                                            img: "images/carfax.png",
                                                                            options: [{
                                                                                    text: "Go back to Fangorn",
                                                                                    outcome: function () {
                                                                                        return {
                                                                                            text: "Strolling back into the welcoming air of the forest, you look around you at the familiar faces of trees you’ve known all your life. Then, one takes you by surprise.",
                                                                                            background: "images/fangornbg.png",
                                                                                            img: "",
                                                                                            options: [{
                                                                                                text: "Next",
                                                                                                outcome: function () {
                                                                                                    return {
                                                                                                        text: "It opens its eyes and looks back at you. You feel stricken by its gaze. \"Hello " + playerName + "\" it says. \"I’m glad you’re back.\" A series of realizations dawn on you in rapid succession. Who needs Entwives when there are regular Ents all around you? Gender isn’t real anyway! There’s no reason you can’t just have an Entspouse! You smile back.",
                                                                                                        background: "images/fangornbg.png",
                                                                                                        img: "images/entbf.png",
                                                                                                        options: []
                                                                                                    }
                                                                                                }
                                                                                            }]
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    text: "Kill the fox for his impudence",
                                                                                    outcome: function () {
                                                                                        return {
                                                                                            text: "Enraged by his impudence, you strike out a mighty limb against the fox. His body is crushed in one fell swoop. Instantly overcome with regret at your violent outburst, you sink to the ground and remain there forever.",
                                                                                            background: "images/rohan.png",
                                                                                            img: "images/deadfox.png",
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
            {
                text: "West",
                outcome: function () {
                    return {
                        text: "You find yourself in a woods reminiscent of your home in Fangorn, yet it’s slightly darker and quieter. It’s the Old Forest. Out of the corner of your eye, you notice a rustling in the thicket.",
                        background: "images/oldforest.png",
                        img: "",
                        options: [{
                            text: "Next",
                            outcome: function () {
                                return {
                                    text: "A small creature - short and with large bare feet - emerges from behind a bush. In her one hand is a large basket filled to the brim with mushrooms and in her other a pipe. " +
                                        "A Hobbit! Just like in the song! She looks surprised to see you. “Well I’ve never seen an Ent, and by the looks of it you’ve never seen a Hobbit. I know a story from the olden days that starts this way, and it ends with friendship! Say, how about I tell you the story and we become friends?\"",
                                    background: "images/oldforest.png",
                                    img: "images/friendlyhobbit.png",
                                    options: [{
                                            text: "Befriend the Hobbit",
                                            outcome: function () {
                                                return {
                                                    text: "\"Well lovely!\" exclaimed the Hobbit. \"Now come along with me to The Shire. I’ll make you a hearty mushroom stew and tell you all about how the brave and valiant Hobbits of Old discovered the Ents and led them to victory against great evil.\" " +
                                                        " ... You find that you are the center of attention in The Shire. Many stories and many meals later, your roots have grown thick and weary, grounded forever. You become Ent of The Shire, and your quest ends there.",
                                                    background: "images/oldforest.png",
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
                                                    background: "images/oldforest.png",
                                                    img: "images/hobbitgirl.png",
                                                    options: [{
                                                        text: "Next",
                                                        outcome: function () {
                                                            return {
                                                                text: "You continue your search through the forest, feeling a faint air of familiarity. Suddenly, you notice a melody echoing through the forest.",
                                                                background: "images/oldforest.png",
                                                                img: "",
                                                                options: [{
                                                                        text: "Follow the melody",
                                                                        outcome: function () {
                                                                            return {
                                                                                text: "You cautiously follow along until you find the source of the song. It’s a short man in a blue coat, bright yellow boots, and a hat with a feather.**Hey dol! merry dol! ring a dong dillo!*Ring a dong! hop along! Fal lal the willow!*Tom Bom, jolly Tom, Tom Bombadillo!**He finally notices you watching him.",
                                                                                background: "images/oldforest.png",
                                                                                img: "",
                                                                                options: [{
                                                                                    text: "Next",
                                                                                    outcome: function () {
                                                                                        return {
                                                                                            text: "\"Well hello there! I am Tom Bombadil, and you are an Ent! Oh how wonderful!\" " +
                                                                                                "**Tom Bombadil I sing*Is older than any living thing*Yet here stands an ageless Ent*I wonder what The Creator meant.**" +
                                                                                                "\"But never mind silly riddles! They’ve never done the world much good anyway. Tell me what’s your name and why are you here?\"",
                                                                                            background: "images/oldforest.png",
                                                                                            img: "images/bombadil.png",
                                                                                            options: [{
                                                                                                text: "Next",
                                                                                                outcome: function () {
                                                                                                    return {
                                                                                                        text: "\"Oh my oh my what a noble quest! And how well you’ve done to find me here! I know it must not have been easy, but rejoice! For I have the answer you seek!\" ",
                                                                                                        background: "images/oldforest.png",
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
                                                                                background: "images/oldforest.png",
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