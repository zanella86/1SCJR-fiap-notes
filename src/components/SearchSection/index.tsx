import { ChangeEvent } from "react";
import SearchBar from "../../components/SearchBar";
import { SearchSectionStyled } from './styles';

interface SearchSectionProps {
    handleSearch: (text: string) => void;
    search: string;
    onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchSection ({handleSearch, onTextChange, search}: SearchSectionProps) {
    return (<SearchSectionStyled>
                        <SearchBar handleSearch={handleSearch} onTextChange={onTextChange} search={search}></SearchBar>
            </SearchSectionStyled>)
}

export default SearchSection;

