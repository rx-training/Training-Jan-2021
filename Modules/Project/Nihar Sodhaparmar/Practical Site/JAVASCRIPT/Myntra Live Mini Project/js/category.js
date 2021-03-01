window.onload = () => {

    showCategories();

}

    function showCategories(){

        var categoryTable = document.getElementById("categoryTable");

        var categoriesArray = JSON.parse(localStorage.getItem("categories"));
        for(var i = 0; i < categoriesArray.Category.length; i++){
            
            var rowcount = categoryTable.rows.length;
            var tr = categoryTable.insertRow(rowcount);

            var td = document.createElement('td');

            td = tr.insertCell(0);
            td.innerHTML = i+1;

            td = tr.insertCell(1);
            td.innerHTML = categoriesArray.Category[i].categoryName;

            td = tr.insertCell(2);
            var button = document.createElement('input');
            button.setAttribute('id', "categoryUpdate" + i);
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Update');
            button.setAttribute('class', 'btn btn-primary');
            button.setAttribute('onclick', 'updateCategoryBtnclicked(' + i + ')');
            td.appendChild(button);

            td = tr.insertCell(3);
            button = document.createElement('input');
            button.setAttribute('id', "categoryDelete" + i);
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Delete');
            button.setAttribute('class', 'btn btn-danger');
            button.setAttribute('onclick', 'deleteCategory(' + i + ')');
            td.appendChild(button);
        }
    }

function addCategory(){
    var category = document.getElementById("category").value;
    var categoriesArray;

    categoriesArray = JSON.parse(localStorage.getItem("categories")) || { "Category" : [] };
    //console.log(categoriesArray);
    if(category == ""){
        alert("Please provide valid category.");
        return false;
    }

    var categoryId = categoriesArray.Category.length + 1;

        var x = {
            "categoryId" : categoryId,
            "categoryName" : category,
        }

        categoriesArray.Category.push(x);
        localStorage.setItem("categories",JSON.stringify(categoriesArray)); 
    location.reload();
    //console.log(categoriesArray.Category.length);
    //console.log(categoriesArray);
}

function updateCategoryBtnclicked(index){

    var categoriesArray = JSON.parse(localStorage.getItem("categories"));
    //categoriesArray.Category[index].categoryName = "Shirt";
    //localStorage.setItem("categories",JSON.stringify(categoriesArray));
    //location.reload();

    var categoryUpdateModal = document.getElementById("updateCategoryModalContainer");

    categoryUpdateModal.innerHTML = '\
    <div class="modal fade" id="updateCategoryModal" role="dialog"> \
        <div class="modal-dialog modal-lg"> \
            <div class="modal-content"> \
                <div class="modal-header bg-pink text-white"> \
                    <h5 class="modal-title">Update Category</h5> \
                    <button class="close" data-dismiss="modal"> <span>&times;</span> </button> \
                </div> \
                <div class="modal-body"> \
                    <form> \
                        <div class="form-group"> \
                            <label class="form-control-label" for="oldcategory">Old Category Title</label> \
                            <input type="text" class="form-control" id="oldcategory' + index +'" value ="' + categoriesArray.Category[index].categoryName +' "> \
                        </div> \
                        <div class="form-group"> \
                            <label class="form-control-label" for="newcategory">New Category Title</label> \
                            <input type="text" class="form-control" id="newcategory' + index + '"> \
                        </div> \
                    </form> \
                </div> \
                <div class="modal-footer"> \
                    <button class="btn btn-secondary" data-dismiss="modal">Close</button> \
                    <button class="btn btn-pink" onclick="return updateCategory(' + index +')">Save Changes</button> \
                </div> \
            </div> \
        </div> \
    </div> \
    ';

    $("#updateCategoryModal").modal('show');
}

function updateCategory(index){

    var newcategory = document.getElementById("newcategory" + index).value;

    if(newcategory == ""){
        alert("Please provide New Category Name");
        return false;
    }

    var categoriesArray = JSON.parse(localStorage.getItem("categories"));

    categoriesArray.Category[index].categoryName = newcategory;
    localStorage.setItem("categories",JSON.stringify(categoriesArray));
    location.reload();
}

function deleteCategory(index){

    var categoriesArray = JSON.parse(localStorage.getItem("categories"));

    categoriesArray.Category.splice(index, 1);

    for(var i = 0; i < categoriesArray.Category.length; i++){
        categoriesArray.Category[i].categoryId = i + 1;
    }

    localStorage.setItem("categories",JSON.stringify(categoriesArray));
    location.reload();
}