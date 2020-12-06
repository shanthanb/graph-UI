import React, { useEffect, useState } from 'react'
// import * as d3 from "d3";
import DonutChart from '../DonutChart'
import Info from '../Info'
import LineChart from '../LineChart';

function Dashboard() {
    let dataset1 = [
        { name: 'Data Quality Index', percent: Math.floor(Math.random() * 100), difference: 5, color: 'rgb(94, 151, 211)' }
    ];
    let dataset2 = [
        { name: 'High', val: '16m', difference: '5%', percent: 50, color: 'rgb(209, 48, 43)' },
        { name: 'High', val: '15m', difference: '6%', percent: 25, color: 'rgb(245, 166, 64)' },
        { name: 'High', val: '14m', difference: '7%', percent: 25, color: 'rgb(248, 231, 77)' }
    ];
    let dataset3 = [
        {title: 'Premium less than zero', 
        subtitle: 'Marketing workflow 1',
        tag: 'high',
        val: '1500'},
        {title: 'Sum insured less than zero', 
        subtitle: 'Marketing workflow 1',
        tag: 'high',
        val: '1500'},
        {title: 'Incorrect city names and address', 
        subtitle: 'Marketing workflow 1',
        tag: 'medium',
        val: '1500'},
        {title: 'Discharge date before admission date', 
        subtitle: 'Marketing workflow 1',
        tag: 'high',
        val: '1500'},
        {title: 'Wrong telephone number', 
        subtitle: 'Marketing workflow 1',
        tag: 'low',
        val: '1500'}
    ]
    let dataset4 = [
        {title: 'Workflow - Marketing data 1', 
        subtitle: 'Finished running and 10000 errors detected',
        logo: 'fas fa-code-branch',
        when: 'Today'},
        {title: 'Data Library - earthquecks.csv added', 
        subtitle: 'earthquecks.csv added and data profiling begun',
        logo: 'fa fa-database',
        when: 'Today'},
        {title: '@deleeps taged you in a comment', 
        subtitle: 'Have a look at this database and see it',
        logo: 'far fa-comment-dots',
        when: 'Today'},
        {title: 'Error - 10000 error detected', 
        subtitle: 'New errors detected in marketing data 1',
        logo: 'fa fa-bug',
        when: 'Today'},
        {title: 'Job - marketing data 1 successfully run', 
        subtitle: 'Finished running and 10000 errors detected',
        logo: 'far fa-play-circle',
        when: 'Today'},
    ]
    
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(0)
    useEffect(() => {
        regenerateData();
    }, []);

    function regenerateData() {
        const chartData = [];
        for (let i = 0; i < 31; i++) {
            const value = Math.floor(Math.random() * 500);
            const error = Math.floor(Math.random() * 500);
            chartData.push({
                label: i,
                value,
                error,
                tooltipContent: `<b>${i} Mar, 2018</b><br><b style="color: rgb(74, 162, 221)">${value}</b><br><p style="color: rgb(200, 200, 200)">Incoming data</p><b style="color: rgb(160, 233, 251)">${error}</b><p style="color: rgb(200, 200, 200)">Data errors</p>`
            });
        }
        setData(chartData)
    }

    return (
        <div style={{paddingLeft: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
            <div style={{height: '300px', width: 'fit-content', margin: '0 auto'}}>
                <div className='is-flex' style={{justifyContent: 'space-between'}}>
                    <div style={{fontWeight: 'bold'}}>Data Statistics</div>
                    <div> 
                        <ul className='is-flex'>
                            <li style={{color: 'rgb(74, 162, 221)', fontWeight: 'bold', fontSize: '12px'}}><i class="far fa-circle" style={{marginRight: '5px'}}></i>Incoming data</li>
                            <li style={{color: 'rgb(160, 233, 251)', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px'}}><i class="far fa-circle" style={{marginRight: '5px'}}></i>No. of errors detected</li>
                            <li style={{color: 'rgb(199, 199, 199)', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px'}}><i class="far fa-circle" style={{marginRight: '5px'}}></i>No. of errors fixed</li>
                            <li style={{color: 'rgb(199, 199, 199)', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px'}}><i class="far fa-circle" style={{marginRight: '5px'}}></i>No. of errors unassigned</li>
                            <li style={{color: 'rgb(199, 199, 199)', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px'}}><i class="far fa-circle" style={{marginRight: '5px'}}></i>No. of errors assigned</li>
                            <li style={{color: 'rgb(199, 199, 199)', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px'}}>This month<i class="fas fa-chevron-down" style={{marginLeft: '5px'}}></i></li>
                        </ul>
                    </div>
                </div>
                <LineChart data={data}/>
            </div>
            <div className= 'is-flex' style={{justifyContent: 'space-evenly', marginTop: '40px'}}>
                <div className="is-flex" style={{flexDirection: "column", width: "fit-content"}}>
                    <div className='is-flex' style={{justifyContent: "space-between", marginBottom: "10px"}}>
                        <p style={{fontWeight: "bold"}}>Data Quality Index</p>
                        <div className='is-flex' style={{alignItems: "center"}}>
                            <p style={{color: 'rgb(94, 151, 211)', fontSize: "10px", fontWeight: "bold", marginRight: "5px"}}>MORE</p>
                            <i class="fas fa-angle-right" style={{color: 'rgb(94, 151, 211)'}}></i>
                        </div>
                    </div>
                    <div className='box'><DonutChart name='donut1' dataset={dataset1} flag={-1}/></div>
                </div>
                <div className="is-flex" style={{flexDirection: "column", width: "fit-content"}}>
                    <div className='is-flex' style={{justifyContent: "space-between", marginBottom: "10px"}}>
                        <p style={{fontWeight: "bold"}}>Top Errors</p>
                        <div className='is-flex' style={{alignItems: "center"}}>
                            <p style={{color: 'rgb(94, 151, 211)', fontSize: "10px", fontWeight: "bold", marginRight: "5px"}}>MORE</p>
                            <i class="fas fa-angle-right" style={{color: 'rgb(94, 151, 211)'}}></i>
                        </div>
                    </div>
                    <div className='box' style={{width: '500px'}}><Info data = {dataset3} flag={1}/></div>
                </div>
                <div className="is-flex" style={{flexDirection: "column", width: "fit-content"}}>
                    <div className='is-flex' style={{justifyContent: "space-between", marginBottom: "10px"}}>
                        <p style={{fontWeight: "bold"}}>Assigned to Me</p>
                        <div className='is-flex' style={{alignItems: "center"}}>
                            <p style={{color: 'rgb(94, 151, 211)', fontSize: "10px", fontWeight: "bold", marginRight: "5px"}}>MORE</p>
                            <i class="fas fa-angle-right" style={{color: 'rgb(94, 151, 211)'}}></i>
                        </div>
                    </div>
                    <div className='box' style={{width: '500px'}}><Info data = {dataset3} flag={2}/></div>
                </div>
            </div>
            <div className='is-flex' style={{justifyContent: 'space-evenly', marginTop: '20px'}}>
                <div className="is-flex" style={{flexDirection: "column", width: "fit-content"}}>
                    <div className='is-flex' style={{justifyContent: "space-between", marginBottom: "10px"}}>
                        <p style={{fontWeight: "bold"}}>Buisness Impact</p>
                        <div className='is-flex' style={{alignItems: "center"}}>
                            <p style={{color: 'rgb(94, 151, 211)', fontSize: "10px", fontWeight: "bold", marginRight: "5px"}}>MORE</p>
                            <i class="fas fa-angle-right" style={{color: 'rgb(94, 151, 211)'}}></i>
                        </div>
                    </div>
                    <div className='box'>
                        <DonutChart name='donut2' dataset={dataset2} flag={flag}/>
                        <div className="is-flex" style={{alignItems: "center", justifyContent: 'space-evenly'}}>
                            <div className="is-flex" style={{alignItems: "center"}} 
                                onMouseEnter={() => setFlag(0)}>
                                <i class="far fa-circle" style={{color: 'rgb(209, 48, 43)'}}></i>
                                <p style={{color: 'rgb(209, 48, 43)'}}>High</p>
                            </div>
                            <div className="is-flex" style={{alignItems: "center"}}
                                onMouseEnter={() => setFlag(1)}>
                                <i class="far fa-circle" style={{color: 'rgb(245, 166, 64)'}}></i>
                                <p style={{color: 'rgb(245, 166, 64)'}}>Medium</p>
                            </div>
                            <div className="is-flex" style={{alignItems: "center"}}
                                onMouseEnter={() => setFlag(2)}>
                                <i class="far fa-circle" style={{color: 'rgb(248, 231, 77)'}}></i>
                                <p style={{color: 'rgb(248, 231, 77)'}}>Low</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="is-flex" style={{flexDirection: "column", width: "fit-content"}}>
                    <div className='is-flex' style={{justifyContent: "space-between", marginBottom: "10px"}}>
                        <p style={{fontWeight: "bold"}}>Highest Buisness Impact</p>
                        <div className='is-flex' style={{alignItems: "center"}}>
                            <p style={{color: 'rgb(94, 151, 211)', fontSize: "10px", fontWeight: "bold", marginRight: "5px"}}>MORE</p>
                            <i class="fas fa-angle-right" style={{color: 'rgb(94, 151, 211)'}}></i>
                        </div>
                    </div>
                    <div className='box' style={{width: '500px'}}><Info data = {dataset3} flag={3}/></div>
                </div>
                <div className="is-flex" style={{flexDirection: "column", width: "fit-content"}}>
                    <div className='is-flex' style={{justifyContent: "space-between", marginBottom: "10px"}}>
                        <p style={{fontWeight: "bold"}}>Activity Stream</p>
                        <div className='is-flex' style={{alignItems: "center"}}>
                            <p style={{color: 'rgb(94, 151, 211)', fontSize: "10px", fontWeight: "bold", marginRight: "5px"}}>MORE</p>
                            <i class="fas fa-angle-right" style={{color: 'rgb(94, 151, 211)'}}></i>
                        </div>
                    </div>
                    <div className='box' style={{width: '500px'}}><Info data = {dataset4} flag={4}/></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
