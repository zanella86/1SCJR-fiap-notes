import SearchBar from "../../components/SearchBar";
import { SearchSectionStyled } from './styles';

interface SearchSectionProps {
    handleSearch: (text: string) => void;
}

function SearchSection ({handleSearch}: SearchSectionProps) {
    return (<SearchSectionStyled>
                        <SearchBar handleSearch={handleSearch}></SearchBar>
            </SearchSectionStyled>)
}

export default SearchSection;

