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
                                <p class="text-dark text-center">Floats & Fixed Positions</p>
                            </header>
                            <hr>
                            <ul class="nav nav-justified sticky-top">
                                <li class="nav-item dropdown bg-primary mr-1 rounded  active">
                                    <a href="" class="nav-link dropdown-toggle text-dark" data-toggle="dropdown">Utilities</a>
                                    <div class="dropdown-menu">
                                        <a href="basic_typography.php" class="dropdown-item">basic_typography</a>
                                        <a href="text_alignment_&_dispay.php" class="dropdown-item">text_alignment_&_dispay</a>
                                        <a href="floats_&_fixed_positions.php" class="dropdown-item active">floats_&_fixed_positions</a>
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
                                    <!--float-->
                                    <div class="float-left">Float left</div><br>
                                    <div class="float-right">Float right</div><br>
                                    <div class="float-none">Float none</div><br>

                                    <!--Responsive float-->
                                    <div class="float-sm-left">Float left small or wider</div><br>
                                    <div class="float-md-left">Float left medium or wider</div><br>
                                    <div class="float-lg-left">Float left large or wider</div><br>
                                    <div class="float-xl-left">Float left extra large or wider</div><br>

                                    <div class="float-sm-right">Float right small or wider</div><br>
                                    <div class="float-md-right">Float right medium or wider</div><br>
                                    <div class="float-lg-right">Float right large or wider</div><br>
                                    <div class="float-xl-right">Float right extra large or wider</div><br>

                                    <div class="float-sm-none">Float none small or wider</div><br>
                                    <div class="float-md-none">Float none medium or wider</div><br>
                                    <div class="float-lg-none">Float none large or wider</div><br>
                                    <div class="float-xl-none">Float none extra large or wider</div><br>

                                    <!--clearfix-->
                                    <div class="bg-success clearfix">
                                        <button class="float-left">Float left</button>
                                        <button class="float-right">Float right</button>
                                    </div>

                                    <!--fixed top-->
                                    <h3 class="fixed-top">Fixed-top</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eaque molestiae aperiam id, praesentium blanditiis quasi nisi cupiditate facilis placeat dolor recusandae quas illo, vitae tenetur animi nemo nam alias? Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Aliquam vitae odio perferendis nulla sunt possimus, laboriosam tempora repellat, mollitia repudiandae, a quod ipsum doloremque repellendus voluptates! Debitis repellat illum repudiandae.
                                    </p>

                                    <!--sticky-->
                                    <h3 class="sticky-top">Sticky</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eaque molestiae aperiam id, praesentium blanditiis quasi nisi cupiditate facilis placeat dolor recusandae quas illo, vitae tenetur animi nemo nam alias? Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Aliquam vitae odio perferendis nulla sunt possimus, laboriosam tempora repellat, mollitia repudiandae, a quod ipsum doloremque repellendus voluptates! Debitis repellat illum repudiandae.
                                    </p>
                                </div>
                            </section>
                            <div style="height:500px;"></div>
                            <!--fixed bottom-->
                            <footer class="fixed-bottom bg-secondary">
                                <div class="text-center bg-info"><a href="bootstrap_practice.php" class="pt-1 text-dark">Home</a></div>
                                <p class="text-center pt-1"> &copy;2021-2022 by <cite>Jayesh chauhan</cite></p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../footer.php'?>