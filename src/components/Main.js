import React from 'react'
import jsonData from '../data.json';
import defaultpic from '../images/myhome.png'

const Main = () => {

    const defaultImage = defaultpic;

    const [data, setData] = React.useState(jsonData)

    function handleFilter(e) {
        const filterValue = e.target.textContent;
        const filteredData = jsonData.filter(item => {
            const { level, role, languages, tools } = item;
            return (
                level === filterValue ||
                role === filterValue ||
                languages.includes(filterValue) ||
                tools.includes(filterValue)
            );
        });

        setData(filteredData);
    }
    const jobHtml = data.map((data) => {
        const { logo, position, company, postedAt, location, contract, level, role, tools, languages, featured, newbie, id } = data



        const importImage = src => {
            try {
                return require(src);
            } catch (err) {
                return defaultImage;
            }
        }


        return (

            <div className='job-card' key={id}>
                <img className='logo'
                    src={importImage(logo)}
                    alt={`${company} logo`}
                />
                <div className='job-details'>
                    <h3 className='company-name'>{company}</h3>
                    {newbie && <span className='new'>New !</span>}

                    {featured && <span className='featured'>Featured</span>}
                    <h3 className='post-name'>{position}</h3>
                    <div className='span-div'>
                        <span>{postedAt}</span>
                        <div class="dot"></div>
                        <span>{contract}</span>
                        <div class="dot"></div>
                        <span>{location} </span>
                    </div>
                </div>
                <hr></hr>
                <div className='filter-div'>
                    <button onClick={handleFilter}>{level}</button>
                    <button onClick={handleFilter}>{role}</button>
                    {languages.map((skills) => {
                        return <button onClick={handleFilter}>{skills}</button>
                    })}
                    {tools && tools.map((tool) => {
                        return <button onClick={handleFilter}>{tool}</button>
                    })}
                </div>
            </div >

        )
    })
    return (
        <div>
            <main>
                <textarea className='filter-input' ></textarea>
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