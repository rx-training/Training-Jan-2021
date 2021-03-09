<?php include '../header.php'?>

    <section id="showcase" class="py-5">
        <div class="primary-overlay text-white">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <table class="table text-center table-striped table-hover">
                        <thead>
                            <tr class="bg-warning">
                                <th class="py-3"><a class="active" href="home.php">HOME</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="bootstrap_practice.php">Bootstrap</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="col-md-8 bg-light h-100" style="opacity: 0.7;">
                    <div id="content">
                        <div class="container text-dark">
                            <header class="display-1">
                                <p class="text-dark text-center">Navbar & Navs</p>
                            </header>
                            <hr>
                            <ul class="nav nav-justified sticky-top">
                                <li class="nav-item dropdown bg-primary mr-1 rounded  active">
                                    <a href="" class="nav-link dropdown-toggle text-dark" data-toggle="dropdown">Utilities</a>
                                    <div class="dropdown-menu">
                                        <a href="basic_typography.php" class="dropdown-item">basic_typography</a>
                                        <a href="text_alignment_&_dispay.php" class="dropdown-item">text_alignment_&_dispay</a>
                                        <a href="floats_&_fixed_positions.php" class="dropdown-item">floats_&_fixed_positions</a>
                                        <a href="colors_&_background.php" class="dropdown-item">colors_&_background</a>
                                        <a href="spacing.php" class="dropdown-item">spacing</a>
                                        <a href="sizing_&_borders.php" class="dropdown-item">sizing_&_borders</a>
                                        <a href="breakpoints.php" class="dropdown-item">breakpoints</a>
                                    </div>
                                </li>
                                <li class="nav-item bg-success mr-1 rounded">
                                    <a href="" class="nav-link dropdown-toggle text-dark" data-toggle="dropdown">css components</a>
                                    <div class="dropdown-menu">
                                        <a href="buttons_&_buttongroups.php" class="dropdown-item">buttons_&_buttongroups</a>
                                        <a href="navbar.php" class="dropdown-item active">navbar</a>
                                        <a href="list_groups_&_badges.php" class="dropdown-item">list_groups_&_badges</a>
                                        <a href="forms.php" class="dropdown-item">forms</a>
                                        <a href="input_groups.php" class="dropdown-item">input_groups</a>
                                        <a href="alerts_&_progress.php" class="dropdown-item">alerts_&_progress</a>
                                        <a href="tables_&_pagination.php" class="dropdown-item">tables_&_pagination</a>
                                        <a href="cards.php" class="dropdown-item">cards</a>
                                        <a href="media_objects.php" class="dropdown-item">media_objects</a>
                                    </div>
                                </li>
                                <li class="nav-item bg-warning mr-1 rounded">
                                    <a href="" class="nav-link dropdown-toggle text-dark" data-toggle="dropdown">grid and flexbox</a>
                                    <div class="dropdown-menu">
                                        <a href="grid_system.php" class="dropdown-item">grid_system</a>
                                        <a href="grid_alignment.php" class="dropdown-item">grid_alignment</a>
                                        <a href="flexbox.php" class="dropdown-item">flexbox</a>
                                        <a href="auto_margins_&_wrap.php" class="dropdown-item">auto_margins_&_wrap</a>
                                    </div>
                                </li>
                                <li class="nav-item bg-danger rounded">
                                    <a href="" class="nav-link dropdown-toggle text-dark" data-toggle="dropdown">javascript widgets</a>
                                    <div class="dropdown-menu">
                                        <a href="carousel.php" class="dropdown-item">carousel</a>
                                        <a href="collapse.php" class="dropdown-item">collapse</a>
                                        <a href="tooltips.php" class="dropdown-item">tooltips</a>
                                        <a href="popovers.php" class="dropdown-item">popovers</a>
                                        <a href="modals.php" class="dropdown-item">modals</a>
                                    </div>
                                </li>
                            </ul>
                            <hr>
                            <section class="mt-3">
                                <div class="container">
                                    <!--simple navbar-->
                                    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
                                        <div class="container">
                                            <a href="#" class="navbar-brand">Navbar</a>
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">About</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Services</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

                                    <!--navbar with responsive toggle-->
                                    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
                                        <div class="container">
                                            <a href="#" class="navbar-brand">Navbar</a>
                                            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbareNav"><span class="navbar-toggler-icon"></span></button>
                                            <div id="navbarNav" class="collapse navbar-collapse">
                                                <ul class="navbar-nav">
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Home</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Services</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Contacts</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>

                                    <!--navbar with form-->
                                    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
                                        <div class="container">
                                            <a href="#" class="navbar-brand">Navbar</a>
                                            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbareNav"><span class="navbar-toggler-icon"></span></button>
                                            <div id="navbarNav" class="collapse navbar-collapse">
                                                <ul class="navbar-nav mr-auto">
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Home</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Services</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Contacts</a>
                                                    </li>
                                                </ul>
                                                <form class="form-inline my-2 my-lg-0">
                                                    <input type="text" class="form-control mr-sm-2" placeholder="Search">
                                                    <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
                                                </form>
                                            </div>
                                        </div>
                                    </nav>

                                    <!--navbar with dropdown-->
                                    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
                                        <div class="container">
                                            <a href="#" class="navbar-brand">Navbar</a>
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">About</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                                    <div class="dropdown-menu">
                                                        <a href="" class="dropdown-item">Link 1</a>
                                                        <a href="" class="dropdown-item">Link 2</a>
                                                        <a href="" class="dropdown-item">Link 3</a>
                                                    </div>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Services</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

                                    <!--colors-->
                                    <nav class="navbar navbar-expand-sm navbar-light bg-primary mb-3">
                                        <div class="container">
                                            <a href="#" class="navbar-brand">Navbar</a>
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">About</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Services</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

                                    <nav class="navbar navbar-expand-sm navbar-light bg-success mb-3">
                                        <div class="container">
                                            <a href="#" class="navbar-brand">Navbar</a>
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">About</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Services</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <nav class="navbar navbar-expand-sm navbar-light bg-danger mb-3">
                                        <div class="container">
                                            <a href="#" class="navbar-brand">Navbar</a>
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">About</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Services</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

                                    <div class="container">
                                        <!--navs-->
                                        <ul class="nav nav-pills">
                                            <li class="nav-item">
                                                <a href="" class="nav-link active">Link 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 4</a>
                                            </li>
                                        </ul>

                                        <!--center align-->
                                        <ul class="nav nav-pills justify-content-center">
                                            <li class="nav-item">
                                                <a href="" class="nav-link active">Link 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 4</a>
                                            </li>
                                        </ul>

                                        <!--right-align-->
                                        <ul class="nav nav-pills justify-content-end mb-2">
                                            <li class="nav-item">
                                                <a href="" class="nav-link active">Link 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 4</a>
                                            </li>
                                        </ul>

                                        <!--vertical-->
                                        <ul class="nav flex-column nav-pills">
                                            <li class="nav-item">
                                                <a href="" class="nav-link active">Link 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 4</a>
                                            </li>
                                        </ul>

                                        <!--fill-->
                                        <ul class="nav nav-fill nav-pills">
                                            <li class="nav-item">
                                                <a href="" class="nav-link active">Link 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 4</a>
                                            </li>
                                        </ul>

                                        <!--dropdown-->
                                        <ul class="nav nav-pills mt-2">
                                            <li class="nav-item">
                                                <a href="" class="nav-link active">Link 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 2</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                                <div class="dropdown-menu">
                                                    <a href="" class="dropdown-item">1</a>
                                                    <a href="" class="dropdown-item">2</a>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" class="nav-link">Link 4</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <div style="height:400px;"></div>
                            <footer class="bg-secondary">
                                <div class="text-center bg-info"><a href="bootstrap_practice.php" class="pt-1 text-dark">Home</a></div>
                                <p class="pt-1 text-center"> &copy;2021-2022 by <cite>Jayesh chauhan</cite></p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../footer.php'?>