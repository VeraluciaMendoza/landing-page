import { css } from "styled-components"

export const RESET_BUTTON = css`
  display: inline-flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  border-style: none;
  background: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textBody};
  border: 1px solid transparent;
  line-height: 1.75;
  font-weight: 400;
  padding: 0rem 1rem;
`

export const RESET_UL = css`
  list-style: none;
  margin: 0;
  padding: 0;
`