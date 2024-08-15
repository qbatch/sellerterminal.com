import styled from 'styled-components';

const TabsWrapper = styled.div`
  .nav-tabs {
    display: flex;
    gap: 26px;
    border: none;
  }
  .nav-link {
    background: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.textMedium};
    font-size:${({ theme }) => theme.fonts.baseFontSize18};
    line-height: 24px;
    border-radius: 12px;
    padding: 16px;
    &.active {
      border: none;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`

export default TabsWrapper;
