<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/style.css">
    <title>MyWork</title>
    <style>
        .main {
            margin: 0;
            padding: 5px;
            background-color: aquamarine;
            color: black;
        }
        
        .sub {
            color: black;
            margin: 10px;
            padding: 5px;
            background: aliceblue;
        }
    </style>
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
                                <th class="py-3"><a href="home.html">HOME</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a class="active" href="article.php">Article</a>
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
                <div class="col-md-8 bg-light  h-100" style="opacity: 0.9;">
                    <div id="content" class="text-dark">
                        <div>
                            <hr>
                            <nav style="text-decoration: none !important;">
                                <a href="report_card.php">Report card</a> |
                                <a href="article.php">Article</a> |
                                <a href="list.php">List</a> |
                                <a href="login.php">Login</a>
                            </nav>
                            <hr>
                        </div>
                        <article class="main">
                            <h2>This is heading</h2>
                            <article class="sub">
                                <h3>This is sub-heading</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </article>
                        </article>
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