// Didn't have time to do a full blown new js. Will try and go back to edit it later.
// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input'),
        submit = $('.submit'),
        resultSum = $('.sum');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});

// $('.input1').click(function () {
//     const array = [1, 2, 3, 4]
//     submit = $('.submit1'),
//     resultSum = $('.sum1');
//     let val = $('.input1').val();
//     let results = array.map(function(num) {
//         return num * val;
//     });
//     console.log(results);
// });


$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input1'),
        submit = $('.submit1'),
        resultSum = $('.sum1');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum1 = data.map(Math.sqrt);
            // Add our new total to the page
            resultSum.text(sum1);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});


$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input2'),
        submit = $('.submit2'),
        resultSum = $('.sum2');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum2 = data.filter((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum2);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});



$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input3'),
        submit = $('.submit3'),
        resultSum = $('.sum3');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum3 = data.includes((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum3);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});


$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input4'),
        submit = $('.submit4'),
        resultSum = $('.sum4');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum4 = data.find((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum4);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});