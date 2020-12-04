function Search(props) {
    return (
        <div id="search-bar">
        <form>
            <input placeholder="Search for a meal" value={props.searchValue} onChange={props.searchHandler}/>
        </form>
        </div>
    )
}

export default Search