import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import StreamCreate from '../component/streams/StreamCreate';
import StreamDelete from '../component/streams/StreamDelete';
import StreamEdit from '../component/streams/StreamEdit';
import StreamList from '../component/streams/StreamList';
import StreamShow from '../component/streams/StreamShow';
import Header from './Header';

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <Header />
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/stream/new' exact component={StreamCreate}/>
                    <Route path='/stream/edit' exact component={StreamEdit}/>
                    <Route path='/stream/delete' exact component={StreamDelete}/>
                    <Route path='/stream/show' exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;