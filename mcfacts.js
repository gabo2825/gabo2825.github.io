/*facts retrieved from https://facts.net/lifestyle/entertainment/minecraft-facts/*/

const facts=[" Minecraft is a SANDBOX GAME??                                                                                             ",
             " Minecraft is a game where players can CREATE, TRANSFORM, AND DESTROY their SURROUNDINGS??                                 ",
             " Mojang is a Swedish video game developer founded in the year 2009??                                                       ",
             " Mojang released the game Minecraft in the year 2011??                                                                     ",
             " Minecraft is one of the MEST SELLING GAMES OF ALL TIME??                                                                  ",
             " Microsoft purchased Minecraft in 2014??                                                                                   ",
             " Microsoft bought Minecraft at a hefty price tag of $2.5 BILLION??                                                         ",
             " Minecraft is a PIXELATED VIDEO GAME?? In other words, IT LOOKS LIKE A LEGO WORLD?????                                     ",
             " players of Minecraft can look and discover tools inside the game such as craft tools to create their building structure?? ",
             " players of Minecraft can choose to play survival mode or creative mode??                                                  ",
             " Minecraft won the Best Family and Social Game Award in 2015??                                                             ",
             " Minecraft won the Kid’s Choice Award for Video Games in 2015??                                                            ",
             " Minecraft won the Best Independent Game Award in 2011??                                                                   ",
             " there are two versions of Minecraft that is still being updated, Minecraft Java, the original and Minecraft Bedrock??     ",
             " Minecraft is considered one of the most INFLUENTIAL games of all time??                                                   ",
             " Minecraft used social media such as MineCon to promote the game worldwide. ( YEP minecon = social media)??                ",
             " MineCon is an annual interactive live stream created for the players and fans of Minecraft??                              ",
             " the main goal of playing Minecraft is to build, explore, survive, and have fun??                                          ",
             " the survival mode is ONE OF THE MAIN MODES IN MINECRAFT??                                                                 ",
             " the creative mode GIVES PLAYERS FREEDOM??                                                                                 ",
             " THERE ARE 107 MINECRAFT ACHIEVEMENTS IN THE GAME??                                                                        ",
             ' the "blocks" are used to CREATE BUILDING STRUCTIRES??                                                                     ',
             " the Hostile Mobs of Minecraft ARE THE MAIN ANTAGONISTS??                                                                  ",
             " the primary dimension of Minecraft is THE Overworld???                                                                    ",
             " the landscape of Minecraft is called Biomes??                                                                             ",
             " the Nether is a dimension outside the world of Minecraft??                                                                ",
             " the End is the final Biome to explore in Minecraft??                                                                      ",
             " Enderman is a three-block-tall mob that brings chaos in the game??                                                        ",
             " the Ender Dragon of Minecraft attacks and destroys the blocks??                                                           ",
             " Dragon Egg is an egg-shaped block that serves as a trophy and decoration??                                                ",
             " there's a THREE-HEADED Wither Boss of Minecraft??                                                                         ",
             " Minecraft has an adventure mode??                                                                                         ",
             " you only get one chance in the hardcore mode of Minecraft??                                                               ",
             " you can just be a spectator through the spectator mode??                                                                  ",
             " you can play with your friends through the multiplayer mode??                                                             ",
             " Daniel Rosenfeld produced the music of Minecraft??                                                                        ",
             " Minecraft has a wide range of devices play from??                                                                         ",
             " Minecraft has a Chinese version??                                                                                         ",
             " the story mode of Minecraft is developed by Telltale Games??                                                              ",
             " Minecraft is with Netflix as an interactive show??                                                                        ",
             " Minecraft stimulates the creativity of its players??                                                                      ",
             " Minecraft is for everyone??                                                                                               ",
             " Minecraft can build the social skills of kids??                                                                           ",
             " people who play video games that promote cooperation are more likely to be helpful??                                      ",
             " Minecraft sharpens the problem-solving skills of its players??                                                            ",
             " the players can apply Minecraft's resource management in real life??                                                      ",
             " playing Minecraft improves the player's geometric skills??                                                                ",
             ' Minecraft has "peaceful mode" making the game suitable for toddlers??                                                     ',
             " the simplicity of Minecraft is the core ingredient of its success??                                                       ",
             " 176 million people have purchased Minecraft??                                                                             ",
             " the cost to play Minecraft is around $7 to $30??                                                                          ",
             " US is the #1 country that plays Minecraft??                                                                               ",
             " one Minecraft day is equivalent to 20 minutes??                                                                           ",
             " it takes around 1 GB on average to install Minecraft??                                                                    ",
             " Minecraft only took 6 days to create its first full version??                                                             ",
             " Minecraft's creation was inspired by other games??                                                                        ",
             " the Creepers (iconic hostile mob) started as a coding error??                                                             ",
             ' the Enderman has "Enderian Language"??                                                                                    ',
             " the Ghast mob of Minecraft is the second-largest mob in the game??                                                        ",
             " the voice of the Ghast mob came from a cat??                                                                              ",
             " Minecraft is a mandatory curriculum in Viktor Rydberg School??                                                            ",
             " creating a ship in Minecraft represents the player's technical ability to create large-scale projects??                   ",
             " bridges in Minecraft is necessary if the player's home is near the water??                                                ",
             " creating a dam serves a double purpose. It's attractive and it bridges the gaps??                                         ",
             " creating a garden in Minecraft is one of the most basic things you can do??                                               ",
             " creating trees in Minecraft uplifts the environment's appearance??                                                        ",
             " creating a windmill in Minecraft is a satisfying experience??                                                             ",
             " trucks or cars are one of the most important things to build in Minecraft??                                               ",
             " owning your dream castle is achievable in Minecraft??                                                                     ",
             " building your mansion should also be at the top of your list??                                                            ",
             " you can't have a mansion without a swimming pool??                                                                        ",
             " Minecraft's treehouse is for nature lovers??                                                                              ",
             " blocks are mined in Minecraft for construction purposes??                                                                 ",
             " wood is the most common raw material??                                                                                    ",
             " crops need water as well in Minecraft??                                                                                   ",
             " Minecraft has a Nether Wart crop from the soul land??                                                                     ",
             " smooth stones are also abundant in Minecraft??                                                                            ",
             " players can explore the desert, lake, and beach biomes if they need sand??                                                ",
             " players need to dive underwater to mine clay??                                                                            ",
             " smelting is a procedure of assembling refined goods??                                                                     ",
             " players should use fire protection potions or enchantments if they need to mine the lava??                                ",
             " players need tools for development and efficient gaming??                                                                 ",
             " players use the tool flint and steel to light fires in Minecraft??                                                        ",
             " pickaxes enable the player to mine blocks at a much better phase??                                                        ",
             " a hoe is a useful tool for cultivation??                                                                                  ",
             " aхе is the best tool to use break logs and blocks??                                                                       ",
             " shovels are the best for digging around??                                                                                 ",
             " compass points to the player's spawn point??                                                                              ",
             " a fishing rod can hook treasure items??                                                                                   ",
             " the clocks illustrate the current in-game time??                                                                          ",
             " iron ingot is the only material that can make a shear??                                                                   ",
             " buckets are useful and versatile in Minecraft??                                                                           ",
             " a ladder is a good tool for high place exploration and to hide from hostile mobs??                                        ",
             " a Piston can't push obsidian or bedrock blocks??                                                                          ",
             " crouching can lower the chance of poisoning??                                                                             ",
             " drinking milk or honey bottle can cure the poison??                                                                       ",
             " there are different purposes for campfire, furnace, and smoker??                                                          ",
             " Minecraft improved the aesthetics of the cow??                                                                            ",
             " when fighting, critical hits come from falling??                                                                          ",
             ' crafting table was once called "workbench"??                                                                              ',
             " the first Enderman originally had green eyes??                                                                            ",
             " as Minecraft grew, so did its strongholds??                                                                               ",
             " zombies are safe in the cobweb in the daytime??                                                                           ",
             " carpet and farm fence is a great defensive move against hostile mobs??                                                    ",
             " players should kill a zombie pigman in just one hit??                                                                     ",
             " the passive mob of Minecraft is harmless??                                                                                ",
             " hostile mobs are aggressive and dangerous??                                                                               ",
             " players can have a pet in Minecraft??                                                                                     ",
             " neutral mobs only attack the players when they are provoked??                                                             ",
             " the Boss mobs are the most powerful in Minecraft??                                                                        ",
             " utility mobs serve as a protection against the hostile mobs??                                                             ",
             " Cave Game is the first name of Minecraft??                                                                                ",
             " Minecraft’s main play mechanics are crafting and mining??                                                                 ",
             " wolves in Minecraft are tameable entities?? - Abi                                                                         ",
             " you can sail across water with special vehicles you can craft called BOATS?? - Abi                                        ",
             " the player has something called an inventory, where they can store up to 2372 items?? - Abi                               "];


