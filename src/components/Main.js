import React from 'react'
import jsonData from '../data.json';
import defaultpic from '../images/myhome.png'

const Main = () => {

    /*const defaultImage = defaultpic;

    const [filterValue, setFilterValue] = React.useState('')

    const [data, setData] = React.useState(jsonData)

    function handleClear() {
        setData(jsonData)
        setFilterValue('')
    }*/
    const defaultImage = defaultpic;

    const [filterValue, setFilterValue] = React.useState('');

    const [originalData, setOriginalData] = React.useState(jsonData);

    const [data, setData] = React.useState(jsonData);

    function handleClear() {
        setData(originalData);
        setFilterValue("");
    }






    function handleFilter(e) {
        setFilterValue(e.target.textContent);
        console.log(filterValue)

        const filteredData = data.filter(item => {
            const { level, role, languages, tools } = item;
            return (
                level === filterValue ||
                role === filterValue ||
                languages.includes(filterValue) ||
                tools.includes(filterValue)
            );
        });


        setData(filteredData);
        console.log(filterValue)
    }


    const jobHtml = data.map((data) => {
        const { logo, position, company, postedAt, location, contract, level, role, tools, languages, featured, newbie, id } = data

        function removeSubstring(inputString, substringToRemove) {
            return inputString.replace(substringToRemove, '');
        }
        const LogoPath = removeSubstring(logo, '../images/');
        const importImage = (src) => {
            try {
                return require(`../images/${src}`);
            } catch (err) {
                return defaultImage;
            }
        }


        return (

            <div className='job-card' key={id}>
                <img className='logo'
                    src={importImage(LogoPath)}
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
                <div className='filter-input' >
                    <div className='filters-div'>
                        {filterValue && <button>{filterValue}</button>}
                    </div>
                    <button onClick={handleClear}>Clear</button></div>
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