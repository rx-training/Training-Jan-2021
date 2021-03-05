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
                                <p class="text-dark text-center">List Groups & Badges</p>
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
                                        <a href="navbar.php" class="dropdown-item">navbar</a>
                                        <a href="list_groups_&_badges.php" class="dropdown-item active">list_groups_&_badges</a>
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
                                    <ul class="list-group mb-5">
                                        <li class="list-group-item">My list item 1</li>
                                        <li class="list-group-item">My list item 2</li>
                                        <li class="list-group-item">My list item 3</li>
                                        <li class="list-group-item">My list item 4</li>
                                        <li class="list-group-item">My list item 5</li>
                                    </ul>

                                    <ul class="list-group mb-5">
                                        <a href="#" class="list-group-item list-group-item-action">My list item 1</a>
                                        <a href="#" class="list-group-item list-group-item-action">My list item 2</a>
                                        <a href="#" class="list-group-item list-group-item-action">My list item 3</a>
                                        <a href="#" class="list-group-item list-group-item-action">My list item 4</a>
                                        <a href="#" class="list-group-item list-group-item-action">My list item 5</a>
                                    </ul>

                                    <ul class="list-group mb-5">
                                        <li class="list-group-item list-group-item-primary">My list item 1</li>
                                        <li class="list-group-item list-group-item-secondary">My list item 2</li>
                                        <li class="list-group-item list-group-item-warning">My list item 3</li>
                                        <li class="list-group-item list-group-item-danger">My list item 4</li>
                                        <li class="list-group-item list-group-item-success">My list item 5</li>
                                        <li class="list-group-item list-group-item-info">My list item 6</li>
                                        <li class="list-group-item list-group-item-dark">My list item 7</li>
                                        <li class="list-group-item list-group-item-light">My list item 8</li>
                                    </ul>

                                    <div class="row mb-5">
                                        <div class="col-4">
                                            <div class="list-group mb-5" id="list-tab" role="tablist">
                                                <a href="" class="list-group-item list-group-item-action active" id="list-home-list" href="#list-home" data-target="#list-home" data-toggle="list">Home</a>
                                                <a href="" class="list-group-item list-group-item-action" id="list-about-list" href="#list-about" data-target="#list-about" data-toggle="list">About</a>
                                                <a href="" class="list-group-item list-group-item-action" id="list-services-list" href="#list-services" data-target="#list-services" data-toggle="list">Services</a>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="tab-content" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="list-home" role="tabpanel">
                                                    Home panel
                                                </div>
                                                <div class="tab-pane fade" id="list-about" role="tabpanel">
                                                    About panel
                                                </div>
                                                <div class="tab-pane fade" id="list-services" role="tabpanel">
                                                    Services panel
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul class="list-group mb-5">
                                        <li class="list-group-item">My list item 1 <span class="badge badge-primary">30</span></li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">My list item 2 <span class="badge badge-warning">50</span></li>
                                        <li class="list-group-item">My list item 3</li>
                                        <li class="list-group-item">My list item 4</li>
                                        <li class="list-group-item">My list item 5</li>
                                    </ul>

                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active">Home</li>
                                    </ol>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item">Home</li>
                                        <li class="breadcrumb-item active">Users</li>
                                    </ol>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item">Home</li>
                                        <li class="breadcrumb-item">Users</li>
                                        <li class="breadcrumb-item active">Brad</li>
                                    </ol>
                                </div>
                            </section>
                            <div style="height:100px;"></div>
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