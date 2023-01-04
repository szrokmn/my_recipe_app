import styled from "styled-compnents"

const Flex = styled.div`
    display: flex;
    justify-content: ${({justify}) => (justify ? justify : "center")};
    align-items: ${({align}) => (align ? align : "center")};
    flex-wrap: ${({wrap}) => wrap && wrap};
`

export default Flex;