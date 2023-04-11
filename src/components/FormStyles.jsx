import styled from 'styled-components';

export const FormWrapper = styled.div`
  ${
    '' /* --------------------------( GLOBAL )-------------------------------- */
  }
  label {
    font-weight: 500;
  }

  .ant-input,
  .ant-picker {
    border: 1px solid gray;
    width: 100%;
  }

  ${
    '' /* ----------------------------( FOR PANEL 1 )------------------------------- */
  }

  .ant-collapse-content-box {
    display: flex;
    flex-wrap: wrap;
  }

  .ant-form {
    border: 1px solid gray;
  }
  .ant-form-item {
    width: 50%;
    margin-bottom: 14px;
  }

  .ant-collapse {
    border-radius: 0px;
  }

  .ant-collapse-header {
    border-bottom: 1px solid gray;
  }

  .ant-collapse-header-text {
    font-size: 20px;
    color: black;
    font-weight: 500;
  }

  .ant-collapse-item:last-child {
    border-radius: 0px;
  }

  .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 0px;
  }

  .ant-collapse-content-box {
    border-bottom: 1px solid gray;
  }

  ${
    '' /* ------------------------( FOR PANEL 2 )-------------------------- */
  }

  ${'' /* ------ (Custom Submit Button )-------- */}
  .ant-form-item.customSubmit-Btn {
    width: 100%;
    padding: 12px;
    margin: 0;
    text-align: right;
  }
`;
