$(function() {
  var appClientConfig = {
    org: 'quickstart',
    type: 'quickstart',
    id: 'tfmanager-' + Math.random().toString(26).slice(2)
  };
  var iotClient = new IBMIoTF.ApplicationClient(appClientConfig);
  iotClient.on('connect',function(e) {
    if (!location.hash) {
      console.log('id not found. Run again with quickstart id in url hash');
      return;
    } else {
      iotClient.subscribe(
        'iot-2/type/quickstart/id/' + location.hash.slice(1) + '/evt/event/fmt/json'
      );
    };
  });
  iotClient.on('deviceEvent',function(e) {
    if (window.newIoTEvent) window.newIoTEvent(JSON.parse(e.payload.toString()));
  });
  iotClient.on('error',function(e) {console.log(e)});
  iotClient.connect();
});
