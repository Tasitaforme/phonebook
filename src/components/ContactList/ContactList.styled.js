import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  flex-wrap: wrap;
  margin: 0 auto;
  gap: 8px;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #767676;

  @media screen and (min-width: 570px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: baseline;
    gap: 16px;
  }

  & p {
    flex-basis: calc((100% - 2 * 16px - 70px) / 2);
    text-align: center;
    
    @media screen and (min-width: 570px) {
      text-align: start;
    }
  }
  & p:last-of-type {
    word-break: break-word;
  }
  & p:last-of-type:hover {
    color: #007aff;
  }
`;

export const ButtonWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: black;
  color: #e5e5e5;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  padding: 4px 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #007aff;
  }
`;