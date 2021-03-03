<?php include '../../../header.php';?>
    <style>
        h1,
        p {
            border: 5px solid blue;
            text-align: center;
        }
        
        @media only screen and (max-width:992px) {
            h1,
            p {
                border-color: red;
            }
        }
        
        @media only screen and (max-width:768px) {
            h1,
            p {
                border-color: yellow;
            }
        }
        
        @media only screen and (max-width:576px) {
            h1,
            p {
                border-color: green;
            }
        }
    </style>
    <section id="showcase" class="py-5 w-100">
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
                                    <a href="../../assignment/4/cv.php">Day 4</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/5/index.php">Day 5</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/6/index.php">Day 6</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/7/index.php">Day 7</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../assignment/8/index.php">Day 8</a>
                                </td>
                            </tr>
                            <tr class="bg-success">
                                <th>
                                    <a class="text-white" href="#">Practice</a>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/4/practice.php">Day 4</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/5/practice1.php">Day 5</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/6/gallery.php">Day 6</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/7/griddemo.php">Day 7</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="active" href="../../practice/8/practice.php">Day 8</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-8 bg-light h-100" style="opacity: 0.7;">
                    <div id="content" class="text-dark">
                        <h1>Practice</h1>
                        <br>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora doloribus similique esse quaerat tenetur minus minima eaque labore amet non mollitia, laborum quasi modi accusantium enim omnis! Eius, soluta reiciendis.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    <?php include '../../../footer.php';?>