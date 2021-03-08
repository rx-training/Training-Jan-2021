<?php include '../../../header.php'?>
    <section id="showcase" class="py-5">
        <div class="primary-overlay text-white">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <table class="table text-center table-striped table-hover">
                        <thead>
                            <tr class="bg-warning">
                                <th class="py-3"><a href="../../home.php">HOME</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-success">
                                <th>
                                    <a class="text-white" href="#">Assignment</a>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/15/calc.php">Day 15</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/16/index.php">Day 16</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/17/index.php">Day 17</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/18/index.php">Day 18</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/20/index.php">Day 20</a>
                                </td>
                            </tr>
                            <tr class="bg-success">
                                <th>
                                    <a class="text-white" href="#">Practice</a>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/15/index.php">Day 15</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/16/index.php">Day 16</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/17/index.php">Day 17</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/18/index.php">Day 18</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/19/index.php">Day 19</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/20/index.php">Day 20</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-8 bg-light h-100" style="opacity: 0.7;">
                    <div id="content">
                        <div class="container text-dark">
                            <form onsubmit="return false;">
                                <input class="form-control form-control-sm" type="text" name="rad" id="rad">
                                <button class="btn btn-primary btn-sm mt-1" onclick="aoc(rad.value)">Area of circle</button>
                                <p id="circle"></p>
                                <p id="rect"></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    <script>
        //Practice 1
        var aoc = function(r) {
            var area = Math.PI * r * r;
            document.getElementById('circle').innerHTML = area;
        };

        //Practice 2
        var l = parseInt(prompt("Enter length "));
        var b = parseInt(prompt("Enter width "));
        var aor2 = new Function("l", "b", "return l * b");

        function aor(l, b) {
            console.log("Area of Rectangle = " + aor2(l, b));
            //document.getElementById('rect').innerHTML = aor2(l, b);
        }
        aor(l, b);

        //Practice 3 - Hoisting means invoking functions before they defined
        add(l, b);

        function add(l, b) {
            console.log("Addition = " + (l + b));
        }

        //Practce 4
        var employee = {
            display: function(bg, method) {
                return this.Name + "<br>" + this.Address + "<br>" + this.Designation + "<br>" + bg + "<br>" + method;
            }
        }

        var employee1 = {
            Name: "Jayesh Chauhan",
            Address: "Limbdi",
            Designation: "Trainee"
        }
        console.log(employee1.Name)

        document.getElementById("circle").innerHTML = employee.display.call(employee1, "A-", "call");

        //Practice 5
        document.getElementById("rect").innerHTML = employee.display.apply(employee1, ["A-", "apply"]);

        //Practice 6
        var salaryUpdate = function(salary) {
            var currentSalary = salary;
            var generator = function() {
                currentSalary *= 2;
                return currentSalary;
            };
            return generator;
        };

        var updateFn = salaryUpdate(20000);
        console.log(updateFn())
    </script>
<?php include '../../../footer.php'?>