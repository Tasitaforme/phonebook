import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e5e5e5;
  border-radius: 30px;
  padding: 20px 32px;
  text-align: center;
  height: calc(100% - 60px);
`;

export const Title = styled.h2`
  margin-top: 8px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Message = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #007aff;
  margin: 8px auto;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
`;


export const SubTitleText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 8px auto 20px;
  line-height: 1.3;
  max-width: 400px;
  text-align: start;
`;

export const toastOptions = {
  // Set default for all toasts
  duration: 2000,
  style: {
    color: 'white',
    boxShadow: '0px 4px 12px 4px rgba(0,0,0,0.5)',
  },

  // Set default for specific types
  success: {
    style: {
      background: `#007aff`,
    },
    iconTheme: {
      primary: 'green',
      secondary: 'white',
    },
  },

  error: {
    style: {
      background: '#007aff',
    },
    iconTheme: {
      primary: 'red',
      secondary: 'white',
    },
  },
};
