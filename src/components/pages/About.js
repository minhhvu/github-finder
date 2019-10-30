import React from 'react';

class About extends React.Component{
    render() {
        return (
            <div className={'border rounded p-2 mt-4'}>
                <div className={'col-sm-8 m-auto p-5'}>
                    <p>Hello,</p>
                    <p>Github Finder is an React web app that provides you search users from Github or take a look on their Github profile.</p>
                    <p>I built project to practice on React concepts with the help from React Document, Github API document and Udemy course, named 'React Front to Back'.</p>
                    <p>Thanks,</p>
                    <a href={'https://github.com/minhhvu/github-finder'} target="_blank">Minh Vu</a>
                </div>
            </div>
        );
    }
}

export default About;