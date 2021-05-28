
        function dateVal(){
                var newdate = document.getElementById('newdate').value;
                if(date==""){
                    alert("Please enter valid Date 'DD-MM-YYYY' format");
                    return;
                }
                var date = newdate.trim().split('-');
                console.log(date.length);
                if(date.length>3 || date.length<3 ){
                    alert("Please enter valid Date 'DD-MM-YYYY' format");
                    return;
                }
                else{
                    if(date[0]>0 && date[0]<32){
                        if(date[1] > 0 && date[1] <=12){
                                if(date[1] == 2){
                                    if(date[2].length == 4){
                                        if(date[2]%4==0)
                                        {
                                            if(date[0]>0 && date[0]<=29){
                                                alert('Right date !');
                                                return;
                                            }
                                            else{
                                                alert('Please enter valid date in leep year in february');
                                                return;
                                            }
                                        }
                                        else{
                                            if(date[0]>0 && date[0]<=28){
                                                alert('Right date !');
                                                return;
                                            }
                                            else{
                                                alert('Please enter valid date in year in february');
                                                return;
                                            }
                                        }
                                    }
                                    else{
                                        alert("Please enter valid in year.");
                                        return;
                                    }  
                                }
                                else if(date[1]%2 == 1 ){
                                    if(date[2].length == 4){
                
                                            if(date[0]>0 && date[0]<=31){
                                                alert('Right date !');
                                                return;
                                            }
                                            else{
                                                alert('Please enter valid day in year in odd month');
                                                return;
                                            }
                                        
                                    }
                                    else{
                                        alert("Please enter valid in year.");
                                        return;
                                    }
                                }
                                else{
                                    
                                    if(date[2].length == 4){
                
                                         if(date[0]>0 && date[0]<=31){
                                            alert('Right date !');
                                            return;
                                        }
                                        else{
                                            alert('Please enter valid day in year in odd month');
                                            return;
                                        }
            
                                    }
                                    else{
                                        alert("Please enter valid in year.");
                                        return;
                                    }
                                }
                        }
                        else{
                                alert("Please enter valid Month");
                                return;
                        }
                    }
                    else{
                        alert("Please enter valid Day");
                        return;
                    }         
                }
                 
        }