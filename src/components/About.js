import React, { Suspense, useState } from "react";

const About = () => {
    const LazyComp = React.lazy(() => import("./LazyComp"));
    const [ state, setState ] = useState("");

    return (
        <div className="about">
            <h2>About us</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum."</p>
            <input type="text" onChange={(e) => setState(e.target.value)} value={state} />

             <Suspense fallback={<h5>Loading...</h5>}>
                {state && <LazyComp />}
            </Suspense> 
        
        </div>
    )
}

export default About;