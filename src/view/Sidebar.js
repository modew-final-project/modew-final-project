import React, { useState } from "react";
import C1 from "../case/C1";
import C2 from "../case/C2";
import C3 from "../case/C3";
import C4 from "../case/C4";
import C5 from "../case/C5";
import C6 from "../case/C6";
import C7 from "../case/C7";
const Sidebar = ()=>{


    return(
        <>
                    <div className="write_left scroll">
                        <div className="Autodoc">
                            <C1/>
                            <C2/>
                            <C3/>
                            <C4/>
                            <C5/>
                            <C6/>
                            <C7/>
                        </div>
                    </div>
            </>
    );
}

export default Sidebar;