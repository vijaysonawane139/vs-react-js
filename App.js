// const heading = React.createElement(
//     "h1",
//     { id:"headind" ,xyz: "fhi" },
//     "hello there from javascript")
//      console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* <div id="parent">
    <div id="child">
        <h1>hello there</h1>
        <h2>hello there</h2>
    </div>
    <div id="child2">
        <h1>hello there</h1>
        <h2>hello there</h2>
    </div>

</div> */

const heading = React.createElement("div",{id:"parent"},
                 React.createElement("div",{id:"child"},
                        [React.createElement("h1",{},"hello there"),
                        React.createElement("h2",{},"how do you do")
                        ]),
                    React.createElement("div",{id:"child2"},
                    [React.createElement("h1",{},"hello bro"),
                     React.createElement("h2",{},"how may help you")])


                     );

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);