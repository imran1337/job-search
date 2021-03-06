import styled from "styled-components";
import { SearchBox, Hits, Highlight } from "react-instantsearch-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  font-size: 2.6rem;
`;

export const CustomSearchBox = styled(SearchBox)`
  .ais-SearchBox-form {
    position: relative;
    width: 90vw;
    max-width: 1260px;
    margin: 0 auto;
  }
  .ais-SearchBox-input {
    width: 100%;
    height: 61px;
    border: 0;
    outline: 0;
    padding: 0 1.5rem;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  .ais-SearchBox-submit {
    height: 51px;
    width: 100px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    border: 0;
    background-color: ${(props) => props.theme.colors.btnColor};
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    &:after {
      content: "Search";
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.btnHoverColor};
      color: ${(props) => props.theme.colors.primary};
    }
  }
  .ais-SearchBox-submitIcon,
  .ais-SearchBox-reset,
  .ais-SearchBox-reset {
    display: none;
  }
`;

export const StyledHits = styled(Hits)`
  max-width: 1200px;
  text-align: center;
  .ais-Hits-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
  }
  .ais-Hits-item {
    margin: 10px 20px;
  }
`;

export const StyledHighlight = styled(Highlight)`
  color: ${(props) => props.theme.colors.secondary};
  .ais-Highlight-highlighted {
    color: ${(props) => props.theme.colors.highlightColor};
  }
`;

export const H3 = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const H4 = styled.h4`
  color: ${(props) => props.theme.colors.primary};
`;
