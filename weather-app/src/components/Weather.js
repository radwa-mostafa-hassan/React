const Weather =(props)=> {
        return (
            <table className="table container">
                <tbody>
                    {
                      props.country &&  <tr className="table-success">
                                            <th>Country : </th>
                                            <td>{props.country}</td>
                                        </tr>
                    }
                    {
                      props.city &&  <tr className="table-secondary">
                                            <th>City : </th>
                                            <td>{props.city}</td>
                                        </tr>
                    }
                    {
                      props.temp &&  <tr className="table-success">
                                            <th>Temperature : </th>
                                            <td>{props.temp}</td>
                                        </tr>
                    }
                    {
                      props.humidity &&  <tr className="table-secondary">
                                            <th>Humidity : </th>
                                            <td>{props.humidity}</td>
                                        </tr>
                    }
                    {
                      props.description &&  <tr className="table-success">
                                            <th>Description : </th>
                                            <td>{props.description}</td>
                                        </tr>
                    }
                </tbody>
            </table>
        )
}
export default Weather