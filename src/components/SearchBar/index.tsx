import React, {
  ChangeEvent,
    useState
  } from "react";
import { SearchBarStyled } from './styles';
import Button from "../../components/Button";

interface SearchBarProps {
    handleSearch: (text: string) => void;
    search: string;
    onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({handleSearch, onTextChange, search} : SearchBarProps) {

    const handleClick = () => {
        handleSearch(search);   
    }

    return (
    <>
      <SearchBarStyled  
                value={search} 
                onChange={onTextChange}
                placeholder="Pesquisar"></SearchBarStyled>
                
      <Button handleClick={handleClick}>Pesquisar</Button>
    </>)
}

export default SearchBar;