import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-100);
  background-color: var(--gray-700);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--gray-600);
  }
  &:active {
    background-color: var(--gray-800);
  }
  &:disabled {
    background-color: var(--gray-500);
    cursor: not-allowed;
  }

  ${({ primary }) => {
    if (primary) {
      return css`
        background-color: var(--primary);
        &:hover {
          background-color: var(--primary-dark);
        }
        &:active {
          background-color: var(--primary-dark);
        }
        &:disabled {
          background-color: var(--primary-light);
          cursor: not-allowed;
        }
      `;
    }
  }
  }
  
  ${({ secondary }) => {
    if (secondary) {
      return css`
        background-color: var(--secondary);
        &:hover {
          background-color: var(--secondary-dark);
        }
        &:active {
          background-color: var(--secondary-dark);
        }
        &:disabled {
          background-color: var(--secondary-light);
          cursor: not-allowed;
        }
      `;
    }
  }
  }
  ${({ small }) => {
    if (small) {
      return css`
        padding: 0.25rem 0.5rem;
        font-size: 0.8rem;
      `;
    }
  }
  }
  ${({ large }) => {
    if (large) {
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.1rem;
      `;
    }
  }
  }
`;
