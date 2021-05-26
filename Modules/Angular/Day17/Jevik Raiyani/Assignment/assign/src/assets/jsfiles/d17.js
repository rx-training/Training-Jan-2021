
        function submitted() {
            document.getElementById('validations').innerHTML = "";

            var id = document.getElementById('eid').value;
            var name = document.getElementById('ename').value;
            var age = document.getElementById('eage').value;
            var gender = document.getElementsByName('gender');
            var email = document.getElementById('eemailid').value;
            var designation = document.getElementById('edesignation').value;
            var salary = document.getElementById('esalary').value;
            var location = document.getElementById('elocation').value;
            var doj = document.getElementById('edoj').value;
            var errors = "";
            if (id == "") {
                errors = errors + "Employee id should not be Null <br>";
            }
            else {
                //if any character and digit 5 characters and more longer then returns true.
                var pat = /\w{5}/g;
                var result = pat.test(id);
                if (result != true) {
                    errors = errors + "Employee id shoul contain 5 characters long <br>";
                }
            }
            if (name == "") {
                errors = errors + "Employee Name should not be Null <br>";
            }
            if (age == "" || parseInt(age) == 0) {
                errors = errors + "Employee age should not be Null <br>";
            }
            else {
                //if non digit charater returns then it gives true.
                var pat2 = /\D/g;
                if (pat2.test(age)) {
                    errors = errors + "Employee age should be digit only <br>";
                }
            }
            var count = 0;
            for (var i = 0; i < gender.length; i++) {
                if (gender[i].checked) {
                    // alert("You Selected "+gender[i].value);
                }
                else {
                    count = count + 1;
                }
            }
            if (count == gender.length) {
                errors = errors + "Please Select Employee Gender <br>";
            }

            if (email == "") {
                errors = errors + "Employee Email-Id should not be Null <br>";
            }
            else {
                var patt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (!patt.test(email)) {
                    errors = errors + "Employee Email-Id is not valid <br>";
                }
            }
            if (designation == "") {
                errors = errors + "Employee Designation should not be Null <br>";
            }
            if (salary == "" || parseInt(salary) == 0) {
                errors = errors + "Employee salary should not be Null <br>";
            }
            else {
                //if non digit charater returns then it gives true.
                var pat2 = /\D/g;
                if (pat2.test(salary)) {
                    errors = errors + "Employee salary should be digit only <br>";
                }
            }
            if (location == "") {
                errors = errors + "Location should not be null <br>";
            }
            if (doj == "") {
                errors = errors + "Date Of Join should not be null";
            }
            else {
                if (isNaN(Date.parse(doj))) {
                    errors = errors + "Date format is not valid. <br>";
                }
            }
            document.getElementById('validations').innerHTML = errors;
        }