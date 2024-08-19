import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from '../redux/reducers/favoritesSlice';
import { Button, List, Input, Avatar  } from "antd";
import { useSearchParams } from "react-router-dom";

const AllCrypto = () => {
  const [cryptos, setCryptos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  // Retrieve the search query from the URL
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const fetchCryptos = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 50,
            page: 1,
            sparkline: false,
          },
        }
      );
      setCryptos(response.data);
    };
    fetchCryptos();
  }, []);

  useEffect(() => {
    // Update the search query in the URL
    setSearchParams({ search: searchQuery });
  }, [searchQuery, setSearchParams]);

  const handleAddFavorite = (crypto) => {
    dispatch(addFavorite(crypto));
  };

  const handleRemoveFavorite = (cryptoId) => {
    dispatch(removeFavorite(cryptoId));
  };
  const filteredCryptos = cryptos.filter(crypto => crypto.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <Input 
        placeholder="Search..." 
        value={searchQuery}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />
      <List
        dataSource={filteredCryptos}
        renderItem={(crypto) => (
          <List.Item
            actions={[
              favorites.some((fav) => fav.id === crypto.id) ? (
                <Button disabled>
                  Add to favorite
                </Button>
              ) : (
                <Button onClick={() => handleAddFavorite(crypto)}>
                  Add to favorite
                </Button>
              ),
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={crypto.image} />} // Thêm hình ảnh ở đây
              title={crypto.name}
              description={`USD: $${crypto.current_price}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default AllCrypto;
