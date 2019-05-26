import document from "document";
import inbox from "file-transfer";
import fs from "fs";
import * as messaging from "messaging";


let data, sett;
var GotSett = false;
var GotData = false;
var LineColor = false;
var BikeColor = false;
var TextColor = false;

messaging.peerSocket.onmessage = evt => {
    console.log(`App received: ${JSON.stringify(evt)}`);
    if (evt.data && !GotSett || !GotData) {
        console.log(typeof (evt.data))
        var stringtoput = evt.data
        document.getElementById("mixedtext").getElementById("copy").text = stringtoput;
    }
};


function processAllFiles() {
    let fileName;
    while (fileName = inbox.nextFile()) {
        // process each file
        console.log(`/private/data/${fileName} is now available`);
        if (fileName == "sett.json") {
            sett = fs.readFileSync(fileName, "cbor");
            GotSett = true
        }
        if (fileName == "bikes.json") {
            data = fs.readFileSync(fileName, "cbor");
            GotData = true
        }
        if (fileName == "error.txt") {
            data = fs.readFileSync(fileName, "utf-8");
            document.getElementById(InfoText).txt = data;

        }
        //console.log("Data: " + data[0].name);

    }
    if (GotData && GotSett) {
        //setting variables with settings
        console.log(sett[0].LineColor)
        if (sett[0].LineColor == "true") {
            console.log("LineColor")
            LineColor = true;
        }
        if (sett[0].BikeColor == "true") {
            console.log("BikeColor")
            BikeColor = true;
        }
        if (sett[0].TextColor == "true") {
            TextColor = true;
        }
        console.log(JSON.stringify(data))
        let mixedtext = document.getElementById("mixedtext");
        mixedtext.style.display = "none";

        let VTList = document.getElementById("my-list");
        var NUM_ELEMS = 0; //number of elements in virtual list
        var NUM_FAV = 0; // amount of favorites 

        //fs.unlinkSync("fav.txt");
        // It creates file with favorites if they dont exist 
        try {
            let json_object = fs.readFileSync("fav.txt", "json");
        } catch (err) {
            // because it later it crashes if its empty and its the easiest and probably the fastest way
            fs.writeFileSync("fav.txt", [{
                name: "none"
            }], "json");
            let json_object = fs.readFileSync("fav.txt", "json");
        }

        for (let o of data) {
            NUM_ELEMS++
            // Joggles around to move favorite bike stations to beginning and removes from list
            for (let o of json_object) {
                if (o.name == data[NUM_FAV].name) {
                    data.unshift({
                        "name": data[NUM_FAV].name,
                        "free_bikes": data[NUM_FAV].free_bikes,
                        "empty_slots": data[NUM_FAV].empty_slots
                    })
                    data.splice(NUM_FAV + 1, 1);
                }
            }
            NUM_FAV += 1
        }


        VTList.delegate = {
            getTileInfo: function (index) {
                return {
                    type: "my-pool",
                    value: "Menu item",
                    index: index
                };
            },
            configureTile: function (tile, info) {
                if (info.type == "my-pool") {
                    //add data to line
                    tile.getElementById("marquee").text = data[info.index].name;
                    tile.getElementById("free-bike").text = ": " + data[info.index].free_bikes
                    tile.getElementById("free-stand").text = ": " + data[info.index].empty_slots

                    // if line color is on then show it, wooo~
                    if (LineColor) {
                        tile.getElementById("avline").style.visibility = "visible";
                    }

                    //color it depending on amount of bikes (and settings)
                    if (data[info.index].free_bikes >= 5) {
                        tile.getElementById("avline").style.fill = "fb-green"
                        if (BikeColor) {
                            tile.getElementById("imgfree-bike").style.fill = "fb-green"
                        }
                        if (TextColor) {
                            tile.getElementById("free-bike").style.fill = "fb-green"
                        }
                    } else if (data[info.index].free_bikes >= 2) {
                        tile.getElementById("avline").style.fill = "fb-peach"
                        if (BikeColor) {
                            tile.getElementById("imgfree-bike").style.fill = "fb-peach"
                        }
                        if (TextColor) {
                            tile.getElementById("free-bike").style.fill = "fb-peach"
                        }
                    } else if (data[info.index].free_bikes > 0) {
                        tile.getElementById("avline").style.fill = "fb-red"
                        if (BikeColor) {
                            tile.getElementById("imgfree-bike").style.fill = "fb-red"
                        }
                        if (TextColor) {
                            tile.getElementById("free-bike").style.fill = "fb-red"
                        }
                    } else if (data[info.index].free_bikes == 0) {
                        tile.getElementById("avline").style.fill = "fb-slate"
                        if (BikeColor) {
                            tile.getElementById("imgfree-bike").style.fill = "fb-slate"
                        }
                        if (TextColor) {
                            tile.getElementById("free-bike").style.fill = "fb-slate"
                        }
                    }


                    setTimeout(function () {
                        tile.getElementById("marquee").state = "enabled";
                    }, 2000);

                    // what to do if favorite !rectangle! is pressed
                    tile.getElementById("favButt").onclick = function (evt) {
                        if (tile.getElementById("fav").href == "hrEmpty.png") {
                            console.log("ADD fav")
                            tile.getElementById("fav").href = "hrFull.png"
                            json_object.push({
                                name: data[info.index].name
                            })
                            fs.writeFileSync("fav.txt", json_object, "json");
                        } else {
                            console.log("REMOVE fav")
                            tile.getElementById("fav").href = "hrEmpty.png"
                            var itoremove = 0
                            for (let o in json_object) {
                                if (json_object[itoremove].name == data[info.index].name) {
                                    json_object.splice(itoremove, 1);
                                }
                                itoremove++
                            }
                            fs.writeFileSync("fav.txt", json_object, "json");
                        }
                    } // end of fav.onclick 

                    tile.getElementById("fav").href = "hrEmpty.png" // without that last element has wrong icon (who knows why...)
                    //console.log(JSON.stringify(json_object))
                    for (let o of json_object) { // if is favorite then make heard full 
                        if (o.name == data[info.index].name) {
                            //console.log(o.name + "==" + data[info.index].name)
                            tile.getElementById("fav").href = "hrFull.png"
                        }
                    }

                } //end
            }
        };
        VTList.length = NUM_ELEMS;

    }

}

inbox.addEventListener("newfile", processAllFiles);