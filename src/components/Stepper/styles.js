import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
  font-family: 'Roboto';
  
  > button {
    display: grid;
    place-content: center;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  }
`;
