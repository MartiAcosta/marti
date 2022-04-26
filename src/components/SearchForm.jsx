import { SearchContainer, Input } from './styledComponents';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = () => {
    return(
        <>
        <SearchContainer/>
        <Input/>
        <SearchIcon/>
        </>
    )
}

  /* const onInput = (e) => {
        // e.preventDefault()
        // console.log(e.key)
        if (e.keyCode == 32) e.preventDefault()
    }

    return (
        <SearchContainer>
            <Input onKeyDown={onInput} />
            <SearchIcon />
        </SearchContainer>
    );
}*/

export default SearchForm;