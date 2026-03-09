/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 27 02 26
 * Date Modified : 27 02 26
 * 
 * Main work page JS file for creating work list
 */


class SimpleDate {
    /**
     * Housing for creating date formats
     * 
     * @param {Integer} day the string
     * @param {Integer} month the string
     * @param {Integer} year the string
     * 
     * @param {Array<String>} format the date's format in the form of : <day/month/year>, (optional for year, add the number of digits shown either 2 or 4, default it 2)
     * @param {String} separator the character that separates the date elemets
     */
    constructor(day, month, year, format = ["day", "month", "year2"], separator = '/') {
        let abs = (val) => val > 0 ? val : -val;

        this.day = abs(day) % 32;
        this.month = abs(month) % 13;
        this.year = abs(year);
        this.format = format.length < 3 ? ["day", "month", "year2"] : format;
        this.separator = separator;

        const remove_array = [" ", ",", ".", ":"];
        this.regex = new RegExp('\\b(' + remove_array.join(" | ") + ')\\b', "g");
        // https://stackoverflow.com/questions/49655135/javascript-regex-remove-multiple-words-from-string
    }

    /**
     * Removes unneeded characters from a string
     * 
     * @param {String} str the string
     * 
     * @returns {String} the string with the unneeded characters removed
     */
    #remove_unneeded_chars(str) {
        return str.replaceAll(this.regex, "g");
    }

    /**
     * Formats the date into a string for HTML purposes, If format / separator is left empty, will default to initialised format / separator
     * 
     * @param {Array<String>} format the date's format in the form of : <day/date/month/year/d/m/y>, (optional for year, add the number of digits shown either 2 or 4, default it 2)
     * @param {String} separator the character that separates the date elemets
     * 
     * @returns {String} the formated date
     */
    render(format = this.format, separator = this.separator) {
        const output = [];
        format.forEach((element) => {
            element = this.#remove_unneeded_chars(element);
            switch (element) {
                case "d": case "m": case "date":
                    element = element == "m" ? "month" : "day";

                case "day": case "date": case "month":
                    output.push(new String(this[element]).padStart(2, '0'));
                    break;
                case "year": case "year2": case "y":
                    output.push(new String(this.year % 100).padStart(2, '0'));
                    break;
                case "year4":
                    output.push(new String(this.year).padStart(4, '0'));
                    break;
            }
        });

        return output.join(separator);
    }
}

class Work {
    constructor(title, desc, date, href, tags = [], parent_ID = "works") {
        this.title = title;
        this.date = date;
        this.tags = tags;

        const title_e = document.createElement("h1");
        title_e.innerHTML = title;

        const desc_e = document.createElement("p");
        desc_e.innerHTML = desc;

        const date_e = document.createElement("h2");
        date_e.innerHTML = date.render();

        const link_e = document.createElement("a");
        link_e.setAttribute("href", href);
        link_e.setAttribute("target", "_blank");
        link_e.appendChild(title_e);
        link_e.appendChild(date_e);
        link_e.appendChild(desc_e);

        const li_e = document.createElement("li");
        li_e.appendChild(link_e);

        const parent_e = document.getElementById(parent_ID);
        parent_e.appendChild(li_e);
    }
}

const items = [ // Work Items
    new Work(
        "Layout Assignment",
        "Newspaper layout based on given wireframes",
        new SimpleDate(1, 2, 2026),
        "./work/layout/index.html"
    ),

    new Work(
        "DOM arithmetic quiz 1 (Lab 4.2.1a)",
        "JS DOM arithmetic quiz part 1",
        new SimpleDate(1, 2, 2026),
        "./work/Labs/4.2/1a/DOMquiz.html"
    ),

    new Work(
        "DOM arithmetic quiz 2 (Lab 4.2.1b)",
        "JS DOM arithmetic quiz part 2",
        new SimpleDate(1, 2, 2026),
        "./work/Labs/4.2/1b/DOMquiz.html"
    ),

    new Work(
        "Movable elements (Lab 4.2.2)",
        "Moving DOM elements using JS",
        new SimpleDate(1, 2, 2026),
        "./work/Labs/4.2/2/moveme.html"
    ),

    new Work(
        "+/- arithmetic generator (Lab 4.1.1)",
        "Creates 2 values between -100 and 100, and prompts the user for the answer",
        new SimpleDate(2, 2, 2026),
        "./work/Labs/4.1/arithmetic/index.html"
    ),

    new Work(
        "Lottery (Lab 4.1.2)",
        "Lottery ball 'game'",
        new SimpleDate(2, 2, 2026),
        "./work/Labs/4.1/lottery/index.html"
    ),

    new Work(
        "Catch the Rabbit (Lab 5.1.1)",
        "A rabbit that constantly jumps around when you try to touch it",
        new SimpleDate(2, 2, 2026),
        "./work/Labs/5.1/catch_the_rabbit/catchTheRabbit.html"
    ),

    new Work(
        "Arithmetic calculator (Lab 5.1.2)",
        "2 input calculator that works with +, -, *, /, and %",
        new SimpleDate(2, 2, 2026),
        "./work/Labs/5.1/arithmetic/index.html"
    ),

    new Work(
        "House Draw-er (Lab 6.1)",
        "Draws \"houses\", \"cars\", and \"stars\" on request",
        new SimpleDate(9, 2, 2026),
        "./work/Labs/6.1/house_draw-er.html"
    ),

    new Work(
        "Guessing Game (Lab 7.1.1 + 7.1.2)",
        "Has the user guess a number between 1-100, stores the object locally",
        new SimpleDate(23, 2, 2026),
        "./work/Labs/7.1/guessing_game/guessing_game.html"
    ),

    new Work(
        "Random Moving Balls (Lab 7.1.3)",
        "Generates 500 balls with random x,y positions, velocities, and colours",
        new SimpleDate(23, 2, 2026),
        "./work/Labs/7.1/moving_balls/balls.html"
    ),

    new Work(
        "Incremental Game Assignment",
        "Duck clicker, similar to cookie clicker",
        new SimpleDate(28, 2, 2026),
        "./work/increments/index.html"
    ),

    new Work(
        "Simple Animation Altering (Lab 8.2.1)",
        "Small ball begins as black slowly becomes red, moves down and left, and shrinks in radius",
        new SimpleDate(4, 3, 2026),
        "./work/Labs/8.2/anim.html"
    ),

    new Work(
        "Team Logo Animation (Lab 8.2.2)",
        "Logo for The Goober Development Group",
        new SimpleDate(4, 3, 2026),
        "./work/Labs/8.2/logo_anim.html"
    ),

    new Work(
        "(Lab 9.1.1)",
        "",
        new SimpleDate(9, 3, 26),
        "./work/Labs/9.1/slot/slot.php"
    ),

    new Work(
        "(Lab 9.1.2)",
        "",
        new SimpleDate(9, 3, 26),
        "./work/Labs/9.1/2/"
    ),


    new Work(
        "JS Assignment",
        "Unknown Yet",
        new SimpleDate(0, 0, 0),
        "./work/js_assignment/index.html"
    ),

    new Work(
        "The Goober Development Group",
        "CS 1XD3 course team page",
        new SimpleDate(1, 2, 2026),
        "https://cs1xd3.cas.mcmaster.ca/~paten164/team"
    ),
];

new Reversible_Element("works", "toggle", ["li"], start_as_reversed = true);