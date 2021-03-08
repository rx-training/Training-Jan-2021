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
                            <h3 id="result" class="display-3"></h3>
                            <h3 id="sum" class="display-3"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer id="main-footer" class="py-5 bg-primary text-white">
        <div class="container  text-center">
            <p class="lead">Copyright &copy; 2021</p>
        </div>
    </footer>

    <script>
        var num1 = parseInt(prompt('Enter number 1'));
        var num2 = parseInt(prompt('Enter number 2'));
        var num3 = parseInt(prompt('Enter number 3'));
        var sum = 0;

        if (num1 > num2 && num1 > num3)
            document.getElementById('result').innerHTML = num1 + " is greater than others";
        else if (num2 > num1 && num2 > num3)
            document.getElementById('result').innerHTML = num2 + " is greater than others";
        else
            document.getElementById('result').innerHTML = num3 + " is greater than others";

        if (num1 > 40)
            sum = sum + num1;

        if (num2 > 40)
            sum = sum + num2;

        if (num3 > 40)
            sum = sum + num3;

        document.getElementById('sum').innerHTML = "Sum for greater than 40 numbers is " + sum;
    </script>
<?php include '../../../footer.php'?>