
export const SearchFrom = () => {
    return (
        <form method="get" action="/cars">
            <input type="text" name="q" placeholder="Search for a car make..." />
            <button type="submit">Search</button>
        </form>
    );
};