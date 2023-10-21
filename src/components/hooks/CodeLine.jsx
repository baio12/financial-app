import React from 'react';
import PropTypes from 'prop-types';

function CodeLine({ tag, values, closed, autoclose }) {
    return (
        <>
            <span className='text-purple-500'>
                {!closed ?
                <>
                    <span className='text-gray-300'>
                        &#60;
                    </span>
                    {tag}{values.length > 0 && <>&nbsp;</>}
                </>
                :
                <span>
                    <span className='text-gray-300'>
                        &#60;/
                    </span>
                    {tag}
                </span>
                }
            </span>
            {!closed ?
                <>
                    {values.map((value, i) => (
                        <span key={value.attribute} className='text-orange-400'>
                            { value.attribute }
                            <span className='text-gray-300'>
                                =
                            </span>
                            {value.bracket !== undefined ?
                                <span>
                                    <span className='text-sky-500'>
                                        <span>&#123;</span>
                                        {value.bracket == 'double' && <span className='text-orange-500'>&#123;</span>}
                                    </span>
                                    <span className='text-green-500'>
                                        { value.content }
                                        <span className='text-orange-500'>&#125;</span>
                                        {value.bracket == 'double' && <span className='text-sky-500'>&#125;</span>}
                                    </span>
                                </span>
                                :
                                <span className=''>
                                    <span className='text-gray-300'>
                                        <span>&quot;</span>
                                    </span>
                                    <span className='text-green-500'>
                                        { value.content }
                                        <span className='text-gray-300'>
                                            <span>&quot;</span>
                                        </span>
                                    </span>
                                </span>
                            }
                            { i + 1 < values?.length && <>&nbsp;</>}
                        </span>
                    ))}
                    {autoclose && <span>&nbsp;/</span>}
                    <span className='text-gray-300'>
                        &#62;
                    </span>
                </>
                :
                <span className='text-gray-300'>
                    &#62;
                </span>
            }
        </>
    )
}

CodeLine.propTypes = {
    tag: PropTypes.string,
    values: PropTypes.array,
    closed: PropTypes.bool,
    autoclose: PropTypes.bool
}

CodeLine.defaultProps = {
    closed: false,
    autoclose: false
}

export default CodeLine