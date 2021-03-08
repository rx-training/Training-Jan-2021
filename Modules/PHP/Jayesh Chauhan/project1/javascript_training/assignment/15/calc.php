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
                            <form onsubmit="return calculate()">
                                <div class="form-group">
                                    <label for="num1">Enter first number : </label>
                                    <input type="text" name="num1" class="form-control" id="num1">
                                </div>
                                <div class="form-group">
                                    <label for="num2">Enter second number : </label>
                                    <input type="text" name="num2" class="form-control" id="num2">
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="action" id="add" value="add">
                                    <label class="form-check-label" for="add">
                                      Addition
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="action" id="sub" value="sub">
                                    <label class="form-check-label" for="sub">
                                      Subtraction
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="action" id="mul" value="mul">
                                    <label class="form-check-label" for="mul">
                                      Multiplication
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="action" id="div" value="div">
                                    <label class="form-check-label" for="div">
                                      Division
                                    </label>
                                </div>
                                <input type="submit" class="btn btn-primary btn-block" value="Calculate"></button>
                                <input type="reset" class="btn btn-danger btn-block" value="Reset">
                                <div class="form-group">
                                    <label for="result">Result :</label>
                                    <input type="text" name="result" class="form-control" id="result">
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        function calculate() {
            var num1 = parseInt(document.getElementById('num1').value);
            var num2 = parseInt(document.getElementById('num2').value);
            var add = document.getElementById('add').checked;
            var sub = document.getElementById('sub').checked;
            var mul = document.getElementById('mul').checked;
            var div = document.getElementById('div').checked;

            if (add)
                document.getElementById('result').value = num1 + num2;
            else if (sub)
                document.getElementById('result').value = num1 - num2;
            else if (mul)
                document.getElementById('result').value = num1 * num2;
            else if (div)
                document.getElementById('result').value = num1 / num2;
            else
                alert("Invalid selection")
            return false;
        }
    </script>
<?php include '../../../footer.php'?>