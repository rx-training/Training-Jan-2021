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
                                <p class="text-dark text-center">Collapse & Accordian</p>
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
                                        <a href="collapse.php" class="dropdown-item active">collapse</a>
                                        <a href="tooltips.php" class="dropdown-item">tooltips</a>
                                        <a href="popovers.php" class="dropdown-item">popovers</a>
                                        <a href="modals.php" class="dropdown-item">modals</a>
                                    </div>
                                </li>
                            </ul>
                            <hr>
                            <section class="mt-3">
                                <div class="container">
                                    <button class="btn btn-primary mb-4" data-toggle="collapse" data-target="#collapse-btn-1">Read more</button>
                                    <div class="collapse mb-5" id="collapse-btn-1">
                                        <div class="card">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quaerat eveniet sint, nihil veniam minus accusamus aliquid ab, quam similique repudiandae voluptatum sequi voluptates. Dolorem quidem quaerat saepe dignissimos quis!
                                            </div>
                                        </div>
                                    </div>
                                    <div id="accordian" role="tablist">
                                        <div class="card">
                                            <div class="card-header" role="tab" id="heading">
                                                <h5 class="mb-0">
                                                    <a href="#collapse1" data-parent="#accordian" data-toggle="collapse">Collapse One</a>
                                                </h5>
                                            </div>
                                            <div class="colllapse show" id="collapse1">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto veritatis aspernatur sint. Dolorum corrupti omnis aliquid? Repudiandae voluptatem in facilis excepturi laborum sequi dolores amet dolorum odit, nostrum deserunt?
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="heading">
                                                <h5 class="mb-0">
                                                    <a href="#collapse2" data-parent="#accordian" data-toggle="collapse">Collapse Two</a>
                                                </h5>
                                            </div>
                                            <div class="colllapse" id="collapse2">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto veritatis aspernatur sint. Dolorum corrupti omnis aliquid? Repudiandae voluptatem in facilis excepturi laborum sequi dolores amet dolorum odit, nostrum deserunt?
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="heading">
                                                <h5 class="mb-0">
                                                    <a href="#collapse3" data-parent="#accordian" data-toggle="collapse">Collapse Three</a>
                                                </h5>
                                            </div>
                                            <div class="colllapse" id="collapse3">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto veritatis aspernatur sint. Dolorum corrupti omnis aliquid? Repudiandae voluptatem in facilis excepturi laborum sequi dolores amet dolorum odit, nostrum deserunt?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div style="height:150px;"></div>
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