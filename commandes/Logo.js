const { ovlcmd } = require("../framework/ovlcmd");
const textmaker = require("../framework/textmaker");

function addTextproCommand(nom_cmd, text_pro_url, desc, type) {
    ovlcmd(
        {
            nom_cmd: nom_cmd,
            classe: "Logo",
            react: "✨",
            desc: desc
        },
        async (ms_org, ovl, cmd_options) => {
            const { arg, ms } = cmd_options;
            const query = arg.join(' ');

            if (!query) {
                return await ovl.sendMessage(
                    ms_org,
                    { text: "Vous devez fournir un texte." },
                    { quoted: ms }
                );
            }

            try {
                let logo_url;

                switch (type) {
                    case 1:
                        // Type 1: Un seul mot ou texte
                        if (query.includes(';')) {
                            return await ovl.sendMessage(
                                ms_org,
                                { text: "Veuillez fournir un seul mot ou texte sans point-virgule (;) pour cette commande." },
                                { quoted: ms }
                            );
                        }
                        logo_url = await textmaker(text_pro_url, query);
                        break;

                    case 2:
                        // Type 2: Deux mots ou plus séparés par des point-virgules (;)
                        const textParts = query.split(';');
                        if (textParts.length < 2) {
                            return await ovl.sendMessage(
                                ms_org,
                                { text: "Veuillez fournir exactement deux textes séparés par un point-virgule (;), par exemple : Salut;Ça va." },
                                { quoted: ms }
                            );
                        }
                        logo_url = await textmaker(text_pro_url, textParts);
                        break;

                    default:
                        throw new Error(`Type ${type} non supporté.`);
                }

                // Envoyer l'image générée
                await ovl.sendMessage(
                    ms_org,
                    {
                        image: { url: logo_url.url },
                        caption: "\`\`\`Powered By OVL-MD\`\`\`"
                    },
                    { quoted: ms }
                );
            } catch (error) {
                console.error(`Erreur avec la commande ${nom_cmd}:`, error.message || error);
                await ovl.sendMessage(
                    ms_org,
                    { text: `Une erreur est survenue lors de la génération du logo : ${error.message}` },
                    { quoted: ms }
                );
            }
        }
    );
}

addTextproCommand(
    "dragonball", // Nom de la commande
    "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", // URL du style
    1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "deadpool", // Nom de la commande
    "https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html", // URL du style
    2 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "blackpink", // Nom de la commande
    "https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html", // URL du style
    1 // Type : cette commande accepte un seul mot ou texte
);

 addTextproCommand(
    "neon_bleu", // Nom de la commande
    "https://en.ephoto360.com/blue-neon-text-effect-117.html", // URL du style
    1  // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "football", // Nom de la commande
    "https://en.ephoto360.com/paul-scholes-shirt-foot-ball-335.html", // URL du style
    2 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "acier_h", // Nom de la commande
    "https://en.ephoto360.com/heated-steel-lettering-effect-65.html", // URL du style
     2 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "peint", // Nom de la commande
    "https://en.ephoto360.com/paint-splatter-text-effect-72.html", // URL du style
    1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "thunder", // Nom de la commande
    "https://en.ephoto360.com/thunder-text-effect-online-97.html", // URL du style
    1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "thor", // Nom de la commande
    "https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html", // URL du style
     1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "graffiti1", // Nom de la commande
    "https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html", // URL du style
    2 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "gold2", // Nom de la commande
    "https://en.ephoto360.com/modern-gold-5-215.html", // URL du style
     1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "neon_green", // Nom de la commande
    "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html", // URL du style
     1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "effacer", // Nom de la commande
    "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html", // URL du style
     1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "galaxy", // Nom de la commande
    "https://en.ephoto360.com/text-light-galaxy-effectt-345.html", // URL du style
     1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "vintage", // Nom de la commande
    "https://en.ephoto360.com/write-text-on-vintage-television-online-670.html", // URL du style
    1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "gold1", // Nom de la commande
    "https://en.ephoto360.com/gold-text-effect-158.html", // URL du style
     1 // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);


addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);


addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);


addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);


addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);

addTextproCommand(
    "", // Nom de la commande
    "", // URL du style
     // Type : cette commande accepte un seul mot ou texte
);
