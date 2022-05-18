import { ToHack } from "./convert";
import * as readline from "readline";




export function UI () {

    // Hack or toggler?
    const rl1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Valid options: [\"Hack\", \"Toggler\"]\n");
    rl1.question("Are you creating a [Hack], or a [Toggler]: ", function(hackOrToggler: string) {

        // Close the input stream
        rl1.close();

        if (hackOrToggler == "Hack" || hackOrToggler == "[Hack]") {

            // Create a hack
            UI_Hack();

        } else if (hackOrToggler == "Toggler" || hackOrToggler == "[Toggler]") {

            // Create a toggler
            UI_Toggler();

        } else {
            return console.error("Please enter either 'Hack' or 'Toggler'");
        }



    });
    // Hack or toggler?


}


export function UI_Hack() {


    // Variables
    var category: String = "";
    var name: String = "";
    var description: String = "";
    var return_: String = "";
    var setClick: String = "";
    const usingYml: boolean = false;
    // Variables


    // Category
    const validOptions: string[] = ["battle", "beta", "inventory", "location", "minigames", "misc", "patched", "pets", "player", "utility"];
    console.log("Valid options: [\"battle\", \"beta\", \"inventory\", \"location\", \"minigames\", \"misc\", \"patched\", \"pets\", \"player\", \"utility\"]\n");

    const rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    rl2.question("Which category is your hack: ", function(cat: string) {

        rl2.close();

        if (validOptions.includes(cat)) {

            category = cat;



            // Name
            const rl3 = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl3.question("What is your hack's name: ", function(nam: string) {

                rl3.close();

                if (nam.length > 0) {

                    name = nam;




                    // Description
                    const rl4 = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });

                    rl4.question("What is your hack's description: ", function(desc: string) {

                        rl4.close();
                        description = desc;




                        // Return
                        const rl5 = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });

                        rl5.question("What should the hack say when it's completed: ", function(ret: string) {

                            rl5.close();
                            return_ = ret;

                            // Return




                            // SetClick
                            const rl6 = readline.createInterface({
                                input: process.stdin,
                                output: process.stdout
                            });

                            rl6.question("[CODE] What is the code of your hack: ", function(set: string) {

                                rl6.close();
                                setClick = set;

                                return console.log(ToHack(category, name, description, return_, setClick, usingYml));

                            });
                            // SetClick




                        });
                    });
                    // Description




                } else {

                    return console.error("Please enter a valid name.");
                }
            });
            // Name




        } else {

            return console.error("Please enter a valid category.");
        }


    });
    // Category
}


export function UI_Toggler() {


}