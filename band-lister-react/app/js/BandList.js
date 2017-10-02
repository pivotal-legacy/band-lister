import React from 'react'
import {PropTypes} from 'prop-types'

const BandList = (props) => {
    return (
        <div>
            <h1>Band Lister</h1>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>member count</th>
                </tr>
                </thead>
                <tbody>
                {props.bands.map((band) => {
                    return (
                        <tr key={band.id}>
                            <td className='id'>{band.id}</td>
                            <td className='name'>{band.name}</td>
                            <td className='member-count'>{band.memberCount}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};


BandList.propTypes = {
    bands: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            memberCount: PropTypes.string
        })
    )
};

export default BandList;