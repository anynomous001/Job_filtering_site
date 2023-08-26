import React from 'react'
import jsonData from '../data.json';
import defaultpic from '../images/myhome.png'


const Main = () => {

    const defaultImage = defaultpic;

    const [filterValue, setFilterValue] = React.useState([]);
    const [data, setData] = React.useState(jsonData);

    function handleClear() {
        setData(jsonData);
        setFilterValue([]);
    }

    const displayedJobs = filterValue.length > 0 ? data.filter(item => {
        const { level, role, languages, tools } = item;
        return (
            filterValue.includes(level) ||
            filterValue.includes(role) ||
            languages.some(lang => filterValue.includes(lang)) ||
            tools.some(tool => filterValue.includes(tool))
        )
    }) : data

    function handleFilter(e) {
        const selectedFilterValue = e.target.textContent;

        if (filterValue.includes(selectedFilterValue)) {
            setFilterValue(prevValues => prevValues.filter(values => values !== selectedFilterValue))
        } else {
            setFilterValue(prevValues => [...prevValues, selectedFilterValue]);
        }
    }


    const jobHtml = displayedJobs.map((data) => {
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
    const cross = <img className='cross-btn' onClick={handleFilter} width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/36a6a6/multiply-2.png" alt="multiply-2" />

    return (
        <div>
            <main>
                <div className='filter-input' >
                    <div className='filters-div'>
                        {filterValue.length > 0 && filterValue.map(filter => <button className='filters'>{filter}{cross}</button>)}
                    </div>
                    <button className='clear-filter' onClick={handleClear}>Clear{cross}</button></div>
                <div className="inner-main">
                    {jobHtml}
                </div>
            </main>
        </div>
    )

}

export default Main