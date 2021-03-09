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
                            <p id="str" class="display-4 lead text-center">Hello , I am testing Javascript</p>
                            <button onclick="checkNull(str.innerHTML)" class="btn btn-primary">Check Null</button>
                            <p id="res1" class="display-4 lead"></p>

                            <button onclick="checkSplit(str.innerHTML)" class="btn btn-success">Check Split</button>
                            <p id="res2" class="display-4 lead"></p>

                            <input type="text" class="form-control form-control-sm" id="num">
                            <button onclick="extract(str.innerHTML,num.value)" class="btn btn-info">Extract</button>
                            <p id="res3" class="display-4 lead"></p>

                            <button onclick="getDate()" class="btn btn-warning">Get Date</button>
                            <p id="res4" class="display-4 lead"></p>

                            <input type="text" class="form-control form-control-sm" id="push">
                            <button onclick="e_push(str.innerHTML,push.value)" class="btn btn-primary">Push</button>
                            <p id="res5" class="display-4 lead"></p>

                            <button onclick="e_pop(str.innerHTML)" class="btn btn-danger">Pop</button>
                            <p id="res6" class="display-4 lead"></p>

                            <input type="text" class="form-control form-control-sm" id="unshift">
                            <button onclick="e_unshift(str.innerHTML,unshift.value)" class="btn btn-info">UnShift</button>
                            <p id="res7" class="display-4 lead"></p>


                            <button onclick="e_shift(str.innerHTML)" class="btn btn-danger">Shift</button>
                            <p id="res8" class="display-4 lead"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        function checkNull(str) {
            if (str == "")
                document.getElementById('res1').innerHTML = "String is null";
            else
                document.getElementById('res1').innerHTML = "String is not null";
        }

        function checkSplit(str) {
            var s_str = str.split(" ");
            for (var x in s_str) {
                console.log(s_str[x]);
            }
            document.getElementById('res2').innerHTML = s_str;
        }

        function extract(str, num) {
            var s_str = str.slice(0, num);
            document.getElementById('res3').innerHTML = s_str;
        }

        function getDate() {
            var date = new Date();
            document.getElementById('res4').innerHTML = date;
        }

        function e_push(str, e) {
            var s_str = str.split(" ");
            s_str.push(e);
            document.getElementById('res5').innerHTML = s_str.join(" ");
        }

        function e_pop(str) {
            var s_str = str.split(" ");
            s_str.pop();
            document.getElementById('res6').innerHTML = s_str.join(" ");
        }

        function e_unshift(str, e) {
            var s_str = str.split(" ");
            s_str.unshift(e)
            document.getElementById('res7').innerHTML = s_str.join(" ");
        }

        function e_shift(str) {
            var s_str = str.split(" ");
            s_str.shift();
            document.getElementById('res8').innerHTML = s_str.join(" ");
        }
    </script>
<?php include '../../../footer.php'?>