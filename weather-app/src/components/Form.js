const Form = (props) => {
    return (
        <form className="container" onSubmit={props.getWeather}>
            <div className="mb-3">
                <label  className="form-label">City</label>
                <input type="text" className="form-control" name="city" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" name="country" autoComplete="off"/>
            </div>
            <button type="submit" className="btn btn-success">Get Weather</button>
        </form>
    )
}
export default Form;