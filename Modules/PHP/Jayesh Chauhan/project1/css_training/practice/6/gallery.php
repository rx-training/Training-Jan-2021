<?php include '../../../header.php';?>
    <style>
        h2 {
            background-color: chartreuse;
            text-align: center;
        }
        
        * {
            box-sizing: border-box;
        }
        
        #content {
            margin: 0;
            font-family: Arial;
        }
        
        .row1 {
            display: flex;
            flex-wrap: wrap;
        }
        
        .col1 {
            flex: 25%;
            width: 100%;
        }
        
        .col1 img {
            margin-top: 8px;
            max-width: 25%;
            margin-top: 8px;
            padding: 0 4px;
        }
        
        @media (max-width: 800px) {
            .col1 {
                flex: 50%;
            }
            .col1 img {
                max-width: 50%;
            }
        }
        
        @media (max-width: 600px) {
            .col1 {
                flex: 100%;
            }
            .col1 img {
                max-width: 100%;
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
                                    <a class="active" href="../../practice/6/gallery.php">Day 6</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="../../practice/7/griddemo.php">Day 7</a>
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
                        <h2>Image gallery with flex</h2>
                        <div class="col1">
                            <div class="row1">
                                <img src="images/IMG_20190131_164336.jpg" style="width: 100%;">
                                <img src="images/IMG_20190131_165056.jpg" style="width: 100%;">
                                <img src="images/IMG_20190131_165145.jpg" style="width: 100%;">
                                <img src="images/IMG_20190131_165731.jpg" style="width: 100%;">
                                <img src="images/IMG_20190131_165841.jpg" style="width: 100%;">
                                <img src="images/IMG_20190131_171412.jpg" style="width: 100%;">
                                <img src="images/IMG_20190131_171507.jpg" style="width: 100%;">
                                <img src="images/IMG_20190131_175310.jpg" style="width: 100%;">
                            </div>
                            <div class="row1">
                                <img src="images/IMG_20190131_180343.jpg" style="width: 100%;">
                                <img src="images/IMG_20190719_194836_985.jpg" style="width: 100%;">
                                <img src="images/IMG_20190828_140621_637.jpg" style="width: 100%;">
                                <img src="images/IMG_20190926_101132_724.jpg" style="width: 100%;">
                                <img src="images/IMG_20190930_180337_501.jpg" style="width: 100%;">
                                <img src="images/IMG_20191008_154533_985.jpg" style="width: 100%;">
                                <img src="images/IMG_20191113_145509_315.jpg" style="width: 100%;">
                                <img src="images/IMG_20200212_102515_765.jpg" style="width: 100%;">
                            </div>
                            <div class="row1">
                                <img src="images/IMG_20200222_204402_993.jpg" style="width: 100%;">
                                <img src="images/IMG_20200227_105244_538.jpg" style="width: 100%;">
                                <img src="images/IMG_20200307_050747_927.jpg" style="width: 100%;">
                                <img src="images/IMG_20200506_172713_590.jpg" style="width: 100%;">
                                <img src="images/IMG_20200609_205906_566.jpg" style="width: 100%;">
                                <img src="images/IMG_20200615_160427_588.jpg" style="width: 100%;">
                                <img src="images/IMG_20201125_190744_393.jpg" style="width: 100%;">
                                <img src="images/IMG_20201211_095616_619.jpg" style="width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <?php include '../../../footer.php';?>