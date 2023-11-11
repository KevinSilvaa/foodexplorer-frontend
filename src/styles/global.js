import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
    
    body {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        font-smooth: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        outline: none;
    }

    body::placeholder {
      font-family: 'Roboto', sans-serif,
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
`;
