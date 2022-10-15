import React from "react";
import { StyledButton } from "./style.js";
export function Button ({children, ...rest}) {
   return (  <StyledButton {...rest}>
     {children}
    </StyledButton>
   )
}
