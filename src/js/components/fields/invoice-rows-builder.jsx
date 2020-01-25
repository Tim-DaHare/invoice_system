import React, { useState } from "react"

const InvoiceRowsBuilder = ({ invoiceFlavour, onChange, input }) => {
    const [values, setValues] = useState(input.value || [])

    const addRow = () => {
        updateValues([...values, {}])
    }

    const setValue = (i, name, value) => {
        const newValues = [...values]
        newValues[i][name] = value

        updateValues(newValues)
    }

    const removeRow = i => {
        const newValues = [...values]
        newValues.splice(i, 1)
        updateValues(newValues)
    }

    const updateValues = values => {
        console.log("hallo?")
        input.onChange(values)
        setValues(values)
        if (onChange) onChange() 
    }

    return (
        <div>
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
                        <th>
                            Verwijderen
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {values.map((value, i) => {
                        return (
                            <tr className="invoice-listitem--table-row" key={i}>
                                {invoiceFlavour != 1 &&
                                    <td>
                                        <input 
                                            name="rows[]['description']" 
                                            required
                                            type="text" 
                                            placeholder="Omschrijving" 
                                            value={value.description || ""} 
                                            onChange={e => setValue(i, "description", e.target.value)} 
                                        />
                                    </td>
                                }
                                {invoiceFlavour == 1 &&
                                    <React.Fragment>
                                        <td>
                                            <input 
                                                name="rows[]['earbrand']" 
                                                required
                                                type="text" 
                                                placeholder="I & R Oormerk" 
                                                value={value.earbrand || ""} 
                                                onChange={e => setValue(i, "earbrand", e.target.value)} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                name="rows[]['weight_kg']" 
                                                required
                                                type="number" 
                                                placeholder="Gewicht in kg" 
                                                value={value.weight_kg || ""} 
                                                onChange={e => setValue(i, "weight_kg", e.target.value)} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                name="rows[]['price_kg']" 
                                                required
                                                type="number" 
                                                placeholder="Prijs per kg." 
                                                value={value.price_kg || ""} 
                                                onChange={e => setValue(i, "price_kg", e.target.value)} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                name="rows[]['costs']" 
                                                required
                                                type="number" 
                                                placeholder="Kosten" 
                                                value={value.costs || ""} 
                                                onChange={e => setValue(i, "costs", e.target.value)} 
                                            />
                                        </td>
                                    </React.Fragment>
                                }
                                {invoiceFlavour != 3 &&
                                    <td>
                                        <input 
                                            name="rows[]['amount']" 
                                            required
                                            type="number" 
                                            placeholder="Aantal" 
                                            value={value.amount || ""} 
                                            onChange={e => setValue(i, "amount", e.target.value)} 
                                        />
                                    </td>
                                }
                                {invoiceFlavour == 0 &&
                                    <td>
                                        <input 
                                            name="rows[]['work_number']" 
                                            required
                                            type="text" 
                                            placeholder="Werknummer" 
                                            value={value.work_number || ""} 
                                            onChange={e => setValue(i, "work_number", e.target.value)} 
                                        />
                                    </td>
                                }
                                <td>
                                    <input 
                                        name="rows[]['price']" 
                                        required
                                        type="number" 
                                        placeholder="Bedrag" 
                                        value={value.price || ""} 
                                        onChange={e => setValue(i, "price", e.target.value)} 
                                    />
                                </td>
                                <td>
                                    <button type="button" onClick={() => removeRow(i)}>X</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="row">
                <button type="button" onClick={addRow}>Rij toevoegen</button>
            </div>
        </div>
    )
}

export default InvoiceRowsBuilder
