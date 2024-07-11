import React from 'react';
import ReactDOM from 'react-dom/client'
import { FirstApp }  from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <FirstApp title="Dragon Ball Z" author="Akira Toriyama" anio = {1990} />
</React.StrictMode>);