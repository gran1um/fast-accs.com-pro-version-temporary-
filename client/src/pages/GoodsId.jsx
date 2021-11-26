import React from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';




function GoodsId(props){
    let {goods_name} = useParams();
    console.log(props)

    return (
        <div>
            <Link to="/goods">Назад</Link>
            <h1>Character: {goods_name}</h1>
        </div>
    );
};

export default GoodsId;