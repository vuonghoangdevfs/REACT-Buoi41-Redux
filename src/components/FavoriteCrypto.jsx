import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/reducers/favoritesSlice';
import { List, Button, Avatar } from 'antd';

const FavoriteCrypto = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (cryptoId) => {
    dispatch(removeFavorite(cryptoId));
  };

  return (
    <List
      header={<h3>Your Favorite</h3>}
      dataSource={favorites}
      renderItem={crypto => (
        <List.Item
          actions={[
            <Button onClick={() => handleRemoveFavorite(crypto.id)}>Remove</Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={crypto.image} />}
            title={crypto.name}
            description={`Price: $${crypto.current_price}`}
          />
        </List.Item>
      )}
    />
  );
};

export default FavoriteCrypto;
