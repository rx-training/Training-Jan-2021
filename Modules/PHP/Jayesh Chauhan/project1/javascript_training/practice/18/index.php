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
                                <div class="form-group">
                                    <label for="num">Enter number</label>
                                    <input type="text" name="num" id="num" class="form-control" required>
                                </div>
                                <button class="btn btn-primary" onclick="square(display)">Square</button>
                                <button class="btn btn-primary" onclick="cube(display)">Cube</button>
                                <button class="btn btn-primary" onclick="var_let(display)">Var & Let</button>
                                <button class="btn btn-primary" onclick="check_promise(num.value)">Promise</button>
                            </form>
                            <h1 class="display-3 text-center" id="result"></h1>
                            <h1 class="display-3 text-center" id="result2"></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        function display(text) {
            document.getElementById('result').innerHTML = text;
            document.getElementById('result2').innerHTML = "";
        }

        function square(callback) {
            var num = document.getElementById('num').value;
            if (!isNaN(num)) {
                num *= num;
                callback(num);
            } else {
                alert("Enter number")
            }
        }

        function cube(callback) {
            var num = document.getElementById('num').value;
            if (!isNaN(num)) {
                num = num * num * num;
                callback(num)
            } else {
                alert("Enter number")
            }
        }

        function var_let(callback) {
            var num = document.getElementById('num').value;
            num = "This is the value of var";
            if (isNaN(num)) {
                let num = "This is the value of Let";
                callback(num);
            }
            document.getElementById('result2').innerHTML = num;
        }

        async function check_promise(num) {

            let myPromise = new Promise(function(myResolve, myReject) {
                setTimeout(function() {
                        if (typeof(num) == "string") {
                            var x = num.split("")
                            x.reverse();
                            var r = x.join("");
                            myResolve(r);
                        } else {
                            myReject(alert("error"))
                        }
                    },
                    500);
            });
            document.getElementById('result').innerHTML = await myPromise;
            document.getElementById('result2').innerHTML = "";
        }
    </script>
<?php include '../../../footer.php'?>