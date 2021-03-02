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
                                <th class="py-3"><a href="home.html">HOME</a></th>
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
                                    <a class="active" href="form.php">Form</a>
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
                <div class="col-md-8 bg-light h-100" style="opacity: 0.9;">
                    <div id="content" class="text-dark">
                        <form>
                            <center>
                                <fieldset>
                                    <legend>Employee Form</legend>
                                    <table>
                                        <tr>
                                            <th><label for="name">Name</label></th>
                                            <td colspan="3"><input type="text" id="name" name="age" required/></td>
                                        </tr>
                                        <tr>
                                            <th><label for="age">Age</label></th>
                                            <td colspan="3"><input type="number" id="age" name="age" required/></td>
                                        </tr>
                                        <tr>
                                            <th rowspan="3"><label>Gender</label></th>
                                            <td><input type="radio" id="male" name="gender" value="male" required/>
                                                <label for="male">Male</label></td>
                                        </tr>
                                        <tr>
                                            <td><input type="radio" id="female" name="gender" value="female" required/>
                                                <label for="male">Female</label></td>
                                        </tr>
                                        <tr>
                                            <td><input type="radio" id="other" name="gender" value="other" required/>
                                                <label for="male">Other</label></td>
                                        </tr>
                                        <tr>
                                            <th><label for="designation">Designation</label></th>
                                            <td colspan="3"><input type="text" id="designation" name="designation" required/></td>
                                        </tr>
                                        <tr>
                                            <th><label for="salary">Salary</label></th>
                                            <td colspan="3"><input type="number" id="salary" name="salary" required/></td>
                                        </tr>
                                        <tr>
                                            <th><label for="location">Location</label></th>
                                            <td colspan="3"><select id="location" name="salary" />
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                <option value="Daman and Diu">Daman and Diu</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label for="email">Email</label></th>
                                            <td><input type="email" id="email" required/></td>
                                        </tr>
                                        <tr>
                                            <th><label for="doj">Date of Joining</label></th>
                                            <td><input type="date" id="doj" required/></td>
                                        </tr>
                                        <tr>
                                            <th><label for="co_no">Contact no.</label></th>
                                            <td><input type="tel" id="co_no" required/></td>
                                        </tr>
                                        <tr>
                                            <th colspan="2"><input type="submit" value="Submit"></th>
                                        </tr>
                                    </table>
                                </fieldset>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../footer.php';?><?php include '../footer.php';?>

    <script src="../js/jquery.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/navbar-fixed.js"></script>
</body>

</html>