function Search(props) {
    return (
        <form>
            <input placeholder="Search for a meal" value={props.searchValue} onChange={props.searchHandler}/>
        </form>
    )
}

export default Search