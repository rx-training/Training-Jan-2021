'use strict';

class TrainingPlan {
    viewPlan() {
        $.getJSON('../json/training_plan.json', function(data) {
            $.each(data.plan, function(key, value) {
                $("#content").append('<h5 class="mb-4">' + value.sectionName + "</h5>");
                console.log(value);
                if(value.data != undefined && value.data.length != 0) {
                    $.each(value.data, function(key, value) {
                        $("#content").append('<h6 class="mb-4">Day ' + value.day + "</h6>");

                        if(value.learn != undefined && value.learn.length != 0) {
                            $("#content").append('<h6 class="mb-4">What to Learn</h6>');
                            let learnData = "";
                            for (let i = 0; i < value.learn.length; i++) {
                                const element = value.learn[i];
                                learnData += "<li>" + element + "</li>";
                            }
                            $('#content').append('<ol>' + learnData + '</ol>');
                        }

                        if(value.practice != undefined && value.practice.length != 0) {
                            $("#content").append('<h6 class="mb-4">Practice Exercise</h6>');
                            let practiceData = "";
                            for (let i = 0; i < value.practice.length; i++) {
                                const element = value.practice[i];
                                practiceData += "<li>" + element + "</li>";
                            }
                            $('#content').append('<ol>' + practiceData + '</ol>');
                        }

                        if(value.assignment != undefined && value.assignment.length != 0) {
                            $("#content").append('<h6 class="mb-4">Assignment</h6>');
                            let assignmentData = "";
                            for (let i = 0; i < value.assignment.length; i++) {
                                const element = value.assignment[i];
                                assignmentData += "<li>" + element + "</li>";
                            }
                            $('#content').append('<ol>' + assignmentData + '</ol>');
                        }

                        if(value.reference != undefined && value.reference.length != 0) {
                            $("#content").append('<h6 class="mb-4">reference</h6>');
                            let referenceData = "";
                            for (let i = 0; i < value.reference.length; i++) {
                                const element = value.reference[i];
                                referenceData += '<li><a href="' + element + '" class="text-dark" target="_blank"><u>' + element + "</u></a></li>";
                            }
                            $('#content').append('<ol>' + referenceData + '</ol>');
                        }
                    });
                }
            })
        });
    }
}