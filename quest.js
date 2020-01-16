function quest(playerName) {
    var questTree = {
        text: "Well hello there " + playerName + " my fellow Ent! What’s that you say, you are going away to search for the Entwives!? Young and brave you are my friend, and quite an adventure that will be. I’ll help you how I may, but the Entwives have not been seen for many ages. Oh how I miss them so. To where shall you first set off?",
        img: "images/treebeard.png",
        options: [{
                text: "North",
                outcome: function () {
                    return {
                        text: "Arrive at Lorien.",
                        options: [{
                            text: "Do nothing",
                            outcome: null
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
                outcome: null
            },
        ]
    };
    return questTree;
}