const didntknow=[" Well I didn't!!                ",
                 " HUHH?? I DIDN'T KNOW THAT!!    ",
                 " REALLY??                       ",
                 " You're being serious, right??  ",
                 " Yes?? AND YOU DIDN'T TELL ME?? ",
                 " OMG YOU SHOULD'VE TOLD ME!!    ",
                 " I am like.. speechless..       ",
                 " I had no idea!                 ",
                 " NO WAY!!                       "];

const omg=[' smolWow     ',
           ' pcrowWow    ',
           ' smolD       ',
           ' bryce4Eyes  ',
           ' lycelW      ',
           ' lycelAAA    ',
           ' smolBrain   ',
           ' pcrowBrain  ',
           ' cjyaPog     ',
           ' kaestr1Eyes ',
           ' maizEyes    ',
           ' maizBlush   ',
           ' abibeaLurk  ',
           ' elizab34Pog '];

start=" Did you know ";
fact=facts[Math.floor(Math.random()*facts.length)];
emote=omg[Math.floor(Math.random()*omg.length)];

end="  ";


if (Math.random() <= 0.5) {
    end=didntknow[Math.floor(Math.random()*didntknow.length)]+omg[Math.floor(Math.random()*omg.length)];
}


final=start+fact+emote+end;

if (/^web$|^facts$/i.test(query)) {
    final=" Facts retrieved from https://facts.net/lifestyle/entertainment/minecraft-facts/ + chat suggestions. ";
}

if (/^version$|^v$/i.test(query)) {
    final=" Added 3 new messages (chat suggestions) - March 21 2021 at 19:15 UTC-5. ";
}


final
