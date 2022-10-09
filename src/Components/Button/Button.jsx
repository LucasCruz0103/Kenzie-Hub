import React from "react";
import { Container } from "./style.js";
export function Button ({children, ...rest}) {
   return (  <Container {...rest}>
     {children}
    </Container>
   )
}
