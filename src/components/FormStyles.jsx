import styled from 'styled-components';

export const FormWrapper = styled.div`
  label {
    font-weight: 500;
  }

  .ant-input,
  .ant-picker {
    border: 1px solid gray;
    width: 100%;
  }

  .ant-form {
    border: 1px solid gray;
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

  .ant-form-item.customSubmit-Btn {
    width: 100%;
    padding: 12px;
    margin: 0;
    text-align: right;
  }
`;
