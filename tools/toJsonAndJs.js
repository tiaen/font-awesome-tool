var fs = require('fs');
var iconList, styleList, urlsList, list = [];

var iconAll = fs.readFileSync('../data/icon.txt').toString();
iconList = iconAll.split('\r\n');

var styleAll = fs.readFileSync('../data/style.txt').toString();
styleList = styleAll.split('\r\n');

var urlsAll = fs.readFileSync('../data/urls.txt').toString();
urlsList = urlsAll.split('\r\n');


for (var i = 0; i < 904; i++) {
  var item = {};
  item.id = i + 1;
  item.name = iconList[i];
  item.style = styleList[i];
  item.url = urlsList[i];
  list.push(item);
}
fs.writeFile('../data/result.json', JSON.stringify(list), function (err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('write into data/result.json finished!');
});

var str = 'const iconList=';
fs.writeFile('../src/js/base.js', str, function (err) {
  if (err) {
    console.log(err.message);
    return;
  }
  fs.appendFile('../src/js/base.js', JSON.stringify(list), function (err) {
    if (err) {
      console.log(err.message);
      return;
    }
    fs.appendFile('../src/js/base.js', ';', function (err) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('write into src/js/base.js finished!');
    })
  });
});