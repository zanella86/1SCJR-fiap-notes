import React, {
  ChangeEvent,
    useState
  } from "react";
import { SearchBarStyled } from './styles';
import Button from "../../components/Button";
import FabButton from "../FabButton";

interface SearchBarProps {
    handleSearch: (text: string) => void;
  }

function SearchBar({handleSearch} : SearchBarProps) {

    const [search, setSearch] = useState("");

    const handleInput = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

    const handleClick = () => {
        handleSearch(search);   
    }

    return (
    <>
      <SearchBarStyled  
                value={search} 
                onChange={handleInput}
                placeholder="Pesquisar"></SearchBarStyled>
                
      <Button handleClick={handleClick}>Pesquisar</Button>
    </>)
}

export default SearchBar;