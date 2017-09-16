const BLIP_SET_BIG = {
  "LA event":{"lng":-118.2437,"lat":34.0522,"heat":43.33521368871373,"hover":false,"positive":true,"active":false},
  "NY event":{"lng":-73.935242,"lat":40.73061,"heat":43.112977259709766,"hover":false,"active":false},
  "** 0 **":{"lat":35.359692,"lng":-110.330565,"heat":42.45013985830094,"hover":false,"active":false},
  "** 1 **":{"lat":31.472926,"lng":-104.134281,"heat":29.618643492193574,"hover":false,"positive":true,"active":false},
  "** 2 **":{"lat":44.564821,"lng":-112.637704,"heat":45.4147938060422,"hover":false,"active":false},
  "** 3 **":{"lat":44.400455,"lng":-93.933278,"heat":20.248439332241773,"hover":false,"positive":true,"active":false},
  "** 4 **":{"lat":41.374774,"lng":-79.958668,"heat":52.85914600302497,"hover":false,"active":false,"positive":true},
  "** 5 **":{"lat":44.085638,"lng":-70.114919,"heat":51.10938037672731,"hover":false,"active":false},
  "Hurricane Irma":{"lat":29.149794,"lng":-82.155934,"heat":90.870339854767703,"hover":false,"active":false,"positive":true},
  "L289":{"lat":40.400455,"lng":-102.933278,"heat":30.34514460856383,"hover":false,"active":false,"positive":false},
  "L658":{"lat":37.400455,"lng":-109.933278,"heat":28.705251960982135,"hover":false,"active":false,"positive":false},
  "L612":{"lat":34.400455,"lng":-109.933278,"heat":41.591514552648505,"hover":false,"active":false,"positive":false},
  "L405":{"lat":36.400455,"lng":-94.933278,"heat":49.04327461276648,"hover":false,"active":false,"positive":false},
  "L045":{"lat":35.400455,"lng":-108.933278,"heat":22.148251819646045,"hover":false,"active":false,"positive":false},
  "L484":{"lat":39.400455,"lng":-86.933278,"heat":49.13040285494548,"hover":false,"active":false,"positive":false},
  "L359":{"lat":36.400455,"lng":-104.933278,"heat":53.52432568114057,"hover":false,"active":false,"positive":false},
  "L854":{"lat":40.400455,"lng":-89.933278,"heat":40.659175013206294,"hover":false,"active":false,"positive":false},
  "L080":{"lat":36.400455,"lng":-92.933278,"heat":42.33735640335423,"hover":false,"active":false,"positive":true},
  "L390":{"lat":36.400455,"lng":-89.933278,"heat":41,"hover":false,"active":false,"positive":false},
  "L809":{"lat":39.400455,"lng":-90.933278,"heat":42.227206680826704,"hover":false,"active":false,"positive":false},
  "L433":{"lat":34.400455,"lng":-112.933278,"heat":50.381617569164504,"hover":false,"active":false,"positive":false},
  "L690":{"lat":38.400455,"lng":-98.933278,"heat":16.556633120909456,"hover":false,"active":false,"positive":true},
  "L413":{"lat":34.400455,"lng":-96.933278,"heat":22.551475471226745,"hover":false,"active":false,"positive":true},
  "L684":{"lat":40.400455,"lng":-111.933278,"heat":25.817106296099652,"hover":false,"active":false,"positive":true}
}

const TWEET_IDS = {
  "** 0 **":["900018824493379585", "900018824321355776", "900018824262627330", "900018823847346177"],
  "** 1 **":["900018823612334080", "900018823562186755", "900018823398608896"],
  "** 2 **":["900018823302189063", "900018823046320130", "900018822886850561"],
  "** 3 **":["900018822702178308", "900018822546980866", "900018822433951745"],
  "** 4 **":["900018822345891841", "900018822291361792"],
  "** 5 **":["900018822039691264"],
  "Hurricane Irma":["906673042008535040", "906822210404446209", "906819197279232001"],
  "L289":["900018821284720640", "900018821230194688"],
  "L658":["900018821226008577","900018821121093633"],
  "L612":["900018821108510720","900018821033078784"],
  "L405":["900018821028732928","900018821024579584"],
  "L045":["900018820835934208","900018820814917632"],
  "L484":["900018820739473408","900018820630368257"],
  "L359":["900018820575842304","900018820395479043","900018820122763264"],
  "L854":["900018820059987973","900018820022226944","900018819980197889","900018819619540992","900018819594366976"],
  "L080":["900018819464388608","900018819023896576","900018818914951168","900018818902364160","900018818843652096"],
  "L390":["900018818822680576","900018818625544192","900018818575196160","900018818461818880","900018818390441985","900018818382278656","900018818369630208"],
  "L809":["900018818277421056"],
  "L433":["900018818277355522","900018818227085312"],
  "L690":["900018818134757376"],
  "L413":["900018818109636609"],
  "L684":["900018818017370113","900018818004733953"]
}

const express = require('express')
const app = express()


app.get('/blips', function (req, res) {
  res.send(JSON.stringify(BLIP_SET_BIG))
})

app.get('/tweets/:name', function(req, res) {
  console.log(JSON.stringify(TWEET_IDS[req.params.name]));
  res.send(JSON.stringify(TWEET_IDS[req.params.name]));
})

app.get('/webhook', (req, res) => {
  res.status(200).send("Hello Webhook!");
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})
