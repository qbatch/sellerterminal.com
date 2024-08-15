import styled from 'styled-components';

const FeesDetailsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 96px 60px 48px 48px;
  border-radius: 25px;
  .fee-details {
    h3 {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-family: "Inter", sans-serif;
      margin-bottom: 32px;
    }
    div {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: 26px;
        margin-bottom: 8px;
      }
      span {
        font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        color: ${({ theme }) => theme.colors.textLight};
        line-height: 20px;
        display: block;
        max-width: 575px;
      }
    }
  }
`

export default FeesDetailsWrapper;
