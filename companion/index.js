import {
  me
} from "companion";
import {
  outbox
} from "file-transfer";
import {
  settingsStorage
} from "settings";
import {
  encode
} from 'cbor';
import * as messaging from "messaging";


messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  if (!me.permissions.granted("access_internet")) {
    var TextToSend = "Woopsy I don't have permission to access internet :-("
    sendVal(TextToSend)
  } else {
    if (JSON.parse(settingsStorage.getItem('MY_CITY')) === null) {
      var TextToSend = "Please, set city in settings and reboot the app"
      sendVal(TextToSend)
    } else {
      var TextToSend = "Please wait, Fetching data"
      sendVal(TextToSend)
    }
  }
};


var settings = [];
settings.push({
  "LineColor": settingsStorage.getItem('LineColor'),
  "BikeColor": settingsStorage.getItem('BikeColor'),
  "TextColor": settingsStorage.getItem('TextColor')
});
const SettingsToSend = encode(settings);
outbox.enqueue("sett.json", SettingsToSend).then((ft) => {
  console.log(`Transfer of ${ft.name} successfully queued.`);
})


var url = "https://api.citybik.es/" + JSON.parse(settingsStorage.getItem('MY_CITY')).values[0].ref
fetch(url).then(function (response) {
  response.text()
    .then(function (data) {
      var bikes = [];
      //console.log(data);
      data = JSON.parse(data);

      for (let o of data.network.stations) {
        bikes.push({
          "name": o.name,
          "free_bikes": o.free_bikes,
          "empty_slots": o.empty_slots
        });
      }
      const myFileInfo = encode(bikes);
      outbox.enqueue("bikes.json", myFileInfo)
        .then((ft) => {
          console.log(`Transfer of ${ft.name} successfully queued.`);
        })
    })
});

settingsStorage.onchange = evt => {
  console.log("settings changed")
};

function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}