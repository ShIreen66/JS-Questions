// BASICS Day 1 to 6

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 1. Sum of two integers

// let a = 10
// let b = 10 
// let sum = a + b
// console.log(sum);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 2. Print the messege along with values and sum
	// Ex - The sum of 45 & 12  = 57

// let a = 45
// let b = 12 
// let sum = a + b
// console.log(sum);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 3. Accept two integers from user and print the sum
	// Ex - The sum of 45 & 12 = 57

    // let a = +prompt("Enter first value")
    // let b = +prompt("Enter second value")
    // let sum = a + b 
    // console.log(`The sum of ${a} & ${b} = ${sum}`)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 4 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 4. Accept the User's name, age and print in following manner
	// Ex - Hello Shery, you are 12 years old.

    // let name = prompt("Enter your name")
    // let age = prompt("Enter your age")
    // console.log(`Hello ${name} you are & ${age} years old`)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 5 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 5.Solve Increment & decrement operator questions on
	// https://javaconceptoftheday.com/quiz-on-increment-and-decrement-operators/

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 6 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 6. Accept two numbers from user and swap their values
// Part 2 - Swap without using third variable
//                                                             using third variable
// let a = 2
// let b = 4
// let temp = a
// a = b
// b = temp 
// console.log(a,b)

//                                                           not used third variable
// let a = 10
// let b = 20
// a = a+b
// b = a-b
// a = a-b
// console.log(a,b)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 7 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// MATH CLASS Day 

// 7. Accept the length and width of a rectangle. Calculate & print the area and perimiter.

// let length = +prompt("Enter the length of rectangle")
// let width = +prompt("Enter the brath of rectangle")
// console.log(`The area of rectangle is ${length*width}`)
// console.log(`The perimiter of rectangle is ${2*(length+width)}`)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 8 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

// let p = +prompt("Enter the principle amount")
// let r = +prompt("Enter the rate of interest")/100
// let t = +prompt("Enter the time in years")
// let n = +prompt("Enter the number of times interest applied per time period")


// let ci = p*Math.pow(1+r/n,t*n)
// let intrest = ci-p
// console.log("Simple interest :",intrest.toFixed(2))
// console.log("Total amount :",ci.toFixed(2))


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 9 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 9. Accept the three sides of triangle and calculate the area using herons formula

// let a = +prompt("Enter the first side of traingle")
// let b = +prompt("Enter the first side of traingle")
// let c = +prompt("Enter the first side of traingle")
// let s = (a+b+c)/2
// let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(area.toFixed(2))


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 10 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 10. Find surface area of sphere

// let r = +prompt("Enter the radius of sphere")
// let area = 4*Math.PI*r*r
// console.log(area.toFixed(2))

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 11 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 11. Find circumference and area of circle

// let r = +prompt("Enter the radius of circle")
// let circumference = 2*Math.PI*r
// console.log(circumference.toFixed(2))


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 12 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// IF ELSE Day 8 to 

// 12. Accept two numbers and print the greatest between them

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Question 64 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 64- Bubble Sort
// Bubble Sort
// let arr = [4, 7, 1, 5, 3, 6]
    // 7 4 5 3 6 1
    // 7 5 4 6 3 1

    // for (let i = 0; i < Array.length; i++) {
    //     if 
    // }

    // function bubbleSort(arr) {
    //     let len = arr.length;
    //     let swapped;
    //     do {
    //         swapped = false;
    //         for (let i = 0; i < len - 1; i++) {
    //             if (arr[i] > arr[i + 1]) {
    //                 // Swap elements
    //                 let temp = arr[i];
    //                 arr[i] = arr[i + 1];
    //                 arr[i + 1] = temp;
    //                 swapped = true;
    //             }
    //         }
    //         len--; // Reduce the range for optimization
    //     } while (swapped);
    //     return arr;
    // }
    
    // let arr = [64, 34, 25, 12, 22, 11, 90];
    // function bubbleSort(arr) {
    //     let len = arr.length;
    //     let swapped;
    //     do {
    //         swapped = false;
    //         for (let i = 0; i < len - 1; i++) {
    //             if (arr[i] > arr[i + 1]) {
    //                 // Swap elements
    //                 let temp = arr[i];
    //                 arr[i] = arr[i + 1];
    //                 arr[i + 1] = temp;
    //                 swapped = true;
    //             }
    //         }
    //         len--; // Reduce the range for optimization
    //     } while (swapped);
    //     return arr;
    // }
    
    // console.log(bubbleSort(arr)); 
    // Example usage:
    
     // Output: [11, 12, 22, 25, 34, 64, 90]
    
     let array = [4, 7, 81, 5, 3, 96];

     for (let j = 0; j < array.length; j++) {
        for (let i  = 0; i < array.length - 1- j; i++) {
            if (array[i + 1] > array[i]) {
                let temp = array[i +1];
                array[i +1]= array[i];
                array[i] = temp;
            }
        }
     }
     console.log(array);