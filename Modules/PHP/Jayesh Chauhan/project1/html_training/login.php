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

<body id="home">
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
                                    <a href="list.php">List</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="active" href="login.php">Login</a>
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
                <div class="col-md-8 bg-light h-100" style="opacity: 0.7;">
                    <div id="content" class="text-dark">
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
                        <form>
                            <center>
                                <table>
                                    <caption>
                                        <h2>Log in</h2>
                                    </caption>
                                    <tr>
                                        <td><label for="username">Username</label></td>
                                        <td><input type="text" id="name" required/></td>
                                    </tr>
                                    <tr>
                                        <td><label for="password">Password</label></td>
                                        <td><input type="password" id="password" required/></td>
                                    </tr>
                                    <tr>
                                        <th colspan="2"><input type="submit" value="Login" /></th>
                                    </tr>
                                </table>
                            </center>
                        </form>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../footer.php';?>


    <script src="js/jquery.min.js "></script>
    <script src="js/popper.min.js "></script>
    <script src="js/bootstrap.min.js "></script>
    <script src="js/navbar-fixed.js "></script>
</body>

</html>