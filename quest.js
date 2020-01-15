var questTree = {
    text: "Well, hello there! The Entwives are lost. " +
        "You have to go find them! Which way will you search?",
    options: [
        {
            text: "North",
            outcome: function () {
                return {
                    text: "Arrive at Lorien.",
                    options: [
                        {
                            text: "Do nothing",
                            outcome: null
                        }
                    ]
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