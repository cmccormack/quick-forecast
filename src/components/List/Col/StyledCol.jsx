import styled from "styled-components";

import Col from "./Col";

const StyledCol = styled(Col)`
  margin: 3px;
  display: flex;
  flex-grow: 1;
  justify-content: ${props => props.align || "flex-start"};
  align-items: center;
  width: ${props => props.width || "22%"};
`;

export default StyledCol;
