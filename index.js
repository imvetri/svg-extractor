var fs = require("fs");

const cheerio = require('cheerio');

var svg = fs.readFileSync("kitty.svg");

// $('h2.title').text('Hello there!')

objectsWithID = ["tailFur", "tailFurClipPath", "tailShadow", "tailShadowClipPath", "tailShadowGradient", "tailShadowGradient2", "tailShadowGradient3", "tailShadowGradient4", "tailShadowGradient5", "tailShadowGradient6", "tail", "bodyFur", "furClipPath", "shadow", "shadowClipPath", "shadowLinearGradient", "shadowLinearGradient2", "highlight", "highlightClipPath", "body", "eye", "eyeClipPath", "eyeClipPath2", "mouth"]

objectsWithID.forEach( object => {
    const $ = cheerio.load( svg );
    $("#"+object).remove();
    fs.writeFileSync( "without_" + object+".svg", $.html())
})

