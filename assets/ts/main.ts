// class Student {
//     fullname : string;
//     constructor(public firstname, public middleinitial, public lastname) {
//         this.fullname = `${firstname} ${middleinitial} ${lastname}`;
//     }
// }

// interface Person {
//     firstname: string;
//     lastname: string;
// }

// function greeter(person : Person) {
//     return `Hello, ${person.firstname} $person.lastname}`;
// }

// var user = new Student('Jane', 'M.', 'User');

// document.body.innerHTML = greeter(user);

import strings = require('./util/strings');
import CanvasJS = require('../canvasjs.min.js');

var foo = '     foo';
var bar = 'bar      ';
console.log(strings.trimLeft(foo));
console.log(strings.trimRight(bar));


var chart = new CanvasJS.Chart("columnChartContainer", {
    theme: "light1", // "light2", "dark1", "dark2"
    animationEnabled: false, // change to true		
    title:{
        text: "棒グラフ"
    },
    data: [
    {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints: [
            { label: "apple",  y: 10  },
            { label: "orange", y: 15  },
            { label: "banana", y: 25  },
            { label: "mango",  y: 30  },
            { label: "grape",  y: 28  }
        ]
    }
    ]
});
chart.render();