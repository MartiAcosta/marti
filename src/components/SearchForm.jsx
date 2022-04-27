import { SearchContainer, Input } from './styledComponents';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = () => {

    const onInput = (e) => {
        if (e.keyCode === 32) e.preventDefault();
    }
    return (
        <SearchContainer>
            <Input onKeyDown={onInput} />
            <SearchIcon />
        </SearchContainer>
    );
    }

export default SearchForm;