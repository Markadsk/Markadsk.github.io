var json = require("./csvjson.json");

function getTimeAndValueForCountry(countryName) {
  json.forEach(el => {
    if (el.GeoAreaName === countryName) {
      console.log(el.TimePeriod, el.Value);
    }
  });
}

getTimeAndValueForCountry("United States of America");
getTimeAndValueForCountry("Canada");

<script>
    ata = [{name : "Canada", GDP : 3000},{name : "America", GDP : 2000}];
    function goSearch() {
        var myinput = document.getElementById("mysearch").value;
        var resultsdiv = document.getElementById("results");
        var newstring = ""

        for (let country = 0; country < data.length; country++) {
            if (myinput == data[country].name) {
                newstring = newstring+ "$" + data[country].GDP;
                break
            }
        }
        resultsdiv.innerHTML = newstring;
    }
</script>
</body>