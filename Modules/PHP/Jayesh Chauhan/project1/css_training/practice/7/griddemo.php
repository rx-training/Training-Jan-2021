<?php include '../../../header.php';?>
<style>
        .main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: .4fr 0.2fr 2.2fr 1.7fr 0.3fr;
            grid-template-areas: "head head head head" "nav nav nav nav" "sidebar maincont maincont maincont" "sidebar content1 content2 content3" "footer footer footer footer";
            text-align: center;
            height: 100em;
            grid-gap: 1em;
            font-weight: 800;
            font-size: 25px;
            text-transform: capitalize;
        }
        
        #head {
            background-color: darkmagenta;
            grid-area: head;
        }
        
        #nav {
            background-color: aqua;
            grid-area: nav;
        }
        
        #sidebar {
            background-color: blueviolet;
            grid-area: sidebar;
        }
        
        #maincont {
            background-color: brown;
            grid-area: maincont;
        }
        
        #content1 {
            background-color: cadetblue;
            grid-area: content1;
        }
        
        #content2 {
            background-color: darkblue;
            grid-area: content2;
        }
        
        #content3 {
            background-color: tomato;
            grid-area: content3;
        }
        
        #footer {
            background-color: orange;
            grid-area: footer;
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
                                    <a class="active" href="../../practice/7/griddemo.php">Day 7</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/8/practice.php">Day 8</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-8 bg-light h-100" style="opacity: 0.7;">
                    <div id="content" class="text-dark">
                        <div class="main">
                            <div id="head">Head</div>
                            <div id="nav">Navbar</div>
                            <div id="sidebar">Sidebar</div>
                            <div id="maincont">Main content</div>
                            <div id="content1">Sub Content</div>
                            <div id="content2">Sub Content</div>
                            <div id="content3">Sub Content</div>
                            <div id="footer">Footer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    <?php include '../../../footer.php';?>