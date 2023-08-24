import React from 'react'
import jsonData from '../data.json';
/*import pic from '../images/myhome.png'*/

const Main = () => {


    const jobHtml = jsonData.map((data) => {



        return (
            <div className='job-card' key={data.id}>
                <img className='logo'
                    src={data.logo}
                    alt={`${data.company} logo`}
                />
                <div className='job-details'>
                    <h3 className='company-name'>{data.company}</h3>
                    {data.new && <span className='new'>New !</span>}

                    {data.featured && <span className='featured'>Featured</span>}
                    <h3 className='post-name'>{data.position}</h3>
                    <div className='span-div'>
                        <span>{data.postedAt}</span>
                        <div class="dot"></div>
                        <span>{data.contract}</span>
                        <div class="dot"></div>
                        <span>{data.location} </span>
                    </div>
                </div>
                <hr></hr>
                <div className='filter-div'>
                    <button>{data.level}</button>
                    <button>{data.role}</button>
                    {data.languages.map((skills) => {
                        return <button>{skills}</button>
                    })}
                    {data.tools && data.tools.map((tool) => {
                        return <button>{tool}</button>
                    })}
                </div>
            </div >
        )
    })
    return (
        <div>
            <main>
                <div className="inner-main">
                    {jobHtml}
                </div>
            </main>
        </div>
    )
}

export default Main


/*{
company: "Photosnap"
contract: "Full Time"
featured: true
id: 1
languages: (3) ['HTML', 'CSS', 'JavaScript']
level: "Senior"
location: "USA Only"
logo: "../images/photosnap.png"
new: true
position: "Senior Frontend Developer"
postedAt: "1d ago"
role: "Frontend"
tools: []
*/