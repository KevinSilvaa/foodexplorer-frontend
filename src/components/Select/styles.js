import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
  width: 100%;
  position: relative;
  
  &:has(.option input:checked) #category-select label {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
  }

  &:has(.option input:checked) #selected-value {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
  }

  #options {
    margin-top: 0.25rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.COLORS.DARK.DARK_900};
    display: none;
    position: absolute;
    bottom: -275%;
    width: 100%;

    .option {
      display: flex;
      align-items: center;
      position: relative;
      gap: 0.5rem;
      padding: 0.75rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};

      svg {
        width: 16px;
        height: 16px;

        &:last-child {
          display: none;
          margin-left: auto;
          color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
        }
      }
      
      .label {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
      }
      
      &:has(input:checked),
      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_800};
        background: ${({ theme }) => theme.COLORS.DARK.DARK_1000};
      }

      &:has(input:focus) {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_700};
      }
      
      &:has(input:checked) svg:last-child {
        display: block;
      }

      input[type="radio"] {
        all: unset;
        position: absolute;
        inset: 0;
        cursor: pointer;
      }

      &:nth-child(1) {
        color: ${({ theme }) => theme.COLORS.TINTS.MINT_100};
      }
      &:nth-child(2) {
        color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
      }
      &:nth-child(3) {
        color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
      }
      &:nth-child(4) {
        color: ${({ theme }) => theme.COLORS.TINTS.CARROT_100};
      }
    }
  }
`;

export const Field = styled.div`
  position: relative;
  font-family: 'Roboto';
  letter-spacing: 0.0225rem;

  #select-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    margin-top: 0.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.DARK.DARK_900};
  }

  #selected-value {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
    font-family: 'Roboto';
    line-height: 1.5rem;
  }

  #chevrons {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
    width: 16px;
    height: 16px;
  }

  svg:nth-child(2) {
    display: none;
  }

  #options-view:focus + #select-button, 
  #options-view:checked + #selected-button {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
  }

  &:has(#options-view:checked) label,
  #options-view:checked + #select-button #chevrons {
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
  }

  #options-view:checked + #select-button #chevrons svg:first-child {
    display: none;
  }

  #options-view:checked + #select-button #chevrons svg:last-child {
    display: block;
  }

  #options-view {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
    z-index: 10;
  }

  &:has(#options-view:checked) + #options {
    display: block;
  }
`;
