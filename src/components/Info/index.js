import { findAllByAltText } from '@testing-library/react'
import React from 'react'

function Info({data, flag}) {
    const findColor = (tag) => {
        if(tag === 'high') {
            return 'rgb(209, 48, 43)'
        } else if(tag === 'medium') {
            return 'rgb(245, 166, 64)'
        } else {
            return 'rgb(248, 231, 77)'
        }
    }
    return (
        <div className='is-flex' style={{flexDirection: "column"}}>
            {
                data.map(d => (
                    <div className='is-flex' style={{justifyContent: 'space-between'}}>
                        <div className='is-flex' style={{marginBottom: '5px'}}>
                            {
                                flag === 4 ? (
                                    <i className={d.logo} style={{color: "rgb(94, 151, 211)", marginRight: "5px", marginTop: '5px'}}></i>
                                ) : ''
                            }
                            <div className='is-flex' style={{flexDirection: "column"}}>
                                <p style={{fontSize: '14px', fontWeight: 'bold'}}>{d.title}</p>
                                <p style={{fontSize: '12px', color: 'rgb(186, 186, 186)'}}>{d.subtitle.toUpperCase()}</p>
                            </div>
                            {
                                flag === 4 ? '' : (
                                    <div className='button is-rounded' style={{background: findColor(d.tag), height: '20px', marginTop: '5px', marginLeft: '10px', padding: '0px 10px', color: 'whitesmoke'}}>
                                        <p style={{fontSize: '10px'}}>{d.tag.toUpperCase()}</p>
                                    </div>
                                )
                            }
                        </div>
                        {
                            flag === 1 ? (
                                <p style={{color: findColor(d.tag), fontWeight: 'bold'}}>{d.val}</p>
                            ) : flag === 3 ? (
                                <p style={{color: findColor(d.tag), fontWeight: 'bold'}}>{'$'+d.val}</p>
                            ) : flag === 4 ? (
                                <p style={{color: 'rgb(200, 200, 200)', fontWeight: 'bold'}}>{d.when}</p>
                            ) : ''
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Info
