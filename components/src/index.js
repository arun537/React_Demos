import React from 'react'
import ReactDOM from 'react-dom'

import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard >
                <Comment imageSource={Faker.image.avatar()} authorName={Faker.name.firstName()} date="Today at 6:00PM" text="HOW ARE YOU?"/>
            </ApprovalCard>
            <ApprovalCard>
                <Comment imageSource={Faker.image.avatar()} authorName={Faker.name.firstName()} date="Today at 6:00PM" text="HOW ARE YOU?"/>
            </ApprovalCard>
            <ApprovalCard>
                <Comment imageSource={Faker.image.avatar()} authorName={Faker.name.firstName()} date="Today at 6:00PM" text="HOW ARE YOU?"/>
            </ApprovalCard>
            <ApprovalCard>
                <Comment imageSource={Faker.image.avatar()} authorName={Faker.name.firstName()} date="Today at 6:00PM" text="HOW ARE YOU?"/>  
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)