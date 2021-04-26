const fs = require('fs')

fs.readFile('./Person.txt','utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    var count=0;
    for(let i=0;i<data.length;i++)
    {
        if(data[i]=='a' || data[i]=='e' || data[i]=='i' || data[i]=='o' || data[i]=='u'
        || data[i]=='A' || data[i]=='E' || data[i]=='I' || data[i]=='O' || data[i]=='U')
        {
            continue;
        }
        else if((data[i]>='b' && data[i]<='d') || (data[i]>='f' && data[i]<='h') || (data[i]>='j' && data[i]<='n') || (data[i]>='p' && data[i]<='t') || (data[i]>='v' && data[i]<='z')
            || (data[i]>='B' && data[i]<='D') || (data[i]>='F' && data[i]<='H') || (data[i]>='J' && data[i]<='N') || (data[i]>='P' && data[i]<='T') || (data[i]>='V' && data[i]<='Z'))
        {
            count++;
        }
        else{
            continue;
        }
    }
    console.log(count);
  })