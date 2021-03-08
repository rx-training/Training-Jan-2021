<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/style.css">
    <title>MyWork</title>
</head>

<body>
<?php include '../header.php';?>

    <section id="showcase" class="py-5">
        <div class="primary-overlay text-white">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <table class="table text-center table-striped table-hover">
                        <thead>
                            <tr class="bg-warning">
                                <th class="py-3"><a href="home.php">HOME</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="article.php">Article</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="form.php">Form</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="active" href="list.php">List</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="login.php">Login</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="report_card.php">Report Card</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-8 h-100 bg-light h-100 text-dark" style="opacity: 0.9;">
                    <div id="content">
                        <div>
                            <hr>
                            <nav style="text-decoration: none;">
                                <a href="report_card.php">Report card</a> |
                                <a href="article.php">Article</a> |
                                <a href="list.php">List</a> |
                                <a href="login.php">Login</a>
                            </nav>
                            <hr>
                        </div>
                        <div>
                            <h2>Employee Hierarchy Chart</h2>
                            <ul>
                                <li>General Department</li>
                                <ol>
                                    <li>Sales Department</li>
                                    <li>R&D Departmrnt</li>
                                    <li>Production & supply Dept.</li>
                                    <ul type="squre">
                                        <li>QC Department</li>
                                        <ul type="circle">
                                            <li>Laboratory</li>
                                        </ul>
                                        <li>Equipment Department</li>
                                        <li>MFG Department</li>
                                        <ul type="circle">
                                            <li>Packaging Deparment</li>
                                            <li>Production Department</li>
                                        </ul>
                                        <li>Purchase Department</li>
                                        <li>Planning Department</li>
                                        <ul type="circle">
                                            <li>Warehouse Department</li>
                                        </ul>
                                    </ul>
                                    <li>Financial Department</li>
                                    <li>H&R Department</li>
                                </ol>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../footer.php';?>

    <script src="../js/jquery.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/navbar-fixed.js"></script>
</body>

</html>