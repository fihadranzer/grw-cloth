// import React, { Component } from "react";
// class Hooks extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };
//   }

//   handleIncreament = () => {
//     this.setState(() => {
//       return { count: this.state.count + 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>

//         <button onClick={this.handleIncreament}>Increament </button>
//       </div>
//     );
//   }
// }

// export default Hooks;

// import React, { useState } from "react";

// const Hooks = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {" "}
//         Clcik
//       </button>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// export default Hooks;

import React, { useState } from "react";
import './hooks.scss'
const Hooks = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount((count = 0));
  };

  return (
    <div>
      <div className="counter-box">
        <h1>{count}</h1>

        <div className="counter-btn-box">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
