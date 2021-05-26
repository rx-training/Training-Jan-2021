var data = fetch('../../../../assets/json/d20a1.json')
            .then(x => x.text())
            .then(y => console.log(JSON.parse(y).products));