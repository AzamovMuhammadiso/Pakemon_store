let cart = [];

let addToCartBtn = document.querySelector('btn');

addToCartBtn.addEventListener('click', function() {
    let product = {
        name: 'Product Name',
        price: 10.99,
        quantity: 1
    };

    addToCart(product);

    alert('Product added to cart!');
    });


    function addToCart(product) {
        let index = cart.findIndex(item => item.name === product.name);
        if (index !== -1) {
            cart[index].quantity++;
        } else {
            cart.push(product);
        } console.log('Cart:', cart);
    }

//    3-MASALA
    // let salaries = {
    //     "Akmal": 1200,
    //     "Salim": 5200,
    //     "Karima": 1800
    // }

    // let sum = 0; 

    // for (let salaries of salaries) {
    //     sum += salaries;
    // }

    // console.log("The sum is:", sum);




    //  4-Masala 
    // function sumEvenOdd(arr) {
       
    //     if (!arr || arr.length === 0) {
    //         return [];
    //     }
    
    //     let evenSum = 0; 
    //     let oddSum = 0;  
    
        
    //     for (const num of arr) {
            
    //         if (num % 2 === 0) {
    //             evenSum += num; 
    //         } else {
    //             oddSum += num;
    //         }
    //     }
    
       
    //     return [evenSum, oddSum];
    // }
    
    
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // console.log(sumEvenOdd(numbers)); 
    
   
    // console.log(sumEvenOdd([])); 
    
    
    // console.log(sumEvenOdd(null));
    