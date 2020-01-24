import React from "react"

const InvoiceRowsBuilder = ({ invoiceFlavour }) => {

    return (
        <table className="invoice-rows-builder__table">
            <thead>
                <tr>
                    {invoiceFlavour != 1 &&
                        <th>
                            Omschrijving
                        </th>
                    }
                    {invoiceFlavour == 1 &&
                        <React.Fragment>
                            <th>
                                I & R Oormerk
                            </th>
                            <th>
                                Gewicht in kg 
                            </th>
                            <th>
                                Prijs per kg.
                            </th>
                            <th>
                                Kosten
                            </th>
                        </React.Fragment>
                    }
                    {invoiceFlavour != 3 &&
                        <th>
                            Aantal
                        </th>
                    }
                    
                    {invoiceFlavour == 0 &&
                        <th>
                            Werknummer
                        </th>
                    }
                    <th>
                        Bedrag
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="invoice-listitem--table-row">
                    {invoiceFlavour != 1 &&
                        <td>
                            Omschrijving
                        </td>
                    }
                    {invoiceFlavour == 1 &&
                        <React.Fragment>
                            <td>
                                I & R Oormerk
                            </td>
                            <td>
                                Gewicht in kg 
                            </td>
                            <td>
                                Prijs per kg.
                            </td>
                            <td>
                                Kosten
                            </td>
                        </React.Fragment>
                    }
                    {invoiceFlavour != 3 &&
                        <td>
                            Aantal
                        </td>
                    }
                    {invoiceFlavour == 0 &&
                        <td>
                            Werknummer
                        </td>
                    }
                    <td>
                        Bedrag
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default InvoiceRowsBuilder
